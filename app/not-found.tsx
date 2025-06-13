import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-4 text-gray-400 max-w-md">The page you are looking for doesn't exist or has been moved.</p>
      <Button className="mt-8" asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  )
}
