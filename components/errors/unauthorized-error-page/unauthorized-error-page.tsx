'use client';

import { Box, Heading } from '@radix-ui/themes';
import { signOut } from 'next-auth/react';

function UnauthorizedErrorPage() {
  return (
    <Box className="flex-center h-full w-full flex-col gap-y-6 bg-black text-white">
      <Heading as="h1" className="text-[4rem] font-bold">
        401 Unauthorized
      </Heading>
      <Box className="flex-center mb-10 flex-col gap-y-1.5 text-xl">
        <Heading as="h2">세션이 만료되었습니다.</Heading>
        <Heading as="h2">다시 로그인 해주세요.</Heading>
      </Box>
      <button
        type="button"
        className="w-82 cursor-pointer border-y-4 border-solid border-white px-4 py-4 text-center text-2xl font-bold"
        onClick={() =>
          void signOut({
            callbackUrl: '/login',
          })
        }
      >
        로그인 화면으로
      </button>
    </Box>
  );
}

export default UnauthorizedErrorPage;
