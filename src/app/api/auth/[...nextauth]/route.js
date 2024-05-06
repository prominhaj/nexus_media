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
        async signIn({ account, profile }) {
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
        }
    },
    secret: process.env.NEXTAUTH_SECRET
});

export { options as GET, options as POST };
