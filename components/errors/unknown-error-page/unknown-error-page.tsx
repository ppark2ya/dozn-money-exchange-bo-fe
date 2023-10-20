'use client';

import { Box, Heading } from '@radix-ui/themes';

function UnknownErrorPage() {
  return (
    <Box className="flex-center h-full w-full flex-col gap-y-6 bg-black text-white">
      <Heading as="h1" className="text-[4rem] font-bold">
        An unknown error occurred
      </Heading>
      <Box className="flex-center mb-10 flex-col gap-y-1.5 text-xl">
        <Heading as="h2">알 수 없는 에러가 발생했습니다.</Heading>
        <Heading as="h2">관리자에게 문의해주세요.</Heading>
      </Box>
    </Box>
  );
}

export default UnknownErrorPage;
