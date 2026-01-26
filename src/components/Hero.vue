<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <!-- Trust Badge actualizado -->
        <div class="badge fade-in-up">
          <i class="fas fa-bolt"></i> Expert-Driven Digital Excellence
        </div>
        
        <div class="hero-title-wrapper">
          <h1 class="hero-title fade-in-up">
            <span class="title-line">Transforming Businesses Through</span>
            <div class="title-transform-container">
              <span 
                class="title-line title-transform"
                @mouseenter="startTransform"
                @mouseleave="resetTransform"
                ref="transformElement"
              >
                <div class="text-container">
                  <span class="text-gradient">
                    <span class="text-inner" ref="textInner">{{ displayText }}</span>
                    <span class="cursor" v-if="isHovered">|</span>
                  </span>
                  <span class="glitch-overlay" ref="glitchOverlay">{{ displayText }}</span>
                </div>
              </span>
            </div>
            <span class="title-line">Digital Excellence</span>
          </h1>
        </div>
        
        <!-- Value proposition mejorada -->
        <div class="hero-subtitle-wrapper fade-in-up" style="animation-delay: 0.2s">
          <p class="hero-subtitle" v-html="currentSubtitle"></p>
          
          <div class="trust-signals">
            <div class="trust-item">
              <i class="fas fa-check-circle"></i>
              <span>Hands-on expert guidance</span>
            </div>
            <div class="trust-item">
              <i class="fas fa-check-circle"></i>
              <span>Performance-focused approach</span>
            </div>
            <div class="trust-item">
              <i class="fas fa-check-circle"></i>
              <span>Custom solutions for every client</span>
            </div>
          </div>
        </div>
        
        <!-- CTA mejorado -->
        <div class="hero-buttons fade-in-up" style="animation-delay: 0.4s">
          <a href="#process" class="btn btn-primary" @click.prevent="scrollToSection">
            <div class="btn-content">
              <i class="fas fa-chart-line"></i>
              <div class="btn-text">
                <div class="btn-title">Explore Our Methodology</div>
                <div class="btn-subtitle">See our proven growth framework</div>
              </div>
            </div>
            <div class="btn-hover-effect">
              <i class="fas fa-arrow-right"></i>
            </div>
          </a>
          
          <a href="#contact" class="btn btn-secondary" @click.prevent="scrollToSection">
            <div class="btn-content">
              <i class="fas fa-calendar-check"></i>
              <div class="btn-text">
                <div class="btn-title">Book Free Strategy Call</div>
                <div class="btn-subtitle">30-minute consultation</div>
              </div>
            </div>
          </a>
        </div>
        
        <div class="hero-scroll-indicator fade-in-up" style="animation-delay: 0.8s">
          <div class="scroll-hint" @click="scrollToNext">
            <div class="mouse">
              <div class="wheel"></div>
            </div>
            <span>Discover our unique approach</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="hero-background">
      <div class="bg-grid"></div>
      <div class="bg-glow"></div>
      <div class="floating-elements">
        <div class="float-element" v-for="i in 5" :key="i" :style="getFloatElementStyle(i)"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      isHovered: false,
      displayText: 'Eclipse Growth Optimization Services',
      isAnimating: false,
      companyText: 'Eclipse Growth Optimization Services',
      personalText: 'Emiliano Gandini Outeda Services',
      animationTimeout: null,
      animationInterval: null,
      subtitleCompany: 'Specializing in <strong class="highlight">scalable digital solutions</strong> that drive <strong class="highlight">measurable growth</strong> and <strong class="highlight">optimize performance</strong> across all platforms.',
      subtitlePersonal: 'Hands-on expert guidance ensures quality. Every project gets my direct involvement and industry-leading expertise.'
    }
  },
  computed: {
    currentSubtitle() {
      return this.isHovered ? this.subtitlePersonal : this.subtitleCompany;
    }
  },
  mounted() {
    this.startBackgroundAnimation();
  },
  methods: {
    startTransform() {
      if (this.isHovered || this.isAnimating) return
      
      this.isHovered = true
      this.isAnimating = true
      
      // Clear any existing animations
      if (this.animationTimeout) clearTimeout(this.animationTimeout)
      if (this.animationInterval) clearInterval(this.animationInterval)
      
      // Trigger clean transition
      this.performCleanTransformation(this.companyText, this.personalText)
    },
    
    resetTransform() {
      if (!this.isHovered || this.isAnimating) return
      
      this.isHovered = false
      this.isAnimating = true
      
      // Clear any existing animations
      if (this.animationTimeout) clearTimeout(this.animationTimeout)
      if (this.animationInterval) clearInterval(this.animationInterval)
      
      // Trigger clean reverse transition
      this.performCleanTransformation(this.personalText, this.companyText)
    },
    
    performCleanTransformation(fromText, toText) {
      const steps = 15
      let step = 0
      
      // Clean dissolve effect - start with original text
      this.displayText = fromText
      
      this.animationInterval = setInterval(() => {
        step++
        const progress = step / steps
        
        // Clean, simple transition in 2 phases
        if (progress < 0.5) {
          // Phase 1: Clean dissolve with minimal visual noise
          this.displayText = this.cleanDissolve(fromText, toText, progress * 2)
        } else {
          // Phase 2: Smooth reconstruction
          this.displayText = this.cleanReconstruct(toText, (progress - 0.5) * 2)
        }
        
        // Subtle movement for visual interest
        const element = this.$refs.textInner
        if (element) {
          const wave = Math.sin(progress * Math.PI) * 1.5
          element.style.transform = `translateY(${wave}px)`
        }
        
        if (step >= steps) {
          clearInterval(this.animationInterval)
          this.displayText = toText
          this.isAnimating = false
          if (element) {
            element.style.transform = 'translateY(0)'
          }
        }
      }, 40)
    },
    
    cleanDissolve(fromText, toText, progress) {
      let result = ''
      const maxLength = Math.max(fromText.length, toText.length)
      const dissolveChars = '·'
      
      for (let i = 0; i < maxLength; i++) {
        if (progress < 0.5) {
          // First half: dissolve from text
          const charProbability = 1 - (progress * 2)
          if (Math.random() > charProbability && i < fromText.length) {
            result += fromText[i]
          } else {
            result += dissolveChars
          }
        } else {
          // Second half: transition to dots
          const transitionProgress = (progress - 0.5) * 2
          if (Math.random() > transitionProgress) {
            result += dissolveChars
          } else if (i < toText.length) {
            // Start showing new text characters
            result += toText[i]
          } else {
            result += ' '
          }
        }
      }
      return result
    },
    
    cleanReconstruct(text, progress) {
      let result = ''
      
      for (let i = 0; i < text.length; i++) {
        // Calculate character reveal based on position and progress
        const positionFactor = i / text.length
        const revealThreshold = progress * 1.2 - positionFactor * 0.2
        
        if (Math.random() < revealThreshold) {
          result += text[i]
        } else {
          // Use middle dots for clean loading effect
          result += '·'
        }
      }
      return result
    },
    
    triggerGlitchEffect() {
      const glitch = this.$refs.glitchOverlay
      if (!glitch) return
      
      glitch.style.opacity = '0.3'
      glitch.style.animation = 'subtleGlitch 0.3s ease-out'
      
      setTimeout(() => {
        glitch.style.opacity = '0'
        glitch.style.animation = ''
      }, 300)
    },
    
    startBackgroundAnimation() {
      setInterval(() => {
        const elements = document.querySelectorAll('.float-element')
        elements.forEach(el => {
          el.style.transform = `translate(${Math.random() * 15 - 7.5}px, ${Math.random() * 15 - 7.5}px)`
        })
      }, 4000)
    },
    
    getFloatElementStyle(index) {
      const size = 10 + Math.random() * 40
      const duration = 18 + Math.random() * 15
      const delay = index * 0.5
      
      return {
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        left: `${Math.random() * 90}%`,
        top: `${Math.random() * 90}%`,
        opacity: 0.03 + Math.random() * 0.07
      }
    },
    
    scrollToSection(event) {
      event.preventDefault()
      const targetId = event.currentTarget.getAttribute('href')
      const element = document.querySelector(targetId)
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
    
    scrollToNext() {
      const nextSection = document.querySelector('.hero').nextElementSibling
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
  overflow: hidden;
  background: linear-gradient(135deg, var(--primary-dark) 0%, #0a0a0a 100%);
}

.container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-content {
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}

/* Badge actualizado */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(185, 28, 28, 0.1);
  color: var(--accent-red);
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 2rem;
  border: 1px solid rgba(185, 28, 28, 0.3);
}

.hero-title-wrapper {
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title-line {
  display: block;
}

/* Contenedor fijo para prevenir movimiento */
.title-transform-container {
  height: 5.5rem; /* Altura fija para prevenir movimiento */
  position: relative;
  margin: 0.5rem 0;
}

.title-transform {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  height: 100%;
}

.title-transform:hover {
  transform: translateY(-2px);
}

.text-container {
  display: inline-block;
  position: relative;
  overflow: visible;
}

.text-gradient {
  background: linear-gradient(90deg, 
    var(--accent-red) 0%, 
    var(--accent-red-light) 30%,
    #ff8a8a 70%,
    var(--accent-red) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-size: 200% auto;
  animation: gradientShift 2s ease-in-out infinite;
  display: inline-block;
  position: relative;
  font-size: inherit;
  line-height: inherit;
  transition: all 0.3s ease;
}

.text-inner {
  display: inline-block;
  transition: transform 0.2s ease;
}

.glitch-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: linear-gradient(90deg, 
    var(--accent-red) 0%,
    var(--accent-red-light) 50%,
    var(--accent-red) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  pointer-events: none;
  mix-blend-mode: screen;
}

.cursor {
  display: inline-block;
  animation: blink 1s infinite;
  color: var(--accent-red);
  font-weight: 300;
  margin-left: 2px;
  position: relative;
  top: -2px;
}

/* Subtítulo mejorado */
.hero-subtitle-wrapper {
  max-width: 700px;
  margin: 0 auto 3rem;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: var(--text-primary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.hero-subtitle >>> .highlight {
  color: var(--accent-red);
  font-weight: 600;
  position: relative;
  display: inline-block;
}

.hero-subtitle >>> .highlight::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-red), transparent);
  opacity: 0.5;
}

.trust-signals {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.trust-item i {
  color: var(--accent-red);
}

/* Botones mejorados */
.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  min-width: 280px;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.7s ease;
}

.btn:hover::before {
  left: 100%;
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-text {
  text-align: left;
}

.btn-title {
  font-size: 1.1rem;
  font-weight: 700;
}

.btn-subtitle {
  font-size: 0.85rem;
  opacity: 0.8;
  font-weight: 400;
}

.btn-hover-effect {
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.btn:hover .btn-hover-effect {
  opacity: 1;
  transform: translateX(0);
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent-red) 0%, var(--accent-red-light) 100%);
  color: white;
  box-shadow: 0 10px 30px rgba(185, 28, 28, 0.3);
}

.btn-primary:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 20px 40px rgba(185, 28, 28, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  border: 2px solid rgba(185, 28, 28, 0.3);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(185, 28, 28, 0.1);
  transform: translateY(-5px);
  border-color: var(--accent-red);
}

/* Social proof actualizado */
.social-proof {
  margin-bottom: 3rem;
}

.testimonial {
  max-width: 600px;
  margin: 0 auto;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border-left: 4px solid var(--accent-red);
  position: relative;
}

.testimonial i {
  position: absolute;
  top: -10px;
  left: 20px;
  font-size: 1.5rem;
  color: var(--accent-red);
  background: var(--primary-dark);
  padding: 0 10px;
}

.testimonial p {
  font-style: italic;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
  padding-top: 0.5rem;
}

/* Scroll indicator */
.hero-scroll-indicator {
  display: flex;
  justify-content: center;
}

.scroll-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.scroll-hint:hover {
  color: var(--accent-red);
  transform: translateY(5px);
}

.mouse {
  width: 30px;
  height: 50px;
  border: 2px solid var(--accent-red);
  border-radius: 20px;
  display: block;
  position: relative;
  transition: all 0.3s ease;
}

.scroll-hint:hover .mouse {
  border-color: var(--accent-red-light);
  transform: scale(1.1);
}

.wheel {
  width: 4px;
  height: 8px;
  background: var(--accent-red);
  border-radius: 2px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollWheel 2s infinite;
}

/* Fondo mejorado */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
}

.bg-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(185, 28, 28, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(185, 28, 28, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
}

.bg-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(
    circle,
    rgba(185, 28, 28, 0.15) 0%,
    rgba(185, 28, 28, 0.08) 40%,
    transparent 70%
  );
  filter: blur(60px);
  animation: pulseGlow 4s ease-in-out infinite;
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.float-element {
  position: absolute;
  background: rgba(185, 28, 28, 0.05);
  border: 1px solid rgba(185, 28, 28, 0.1);
  border-radius: 50%;
  animation: float 20s ease-in-out infinite;
}

/* Animaciones limpias */
@keyframes gradientShift {
  0%, 100% { 
    background-position: 0% center; 
  }
  50% { 
    background-position: 100% center; 
  }
}

@keyframes subtleGlitch {
  0%, 100% {
    transform: translateX(0);
    opacity: 0.3;
  }
  25% {
    transform: translateX(-1px);
    opacity: 0.4;
  }
  50% {
    transform: translateX(1px);
    opacity: 0.5;
  }
  75% {
    transform: translateX(-1px);
    opacity: 0.4;
  }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes scrollWheel {
  0% {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(20px);
    opacity: 0;
  }
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(10px, -10px);
  }
  66% {
    transform: translate(-5px, 5px);
  }
}

@keyframes gridMove {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(50px);
  }
}

@keyframes pulseGlow {
  0%, 100% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.05);
  }
}

.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .title-transform-container {
    height: 4.8rem;
  }
}

@media (max-width: 992px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .title-transform-container {
    height: 4rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .btn {
    min-width: 250px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 0 60px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .title-transform-container {
    height: 3.2rem;
  }
  
  .btn {
    min-width: 100%;
    justify-content: center;
  }
  
  .btn-hover-effect {
    display: none;
  }
  
  .trust-signals {
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .title-transform-container {
    height: 2.8rem;
  }
  
  .badge {
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }
  
  .testimonial {
    padding: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
    padding: 0 10px;
  }
}
</style>