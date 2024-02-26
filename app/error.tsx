"use client"

import NotFound from "@/components/NotFound";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void
}) {
  return (
    <>
      <NotFound />
    </>
  );
};
