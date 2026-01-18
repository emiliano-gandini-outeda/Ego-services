<template>
  <section id="about-me" class="section about-me">
    <div class="container">
      <h2 class="section-title">About Emiliano</h2>
      <div class="about-me-content">
        <div class="profile-section">
          <div class="profile-image">
            <div class="image-wrapper">
              <i class="fas fa-user-circle"></i>
              <div class="image-glow"></div>
            </div>
          </div>
          <div class="profile-info">
            <h3 class="profile-name">Emiliano Gandini Outeda</h3>
            <p class="profile-title">Founder & Lead Developer</p>
            <div class="profile-social">
              <a href="https://github.com/emiliano-gandini-outeda" target="_blank" class="social-link">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/emiliano-gandini-outeda" target="_blank" class="social-link">
                <i class="fab fa-linkedin"></i>
              </a>
              <button @click="copyDiscord" class="social-link">
                <i class="fab fa-discord"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="bio-section">
          <p class="bio-text">
            With over 5 years of experience in digital transformation and growth optimization, I specialize in creating scalable solutions that drive business success. My approach combines technical expertise with strategic vision.
          </p>
          <p class="bio-text">
            Passionate about innovation and efficiency, I founded EGOS to help businesses navigate the digital landscape with confidence and achieve their growth objectives through cutting-edge technology.
          </p>
          
          <div class="skills">
            <h4>Core Expertise</h4>
            <div class="skills-grid">
              <div class="skill-item">
                <i class="fas fa-code skill-icon"></i>
                <span>Full-Stack Development</span>
              </div>
              <div class="skill-item">
                <i class="fas fa-chart-line skill-icon"></i>
                <span>Growth Strategy</span>
              </div>
              <div class="skill-item">
                <i class="fas fa-server skill-icon"></i>
                <span>Cloud Architecture</span>
              </div>
              <div class="skill-item">
                <i class="fas fa-robot skill-icon"></i>
                <span>Automation</span>
              </div>
              <div class="skill-item">
                <i class="fas fa-shield skill-icon"></i>
                <span>Secure Solutions</span>
              </div>
              <div class="skill-item">
                <i class="fas fa-database skill-icon"></i>
                <span>Data Optimization</span>
              </div>
            </div>
          </div>
          
          <router-link to="/me" class="btn-portfolio">
            <i class="fas fa-external-link-alt"></i> View Full Portfolio
          </router-link>
        </div>
      </div>
    </div>
    <div v-if="showNotification" class="copy-notification">
      <i class="fas fa-check"></i> Copied Discord username: {{ discordUsername }}
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      discordUsername: 'aegis_eclipse',
      showNotification: false,
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
      tempInput.setSelectionRange(0, 99999); // For mobile devices
      
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          this.showNotification = true;
          // Hide after 2 seconds
          this.notificationTimeout = setTimeout(() => {
            this.showNotification = false;
          }, 2000);
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
.about-me {
  background: var(--secondary-dark);
}

.about-me-content {
  max-width: 800px;
  margin: 0 auto;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.profile-image {
  flex-shrink: 0;
}

.image-wrapper {
  position: relative;
  width: 150px;
  height: 150px;
}

.image-wrapper i {
  font-size: 8rem;
  color: var(--accent-red);
  position: relative;
  z-index: 2;
}

.image-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, var(--accent-red) 0%, transparent 70%);
  opacity: 0.3;
  filter: blur(20px);
  border-radius: 50%;
}

.profile-info {
  flex: 1;
}

.profile-name {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.profile-title {
  color: var(--accent-red);
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.profile-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: var(--card-bg);
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: inherit;
  transition: transform 0.2s ease;
}

/* Metal border effect */
.social-link::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(
    135deg,
    #8b8b8b 0%,
    #c9c9c9 25%,
    #ffffff 50%,
    #c9c9c9 75%,
    #8b8b8b 100%
  );
  border-radius: 50%;
  z-index: -1;
  opacity: 0.8;
}

/* Inner circle to create border effect */
.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--card-bg);
  border-radius: 50%;
  z-index: 0;
}

.social-link i {
  font-size: 1.3rem;
  z-index: 1;
  position: relative;
}

.social-link:hover {
  transform: scale(1.05);
}

.bio-section {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 15px;
  border-left: 4px solid var(--accent-red);
}

.bio-text {
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.skills {
  margin: 2rem 0;
}

.skills h4 {
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  font-size: 1.2rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.skill-item:hover {
  transform: translateX(5px);
  background: rgba(185, 28, 28, 0.1);
}

.skill-icon {
  color: var(--accent-red);
  font-size: 1.2rem;
}

.skill-item span {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.btn-portfolio {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: var(--card-bg);
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  margin-top: 1rem;
  z-index: 1;
  overflow: hidden;
  transition: all 0.3s ease;
}

/* Metal border for portfolio button */
.btn-portfolio::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(
    135deg,
    #8b8b8b 0%,
    #c9c9c9 25%,
    #ffffff 50%,
    #c9c9c9 75%,
    #8b8b8b 100%
  );
  border-radius: 32px;
  z-index: -1;
  opacity: 0.8;
}

.btn-portfolio::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--accent-red), var(--accent-red-light));
  border-radius: 30px;
  z-index: -1;
  transition: opacity 0.3s ease;
}

.btn-portfolio:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(185, 28, 28, 0.3);
}

.btn-portfolio:hover::after {
  opacity: 0.9;
}

.copy-notification {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--accent-red);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: slideUp 0.3s ease, slideDown 0.3s ease 1.7s forwards;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.copy-notification i {
  font-size: 1rem;
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .profile-section {
    flex-direction: column;
    text-align: center;
  }
  
  .profile-social {
    justify-content: center;
  }
  
  .copy-notification {
    width: 90%;
    max-width: 300px;
    text-align: center;
    justify-content: center;
  }
}
</style>