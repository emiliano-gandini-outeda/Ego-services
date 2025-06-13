import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>EGOS - Eclipse Growth Optimization Services</title>
        <meta name="description" content="Eclipse Growth Optimization Services provides custom tools for businesses" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Eclipse Growth Optimization Services</h1>
        <p className="text-xl mb-8 text-center max-w-2xl">
          Custom tools for small to medium businesses and open source projects
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </main>
    </>
  )
}
