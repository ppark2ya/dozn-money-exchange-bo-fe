'use client';

import { Box, Heading } from '@radix-ui/themes';

function NotFoundErrorPage() {
  return (
    <Box className="flex-center h-full w-full flex-col gap-y-6 bg-black text-white">
      <Heading as="h1" className="text-[4rem] font-bold">
        Page Not Found
      </Heading>
      <Box className="flex-center mb-10 flex-col gap-y-1.5 text-xl">
        <Heading as="h2">죄송합니다. 페이지를 찾을 수 없습니다.</Heading>
        <Heading as="h2">존재하지 않는 주소를 입력하셨거나</Heading>
        <Heading as="h2">
          요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
        </Heading>
      </Box>
      <a
        type="button"
        className="w-82 cursor-pointer border-y-4 border-solid border-white px-4 py-4 text-center text-2xl font-bold"
        href="/product/product-group"
      >
        홈으로
      </a>
    </Box>
  );
}

export default NotFoundErrorPage;
