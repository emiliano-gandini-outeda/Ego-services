export default function Custom500() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">500 - Server Error</h1>
      <p className="mt-4">Sorry, something went wrong on our server.</p>
      <a href="/" className="mt-8 text-primary hover:underline">
        Return to Home
      </a>
    </div>
  )
}
