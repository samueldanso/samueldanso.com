"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
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
    <div className="container py-12">
      <div className="flex flex-col items-start gap-4 max-w-2xl">
        <h1 className="text-2xl font-medium">Something went wrong</h1>
        <p className="text-muted-foreground leading-relaxed">
          An error occurred while rendering this page. Please try again.
        </p>
        {error.message && (
          <p className="text-sm text-muted-foreground/80 font-mono bg-muted/50 p-3 rounded-md">
            {error.message}
          </p>
        )}
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </div>
  );
}
