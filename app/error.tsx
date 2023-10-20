'use client';

import { isNotFoundError } from 'next/dist/client/components/not-found';
import NotFoundErrorPage from '@/components/errors/not-found-error-page';
import UnauthorizedErrorPage from '@/components/errors/unauthorized-error-page';
import UnknownErrorPage from '@/components/errors/unknown-error-page';
import {
  NOT_FOUND_ERROR_CODE,
  UNAUTHORIZED_ERROR_CODE,
  type BaseError,
} from '@/libs/errors';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

function Error({ error }: ErrorPageProps) {
  const errorCode = (error as BaseError).getCode ?? error.message;
  /**
   * @see https://github.com/vercel/next.js/blob/ac56bcafa76ebec2350e9191b2d3a8cf6a36abf9/packages/next/src/client/components/not-found.ts#L4
   * nextjs 내장 코드 사용
   * (error as any).digest === 'NEXT_NOT_FOUND'
   */
  if (isNotFoundError(error)) {
    return <NotFoundErrorPage />;
  }

  if (errorCode === NOT_FOUND_ERROR_CODE) {
    return <NotFoundErrorPage />;
  }

  if (errorCode === UNAUTHORIZED_ERROR_CODE) {
    return <UnauthorizedErrorPage />;
  }

  return <UnknownErrorPage />;
}

export default Error;
