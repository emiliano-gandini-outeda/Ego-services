const http = require("http")
const { parse } = require("url")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const port = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    // Handle root path specially for health checks
    if (req.url === "/" && req.method === "HEAD") {
      res.statusCode = 200
      return res.end()
    }

    // Handle root path GET requests
    if (req.url === "/") {
      res.statusCode = 200
      res.setHeader("Content-Type", "application/json")
      return res.end(JSON.stringify({ status: "healthy", timestamp: new Date().toISOString() }))
    }

    // Let Next.js handle all other requests
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
