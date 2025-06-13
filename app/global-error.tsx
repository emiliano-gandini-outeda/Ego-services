"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <div className="container flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">
          <h1 className="text-6xl font-bold text-primary">500</h1>
          <h2 className="mt-4 text-2xl font-semibold">Something went wrong!</h2>
          <p className="mt-4 text-gray-400 max-w-md">
            An unexpected error has occurred. We've been notified and are working to fix the issue.
          </p>
          <Button className="mt-8" onClick={() => reset()}>
            Try again
          </Button>
        </div>
      </body>
    </html>
  )
}
