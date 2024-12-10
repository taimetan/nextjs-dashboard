import { NextAuthConfig } from 'next-auth';

export const authConfig: NextAuthConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        redirect({ url, baseUrl }) {
            if (url.startsWith('/dashboard')) {
                return url;
            }
            return baseUrl + '/dashboard';
        },
    },
    providers: [],
};
