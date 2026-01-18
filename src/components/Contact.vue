<template>
  <section id="contact" class="contact-banner">
    <div class="container">
      <div class="banner-content">
        <div class="banner-text">
          <h2 class="banner-title">Ready to Transform Your Digital Presence?</h2>
          <p class="banner-subtitle">
            Let's discuss how we can accelerate your growth and optimize your digital strategy.
          </p>
          
          <div class="banner-features">
            <div class="feature-item">
              <i class="fas fa-bolt"></i>
              <span>24-hour response time</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-star"></i>
              <span>Free 30-minute consultation</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-shield-alt"></i>
              <span>Secure & confidential</span>
            </div>
          </div>
        </div>
        
        <div class="banner-actions">
          <router-link to="/contact" class="contact-button">
            <div class="button-content">
              <div class="button-icon">
                <i class="fas fa-paper-plane"></i>
              </div>
              <div class="button-text">
                <span class="button-title">Get in Touch</span>
                <span class="button-subtitle">Multiple contact options available</span>
              </div>
            </div>
            <i class="fas fa-arrow-right button-arrow"></i>
          </router-link>
          
          <div class="quick-contact">
            <div class="quick-item">
              <i class="fas fa-envelope"></i>
              <a href="mailto:emiliano.outeda@gmail.com" class="quick-link">
                Email Me
              </a>
            </div>
            <div class="quick-item">
              <i class="fab fa-discord"></i>
              <span class="quick-link" @click="copyDiscord">
                Copy Discord
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Notification for Discord copy -->
    <div v-if="showCopyNotification" class="copy-notification">
      <i class="fas fa-check"></i>
      <span>Discord username copied: {{ discordUsername }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      discordUsername: 'aegis_eclipse',
      showCopyNotification: false,
      notificationTimeout: null
    }
  },
  methods: {
    copyDiscord() {
      // Clear any existing timeout
      if (this.notificationTimeout) {
        clearTimeout(this.notificationTimeout);
      }
      
      // Create a temporary input element
      const tempInput = document.createElement('input');
      tempInput.value = this.discordUsername;
      document.body.appendChild(tempInput);
      
      // Select and copy
      tempInput.select();
      tempInput.setSelectionRange(0, 99999);
      
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          this.showCopyNotification = true;
          // Hide after 3 seconds
          this.notificationTimeout = setTimeout(() => {
            this.showCopyNotification = false;
          }, 3000);
        } else {
          console.error('Copy command failed');
        }
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
      
      // Clean up
      document.body.removeChild(tempInput);
    }
  },
  beforeUnmount() {
    // Clear timeout when component is destroyed
    if (this.notificationTimeout) {
      clearTimeout(this.notificationTimeout);
    }
  }
}
</script>

<style scoped>
.contact-banner {
  background: linear-gradient(135deg, 
    var(--accent-red-dark) 0%, 
    var(--accent-red) 100%);
  position: relative;
  overflow: hidden;
  padding: 60px 0;
}

/* Background pattern */
.contact-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

.banner-content {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3rem;
  align-items: center;
}

/* Banner Text Styles */
.banner-text {
  max-width: 600px;
}

.banner-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: white;
  line-height: 1.2;
}

.banner-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.banner-features {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
}

.feature-item i {
  color: #fbbf24;
  font-size: 0.9rem;
}

/* Banner Actions */
.banner-actions {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 300px;
}

.contact-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: white;
  color: var(--accent-red);
  text-decoration: none;
  border-radius: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.contact-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(185, 28, 28, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contact-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.contact-button:hover::before {
  opacity: 1;
}

.button-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.button-icon {
  width: 50px;
  height: 50px;
  background: var(--accent-red);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-icon i {
  font-size: 1.5rem;
  color: white;
}

.button-text {
  display: flex;
  flex-direction: column;
}

.button-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--accent-red);
  margin-bottom: 0.25rem;
}

.button-subtitle {
  font-size: 0.9rem;
  color: rgb(0, 0, 0);
  opacity: 0.8;
}

.button-arrow {
  font-size: 1.2rem;
  color: var(--accent-red);
  opacity: 0.7;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.contact-button:hover .button-arrow {
  opacity: 1;
  transform: translateX(5px);
}

/* Quick Contact */
.quick-contact {
  display: flex;
  gap: 1rem;
}

.quick-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.quick-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.quick-item i {
  font-size: 1.2rem;
  color: white;
}

.quick-link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.quick-item:hover .quick-link {
  text-decoration: underline;
}

/* Copy Notification */
.copy-notification {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  animation: slideUp 0.3s ease, slideDown 0.3s ease 2.7s forwards;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.copy-notification i {
  color: #22c55e;
  font-size: 1.1rem;
}

.copy-notification span {
  font-size: 0.95rem;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

@keyframes slideDown {
  from {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
}

/* Responsive Design */
@media (max-width: 992px) {
  .banner-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
  
  .banner-actions {
    min-width: auto;
    max-width: 500px;
    margin: 0 auto;
  }
  
  .banner-features {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .contact-banner {
    padding: 40px 0;
  }
  
  .banner-title {
    font-size: 1.8rem;
  }
  
  .banner-subtitle {
    font-size: 1rem;
  }
  
  .contact-button {
    padding: 1.25rem;
  }
  
  .button-icon {
    width: 45px;
    height: 45px;
  }
  
  .button-title {
    font-size: 1.2rem;
  }
  
  .quick-contact {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .banner-title {
    font-size: 1.5rem;
  }
  
  .banner-subtitle {
    font-size: 0.95rem;
  }
  
  .feature-item {
    width: 100%;
    justify-content: center;
  }
  
  .contact-button {
    padding: 1rem;
  }
  
  .button-content {
    gap: 0.75rem;
  }
  
  .button-icon {
    width: 40px;
    height: 40px;
  }
  
  .button-icon i {
    font-size: 1.2rem;
  }
  
  .copy-notification {
    width: 90%;
    max-width: 300px;
    text-align: center;
    justify-content: center;
  }
}
</style>