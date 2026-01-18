<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-title-wrapper">
          <h1 class="hero-title fade-in-up">
            <span class="title-line">Transforming Businesses Through</span>
            <span 
              class="title-line title-transform"
              @mouseenter="startTransform"
              @mouseleave="resetTransform"
              ref="transformElement"
            >
              <!-- Remove fixed width container and use flex for proper text display -->
              <div class="text-container">
                <span class="text-gradient">
                  {{ displayText }}
                  <span class="cursor" v-if="isHovered">|</span>
                </span>
              </div>
            </span>
            <span class="title-line">Digital Excellence</span>
          </h1>
        </div>
        
        <p class="hero-subtitle fade-in-up" style="animation-delay: 0.2s">
          {{ isHovered ? 
            'Your trusted partner for personalized digital growth solutions. Every project receives my direct attention and expertise.' : 
            'Specializing in scalable digital solutions that drive measurable growth and optimize performance across all platforms.'
          }}
        </p>
        
        <div class="hero-buttons fade-in-up" style="animation-delay: 0.4s">
          <a href="#projects" class="btn btn-primary" @click.prevent="scrollToSection">
            <i class="fas fa-rocket"></i> View Our Work
          </a>
          <a href="#contact" class="btn btn-secondary" @click.prevent="scrollToSection">
            <i class="fas fa-comment"></i> Get In Touch
          </a>
        </div>
        
        <div class="hero-scroll-indicator fade-in-up" style="animation-delay: 0.6s">
          <div class="scroll-hint">
            <div class="mouse">
              <div class="wheel"></div>
            </div>
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="hero-background">
      <div class="bg-grid"></div>
      <div class="bg-glow"></div>
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
      animationInterval: null
    }
  },
  methods: {
    startTransform() {
      if (this.isHovered || this.isAnimating) return
      
      this.isHovered = true
      this.isAnimating = true
      
      // Clear any existing animations
      if (this.animationTimeout) clearTimeout(this.animationTimeout)
      if (this.animationInterval) clearInterval(this.animationInterval)
      
      // Animation steps
      const steps = 7 // 0.7 seconds at 100ms per step
      let step = 0
      
      // Store original text for reference
      const originalText = this.companyText
      const targetText = this.personalText
      
      this.animationInterval = setInterval(() => {
        step++
        
        // Calculate progress (0 to 1)
        const progress = step / steps
        
        // Smooth transition using character replacement
        if (progress < 0.3) {
          // Fade out - replace with dots gradually
          this.displayText = this.fadeOutText(originalText, progress / 0.3)
        } else if (progress < 0.7) {
          // Transition - mix of dots and new text
          this.displayText = this.transitionText(originalText, targetText, (progress - 0.3) / 0.4)
        } else {
          // Fade in - reveal new text
          this.displayText = this.fadeInText(targetText, (progress - 0.7) / 0.3)
        }
        
        // Complete animation
        if (step >= steps) {
          clearInterval(this.animationInterval)
          this.displayText = targetText
          this.isAnimating = false
        }
      }, 100) // 100ms per step = 0.7s total
    },
    
    resetTransform() {
      if (!this.isHovered || this.isAnimating) return
      
      this.isHovered = false
      this.isAnimating = true
      
      // Clear any existing animations
      if (this.animationTimeout) clearTimeout(this.animationTimeout)
      if (this.animationInterval) clearInterval(this.animationInterval)
      
      // Animation steps (reverse)
      const steps = 7
      let step = 0
      
      const originalText = this.personalText
      const targetText = this.companyText
      
      this.animationInterval = setInterval(() => {
        step++
        
        const progress = step / steps
        
        if (progress < 0.3) {
          this.displayText = this.fadeOutText(originalText, progress / 0.3)
        } else if (progress < 0.7) {
          this.displayText = this.transitionText(originalText, targetText, (progress - 0.3) / 0.4)
        } else {
          this.displayText = this.fadeInText(targetText, (progress - 0.7) / 0.3)
        }
        
        if (step >= steps) {
          clearInterval(this.animationInterval)
          this.displayText = targetText
          this.isAnimating = false
        }
      }, 100)
    },
    
    fadeOutText(text, progress) {
      let result = ''
      const chars = '·'
      
      for (let i = 0; i < text.length; i++) {
        if (Math.random() < progress) {
          result += chars
        } else {
          result += text[i]
        }
      }
      return result
    },
    
    transitionText(fromText, toText, progress) {
      let result = ''
      const maxLength = Math.max(fromText.length, toText.length)
      
      for (let i = 0; i < maxLength; i++) {
        const fromChar = i < fromText.length ? fromText[i] : ' '
        const toChar = i < toText.length ? toText[i] : ' '
        
        if (Math.random() < progress) {
          result += toChar
        } else {
          result += '·'
        }
      }
      return result
    },
    
    fadeInText(text, progress) {
      let result = ''
      const revealCount = Math.floor(text.length * progress)
      
      for (let i = 0; i < text.length; i++) {
        if (i < revealCount) {
          result += text[i]
        } else {
          result += '·'
        }
      }
      return result
    },
    
    scrollToSection(event) {
      event.preventDefault()
      const targetId = event.target.getAttribute('href')
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
  background: var(--primary-dark);
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

.title-transform {
  position: relative;
  cursor: pointer;
  min-height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.title-transform:hover {
  transform: translateY(-2px);
}

/* Fix: Use flex container that allows text to expand naturally */
.text-container {
  display: inline-block;
  text-align: center;
  overflow: visible;
  white-space: nowrap;
}

.text-gradient {
  background: linear-gradient(90deg, 
    var(--accent-red) 0%, 
    var(--accent-red-light) 50%,
    #ff6b6b 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-size: 200% auto;
  animation: gradientShift 3s ease-in-out infinite;
  display: inline-block;
  position: relative;
  white-space: nowrap;
  font-size: inherit;
  line-height: inherit;
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

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
  min-height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 30px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
}

.btn i {
  font-size: 1.1rem;
}

.btn-primary {
  background: var(--accent-red);
  color: white;
}

.btn-primary:hover {
  background: var(--accent-red-light);
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(185, 28, 28, 0.3);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border-color: var(--accent-red);
}

.btn-secondary:hover {
  background: rgba(185, 28, 28, 0.1);
  transform: translateY(-3px);
}

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
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  animation-delay: 0.6s;
}

.mouse {
  width: 30px;
  height: 50px;
  border: 2px solid var(--accent-red);
  border-radius: 20px;
  display: block;
  position: relative;
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
    rgba(185, 28, 28, 0.1) 0%,
    rgba(185, 28, 28, 0.05) 40%,
    transparent 70%
  );
  filter: blur(40px);
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% center; }
  50% { background-position: 100% center; }
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

.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
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
  
  .title-transform {
    min-height: 4rem;
  }
}

@media (max-width: 992px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .title-transform {
    min-height: 3.5rem;
  }
  
  .hero-subtitle {
    min-height: 5rem;
  }
  
  .text-container {
    white-space: normal;
    display: block;
  }
  
  .text-gradient {
    white-space: normal;
    display: inline;
    line-height: 1.3;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 0 60px;
  }
  
  .hero-title {
    font-size: 2rem;
    line-height: 1.2;
  }
  
  .title-transform {
    min-height: 2.8rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    min-height: 6rem;
  }
  
  .hero-buttons {
    margin-bottom: 2rem;
  }
  
  .hero-title-wrapper {
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .title-line {
    font-size: inherit;
  }
  
  .text-gradient {
    font-size: inherit;
    display: inline;
    word-wrap: break-word;
  }
  
  .hero-subtitle {
    font-size: 1rem;
    min-height: 7rem;
  }
}
</style>