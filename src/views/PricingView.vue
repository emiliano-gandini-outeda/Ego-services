<template>
  <main class="pricing-page">
    <!-- Professional Hero Section -->
    <section class="pricing-hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">Eclipse Growth Optimization Services</h1>
            <p class="hero-subtitle">Strategic digital solutions designed to scale with your business. Transparent pricing with no hidden fees.</p>
            <div class="hero-features">
              <div class="feature">
                <i class="fas fa-check-circle"></i>
                <span>Monthly audits included</span>
              </div>
              <div class="feature">
                <i class="fas fa-sync-alt"></i>
                <span>Pay-as-you-go changes & upgrades</span>
              </div>
              <div class="feature">
                <i class="fas fa-chart-line"></i>
                <span>Growth consulting at every tier</span>
              </div>
            </div>
          </div>
          <div class="hero-visual">
            <div class="visual-circle">
              <div class="circle-inner">
                <i class="fas fa-rocket"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Toggle -->
    <section class="pricing-toggle-section">
      <div class="container" id="starter">
        <div class="toggle-wrapper">
          <div class="toggle-label">
            <span :class="{ active: !isYearly }">Monthly Billing</span>
          </div>
          <label class="toggle-switch">
            <input type="checkbox" v-model="isYearly">
            <span class="slider"></span>
          </label>
          <div class="toggle-label">
            <span :class="{ active: isYearly }">Annual Billing</span>
            <span class="discount-badge">Save 15%</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Vertical Pricing Cards -->
    <section class="pricing-cards-section">
      <div class="container">
        <div class="vertical-pricing-cards">
          <!-- Starter Plan -->
          <div class="pricing-card" :class="{ popular: plans[0].popular }" >
            <div class="plan-badge" v-if="plans[0].popular">Most Popular</div>
            
            <div class="card-content">
              <!-- Left Sidebar -->
              <div class="card-sidebar">
                <div class="plan-header">
                  <h3 class="plan-name">{{ plans[0].name }}</h3>
                  <p class="plan-description">{{ plans[0].description }}</p>
                </div>

                <div class="yearly-total">
                  <div class="total-label">First Year Total</div>
                  <div class="total-amount">${{ getFirstYearTotal(plans[0]) }}</div>
                  <div class="total-note">Setup + {{ isYearly ? '1 year (15% off)' : '12 months' }}</div>
                </div>

                <div class="price-breakdown">
                  <div class="breakdown-item setup-fee">
                    <div class="breakdown-label">
                      <i class="fas fa-wrench"></i>
                      <span>One-Time Setup</span>
                    </div>
                    <div class="breakdown-amount">
                      <span class="range">${{ plans[0].setupMin }} – ${{ plans[0].setupMax }}</span>
                    </div>
                  </div>
                  
                  <div class="breakdown-item subscription-fee">
                    <div class="breakdown-label">
                      <i class="fas fa-sync-alt"></i>
                      <span>{{ isYearly ? 'Annual' : 'Monthly' }} Subscription</span>
                    </div>
                    <div class="breakdown-amount">
                      <span class="price">${{ getSubscriptionPrice(plans[0]) }}</span>
                      <span class="period">/{{ isYearly ? 'year' : 'month' }}</span>
                    </div>
                  </div>
                </div>

                <button 
                  class="plan-button" 
                  @click="openConsultationModal(plans[0].name)" id="growth"
                >
                  Get Started
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>

              <!-- Right Sidebar -->
              <div class="card-features">
                <div class="features-header">
                  <h4>Plan Highlights</h4>
                  <div class="features-count">{{ plans[0].features.length }} features</div>
                </div>
                
                <div class="plan-specs">
                  <div class="spec-item">
                    <i class="fas fa-edit"></i>
                    <div class="spec-content">
                      <span class="spec-label">Changes Included</span>
                      <span class="spec-value">{{ plans[0].includedChanges }}/month</span>
                    </div>
                  </div>
                  <div class="spec-item">
                    <i class="fas fa-chart-bar"></i>
                    <div class="spec-content">
                      <span class="spec-label">Audit Hours</span>
                      <span class="spec-value">{{ plans[0].auditHours }} hrs/month</span>
                    </div>
                  </div>
                  <div class="spec-item">
                    <i class="fas fa-clock"></i>
                    <div class="spec-content">
                      <span class="spec-label">Support Response</span>
                      <span class="spec-value">{{ plans[0].supportTime }}</span>
                    </div>
                  </div>
                </div>
                
                <ul class="features-list">
                  <li v-for="feature in plans[0].features" :key="feature">
                    <i class="fas fa-check"></i>
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Growth Plan -->
          <div class="pricing-card" :class="{ popular: plans[1].popular }">
            <div class="plan-badge" v-if="plans[1].popular">Most Popular</div>
            
            <div class="card-content">
              <!-- Left Sidebar -->
              <div class="card-sidebar">
                <div class="plan-header">
                  <h3 class="plan-name">{{ plans[1].name }}</h3>
                  <p class="plan-description">{{ plans[1].description }}</p>
                </div>

                <div class="yearly-total">
                  <div class="total-label">First Year Total</div>
                  <div class="total-amount">${{ getFirstYearTotal(plans[1]) }}</div>
                  <div class="total-note">Setup + {{ isYearly ? '1 year (15% off)' : '12 months' }}</div>
                </div>

                <div class="price-breakdown">
                  <div class="breakdown-item setup-fee">
                    <div class="breakdown-label">
                      <i class="fas fa-wrench"></i>
                      <span>One-Time Setup</span>
                    </div>
                    <div class="breakdown-amount">
                      <span class="range">${{ plans[1].setupMin }} – ${{ plans[1].setupMax }}</span>
                    </div>
                  </div>
                  
                  <div class="breakdown-item subscription-fee">
                    <div class="breakdown-label">
                      <i class="fas fa-sync-alt"></i>
                      <span>{{ isYearly ? 'Annual' : 'Monthly' }} Subscription</span>
                    </div>
                    <div class="breakdown-amount">
                      <span class="price">${{ getSubscriptionPrice(plans[1]) }}</span>
                      <span class="period">/{{ isYearly ? 'year' : 'month' }}</span>
                    </div>
                  </div>
                </div>

                <button 
                  class="plan-button" 
                  @click="openConsultationModal(plans[1].name)" id="eclipse"
                >
                  Choose Growth
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>

              <!-- Right Sidebar -->
              <div class="card-features">
                <div class="features-header">
                  <h4>Plan Highlights</h4>
                  <div class="features-count">{{ plans[1].features.length }} features</div>
                </div>
                
                <div class="plan-specs">
                  <div class="spec-item">
                    <i class="fas fa-edit"></i>
                    <div class="spec-content">
                      <span class="spec-label">Changes Included</span>
                      <span class="spec-value">{{ plans[1].includedChanges }}/month</span>
                    </div>
                  </div>
                  <div class="spec-item">
                    <i class="fas fa-chart-bar"></i>
                    <div class="spec-content">
                      <span class="spec-label">Audit Hours</span>
                      <span class="spec-value">{{ plans[1].auditHours }} hrs/month</span>
                    </div>
                  </div>
                  <div class="spec-item">
                    <i class="fas fa-clock"></i>
                    <div class="spec-content">
                      <span class="spec-label">Support Response</span>
                      <span class="spec-value">{{ plans[1].supportTime }}</span>
                    </div>
                  </div>
                  <div class="spec-item">
                    <i class="fas fa-users"></i>
                    <div class="spec-content">
                      <span class="spec-label">Growth Consulting</span>
                      <span class="spec-value">{{ plans[1].consultingHours }}/month</span>
                    </div>
                  </div>
                </div>
                
                <ul class="features-list">
                  <li v-for="feature in plans[1].features" :key="feature">
                    <i class="fas fa-check"></i>
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Eclipse Plan -->
          <div class="pricing-card" :class="{ popular: plans[2].popular }">
            <div class="plan-badge" v-if="plans[2].popular">Most Popular</div>
            
            <div class="card-content">
              <!-- Left Sidebar -->
              <div class="card-sidebar">
                <div class="plan-header">
                  <h3 class="plan-name">{{ plans[2].name }}</h3>
                  <p class="plan-description">{{ plans[2].description }}</p>
                </div>

                <div class="yearly-total">
                  <div class="total-label">First Year Total</div>
                  <div class="total-amount">${{ getFirstYearTotal(plans[2]) }}</div>
                  <div class="total-note">Setup + {{ isYearly ? '1 year (15% off)' : '12 months' }}</div>
                </div>

                <div class="price-breakdown">
                  <div class="breakdown-item setup-fee">
                    <div class="breakdown-label">
                      <i class="fas fa-wrench"></i>
                      <span>One-Time Setup</span>
                    </div>
                    <div class="breakdown-amount">
                      <span class="range">${{ plans[2].setupMin }} – ${{ plans[2].setupMax }}</span>
                    </div>
                  </div>
                  
                  <div class="breakdown-item subscription-fee">
                    <div class="breakdown-label">
                      <i class="fas fa-sync-alt"></i>
                      <span>{{ isYearly ? 'Annual' : 'Monthly' }} Subscription</span>
                    </div>
                    <div class="breakdown-amount">
                      <span class="price">${{ getSubscriptionPrice(plans[2]) }}</span>
                      <span class="period">/{{ isYearly ? 'year' : 'month' }}</span>
                    </div>
                  </div>
                </div>

                <button 
                  class="plan-button" 
                  @click="openConsultationModal(plans[2].name)" id="orion"
                >
                  Go Eclipse
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>

              <!-- Right Sidebar -->
              <div class="card-features">
                <div class="features-header">
                  <h4>Plan Highlights</h4>
                  <div class="features-count">{{ plans[2].features.length }} features</div>
                </div>
                
                <div class="plan-specs">
                  <div class="spec-item">
                    <i class="fas fa-edit"></i>
                    <div class="spec-content">
                      <span class="spec-label">Changes Included</span>
                      <span class="spec-value">{{ plans[2].includedChanges }}</span>
                    </div>
                  </div>
                  <div class="spec-item">
                    <i class="fas fa-chart-bar"></i>
                    <div class="spec-content">
                      <span class="spec-label">Audit Hours</span>
                      <span class="spec-value">{{ plans[2].auditHours }} hrs/month</span>
                    </div>
                  </div>
                  <div class="spec-item">
                    <i class="fas fa-clock"></i>
                    <div class="spec-content">
                      <span class="spec-label">Support Response</span>
                      <span class="spec-value">{{ plans[2].supportTime }}</span>
                    </div>
                  </div>
                  <div class="spec-item">
                    <i class="fas fa-users"></i>
                    <div class="spec-content">
                      <span class="spec-label">Growth Consulting</span>
                      <span class="spec-value">{{ plans[2].consultingHours }}</span>
                    </div>
                  </div>
                </div>
                
                <ul class="features-list">
                  <li v-for="feature in plans[2].features" :key="feature">
                    <i class="fas fa-check"></i>
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Orion Enterprise Card -->
        <div class="enterprise-card">
          <div class="enterprise-content">
            <div class="enterprise-icon">
              <i class="fas fa-crown"></i>
            </div>
            <div class="enterprise-text">
              <h3>Orion Enterprise</h3>
              <p>Fully custom development solutions for large-scale projects with complex requirements. Get dedicated support, unlimited changes, and strategic consulting.</p>
              <div class="enterprise-features">
                <div class="feature">
                  <i class="fas fa-server"></i>
                  <span>Fully Custom Development</span>
                </div>
                <div class="feature">
                  <i class="fas fa-network-wired"></i>
                  <span>System Integration</span>
                </div>
                <div class="feature">
                  <i class="fas fa-headset"></i>
                  <span>24/7 Priority Support</span>
                </div>
              </div>
            </div>
            <button class="enterprise-button" @click="openConsultationModal('Orion Enterprise')">
              <i class="fas fa-quote-right"></i>
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Services Section -->
    <section class="additional-services-section">
      <div class="container">
        <div class="section-header">
          <h2>Additional Services</h2>
          <p>Flexible options to customize your plan</p>
        </div>

        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-edit"></i>
            </div>
            <div class="service-content">
              <h3>Changes</h3>
              <div class="service-price">$25 per change</div>
              <p class="service-description">
                Minor adjustments to your website or app. Examples include updating text/images, adjusting colors/layout, minor API tweaks, or fixing small UI bugs.
              </p>
            </div>
          </div>

          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-level-up-alt"></i>
            </div>
            <div class="service-content">
              <h3>Upgrades</h3>
              <div class="service-price">Starting at $100</div>
              <p class="service-description">
                Major functional changes or new features. Includes adding backend modules, developing new web app features, custom integrations, or refactoring code. Each upgrade includes 2 changes.
              </p>
            </div>
          </div>

          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-chart-bar"></i>
            </div>
            <div class="service-content">
              <h3>Monthly Audit</h3>
              <div class="service-price">Included in all plans</div>
              <p class="service-description">
                Performance checks, UX/UI improvements, SEO analysis, security reviews, and growth suggestions. Hours vary by plan.
              </p>
              <div class="audit-hours">
                <div class="hour-item">
                  <span>Starter:</span>
                  <span>2 hours</span>
                </div>
                <div class="hour-item">
                  <span>Growth:</span>
                  <span>4 hours</span>
                </div>
                <div class="hour-item">
                  <span>Eclipse:</span>
                  <span>8 hours</span>
                </div>
                <div class="hour-item">
                  <span>Orion:</span>
                  <span>Up to 20 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Plan Comparison Table -->
    <section class="comparison-section">
      <div class="container">
        <div class="section-header">
          <h2>Plan Comparison</h2>
          <p>Detailed breakdown of features across all plans</p>
        </div>

        <div class="comparison-table">
          <table>
            <thead>
              <tr>
                <th class="feature-column">Feature / Plan</th>
                <th v-for="plan in plans" :key="plan.id" :class="{ popular: plan.popular }">
                  {{ plan.name }}
                </th>
                <th class="enterprise-column">Orion Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="feature in comparisonFeatures" :key="feature.name">
                <td class="feature-column">
                  {{ feature.name }}
                  <span class="feature-tooltip" v-if="feature.tooltip">
                    <i class="fas fa-info-circle"></i>
                    <span class="tooltip-text">{{ feature.tooltip }}</span>
                  </span>
                </td>
                <td v-for="plan in plans" :key="plan.id" :class="{ popular: plan.popular }">
                  <template v-if="feature[plan.key] === true">
                    <svg class="icon success" viewBox="0 0 24 24" width="18" height="18">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </template>
                  <template v-else-if="feature[plan.key] === false">
                    <svg class="icon error" viewBox="0 0 24 24" width="18" height="18">
                      <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                  </template>
                  <template v-else>
                    {{ feature[plan.key] }}
                  </template>
                </td>
                <td class="enterprise-column">
                  <template v-if="feature.orion === true">
                    <svg class="icon success" viewBox="0 0 24 24" width="18" height="18">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </template>
                  <template v-else>
                    {{ feature.orion }}
                  </template>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header">
          <div class="section-header-content">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about our pricing and services</p>
          </div>
          <div class="faq-search">
            <i class="fas fa-search"></i>
            <input 
              type="text" 
              v-model="faqSearch" 
              placeholder="Search questions..."
              @input="filterFAQs"
            >
          </div>
        </div>

        <div class="faq-grid">
          <div class="faq-item" v-for="faq in filteredFAQs" :key="faq.id" :class="{ open: faq.open }">
            <div class="faq-question" @click="toggleFaq(faq.id)">
              <div class="faq-question-content">
                <div class="faq-number">Q{{ faq.id }}</div>
                <h3>{{ faq.question }}</h3>
              </div>
              <div class="faq-icon">
                <div class="icon-circle">
                  <i class="fas" :class="faq.open ? 'fa-minus' : 'fa-plus'"></i>
                </div>
              </div>
            </div>
            <div class="faq-answer">
              <div class="answer-content">
                <div class="answer-icon">
                  <i class="fas fa-lightbulb"></i>
                </div>
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
          
          <div v-if="filteredFAQs.length === 0" class="no-results">
            <i class="fas fa-search"></i>
            <p>No questions found matching "{{ faqSearch }}"</p>
            <button @click="clearSearch" class="clear-search-btn">
              Clear search
            </button>
          </div>
        </div>

        <div class="faq-cta">
          <p>Still have questions?</p>
          <button class="faq-contact-btn" @click="openConsultationModal('FAQ Question')">
            <i class="fas fa-envelope"></i>
            Contact Us
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="pricing-cta">
      <div class="container">
        <div class="cta-card">
          <div class="cta-content">
            <h2>Ready to Accelerate Your Growth?</h2>
            <p>Book a free consultation to discuss your needs and discover how we can help you achieve your digital goals.</p>
            <div class="cta-buttons">
              <button class="btn btn-primary" @click="openConsultationModal('Free Consultation')">
                <i class="fas fa-calendar-alt"></i>
                Book Free Consultation
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
          <h3>{{ modalTitle }}</h3>
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
                <option value="Consultation">Free Consultation</option>
                <option value="Starter">Starter Plan</option>
                <option value="Growth">Growth Plan</option>
                <option value="Eclipse">Eclipse Plan</option>
                <option value="Orion Enterprise">Orion Enterprise</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="message">
                Message *
                <span class="error" v-if="errors.message">{{ errors.message }}</span>
              </label>
              <textarea
                id="message"
                v-model="form.message"
                :class="{ error: errors.message }"
                placeholder="Tell us about your needs or questions..."
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
  name: 'PricingView',
  data() {
    return {
      isYearly: false,
      showModal: false,
      modalTitle: 'Request Consultation',
      faqSearch: '',
      form: {
        name: '',
        email: '',
        company: '',
        service: 'Consultation',
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
      plans: [
        {
          id: 1,
          name: 'Starter',
          description: 'Perfect for small businesses and startups',
          setupMin: 350,
          setupMax: 500,
          monthlyMin: 30,
          monthlyMax: 50,
          yearlyMin: 306, 
          yearlyMax: 510,
          popular: false,
          key: 'starter',
          features: [
            'Landing / presentation website (up to 8 static pages)',
            'Basic admin panel to view data via API',
            'Hosting + SSL included',
            'Basic SEO (meta tags, Google Search Console)',
            'SLA agreement included'
          ],
          includedChanges: '1',
          includedUpgrades: 'Pay-as-you-go',
          auditHours: 2,
          supportTime: '48–72h Email',
          consultingHours: 'None'
        },
        {
          id: 2,
          name: 'Growth',
          description: 'Ideal for growing businesses',
          setupMin: 800,
          setupMax: 1200,
          monthlyMin: 80,
          monthlyMax: 120,
          yearlyMin: 816, 
          yearlyMax: 1224,
          popular: true,
          key: 'growth',
          features: [
            'Web app with backend and database',
            'E-commerce functionality or data management',
            'Advanced SEO (keywords, Google Analytics, speed optimization)',
            'Premium hosting + daily backup',
            'Priority support (24h response)',
            'A/B testing suite',
            'Conversion optimization tools'
          ],
          includedChanges: '5',
          includedUpgrades: 'Pay-as-you-go',
          auditHours: 4,
          supportTime: '24h Priority',
          consultingHours: '1 hour'
        },
        {
          id: 3,
          name: 'Eclipse',
          description: 'For established businesses',
          setupMin: 2000,
          setupMax: 3000,
          monthlyMin: 150,
          monthlyMax: 250,
          yearlyMin: 1530,
          yearlyMax: 2550,
          popular: false,
          key: 'eclipse',
          features: [
            'Web + Electron desktop apps',
            'API and third-party integrations',
            'Full SEO + advanced analytics',
            'Premium hosting + 24/7 support',
            'Monthly performance reports',
            'Custom integrations available'
          ],
          includedChanges: 'Unlimited (10–15h)',
          includedUpgrades: 'Pay-as-you-go',
          auditHours: 8,
          supportTime: '24/7',
          consultingHours: 'Bi-weekly'
        }
      ],
      comparisonFeatures: [
        {
          name: 'Static Pages',
          starter: 'Up to 8',
          growth: 'Up to 15',
          eclipse: 'Up to 15+',
          orion: 'Custom',
          tooltip: 'Number of static web pages included'
        },
        {
          name: 'Web App / Backend',
          starter: 'Basic API view',
          growth: true,
          eclipse: true,
          orion: true,
          tooltip: 'Web application with backend functionality'
        },
        {
          name: 'Electron App',
          starter: false,
          growth: false,
          eclipse: true,
          orion: true,
          tooltip: 'Desktop application support'
        },
        {
          name: 'Hosting + SSL',
          starter: true,
          growth: true,
          eclipse: true,
          orion: true,
          tooltip: 'Web hosting with SSL certificate'
        },
        {
          name: 'Changes Included',
          starter: '1/month',
          growth: '5/month',
          eclipse: 'Unlimited 10–15h',
          orion: 'Unlimited',
          tooltip: 'Monthly minor changes included in plan'
        },
        {
          name: 'Monthly Audit Hours',
          starter: '2',
          growth: '4',
          eclipse: '8',
          orion: 'Up to 20',
          tooltip: 'Hours of monthly performance audit'
        },
        {
          name: 'SEO',
          starter: 'Basic',
          growth: 'Advanced',
          eclipse: 'Full + Analytics',
          orion: 'Full + Optimization',
          tooltip: 'Search Engine Optimization level'
        },
        {
          name: 'Growth Consulting',
          starter: false,
          growth: '1h/month',
          eclipse: 'Bi-weekly',
          orion: 'Monthly',
          tooltip: 'Strategy consulting sessions'
        },
        {
          name: 'Support Response Time',
          starter: '48–72h Email',
          growth: '24h Priority',
          eclipse: '24/7',
          orion: '24/7',
          tooltip: 'Average response time for support'
        },
        {
          name: 'API / Third-party Integrations',
          starter: 'Basic',
          growth: true,
          eclipse: true,
          orion: 'Full Custom',
          tooltip: 'API access and integration capabilities'
        },
        {
          name: 'Price (setup + monthly)',
          starter: '$350–500 + $30–50',
          growth: '$800–1,200 + $80–120',
          eclipse: '$2,000–3,000 + $150–250',
          orion: 'Custom',
          tooltip: 'One-time setup fee + monthly subscription'
        }
      ],
      faqs: [
        {
          id: 1,
          question: 'What is included in a "change"?',
          answer: 'A change refers to minor adjustments to your website, web app, or admin panel. Examples include updating text or images, adjusting colors, fonts, or layout, minor API tweaks, and fixing small UI bugs. Price: USD 25 per change.',
          open: false
        },
        {
          id: 2,
          question: 'What is an "upgrade"?',
          answer: 'An upgrade refers to major functional changes or new features. Examples include adding backend modules, developing new web app features, custom integrations or automation, and refactoring code for new capabilities. Price: Starting at USD 100 per upgrade (includes 2 changes). Larger or complex upgrades are quoted individually.',
          open: false
        },
        {
          id: 3,
          question: 'How many changes or upgrades are included per plan?',
          answer: 'Starter: 1 change/month, pay-as-you-go upgrades, 2 audit hours/month. Growth: Up to 5 changes/month, pay-as-you-go upgrades, 4 audit hours/month. Eclipse: Unlimited changes (10–15h/month), pay-as-you-go upgrades, 8 audit hours/month. Orion: Unlimited changes, pay-as-you-go / custom agreement, up to 20 audit hours/month.',
          open: false
        },
        {
          id: 4,
          question: 'What is an "audit"?',
          answer: 'A monthly review including: Performance & speed checks, UX/UI improvements, SEO analysis & recommendations, security and code review, and growth suggestions.',
          open: false
        },
        {
          id: 5,
          question: 'Can I purchase extra changes or upgrades?',
          answer: 'Yes. Changes: USD 25 each. Upgrades: Starting at USD 100 each (complex upgrades quoted individually).',
          open: false
        },
        {
          id: 6,
          question: 'How do I request changes or upgrades?',
          answer: '1. Submit request via admin panel or email. 2. We confirm if it\'s a change or an upgrade. 3. Work is scheduled within the plan\'s timeframe.',
          open: false
        },
        {
          id: 7,
          question: 'Can I switch plans later?',
          answer: 'Yes! Upgrade your plan anytime to get more changes, audit hours, or advanced features like web apps, Electron apps, or custom integrations.',
          open: false
        },
        {
          id: 8,
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. All payments are processed securely through Stripe.',
          open: false
        },
        {
          id: 9,
          question: 'Do you offer volume discounts?',
          answer: 'Yes, we offer volume discounts for annual plans and enterprise customers. Contact our sales team to discuss custom pricing based on your specific needs and volume.',
          open: false
        },
        {
          id: 10,
          question: 'How is support handled?',
          answer: 'Support is provided via email, chat, and scheduled calls depending on your plan. Response times vary by plan: Starter (48–72h), Growth (24h), Eclipse (24/7), Orion (24/7).',
          open: false
        },
        {
          id: 11,
          question: 'What happens if I exceed my limits?',
          answer: 'We\'ll notify you when you approach your limits. For occasional spikes, we won\'t charge extra. For consistent overages, we\'ll recommend upgrading to the next plan that better fits your needs.',
          open: false
        },
        {
          id: 12,
          question: 'What does the setup fee include?',
          answer: 'The one-time setup fee covers initial configuration, onboarding, system integration, and deployment. This ensures your solution is properly configured and ready for optimal performance from day one.',
          open: false
        }
      ],
      filteredFAQs: []
    }
  },
  mounted() {
    emailjs.init('sWX5sOj0hrqMs3KvX');
    this.filteredFAQs = [...this.faqs];
  },
  methods: {
    getSubscriptionPrice(plan) {
      if (this.isYearly) {
        // Use manually set annual prices
        return `${plan.yearlyMin} – ${plan.yearlyMax}`;
      }
      return `${plan.monthlyMin} – ${plan.monthlyMax}`;
    },
    
    getFirstYearTotal(plan) {
      const avgSetup = (plan.setupMin + plan.setupMax) / 2;
      
      if (this.isYearly) {
        const avgYearly = (plan.yearlyMin + plan.yearlyMax) / 2;
        return Math.round(avgSetup + avgYearly);
      }
      const avgMonthly = (plan.monthlyMin + plan.monthlyMax) / 2;
      return Math.round(avgSetup + (avgMonthly * 12));
    },
    
    toggleFaq(id) {
      this.faqs = this.faqs.map(faq => ({
        ...faq,
        open: faq.id === id ? !faq.open : faq.open
      }));
      // Update filtered FAQs to reflect the open state
      this.filterFAQs();
    },
    
    filterFAQs() {
      if (!this.faqSearch.trim()) {
        this.filteredFAQs = [...this.faqs];
        return;
      }
      
      const searchTerm = this.faqSearch.toLowerCase().trim();
      this.filteredFAQs = this.faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm) ||
        faq.answer.toLowerCase().includes(searchTerm)
      );
    },
    
    clearSearch() {
      this.faqSearch = '';
      this.filteredFAQs = [...this.faqs];
    },
    
    openConsultationModal(planName) {
      this.modalTitle = planName === 'Free Consultation' ? 'Schedule Free Consultation' : `Request Information: ${planName}`;
      this.form.service = planName === 'Free Consultation' ? 'Consultation' : planName;
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
          service: this.form.service,
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
            'Request sent successfully! We will get back to you within 24 hours.',
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
        service: 'Consultation',
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
.pricing-page {
  background: var(--primary-dark);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.pricing-page::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(185, 28, 28, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(185, 28, 28, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: 0;
}

/* Professional Hero Section */
.pricing-hero {
  padding: 80px 0 40px;
  background: linear-gradient(135deg, 
    var(--primary-dark) 0%, 
    rgba(26, 26, 26, 0.98) 100%);
  position: relative;
  overflow: hidden;
}

.pricing-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 70% 30%, rgba(185, 28, 28, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 30% 70%, rgba(185, 28, 28, 0.1) 0%, transparent 50%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-text {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  line-height: 1.1;
  background: linear-gradient(90deg, var(--accent-red), var(--accent-red-light));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-size: 200% auto;
  animation: gradientShift 3s ease-in-out infinite;
}

.hero-subtitle {
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.hero-features {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.feature i {
  color: var(--accent-red);
  font-size: 0.9rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.visual-circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, 
    rgba(185, 28, 28, 0.2), 
    rgba(185, 28, 28, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.visual-circle::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 50%;
  background: linear-gradient(135deg, 
    var(--accent-red), 
    var(--accent-red-light));
  z-index: -1;
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.circle-inner {
  width: 140px;
  height: 140px;
  background: var(--secondary-dark);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(185, 28, 28, 0.3);
}

.circle-inner i {
  font-size: 2.5rem;
  color: var(--accent-red);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Pricing Toggle */
.pricing-toggle-section {
  padding: 1rem 0;
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.toggle-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.toggle-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
}

.toggle-label span {
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.toggle-label span.active {
  color: var(--text-primary);
}

.discount-badge {
  background: var(--accent-red);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 4px;
  bottom: 4px;
  background: var(--accent-red);
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background: rgba(185, 28, 28, 0.2);
}

input:checked + .slider:before {
  transform: translateX(24px);
}

/* Vertical Pricing Cards */
.pricing-cards-section {
  padding: 40px 0 60px;
}

.vertical-pricing-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto 3rem;
}

.pricing-card {
  background: var(--card-bg);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  transition: all 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-3px);
  border-color: var(--accent-red);
  box-shadow: 0 8px 20px rgba(185, 28, 28, 0.1);
}

.pricing-card.popular {
  border-color: var(--accent-red);
  background: linear-gradient(145deg, 
    rgba(185, 28, 28, 0.05), 
    rgba(185, 28, 28, 0.02));
  transform: scale(1.01);
}

.pricing-card.popular:hover {
  transform: translateY(-3px) scale(1.01);
}

.plan-badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--accent-red);
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  white-space: nowrap;
  z-index: 2;
}

.card-content {
  display: flex;
  min-height: 280px;
}

/* Left Sidebar */
.card-sidebar {
  width: 40%;
  padding: 1.5rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.plan-header {
  margin-bottom: 0.5rem;
}

.plan-name {
  font-size: 1.3rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
  color: var(--text-primary);
}

.plan-description {
  color: var(--text-secondary);
  font-size: 0.8rem;
  line-height: 1.4;
  margin: 0;
}

/* Yearly Total */
.yearly-total {
  background: linear-gradient(135deg, 
    rgba(185, 28, 28, 0.1), 
    rgba(185, 28, 28, 0.05));
  border: 1px solid rgba(185, 28, 28, 0.2);
  border-radius: 6px;
  padding: 0.75rem;
  text-align: center;
  margin: 0.5rem 0;
}

.total-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
}

.total-amount {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--accent-red);
  line-height: 1;
  margin-bottom: 0.25rem;
  text-shadow: 0 1px 2px rgba(185, 28, 28, 0.3);
}

.total-note {
  font-size: 0.65rem;
  color: var(--text-secondary);
  font-weight: 500;
}

/* Price Breakdown */
.price-breakdown {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

.breakdown-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.breakdown-item:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}

.breakdown-label {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
}

.breakdown-label i {
  color: var(--accent-red);
  font-size: 0.8rem;
}

.breakdown-label span {
  color: var(--text-primary);
  font-weight: 500;
}

.breakdown-amount {
  font-weight: 700;
  color: var(--text-primary);
  font-size: 0.9rem;
}

.breakdown-amount .range {
  color: var(--accent-red);
  font-size: 0.85rem;
}

.breakdown-amount .price {
  color: var(--accent-red);
}

.breakdown-amount .period {
  font-size: 0.7rem;
  color: var(--text-secondary);
  margin-left: 0.2rem;
  font-weight: 400;
}

/* Button */
.plan-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: transparent;
  color: var(--accent-red);
  border: 2px solid var(--accent-red);
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
  width: 100%;
}

.plan-button:hover {
  background: var(--accent-red);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(185, 28, 28, 0.2);
}

.plan-button.popular {
  background: var(--accent-red);
  color: white;
}

.plan-button.popular:hover {
  background: var(--accent-red-light);
}

/* Right Sidebar: Features */
.card-features {
  width: 60%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.features-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.features-header h4 {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.features-count {
  font-size: 0.65rem;
  color: var(--accent-red);
  font-weight: 600;
  background: rgba(185, 28, 28, 0.1);
  padding: 0.2rem 0.4rem;
  border-radius: 8px;
}

/* Plan Specs */
.plan-specs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.spec-item i {
  color: var(--accent-red);
  font-size: 0.8rem;
  width: 16px;
  text-align: center;
}

.spec-content {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.spec-label {
  font-size: 0.7rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.spec-value {
  font-size: 0.75rem;
  color: var(--text-primary);
  font-weight: 600;
}

/* Features List */
.features-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  flex: 1;
}


.features-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.75rem;
  line-height: 1.3;
  padding: 0.3rem 0;
}

.features-list li i {
  color: var(--accent-red);
  font-size: 0.7rem;
  margin-top: 0.15rem;
  flex-shrink: 0;
}

/* Enterprise Card */
.enterprise-card {
  background: linear-gradient(135deg, 
    rgba(185, 28, 28, 0.1), 
    rgba(185, 28, 28, 0.05));
  border: 1px solid rgba(185, 28, 28, 0.2);
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  max-width: 1000px;
  margin: 0 auto;
}

.enterprise-card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(185, 28, 28, 0.1) 0%, transparent 70%);
  filter: blur(30px);
  z-index: 0;
}

.enterprise-content {
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.enterprise-icon {
  width: 60px;
  height: 60px;
  background: var(--accent-red);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.enterprise-icon i {
  font-size: 1.8rem;
  color: white;
}

.enterprise-text {
  flex: 1;
}

.enterprise-text h3 {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.enterprise-text p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.5;
  font-size: 0.9rem;
}

.enterprise-features {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.enterprise-features .feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.4rem;
  padding: 0.6rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-width: 100px;
}

.enterprise-features .feature i {
  font-size: 1rem;
  color: var(--accent-red);
}

.enterprise-features .feature span {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.7rem;
}

.enterprise-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--accent-red);
  color: white;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
}

.enterprise-button:hover {
  background: var(--accent-red-light);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(185, 28, 28, 0.2);
}

/* Additional Services Section */
.additional-services-section {
  padding: 60px 0;
  background: var(--secondary-dark);
}

.additional-services-section .section-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.additional-services-section .section-header h2 {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.additional-services-section .section-header p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.service-card {
  background: var(--card-bg);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-3px);
  border-color: var(--accent-red);
  box-shadow: 0 8px 20px rgba(185, 28, 28, 0.1);
}

.service-icon {
  width: 50px;
  height: 50px;
  background: rgba(185, 28, 28, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.service-icon i {
  font-size: 1.5rem;
  color: var(--accent-red);
}

.service-content {
  flex: 1;
}

.service-content h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.service-price {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--accent-red);
  margin-bottom: 0.75rem;
}

.service-description {
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.audit-hours {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 0.5rem;
}

.hour-item {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.hour-item span:first-child {
  font-weight: 500;
  color: var(--text-primary);
}

.hour-item span:last-child {
  font-weight: 600;
  color: var(--accent-red);
}

/* Comparison Table */
.comparison-section {
  padding: 60px 0;
  background: var(--primary-dark);
}

.comparison-section .section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.comparison-section .section-header h2 {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.comparison-section .section-header p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.comparison-table {
  background: var(--card-bg);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  overflow-x: auto;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  min-width: 700px;
}

.comparison-table th {
  padding: 1rem;
  text-align: center;
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.comparison-table th.popular {
  background: rgba(185, 28, 28, 0.1);
  border-bottom: 2px solid var(--accent-red);
}

.comparison-table th.enterprise-column {
  background: rgba(185, 28, 28, 0.15);
  border-bottom: 2px solid var(--accent-red);
}

.feature-column {
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.03);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  min-width: 150px;
  position: relative;
  font-size: 0.85rem;
}

.feature-tooltip {
  margin-left: 0.3rem;
  color: var(--text-secondary);
  position: relative;
  cursor: help;
}

.tooltip-text {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: normal;
  width: 180px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 10;
  pointer-events: none;
}

.feature-tooltip:hover .tooltip-text {
  opacity: 1;
  visibility: visible;
}

.comparison-table td {
  padding: 1rem;
  text-align: center;
  color: var(--text-secondary);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.85rem;
}

.comparison-table tr:last-child td {
  border-bottom: none;
}

.comparison-table td.popular {
  background: rgba(185, 28, 28, 0.05);
}

.comparison-table td.enterprise-column {
  background: rgba(185, 28, 28, 0.08);
  font-weight: 500;
}

.success {
  color: #22c55e;
  font-size: 1.1rem;
}

.error {
  color: #ef4444;
  font-size: 1.1rem;
}

/* Enhanced FAQ Section */
.faq-section {
  padding: 80px 0;
  background: var(--secondary-dark);
}

.faq-section .section-header {
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.section-header-content {
  max-width: 600px;
}

.faq-section .section-header h2 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  position: relative;
  display: inline-block;
}

.faq-section .section-header h2::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: var(--accent-red);
  border-radius: 2px;
}

.faq-section .section-header p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
}

.faq-search {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.faq-search i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.faq-search input {
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 2.5rem;
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.faq-search input:focus {
  outline: none;
  border-color: var(--accent-red);
  box-shadow: 0 0 0 3px rgba(185, 28, 28, 0.1);
}

.faq-search input::placeholder {
  color: var(--text-secondary);
}

.faq-grid {
  max-width: 800px;
  margin: 0 auto 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.faq-item {
  background: var(--card-bg);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: var(--accent-red);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(185, 28, 28, 0.1);
}

.faq-item.open {
  border-color: var(--accent-red);
  background: linear-gradient(145deg, 
    rgba(185, 28, 28, 0.03), 
    rgba(185, 28, 28, 0.01));
}

.faq-question {
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: transparent;
  transition: background-color 0.3s ease;
  gap: 1rem;
}

.faq-question:hover {
  background: rgba(255, 255, 255, 0.05);
}

.faq-question-content {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex: 1;
}

.faq-number {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--accent-red);
  background: rgba(185, 28, 28, 0.1);
  width: 24px;
  height: 24px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.faq-question h3 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  line-height: 1.4;
  flex: 1;
}

.faq-icon {
  flex-shrink: 0;
}

.icon-circle {
  width: 32px;
  height: 32px;
  background: rgba(185, 28, 28, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.faq-item.open .icon-circle {
  background: var(--accent-red);
}

.faq-question i {
  color: var(--accent-red);
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.faq-item.open .faq-question i {
  color: white;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-item.open .faq-answer {
  max-height: 1000px;
}

.answer-content {
  padding: 0 1.25rem 1.25rem;
  display: flex;
  gap: 1rem;
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.answer-icon {
  color: var(--accent-red);
  font-size: 1rem;
  margin-top: 0.1rem;
  flex-shrink: 0;
}

.answer-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
  font-size: 0.9rem;
  flex: 1;
}

.no-results {
  text-align: center;
  padding: 3rem 1rem;
  background: var(--card-bg);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.no-results i {
  font-size: 2.5rem;
  color: var(--accent-red);
  margin-bottom: 1rem;
  opacity: 0.7;
}

.no-results p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.clear-search-btn {
  background: transparent;
  color: var(--accent-red);
  border: 1px solid var(--accent-red);
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-search-btn:hover {
  background: rgba(185, 28, 28, 0.1);
}

.faq-cta {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, 
    rgba(185, 28, 28, 0.1), 
    rgba(185, 28, 28, 0.05));
  border-radius: 10px;
  border: 1px solid rgba(185, 28, 28, 0.2);
  max-width: 800px;
  margin: 0 auto;
}

.faq-cta p {
  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.faq-contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--accent-red);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-contact-btn:hover {
  background: var(--accent-red-light);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(185, 28, 28, 0.2);
}

/* CTA Section */
.pricing-cta {
  padding: 60px 0;
  background: linear-gradient(135deg, 
    var(--accent-red-dark), 
    var(--accent-red));
  position: relative;
  overflow: hidden;
}

.pricing-cta::before {
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
  border-radius: 12px;
  padding: 2.5rem;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.cta-content {
  text-align: center;
}

.cta-content h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: white;
}

.cta-content p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  line-height: 1.5;
  font-size: 0.9rem;
}

.cta-buttons {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
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
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: transparent;
  color: white;
  border-color: white;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

/* Modal (unchanged from original) */
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
  border-radius: 16px;
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
  padding: 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.25rem;
  transition: color 0.3s ease;
}

.modal-close:hover {
  color: var(--accent-red);
}

.modal-body {
  padding: 1.25rem;
}

.consultation-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-group label {
  color: var(--text-primary);
  font-size: 0.85rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.error {
  color: #ef4444;
  font-size: 0.75rem;
  font-weight: 400;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: var(--text-primary);
  font-family: inherit;
  font-size: 0.9rem;
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

.form-group input.error,
.form-group textarea.error {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.form-group select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23b91c1c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 14px;
  padding-right: 2.25rem;
  cursor: pointer;
}

.form-notification {
  margin: 0.5rem 0;
}

.notification {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 6px;
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
  font-size: 1rem;
  flex-shrink: 0;
}

.notification span {
  font-size: 0.85rem;
  font-weight: 500;
  flex: 1;
}

.close-notification {
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0.2rem;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.close-notification:hover {
  opacity: 1;
}

.submit-button {
  padding: 0.875rem 1.5rem;
  background: var(--accent-red);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.submit-button:hover:not(:disabled) {
  background: var(--accent-red-light);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(185, 28, 28, 0.2);
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

@keyframes gradientShift {
  0%, 100% { background-position: 0% center; }
  50% { background-position: 100% center; }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 0.9rem;
  }
  
  .visual-circle {
    width: 150px;
    height: 150px;
  }
  
  .circle-inner {
    width: 110px;
    height: 110px;
  }
  
  .circle-inner i {
    font-size: 2rem;
  }
  
  .card-content {
    flex-direction: column;
    min-height: auto;
  }
  
  .card-sidebar,
  .card-features {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .card-features {
    border-bottom: none;
  }

  .features-list {
    grid-template-columns: 1fr;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
  
  .enterprise-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .enterprise-features {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .enterprise-card {
    padding: 1.5rem;
  }
  
  .enterprise-text h3 {
    font-size: 1.3rem;
  }
  
  .faq-section .section-header h2 {
    font-size: 1.6rem;
  }
  
  .faq-question-content {
    gap: 0.75rem;
  }
  
  .faq-number {
    width: 22px;
    height: 22px;
    font-size: 0.75rem;
  }
  
  .faq-question h3 {
    font-size: 0.9rem;
  }
  
  .answer-content {
    gap: 0.75rem;
  }
  
  .answer-icon {
    font-size: 0.9rem;
  }
  
  .answer-content p {
    font-size: 0.85rem;
  }
  
  .cta-card {
    padding: 1.5rem;
  }
  
  .cta-content h2 {
    font-size: 1.5rem;
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

  .plan-specs {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.6rem;
  }
  
  .plan-name {
    font-size: 1.1rem;
  }
  
  .card-sidebar,
  .card-features {
    padding: 1rem;
  }
  
  .yearly-total {
    padding: 0.625rem;
  }
  
  .total-amount {
    font-size: 1.3rem;
  }
  
  .breakdown-item {
    padding: 0.4rem;
  }
  
  .plan-button {
    padding: 0.625rem 1rem;
    font-size: 0.8rem;
  }
  
  .enterprise-button {
    padding: 0.625rem 1rem;
    font-size: 0.8rem;
  }
  
  .service-card {
    padding: 1.25rem;
  }
  
  .faq-search {
    max-width: 100%;
  }
  
  .faq-question {
    padding: 1rem;
  }
  
  .faq-question-content {
    gap: 0.5rem;
  }
  
  .faq-number {
    width: 20px;
    height: 20px;
    font-size: 0.7rem;
  }
  
  .faq-question h3 {
    font-size: 0.85rem;
  }
  
  .icon-circle {
    width: 28px;
    height: 28px;
  }
  
  .answer-content {
    padding: 0 1rem 1rem;
  }
  
  .modal-header {
    padding: 1rem;
  }
  
  .modal-body {
    padding: 1rem;
  }

  .features-list {
    grid-template-columns: 1fr;
  }
  
  .features-list li {
    font-size: 0.7rem;
  }
}

.icon {
  display: inline-block;
  vertical-align: middle;
}

.icon.success {
  color: #22c55e;
}

.icon.error {
  color: #ef4444;
}
</style>