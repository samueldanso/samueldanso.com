"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-md w-full space-y-4 text-center">
            <h1 className="text-2xl font-medium">Something went wrong</h1>
            <p className="text-muted-foreground">
              A critical error occurred. Please try refreshing the page.
            </p>
            <button
              type="button"
              onClick={() => reset()}
              className="px-4 py-2 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
