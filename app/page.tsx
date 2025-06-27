import Head from "next/head"
import Hero from "@/components/hero"
import Products from "@/components/products"
import About from "@/components/about"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="public/images/company-logo.png" />
      </Head>
      <Hero />
      <Products />
      <About />
      <Contact />
    </>
  )
}
