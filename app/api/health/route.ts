import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    service: "EGOS Website",
    version: "1.0.0",
    environment: process.env.NODE_ENV || "development",
  })
}
