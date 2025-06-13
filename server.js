const { createServer } = require("http")
const { parse } = require("url")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const hostname = "0.0.0.0" // Changed from localhost to 0.0.0.0 to listen on all interfaces
const port = process.env.PORT || 3000
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

// Track server readiness
let serverReady = false

app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      // Handle health check specially for faster response
      if (req.url === "/api/health" || req.url === "/api/health/") {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        return res.end(
          JSON.stringify({
            status: "healthy",
            timestamp: new Date().toISOString(),
            service: "EGOS Website",
            version: "1.0.0",
            serverReady,
          }),
        )
      }

      // Add security headers
      res.setHeader("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload")
      res.setHeader("X-Content-Type-Options", "nosniff")
      res.setHeader("X-Frame-Options", "DENY")
      res.setHeader("X-XSS-Protection", "1; mode=block")

      // Parse the URL
      const parsedUrl = parse(req.url, true)

      // Let Next.js handle the request
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error("Error occurred handling", req.url, err)
      res.statusCode = 500
      res.end("Internal Server Error")
    }
  })

  server.listen(port, (err) => {
    if (err) throw err
    serverReady = true
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
