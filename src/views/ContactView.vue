<template>
  <main class="contact-page">
    <!-- Animated Background Elements -->
    <div class="contact-background">
    </div>

    <!-- Main Contact Header -->
    <section class="contact-header">
      <div class="container">
        <div class="header-content">
          <h1 class="header-title">
            <span class="title-line title-line-1">Connect With Me</span>
          </h1>
          <p class="header-subtitle">
            Multiple ways to reach out, collaborate, or just say hello. Let's build something amazing together.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content Layout -->
    <section class="contact-main">
      <div class="container">
        <!-- Social Platforms Row -->
        <div class="social-platforms-row">
          <div class="platforms-grid">
            <!-- Discord Platform -->
            <div class="platform-card discord-platform">
              <div class="platform-header">
                <div class="platform-icon">
                  <i class="fab fa-discord"></i>
                </div>
                <div class="platform-info">
                  <h3>Discord</h3>
                  <p class="platform-subtitle">Direct Messaging</p>
                </div>
              </div>
              
              <div class="platform-content">
                <div class="discord-handle">
                  <div class="handle-display">
                    <i class="fas fa-hashtag"></i>
                    <span class="username">{{ discordUsername }}</span>
                  </div>
                  <button 
                    class="copy-button"
                    @click="copyDiscord"
                    :disabled="copyingDiscord"
                  >
                    <template v-if="!copyingDiscord">
                      <i class="far fa-copy"></i>
                    </template>
                    <template v-else>
                      <i class="fas fa-check"></i>
                    </template>
                  </button>
                </div>
                
                <div class="platform-description">
                  <p>
                    Discord is my primary communication platform for both development and general coordination. 
                    Most of my projects are managed through Discord, as it offers extensive customization for 
                    managing development workflows and community collaboration.
                  </p>
                  <p>
                    Connect with me on Discord for real-time chats about development, 
                    quick questions, or to discuss projects.
                  </p>
                </div>
              </div>
            </div>

            <!-- GitHub Platform -->
            <div class="platform-card github-platform">
              <div class="platform-header">
                <div class="platform-icon">
                  <i class="fab fa-github"></i>
                </div>
                <div class="platform-info">
                  <h3>GitHub</h3>
                  <p class="platform-subtitle">Code & Projects</p>
                </div>
              </div>
              
              <div class="platform-content">
                <div class="github-stats">
                  <div class="stat-item">
                    <i class="fas fa-code-branch"></i>
                    <span>50+ Repositories</span>
                  </div>
                  <div class="stat-item">
                    <i class="fas fa-star"></i>
                    <span>100+ Stars</span>
                  </div>
                </div>
                
                <div class="platform-description">
                  <p>
                    Explore my open-source projects, contributions, and public code repositories. Get insight into my development workflow, 
                    coding standards, and architectural decisions, and see how I approach problem-solving, collaboration, and long-term maintainability in real-world projects.
                  </p>
                </div>
                
                <a 
                  href="https://github.com/emiliano-gandini-outeda" 
                  target="_blank"
                  class="platform-button" id="github-button"
                >
                  <i class="fab fa-github"></i>
                  Explore My Code
                </a>
              </div>
            </div>

            <!-- LinkedIn Platform -->
            <div class="platform-card linkedin-platform">
              <div class="platform-header">
                <div class="platform-icon">
                  <i class="fab fa-linkedin"></i>
                </div>
                <div class="platform-info">
                  <h3>LinkedIn</h3>
                  <p class="platform-subtitle">Professional Network</p>
                </div>
              </div>
              
              <div class="platform-content">
                <div class="profile-preview">
                  <div class="profile-avatar">
                    <i class="fas fa-user-tie"></i>
                  </div>
                  <div class="profile-details">
                    <h4>Emiliano Gandini Outeda</h4>
                    <p class="profile-title">Full-Stack Developer & Growth Strategist</p>
                  </div>
                </div>
                
                <div class="connection-badge">
                  <i class="fas fa-user-plus"></i>
                  <span>Open to Connect</span>
                </div>
                
                <div class="platform-description">
                  <p>
                    Connect for professional networking, collaboration opportunities, 
                    and industry insights.
                  </p>
                </div>
                
                <a 
                  href="https://linkedin.com/in/emiliano-gandini-outeda" 
                  target="_blank"
                  class="platform-button linkedin-button"
                >
                  <i class="fab fa-linkedin"></i>
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Content Grid -->
        <div class="main-layout-grid">
          <!-- Left Column: Contact Info -->
          <div class="contact-info-column">
            <div class="contact-info-card">
              <div class="card-header">
                <i class="fas fa-user-circle"></i>
                <h3>Contact Information</h3>
              </div>
              <div class="card-content">
                <div class="info-item">
                  <div class="info-icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="info-content">
                    <h4>Email</h4>
                    <a href="mailto:emiliano.outeda@gmail.com" class="info-link">
                      emiliano.outeda@gmail.com
                    </a>
                  </div>
                </div>
                
                <div class="info-item">
                  <div class="info-icon">
                    <i class="fas fa-clock"></i>
                  </div>
                  <div class="info-content">
                    <h4>Working Hours</h4>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p class="timezone">GMT-3 (Uruguay Time)</p>
                  </div>
                </div>
                
                <div class="info-item">
                  <div class="info-icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="info-content">
                    <h4>Location</h4>
                    <p>Montevideo, Uruguay</p>
                    <p class="location-note">Available for remote work worldwide</p>
                  </div>
                </div>

                <!-- Additional Info -->
                <div class="additional-info">
                  <div class="info-tag">
                    <i class="fas fa-code"></i>
                    <span>Full-Stack Expertise</span>
                  </div>
                  <div class="info-tag">
                    <i class="fas fa-rocket"></i>
                    <span>Performance Focus</span>
                  </div>
                  <div class="info-tag">
                    <i class="fas fa-shield-alt"></i>
                    <span>Security First</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Contact Form -->
          <div class="contact-form-column">
            <div class="contact-form-card">
              <div class="card-header">
                <i class="fas fa-paper-plane"></i>
                <h3>Send a Message</h3>
              </div>
              
              <div class="card-content">
                <form @submit.prevent="handleSubmit" class="contact-form">
                  <div class="form-row">
                    <div class="form-group">
                      <label for="name">
                        Full Name *
                        <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        v-model="form.name"
                        :class="{ 'error-input': errors.name }"
                        placeholder="John Doe"
                        :disabled="isSubmitting"
                      />
                    </div>
                    
                    <div class="form-group">
                      <label for="email">
                        Email Address *
                        <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        v-model="form.email"
                        :class="{ 'error-input': errors.email }"
                        placeholder="john@example.com"
                        :disabled="isSubmitting"
                      />
                    </div>
                  </div>
                  
                  <div class="form-row">
                    <div class="form-group">
                      <label for="company">Company</label>
                      <input
                        type="text"
                        id="company"
                        v-model="form.company"
                        placeholder="Your company name"
                        :disabled="isSubmitting"
                      />
                    </div>
                    
                    <div class="form-group">
                      <label for="service">Service Interest</label>
                      <select
                        id="service"
                        v-model="form.service"
                        :disabled="isSubmitting"
                      >
                        <option value="">Select a service</option>
                        <option value="Growth Optimization">Growth Optimization</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Strategic Consulting">Strategic Consulting</option>
                        <option value="Custom Solution">Custom Solution</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div class="form-group">
                    <label for="message">
                      Message *
                      <span class="error-message" v-if="errors.message">{{ errors.message }}</span>
                    </label>
                    <textarea
                      id="message"
                      v-model="form.message"
                      :class="{ 'error-input': errors.message }"
                      placeholder="Tell me about your project or idea..."
                      rows="6"
                      :disabled="isSubmitting"
                    ></textarea>
                  </div>
                  
                  <div class="form-notification" v-if="notification.show">
                    <div class="notification" :class="notification.type">
                      <i :class="notification.icon"></i>
                      <span>{{ notification.message }}</span>
                      <button v-if="notification.type === 'error'" @click="notification.show = false" class="close-notification">
                        <i class="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    class="submit-button"
                    :disabled="isSubmitting"
                    :class="{ submitting: isSubmitting }"
                  >
                    <template v-if="!isSubmitting">
                      <i class="fas fa-paper-plane"></i>
                      Send Message
                    </template>
                    <template v-else>
                      <i class="fas fa-spinner fa-spin"></i>
                      Sending...
                    </template>
                  </button>
                  
                  <p class="form-disclaimer">
                    <i class="fas fa-shield-alt"></i>
                    Your information is secure and will only be used to contact you regarding your inquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'ContactView',
  data() {
    return {
      discordUsername: 'aegis_eclipse',
      copyingDiscord: false,
      copyTimeout: null,
      form: {
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      },
      errors: {
        name: '',
        email: '',
        message: ''
      },
      isSubmitting: false,
      notification: {
        show: false,
        type: '', // 'success' or 'error'
        message: '',
        icon: ''
      }
    };
  },
  mounted() {
    emailjs.init('sWX5sOj0hrqMs3KvX');
  },
  methods: {
    copyDiscord() {
      if (this.copyingDiscord) return;
      
      this.copyingDiscord = true;
      
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
          this.showNotification('success', 'Discord username copied to clipboard!', 'fas fa-check-circle');
        } else {
          throw new Error('Copy command failed');
        }
      } catch (err) {
        console.error('Failed to copy:', err);
        this.showNotification('error', 'Failed to copy. Please try again.', 'fas fa-exclamation-circle');
      }
      
      // Clean up
      document.body.removeChild(tempInput);
      
      // Reset copy state after 2 seconds
      this.copyTimeout = setTimeout(() => {
        this.copyingDiscord = false;
      }, 2000);
    },
    
    validateForm() {
      let isValid = true;
      this.errors = { name: '', email: '', message: '' };
      
      if (!this.form.name.trim()) {
        this.errors.name = 'Name is required';
        isValid = false;
      } else if (this.form.name.trim().length < 2) {
        this.errors.name = 'Name must be at least 2 characters';
        isValid = false;
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.form.email.trim()) {
        this.errors.email = 'Email is required';
        isValid = false;
      } else if (!emailRegex.test(this.form.email)) {
        this.errors.email = 'Please enter a valid email address';
        isValid = false;
      }
      
      if (!this.form.message.trim()) {
        this.errors.message = 'Message is required';
        isValid = false;
      } else if (this.form.message.trim().length < 10) {
        this.errors.message = 'Message must be at least 10 characters';
        isValid = false;
      }
      
      return isValid;
    },
    
    async handleSubmit() {
      if (!this.validateForm()) {
        this.showNotification('error', 'Please fix the errors in the form.', 'fas fa-exclamation-circle');
        return;
      }
      
      this.isSubmitting = true;
      this.hideNotification();
      
      try {
        const templateParams = {
          from_name: this.form.name,
          from_email: this.form.email,
          company: this.form.company || 'Not specified',
          service: this.form.service || 'Not specified',
          message: this.form.message,
          to_email: 'emiliano.outeda@gmail.com',
          date: new Date().toLocaleString()
        };
        
        const response = await emailjs.send(
          'service_uld2p36',
          'template_9p2sqv3',
          templateParams
        );
        
        if (response.status === 200) {
          this.showNotification(
            'success',
            'Message sent successfully! I\'ll get back to you within 24 hours.',
            'fas fa-check-circle'
          );
          this.resetForm();
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        console.error('EmailJS Error:', error);
        this.showNotification(
          'error',
          'Failed to send message. Please try again or email me directly at emiliano.outeda@gmail.com',
          'fas fa-exclamation-circle'
        );
      } finally {
        this.isSubmitting = false;
      }
    },
    
    resetForm() {
      this.form = {
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      };
      this.errors = { name: '', email: '', message: '' };
    },
    
    showNotification(type, message, icon) {
      this.notification = {
        show: true,
        type,
        message,
        icon
      };
      
      // Auto-hide success messages after 5 seconds
      if (type === 'success') {
        setTimeout(() => {
          this.hideNotification();
        }, 5000);
      }
    },
    
    hideNotification() {
      this.notification.show = false;
    }
  },
  beforeUnmount() {
    // Clear timeout when component is destroyed
    if (this.copyTimeout) {
      clearTimeout(this.copyTimeout);
    }
  }
};
</script>

<style scoped>
.contact-page {
  background: var(--primary-dark);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.contact-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
  background-image: 
    linear-gradient(rgba(185, 28, 28, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(185, 28, 28, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Header Styles */
.contact-header {
  padding: 80px 0 50px;
  position: relative;
  z-index: 1;
}

.header-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.header-title {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title-line {
  display: block;
  background: linear-gradient(90deg, var(--accent-red), var(--accent-red-light));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.title-line-1 {
  animation: titleSlideIn 0.8s ease-out;
}

.title-line-2 {
  animation: titleSlideIn 0.8s ease-out 0.2s both;
}

.header-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  animation: fadeIn 1s ease-out 0.4s both;
}

/* Social Platforms Row */
.social-platforms-row {
  margin-bottom: 2.5rem;
}

.platforms-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* Platform Cards */
.platform-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
}

.platform-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-red);
  box-shadow: 0 10px 30px rgba(185, 28, 28, 0.2);
}

.platform-header {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.platform-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.discord-platform .platform-icon {
  background: #5865f2;
}

.github-platform .platform-icon {
  background: #333;
}

.linkedin-platform .platform-icon {
  background: #0a66c2;
}

.platform-icon i {
  font-size: 1.5rem;
  color: white;
}

.platform-info h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 0.25rem 0;
}

.platform-subtitle {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin: 0;
}

.platform-content {
  padding: 1.5rem;
}

/* Discord Handle */
.discord-handle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.handle-display {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 600;
}

.handle-display i {
  color: #5865f2;
}

.copy-button {
  width: 36px;
  height: 36px;
  background: rgba(88, 101, 242, 0.2);
  border: 1px solid #5865f2;
  border-radius: 8px;
  color: #5865f2;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.copy-button:hover:not(:disabled) {
  background: #5865f2;
  color: white;
  transform: scale(1.1);
}

.copy-button:disabled {
  background: #5865f2;
  color: white;
  cursor: default;
}

/* GitHub Stats */
.github-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin: 1rem 0;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 6px;
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.stat-item i {
  color: var(--accent-red);
}

/* LinkedIn Profile */
.profile-preview {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
}

.profile-avatar {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #0a66c2, #0077b5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.profile-avatar i {
  font-size: 1.5rem;
  color: white;
}

.profile-details h4 {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 0.25rem 0;
}

.profile-title {
  color: var(--text-secondary);
  font-size: 0.8rem;
  margin: 0 0 0.5rem 0;
}

.connection-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: rgba(10, 102, 194, 0.1);
  border-radius: 6px;
  color: #0a66c2;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.connection-badge i {
  font-size: 0.9rem;
}

/* Platform Descriptions */
.platform-description p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* Platform Buttons */
.platform-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  width: 100%;
  text-align: center;
  border: none;
  cursor: pointer;
}

.github-platform .platform-button {
  background: #333;
}

.github-platform .platform-button:hover {
  background: #444;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.linkedin-button {
  background: #0a66c2;
}

.linkedin-button:hover {
  background: #0077b5;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(10, 102, 194, 0.3);
}

.discord-platform .platform-button {
  background: #5865f2;
}

.discord-platform .platform-button:hover {
  background: #4752c4;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(88, 101, 242, 0.3);
}

/* Main Layout Grid */
.main-layout-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
  align-items: start;
}

/* Contact Info Card */
.contact-info-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.contact-info-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-red);
  box-shadow: 0 10px 30px rgba(185, 28, 28, 0.2);
}

.card-header {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.card-header i {
  font-size: 1.5rem;
  color: var(--accent-red);
}

.card-header h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.card-content {
  padding: 1.5rem;
}

/* Contact Information */
.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.info-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateX(5px);
}

.info-icon {
  width: 40px;
  height: 40px;
  background: var(--accent-red);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-icon i {
  font-size: 1.2rem;
  color: white;
}

.info-content h4 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 0.25rem 0;
}

.info-link {
  color: var(--accent-red);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.info-link:hover {
  color: var(--accent-red-light);
  text-decoration: underline;
}

.info-content p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0.25rem 0;
}

.timezone {
  font-size: 0.8rem !important;
  color: var(--text-secondary) !important;
  opacity: 0.8;
}

.location-note {
  font-size: 0.8rem !important;
  color: var(--text-secondary) !important;
  opacity: 0.8;
  font-style: italic;
}

/* Additional Info */
.additional-info {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.info-tag {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  color: var(--text-secondary);
  font-size: 0.85rem;
  transition: all 0.3s ease;
}

.info-tag:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateX(5px);
}

.info-tag i {
  color: var(--accent-red);
  font-size: 0.9rem;
  width: 20px;
}

/* Contact Form Card */
.contact-form-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
}

.contact-form-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-red);
  box-shadow: 0 10px 30px rgba(185, 28, 28, 0.2);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  color: var(--text-primary);
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
}

.error-message {
  color: #ef4444;
  font-size: 0.8rem;
  font-weight: 400;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.875rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-primary);
  font-family: inherit;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  outline: none;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--accent-red);
  box-shadow: 0 0 0 3px rgba(185, 28, 28, 0.1);
  background: rgba(255, 255, 255, 0.07);
}

.form-group input.error-input,
.form-group select.error-input,
.form-group textarea.error-input {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 140px;
}

.form-group select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23b91c1c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px;
  padding-right: 2.25rem;
  cursor: pointer;
}

/* Notification */
.form-notification {
  margin: 0.5rem 0;
}

.notification {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 8px;
  animation: slideIn 0.3s ease-out;
  position: relative;
}

.notification.success {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #22c55e;
}

.notification.error {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
}

.notification i {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.notification span {
  font-size: 0.9rem;
  font-weight: 500;
  flex: 1;
}

.close-notification {
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0.25rem;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.close-notification:hover {
  opacity: 1;
}

/* Submit Button */
.submit-button {
  padding: 1rem;
  background: var(--accent-red);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.submit-button:hover:not(:disabled) {
  background: var(--accent-red-light);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(185, 28, 28, 0.3);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.submit-button.submitting {
  background: var(--accent-red-dark);
}

.form-disclaimer {
  margin-top: 3.3rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  color: var(--text-secondary);
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  line-height: 1.5;
}

.form-disclaimer i {
  color: var(--accent-red);
  font-size: 1rem;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .platforms-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  
  .main-layout-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-header {
    padding: 60px 0 40px;
  }
  
  .header-title {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .platforms-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .contact-header {
    padding: 50px 0 30px;
  }
  
  .header-title {
    font-size: 2.5rem;
  }
  
  .header-subtitle {
    font-size: 1rem;
  }
  
  .platform-header,
  .card-header {
    padding: 1.25rem;
  }
  
  .platform-content,
  .card-content {
    padding: 1.25rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .profile-preview {
    flex-direction: column;
    text-align: center;
  }
  
  .info-item {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .header-title {
    font-size: 2rem;
  }
  
  .platform-content,
  .card-content {
    padding: 1rem;
  }
  
  .github-stats {
    grid-template-columns: 1fr;
  }
}

#github-button {
    margin-top: 3rem;
}
</style>