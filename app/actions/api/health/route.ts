import { NextResponse } from "next/server"

export const dynamic = "force-dynamic" // Ensure this is always fresh
export const revalidate = 0 // Don't cache this route

export async function GET() {
  try {
    // Basic health check
    return NextResponse.json(
      {
        status: "healthy",
        timestamp: new Date().toISOString(),
        service: "EGOS Website",
        version: "1.0.0",
        environment: process.env.NODE_ENV || "development",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Health check failed:", error)
    return NextResponse.json(
      {
        status: "unhealthy",
        error: "Health check failed",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
