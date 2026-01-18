<template>
  <main>
    <Hero />
    <AboutCompany />
    <Projects />
    <AboutMe />
    <Pricing />
    <Contact />
  </main>
</template>

<script>
import Hero from '../components/Hero.vue'
import AboutCompany from '../components/AboutCompany.vue'
import Projects from '../components/Projects.vue'
import AboutMe from '../components/AboutMe.vue'
import Pricing from '../components/Pricing.vue'
import Contact from '../components/Contact.vue'

export default {
  name: 'HomeView',
  components: {
    Hero,
    AboutCompany,
    Projects,
    AboutMe,
    Pricing,
    Contact
  }
}
</script>