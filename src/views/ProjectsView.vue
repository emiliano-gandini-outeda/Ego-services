<template>
  <main class="projects-page">
    <!-- Professional Hero Section -->
    <section class="projects-hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">Strategic Digital Solutions</h1>
            <p class="hero-subtitle">Where innovation meets execution. We architect digital experiences that drive measurable business growth across industries.</p>
            <div class="hero-stats">
              <div class="stat">
                <div class="stat-number">98%</div>
                <div class="stat-label">Client Satisfaction</div>
              </div>
              <div class="stat">
                <div class="stat-number">150+</div>
                <div class="stat-label">Projects Delivered</div>
              </div>
              <div class="stat">
                <div class="stat-number">40%</div>
                <div class="stat-label">Avg. Growth</div>
              </div>
            </div>
          </div>
          <div class="hero-visual">
            <div class="code-grid">
              <div class="code-line" v-for="i in 12" :key="i"></div>
            </div>
            <div class="floating-elements">
              <div class="element element-1"><i class="fab fa-vuejs"></i></div>
              <div class="element element-2"><i class="fab fa-react"></i></div>
              <div class="element element-3"><i class="fab fa-node-js"></i></div>
              <div class="element element-4"><i class="fab fa-python"></i></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Refactored Portfolio Section -->
    <section class="portfolio-section">
      <div class="container">
        <div class="section-header">
          <h2>Featured Projects</h2>
          <p>Strategic case studies showcasing our expertise in digital transformation and growth optimization.</p>
        </div>

        <div class="portfolio-grid">
          <div 
            class="portfolio-card" 
            v-for="project in projects" 
            :key="project.id"
            :class="{ featured: project.featured }"
          >
            <div class="card-content">
              <div class="project-icon">
                <i :class="getProjectIcon(project.icon)"></i>
              </div>
              
              <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <div class="project-meta">
                  <span class="project-category">{{ project.category }}</span>
                  <span class="project-duration">{{ project.duration }}</span>
                </div>
              </div>
              
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-info">
                <div class="info-item">
                  <i class="fas fa-industry"></i>
                  <span>{{ project.industry }}</span>
                </div>
                <div class="info-item">
                  <i class="fas fa-code"></i>
                  <span>{{ project.technologies[0] }}</span>
                </div>
              </div>
            </div>
            
            <button class="more-button" @click="viewProjectDetails(project)">
              See More
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Staircase Process Section -->
    <section class="process-section">
      <div class="container">
        <div class="section-header">
          <h2>Our Development Framework</h2>
          <p>A systematic approach that builds success step by step, ensuring quality at every stage.</p>
        </div>

        <div class="staircase-timeline">
          <div class="staircase-step" v-for="(step, index) in processSteps" :key="step.number" 
               :style="{ '--step-index': index }">
            <div class="step-visual">
              <div class="step-number">{{ step.number }}</div>
              <div class="step-line" v-if="index < processSteps.length - 1"></div>
            </div>
            <div class="step-content">
              <div class="step-icon">
                <i :class="step.icon"></i>
              </div>
              <div class="step-details">
                <h3>{{ step.title }}</h3>
                <p>{{ step.description }}</p>
                <div class="step-meta">{{ step.duration }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Stack -->
    <section class="tech-stack-section">
      <div class="container">
        <div class="section-header">
          <h2>Technology Stack</h2>
          <p>Modern tools and frameworks we expertly leverage to build robust solutions.</p>
        </div>

        <div class="tech-grid">
          <div class="tech-category" v-for="category in techStack" :key="category.name">
            <div class="category-header">
              <h3>{{ category.name }}</h3>
            </div>
            <div class="tech-items">
              <div class="tech-item" v-for="tech in category.technologies" :key="tech.name">
                <div class="tech-icon">
                  <i :class="tech.icon"></i>
                </div>
                <span>{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="projects-cta">
      <div class="container">
        <div class="cta-card">
          <div class="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how we can bring your vision to life with our proven approach and expertise.</p>
            <div class="cta-buttons">
              <button class="btn btn-primary" @click="openConsultationModal">
                <i class="fas fa-comments"></i>
                Start a Conversation
              </button>
              <router-link to="/" class="btn btn-secondary">
                <i class="fas fa-home"></i>
                Back to Home
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Consultation Modal -->
    <div class="modal-overlay" v-if="showModal" @click.self="closeModal">
      <div class="modal-content">
        <div class="modal-header">
          <h3>Start a Conversation</h3>
          <button class="modal-close" @click="closeModal">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div class="modal-body">
          <form @submit.prevent="handleSubmit" class="consultation-form">
            <div class="form-group">
              <label for="name">
                Full Name *
                <span class="error" v-if="errors.name">{{ errors.name }}</span>
              </label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                :class="{ error: errors.name }"
                placeholder="Enter your full name"
                :disabled="isSubmitting"
              />
            </div>
            
            <div class="form-group">
              <label for="email">
                Email Address *
                <span class="error" v-if="errors.email">{{ errors.email }}</span>
              </label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                :class="{ error: errors.email }"
                placeholder="Enter your email address"
                :disabled="isSubmitting"
              />
            </div>
            
            <div class="form-group">
              <label for="company">Company</label>
              <input
                type="text"
                id="company"
                v-model="form.company"
                placeholder="Your company name (optional)"
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
                <option value="Web Development">Web Development</option>
                <option value="E-commerce Solution">E-commerce Solution</option>
                <option value="Enterprise Platform">Enterprise Platform</option>
                <option value="Analytics & BI">Analytics & BI</option>
                <option value="Custom Solution">Custom Solution</option>
                <option value="Consultation">Consultation</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="message">
                Project Details *
                <span class="error" v-if="errors.message">{{ errors.message }}</span>
              </label>
              <textarea
                id="message"
                v-model="form.message"
                :class="{ error: errors.message }"
                placeholder="Tell us about your project or requirements..."
                rows="5"
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
                Send Request <i class="fas fa-paper-plane"></i>
              </template>
              <template v-else>
                <i class="fas fa-spinner fa-spin"></i> Sending...
              </template>
            </button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'ProjectsView',
  data() {
    return {
      showModal: false,
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
        type: '',
        message: '',
        icon: ''
      },
      projects: [
        {
          id: 1,
          title: "Enterprise Digital Platform",
          description: "Digital transformation solution integrating legacy systems into a unified modern platform for global manufacturing.",
          category: "Enterprise",
          industry: "Manufacturing",
          duration: "6 Months",
          technologies: ["Vue.js", "Node.js", "AWS", "Docker"],
          icon: "industry",
          featured: true
        },
        {
          id: 2,
          title: "AI Analytics Dashboard",
          description: "Intelligent analytics platform providing real-time business insights and predictive analytics for financial services.",
          category: "Analytics",
          industry: "Finance",
          duration: "4 Months",
          technologies: ["React", "Python", "TensorFlow", "D3.js"],
          icon: "chart-bar",
          featured: false
        },
        {
          id: 3,
          title: "E-commerce Growth Platform",
          description: "Scalable e-commerce solution with AI-powered recommendations and advanced inventory management.",
          category: "E-commerce",
          industry: "Retail",
          duration: "5 Months",
          technologies: ["Vue.js", "Laravel", "Stripe", "Redis"],
          icon: "shopping-cart",
          featured: false
        },
        {
          id: 4,
          title: "Healthcare Data System",
          description: "Secure HIPAA-compliant platform for healthcare data management and telemedicine integration.",
          category: "Healthcare",
          industry: "Healthcare",
          duration: "7 Months",
          technologies: ["React", "Node.js", "MongoDB", "AWS"],
          icon: "heartbeat",
          featured: false
        },
        {
          id: 5,
          title: "Real Estate Management",
          description: "Comprehensive property management and CRM system with portfolio tracking and analytics.",
          category: "Real Estate",
          industry: "Real Estate",
          duration: "5 Months",
          technologies: ["Vue.js", "Express.js", "PostgreSQL", "Mapbox"],
          icon: "building",
          featured: false
        },
        {
          id: 6,
          title: "Education Platform",
          description: "Interactive learning platform with virtual classrooms and student performance analytics.",
          category: "Education",
          industry: "Education",
          duration: "4 Months",
          technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
          icon: "graduation-cap",
          featured: false
        }
      ],
      processSteps: [
        {
          number: "01",
          title: "Discovery & Strategy",
          description: "In-depth analysis of business requirements, goals, and technical constraints.",
          icon: "fas fa-search",
          duration: "1-2 Weeks"
        },
        {
          number: "02",
          title: "Design & Architecture",
          description: "Creating intuitive user interfaces and robust system architecture.",
          icon: "fas fa-pencil-ruler",
          duration: "2-3 Weeks"
        },
        {
          number: "03",
          title: "Development",
          description: "Agile development with regular sprints and quality assurance.",
          icon: "fas fa-code",
          duration: "Project Dependent"
        },
        {
          number: "04",
          title: "Testing & QA",
          description: "Comprehensive testing including security and performance validation.",
          icon: "fas fa-vial",
          duration: "2-3 Weeks"
        },
        {
          number: "05",
          title: "Deployment",
          description: "Smooth deployment to production with go-live support.",
          icon: "fas fa-rocket",
          duration: "1-2 Weeks"
        }
      ],
      techStack: [
        {
          name: "Frontend",
          technologies: [
            { name: "Vue.js", icon: "fab fa-vuejs" },
            { name: "React", icon: "fab fa-react" },
            { name: "TypeScript", icon: "fas fa-code" }
          ]
        },
        {
          name: "Backend",
          technologies: [
            { name: "Node.js", icon: "fab fa-node-js" },
            { name: "Python", icon: "fab fa-python" },
            { name: "Laravel", icon: "fab fa-laravel" }
          ]
        },
        {
          name: "Cloud & DevOps",
          technologies: [
            { name: "AWS", icon: "fab fa-aws" },
            { name: "Docker", icon: "fab fa-docker" },
            { name: "Kubernetes", icon: "fas fa-cubes" }
          ]
        },
        {
          name: "Databases",
          technologies: [
            { name: "PostgreSQL", icon: "fas fa-database" },
            { name: "MongoDB", icon: "fas fa-database" },
            { name: "Redis", icon: "fas fa-database" }
          ]
        }
      ]
    }
  },
  mounted() {
    emailjs.init('sWX5sOj0hrqMs3KvX');
  },
  methods: {
    getProjectIcon(iconName) {
      const iconMap = {
        'industry': 'fas fa-industry',
        'chart-bar': 'fas fa-chart-bar',
        'shopping-cart': 'fas fa-shopping-cart',
        'heartbeat': 'fas fa-heartbeat',
        'building': 'fas fa-building',
        'graduation-cap': 'fas fa-graduation-cap'
      };
      return iconMap[iconName] || 'fas fa-project-diagram';
    },
    
    viewProjectDetails(project) {
      alert(`Project: ${project.title}\n\nIndustry: ${project.industry}\n\nDuration: ${project.duration}\n\nThis would open a detailed project page.`);
    },
    
    openConsultationModal() {
      this.showModal = true;
      document.body.style.overflow = 'hidden';
    },
    
    closeModal() {
      this.showModal = false;
      document.body.style.overflow = '';
      this.resetForm();
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
            'Request sent successfully! We will get back to you within 2 hours.',
            'fas fa-check-circle'
          );
          setTimeout(() => {
            this.closeModal();
          }, 3000);
        } else {
          throw new Error('Failed to send request');
        }
      } catch (error) {
        console.error('EmailJS Error:', error);
        this.showNotification(
          'error',
          'Failed to send request. Please try again or email us directly at emiliano.outeda@gmail.com',
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
      
      if (type === 'success') {
        setTimeout(() => {
          this.hideNotification();
        }, 5000);
      }
    },
    
    hideNotification() {
      this.notification.show = false;
    }
  }
}
</script>

<style scoped>
/* Base styles */
.projects-page {
  background: var(--primary-dark);
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.projects-hero {
  padding: 140px 0 100px;
  background: linear-gradient(135deg, 
    var(--primary-dark) 0%, 
    #111111 100%);
  position: relative;
  overflow: hidden;
}

.projects-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 80% 20%, rgba(185, 28, 28, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 20% 80%, rgba(185, 28, 28, 0.05) 0%, transparent 50%);
  z-index: 1;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-text {
  position: relative;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--accent-red);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.hero-visual {
  position: relative;
  height: 400px;
}

.code-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 30, 30, 0.5);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: hidden;
}

.code-line {
  height: 4px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2px;
  animation: pulseLine 2s ease-in-out infinite;
}

.code-line:nth-child(2n) {
  width: 90%;
}

.code-line:nth-child(3n) {
  width: 70%;
}

.code-line:nth-child(4n) {
  width: 85%;
}

@keyframes pulseLine {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.7; }
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.element {
  position: absolute;
  width: 60px;
  height: 60px;
  background: var(--card-bg);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: var(--accent-red);
  border: 1px solid rgba(185, 28, 28, 0.2);
  animation: float 6s ease-in-out infinite;
}

.element-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.element-2 {
  top: 60%;
  right: 15%;
  animation-delay: 1s;
}

.element-3 {
  bottom: 20%;
  left: 20%;
  animation-delay: 2s;
}

.element-4 {
  top: 30%;
  right: 25%;
  animation-delay: 3s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* Refactored Portfolio Section */
.portfolio-section {
  padding: 100px 0;
  background: var(--secondary-dark);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.section-header p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
  gap: 2rem;
  width: 100%;
}

.portfolio-card {
  background: var(--card-bg);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2.5rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  min-height: 320px;
}

.portfolio-card:hover {
  transform: translateY(-8px);
  border-color: var(--accent-red);
  box-shadow: 0 15px 30px rgba(185, 28, 28, 0.1);
}

.portfolio-card.featured {
  border-color: var(--accent-red);
  background: linear-gradient(145deg, 
    rgba(185, 28, 28, 0.05), 
    rgba(185, 28, 28, 0.02));
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-icon {
  width: 70px;
  height: 70px;
  background: rgba(185, 28, 28, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.project-icon i {
  font-size: 2.2rem;
  color: var(--accent-red);
}

.project-header {
  margin-bottom: 1.5rem;
}

.project-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  line-height: 1.3;
}

.project-meta {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.project-category {
  background: rgba(185, 28, 28, 0.1);
  color: var(--accent-red);
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.project-duration {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
}

.project-description {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.7;
  font-size: 1rem;
  flex: 1;
}

.project-info {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.info-item i {
  color: var(--accent-red);
  font-size: 1.1rem;
}

.more-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  background: transparent;
  color: var(--accent-red);
  border: 2px solid var(--accent-red);
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
}

.more-button:hover {
  background: var(--accent-red);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(185, 28, 28, 0.2);
}

/* Staircase Process Section */
.process-section {
  padding: 100px 0;
  background: linear-gradient(135deg, 
    var(--primary-dark) 0%, 
    #151515 100%);
  position: relative;
  overflow: hidden;
}

.process-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 80% 20%, rgba(185, 28, 28, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 20% 80%, rgba(185, 28, 28, 0.03) 0%, transparent 50%);
}

.staircase-timeline {
  max-width: 900px;
  margin: 4rem auto 0;
  position: relative;
}

.staircase-step {
  display: flex;
  margin-bottom: 3rem;
  position: relative;
  opacity: 0;
  transform: translateX(-30px);
  animation: slideInStair 0.8s ease-out forwards;
  animation-delay: calc(var(--step-index) * 0.2s);
}

@keyframes slideInStair {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.step-visual {
  position: relative;
  width: 80px;
  flex-shrink: 0;
  margin-right: 2rem;
}

.step-number {
  width: 60px;
  height: 60px;
  background: var(--accent-red);
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 800;
  position: relative;
  z-index: 2;
  box-shadow: 0 5px 15px rgba(185, 28, 28, 0.3);
  transition: all 0.3s ease;
}

.staircase-step:hover .step-number {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 25px rgba(185, 28, 28, 0.4);
}

.step-line {
  position: absolute;
  top: 60px;
  left: 30px;
  bottom: -3rem;
  width: 2px;
  background: linear-gradient(to bottom, 
    rgba(185, 28, 28, 0.4), 
    rgba(185, 28, 28, 0.1));
  z-index: 1;
}

.step-content {
  flex: 1;
  background: var(--card-bg);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.staircase-step:nth-child(odd) .step-content {
  transform: translateX(20px);
  border-left: 3px solid var(--accent-red);
}

.staircase-step:nth-child(even) .step-content {
  transform: translateX(-20px);
  border-right: 3px solid var(--accent-red);
}

.staircase-step:hover .step-content {
  transform: translateX(0) translateY(-5px);
  border-color: var(--accent-red);
  box-shadow: 0 10px 30px rgba(185, 28, 28, 0.15);
}

.step-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(135deg, 
    rgba(185, 28, 28, 0.05), 
    transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.staircase-step:hover .step-content::before {
  opacity: 1;
}

.step-icon {
  width: 50px;
  height: 50px;
  background: rgba(185, 28, 28, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.staircase-step:hover .step-icon {
  background: rgba(185, 28, 28, 0.2);
  transform: scale(1.1);
}

.step-icon i {
  color: var(--accent-red);
  font-size: 1.5rem;
}

.step-details {
  flex: 1;
}

.step-details h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.step-details p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.step-meta {
  display: inline-block;
  background: rgba(185, 28, 28, 0.1);
  color: var(--accent-red);
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(185, 28, 28, 0.2);
}

/* Technology Stack */
.tech-stack-section {
  padding: 100px 0;
  background: var(--secondary-dark);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.tech-category {
  background: var(--card-bg);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  transition: all 0.3s ease;
}

.tech-category:hover {
  border-color: var(--accent-red);
  transform: translateY(-5px);
}

.category-header {
  text-align: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.category-header h3 {
  font-size: 1.2rem;
  color: var(--text-primary);
  font-weight: 600;
}

.tech-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: rgba(185, 28, 28, 0.1);
  transform: translateX(5px);
}

.tech-icon {
  width: 40px;
  height: 40px;
  background: rgba(185, 28, 28, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-icon i {
  color: var(--accent-red);
  font-size: 1.2rem;
}

.tech-item span {
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.95rem;
}

/* CTA Section */
.projects-cta {
  padding: 100px 0;
  background: linear-gradient(135deg, 
    var(--accent-red-dark), 
    var(--accent-red));
  position: relative;
  overflow: hidden;
}

.projects-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
}

.cta-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 4rem;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.cta-content {
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: white;
}

.cta-content p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  line-height: 1.6;
  font-size: 1.1rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
}

.btn-primary {
  background: white;
  color: var(--accent-red);
  border: none;
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: transparent;
  color: white;
  border-color: white;
  text-decoration: none;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: var(--card-bg);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.25rem;
  transition: color 0.3s ease;
}

.modal-close:hover {
  color: var(--accent-red);
}

.modal-body {
  padding: 1.5rem;
}

.consultation-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
  align-items: center;
}

.error {
  color: #ef4444;
  font-size: 0.8rem;
  font-weight: 400;
}

.form-group input,
.form-group textarea,
.form-group select {
  padding: 0.875rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-primary);
  font-family: inherit;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  outline: none;
  width: 100%;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: var(--accent-red);
  box-shadow: 0 0 0 3px rgba(185, 28, 28, 0.1);
  background: rgba(255, 255, 255, 0.07);
}

.form-group input.error,
.form-group textarea.error {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.form-notification {
  margin: 0.5rem 0;
}

.notification {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
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

.submit-button {
  padding: 1rem 2rem;
  background: var(--accent-red);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
}

.submit-button:hover:not(:disabled) {
  background: var(--accent-red-light);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(185, 28, 28, 0.2);
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
@media (max-width: 1200px) {
  .portfolio-grid {
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }
}

@media (max-width: 1100px) {
  .portfolio-grid {
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-visual {
    height: 300px;
  }
  
  .hero-stats {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
  
  .portfolio-card {
    padding: 2rem;
    min-height: auto;
  }
  
  .project-icon {
    width: 60px;
    height: 60px;
  }
  
  .project-icon i {
    font-size: 1.8rem;
  }
  
  .project-title {
    font-size: 1.4rem;
  }
  
  .project-info {
    flex-direction: column;
    gap: 1rem;
  }
  
  .staircase-step {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .step-visual {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .step-number {
    width: 50px;
    height: 50px;
    font-size: 1rem;
  }
  
  .step-line {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .step-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem;
  }
  
  .staircase-step:nth-child(odd) .step-content,
  .staircase-step:nth-child(even) .step-content {
    transform: none;
    border-left: 2px solid var(--accent-red);
    border-right: 2px solid var(--accent-red);
  }
  
  .step-icon {
    margin-bottom: 1rem;
  }
  
  .cta-card {
    padding: 2.5rem;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .btn {
    justify-content: center;
  }
  
  .modal-content {
    margin: 0 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .portfolio-card {
    padding: 1.5rem;
  }
  
  .project-icon {
    width: 50px;
    height: 50px;
  }
  
  .project-icon i {
    font-size: 1.5rem;
  }
  
  .project-title {
    font-size: 1.3rem;
  }
  
  .project-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .modal-header {
    padding: 1.25rem;
  }
  
  .modal-body {
    padding: 1.25rem;
  }
}
</style>