'use client';

import { SessionProvider } from 'next-auth/react';

function NextAuthProvider({ children }: React.PropsWithChildren) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default NextAuthProvider;
