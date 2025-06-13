const http = require("http")
const { parse } = require("url")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const port = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    // Parse the URL
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl

    // Handle health checks at root path
    if (pathname === "/" && (req.method === "HEAD" || req.headers["user-agent"]?.includes("Railway"))) {
      res.statusCode = 200
      res.setHeader("Content-Type", "application/json")
      return res.end(JSON.stringify({ status: "healthy", timestamp: new Date().toISOString() }))
    }

    // Let Next.js handle all other requests
    handle(req, res, parsedUrl)
  })

  server.listen(port, "0.0.0.0", (err) => {
    if (err) throw err
    console.log(`> Ready on http://0.0.0.0:${port}`)
  })
})
