import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcrypt';

// Establish database connection
connectDB();

const options = NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
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
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async signIn({ account, profile }) {
            if (account.provider === 'google' || account.provider === 'github') {
                // Establish database connection
                await connectDB();
                try {
                    const user = await User.findOne({ email: profile.email });

                    if (!user) {
                        const newUser = {
                            name: profile.name,
                            email: profile.email,
                            image: {
                                profileURL: profile.picture
                            }
                        };

                        await User.create(newUser);
                    }
                } catch (error) {
                    console.error('Error signing in:', error);
                    return false;
                }
                return true;
            }
            return true;
        },
        async session(session, user) {
            try {
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

                session.session.user = {
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
