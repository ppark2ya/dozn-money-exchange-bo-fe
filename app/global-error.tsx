'use client';

import UnknownErrorPage from '@/components/errors/unknown-error-page';

export default function GlobalError({
  error,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error('Root layout.tsx or page.tsx throw new Error: ', error);

  return (
    <html>
      <body>
        <UnknownErrorPage />
      </body>
    </html>
  );
}
