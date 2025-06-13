import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get hostname (e.g. vercel.app, example.com)
  const hostname = request.headers.get("host") || ""

  // Only redirect if not already HTTPS and not localhost/development
  const isHttps = request.headers.get("x-forwarded-proto") === "https"
  const isDevelopment = hostname.includes("localhost") || hostname.includes("127.0.0.1")

  // If not HTTPS and not in development, redirect to HTTPS
  if (!isHttps && !isDevelopment) {
    const url = request.nextUrl.clone()
    url.protocol = "https:"
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// Only run middleware on the frontend routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - api routes
     */
    "/((?!_next/static|_next/image|favicon.ico|public|api).*)",
  ],
}
