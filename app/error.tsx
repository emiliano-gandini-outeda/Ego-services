"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function Error({
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
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
      <h2 className="text-2xl font-semibold">Something went wrong!</h2>
      <p className="mt-4 text-gray-400 max-w-md">An unexpected error has occurred. Please try again.</p>
      <Button className="mt-8" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  )
}
