import axiosInstance from '@/libs/axios.factory';
import { HttpStatusCode } from 'axios';
import { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// import { env } from '../env.mjs';

export interface Token {
  accessToken: string;
  tokenType: string;
}

/**
 * Module augmentation for `next-auth` types
 * Allows us to add custom properties to the `session` object
 * and keep type safety
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 **/
declare module 'next-auth' {
  interface Session {
    user: {
      // ...other properties
      // role: UserRole;
    } & Token;
  }

  interface User extends Token {}
}

/**
 * Options for NextAuth.js used to configure
 * adapters, providers, callbacks, etc.
 * @see https://next-auth.js.org/configuration/options
 **/
export const authOptions: NextAuthOptions = {
  providers: [
    /**
     * ...add more providers here
     *
     * Most other providers require a bit more work than the Discord provider.
     * For example, the GitHub provider requires you to add the
     * `refresh_token_expires_in` field to the Account model. Refer to the
     * NextAuth.js docs for the provider you want to use. Example:
     * @see https://next-auth.js.org/providers/github
     **/
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: '아이디',
          type: 'text',
          placeholder: '아이디를 입력하세요.',
        },
        password: {
          label: '비밀번호',
          type: 'password',
          placeholder: '비밀번호를 입력하세요.',
        },
      },

      async authorize(credentials) {
        const response = await axiosInstance.post<Token>(
          `${process.env.NEXT_PUBLIC_API_URL}/token`,
          credentials,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Accept: 'application/json',
            },
          },
        );

        // Add logic here to look up the user from the credentials supplied
        if (response.status === HttpStatusCode.Ok && !!response.data) {
          // Any object returned will be saved in `user` property of the JWT
          const user = {
            id: credentials?.username ?? '',
            accessToken: response.data.accessToken,
            tokenType: response.data.tokenType,
          };
          console.log('authorize user: ', user);
          return user;
        }

        // If you return null then an error will be displayed advising the user to check their details.
        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 12, // 12 hours
  },
  callbacks: {
    /**
     * When using the Credentials Provider the user object is the response returned from the authorize callback
     * and the profile object is the raw body of the HTTP POST submission.
     */

    // async signIn({ user, credentials }) {
    //   const isAllowedToSignIn = true;
    //   if (isAllowedToSignIn) {
    //     return true;
    //   } else {
    //     // Return false to display a default error message
    //     return false;
    //     // Or you can return a URL to redirect to:
    //     // return '/unauthorized'
    //   }
    // },
    /**
     * This callback is called whenever a JSON Web Token is created (i.e. at sign in) or updated (i.e whenever a session is accessed in the client).
     * The returned value will be encrypted, and it is stored in a cookie.
     * Requests to /api/auth/signin, /api/auth/session and calls to getSession(), getServerSession(), useSession() will invoke this function,
     * but only if you are using a JWT session. This method is not invoked when you persist sessions in a database.
     * As with database persisted session expiry times, token expiry time is extended whenever a session is active.
     * The arguments user, account, profile and isNewUser are only passed the first time this callback is called on a new session,
     * after the user signs in. In subsequent calls, only token will be available.
     * The contents user, account, profile and isNewUser will vary depending on the provider and if you are using a database.
     * You can persist data such as User ID, OAuth Access Token in this token, see the example below for access_token and user.id.
     * To expose it on the client side, check out the session() callback as well.
     */
    jwt({ token, user }) {
      if (user) {
        token.access_token = user.accessToken;
        token.token_type = user.tokenType;
      }
      return token;
    },
    /**
     * The session callback is called whenever a session is checked. By default, only a subset of the token is returned for increased security.
     * If you want to make something available you added to the token (like access_token and user.id from above) via the jwt() callback,
     * you have to explicitly forward it here to make it available to the client.
     * e.g. getSession(), useSession(), /api/auth/session
     * When using database sessions, the User (user) object is passed as an argument.
     * When using JSON Web Tokens for sessions, the JWT payload (token) is provided instead.
     */
    session({ session, token }) {
      session.user.accessToken = token.accessToken as Token['accessToken'];
      session.user.tokenType = token.tokenType as Token['tokenType'];

      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/auth/error', // Error code passed in query string as ?error=
  },
};
