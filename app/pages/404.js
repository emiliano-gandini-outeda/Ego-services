export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">The page you are looking for does not exist.</p>
      <a href="/" className="mt-8 text-primary hover:underline">
        Return to Home
      </a>
    </div>
  )
}
