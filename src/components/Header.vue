<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container">
      <nav class="nav">
        <div class="logo">
          <router-link to="/" class="logo-link">
            <div class="logo-content">
              <span class="logo-main">EGOS</span>
              <span class="logo-subtitle">Eclipse Growth Optimization Services</span>
            </div>
          </router-link>
        </div>
        
        <div class="nav-links">
          <a href="#about-company" class="nav-link" @click="scrollToSection">About</a>
          <router-link to="/projects" class="nav-link">Projects</router-link>
          <router-link to="/me" class="nav-link">About Me</router-link>
          <router-link to="/pricing" class="nav-link">Pricing</router-link>
          <a href="/contact" class="nav-link">Contact</a>
        </div>
        
        <button class="menu-toggle" @click="toggleMobileMenu">
          <i class="fas" :class="mobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
        </button>
      </nav>
      
      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ open: mobileMenuOpen }" v-if="mobileMenuOpen">
        <div class="mobile-links">
          <a href="#about-company" class="mobile-link" @click.prevent="scrollToSectionMobile('about-company')">About</a>
          <router-link to="/projects" class="mobile-link" @click="toggleMobileMenu">Projects</router-link>
          <router-link to="/me" class="mobile-link" @click="toggleMobileMenu">About me</router-link>
          <router-link to="/pricing" class="mobile-link" @click="toggleMobileMenu">Pricing</router-link>
          <a href="/contact" class="mobile-link">Contact</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isScrolled: false,
      mobileMenuOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    
    scrollToSection(event) {
      event.preventDefault()
      const targetId = event.target.getAttribute('href')
      if (targetId.startsWith('#')) {
        this.scrollToElement(targetId)
      }
    },
    
    scrollToSectionMobile(targetId) {
      this.mobileMenuOpen = false
      document.body.style.overflow = ''
      
      if (this.$route.path !== '/') {
        this.$router.push('/')
        setTimeout(() => {
          this.scrollToElement('#' + targetId)
        }, 300)
      } else {
        setTimeout(() => {
          this.scrollToElement('#' + targetId)
        }, 100)
      }
    },
    
    scrollToElement(selector) {
      const element = document.querySelector(selector)
      if (element) {
        const headerHeight = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    },
    
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
      document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : ''
    },
    
    handleClickOutside(event) {
      const menu = document.querySelector('.mobile-menu')
      const toggle = document.querySelector('.menu-toggle')
      
      if (this.mobileMenuOpen && 
          !menu.contains(event.target) && 
          !toggle.contains(event.target)) {
        this.toggleMobileMenu()
      }
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  padding: 1rem 0;
}

.header.scrolled {
  background: rgba(10, 10, 10, 0.95);
  border-bottom-color: var(--accent-red);
  padding: 0.75rem 0;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-link {
  text-decoration: none;
  display: block;
}

.logo-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.logo-main {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--accent-red);
  letter-spacing: 1px;
  line-height: 1;
}

.logo-subtitle {
  font-size: 0.7rem;
  color: var(--text-secondary);
  font-weight: 500;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-red);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.special {
  background: var(--accent-red);
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link.special:hover {
  background: var(--accent-red-light);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(185, 28, 28, 0.3);
}

.nav-link.special::after {
  display: none;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
}

/* Mobile Menu Fix */
.mobile-menu {
  display: block;
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: calc(100vh - 60px);
  background: var(--secondary-dark);
  padding: 2rem 1.5rem;
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.3s ease;
  overflow-y: auto;
  z-index: 999;
}

.mobile-menu.open {
  transform: translateY(0);
  opacity: 1;
}

.mobile-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* bigger spacing for easier tapping */
}

.mobile-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1.25rem; /* bigger text */
  padding: 1rem 0; /* more padding for touch */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  display: block;
}

.mobile-link:hover {
  color: var(--accent-red);
  transform: translateX(5px);
}

.mobile-link.router-link-active {
  color: var(--accent-red);
}

.mobile-link.special {
  background: var(--accent-red);
  color: white;
  padding: 1.2rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 1rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.mobile-link.special:hover {
  background: var(--accent-red-light);
  transform: translateY(-2px);
}

/* Mobile adjustments */
@media (max-width: 992px) {
  .header {
    padding: 0.5rem 0;
  }
  
  .header.scrolled {
    padding: 0.25rem 0;
  }
  
  .nav-links {
    display: none;
  }
  
  .menu-toggle {
    display: block;
  }
  
  .logo-subtitle {
    display: none;
  }
}
</style>
