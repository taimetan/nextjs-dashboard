import type { NextAuthConfig } from 'next-auth';

export const authConfig: NextAuthConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request }) {
            // Check if user is authenticated
            if (auth?.user) {
                // Redirect authenticated users to dashboard
                if (request.nextUrl.pathname.startsWith('/dashboard')) {
                    return true;
                }
                return Response.redirect(new URL('/dashboard', request.nextUrl));
            }
            // If not authenticated, they should stay on the login page
            return false;
        },
    },
    providers: [],
};
