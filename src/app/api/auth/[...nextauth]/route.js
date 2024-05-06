import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import GoogleProvider from 'next-auth/providers/google';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

const options = NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                // Connect DB
                await connectDB();

                const { email, password } = credentials;

                const user = await User.findOne({ email });

                if (!user) {
                    throw new Error('Email Not Found');
                }

                const isPasswordMatched = await bcrypt.compare(password, user.password);

                if (!isPasswordMatched) {
                    throw new Error('Invalid Password');
                }

                return user;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        })
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async signIn({ account, profile, session }) {
            if (account.provider === 'google') {
                // Connect DB
                await connectDB();
                try {
                    const user = await User.findOne({ email: profile.email });

                    if (!user) {
                        const newUser = {
                            name: profile.name,
                            email: profile.email
                        };
                        await User.create(newUser);
                    }
                } catch (error) {
                    throw new Error(error.message);
                }
                return true;
            }
            return true;
        },
        async session(session, user) {
            try {
                // Connect DB
                await connectDB();
                // Fetch additional user data from MongoDB using Mongoose
                const userData = await User.findOne({ email: session.session.user.email })
                    .select({
                        email: 1,
                        name: 1,
                        image: 1,
                        _id: 1,
                        role: 1
                    })
                    .lean();

                const { _id, ...updatedObj } = { ...userData, id: userData._id.toString() };

                session.user = {
                    ...session.user,
                    ...updatedObj
                };
            } catch (error) {
                console.error('Error fetching user session data:', error);
            }
            return session;
        }
    },

    secret: process.env.NEXTAUTH_SECRET
});

export { options as GET, options as POST };
