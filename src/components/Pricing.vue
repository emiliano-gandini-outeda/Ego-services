<template>
  <section id="pricing" class="section pricing">
    <div class="container">
      <h2 class="section-title">Pricing Plans</h2>
      <p class="section-subtitle">Simple, transparent pricing for businesses of all sizes.</p>
      
      <div class="pricing-grid">
        <div class="pricing-card" v-for="plan in plans" :key="plan.id" >
          <div class="plan-badge" v-if="plan.popular">Most Popular</div>
          <div class="plan-header">
            <h3 class="plan-name">{{ plan.name }}</h3>
            <div class="plan-price">
              <span class="price">{{ plan.setupFee }}</span>
              <span class="setup-text">one-time setup</span>
            </div>
            <div class="monthly-price">
              <span class="price">{{ plan.monthlyPrice }}</span>
              <span class="period">{{ plan.period }}</span>
            </div>
            <p class="plan-description">{{ plan.description }}</p>
          </div>
          
          <div class="plan-features">
            <ul class="features-list">
              <li v-for="feature in plan.features" :key="feature">
                <i class="fas fa-check"></i> {{ feature }}
              </li>
            </ul>
          </div>
          
            <router-link
                :to="{ path: '/pricing', hash: `#${plan.key}` }"
                class="plan-button"
                :class="{ popular: plan.popular }"
            >
                {{ plan.buttonText }}
            </router-link>
        </div>
      </div>
      
      <div class="pricing-footer">
        <div class="orion-cta">
          <p>Need more? Check the Orion Enterprise plan</p>
            <router-link
            :to="{ path: '/pricing', hash: '#orion' }"
            class="orion-button"
            >
            <i class="fas fa-crown"></i>
            View Orion Enterprise
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
        <p class="footer-note">All plans include monthly audits and pay-as-you-go changes & upgrades</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Pricing',
  data() {
    return {
      plans: [
        {
          id: 1,
          name: 'Starter',
          key: "starter",
          setupFee: '$350–500',
          monthlyPrice: '$30–50',
          period: '/month',
          description: 'Perfect for small businesses and startups',
          features: [
            'Landing / presentation website',
            'Up to 8 static pages',
            'Basic admin panel & API view',
            'Hosting + SSL included',
            'Monthly audit: 2 hours',
            'Basic SEO setup',
            'Email support (48–72h)',
            '1 change per month included',
            'SLA agreement included'
          ],
          buttonText: 'Get Started',
          popular: false
        },
        {
          id: 2,
          name: 'Growth',
          key: "growth",
          setupFee: '$800–1,200',
          monthlyPrice: '$80–120',
          period: '/month',
          description: 'Ideal for growing businesses',
          features: [
            'Web app with backend & database',
            'E-commerce or data management',
            'Up to 15 static pages',
            'Monthly audit: 4 hours',
            'Advanced SEO & Analytics',
            '1h/month growth consulting',
            'Premium hosting + backup',
            'Priority support (24h)',
            'Up to 5 changes/month'
          ],
          buttonText: 'Choose Growth',
          popular: true
        },
        {
          id: 3,
          name: 'Eclipse',
          key: "eclipse",
          setupFee: '$2,000–3,000',
          monthlyPrice: '$150–250',
          period: '/month',
          description: 'For established businesses',
          features: [
            'Web + Electron desktop apps',
            'API & third-party integrations',
            'Unlimited changes (10–15h)',
            'Monthly audit: 8 hours',
            'Full SEO + advanced analytics',
            'Bi-weekly strategy consulting',
            'Premium hosting + 24/7 support',
            'Monthly performance reports',
          ],
          buttonText: 'Go Eclipse',
          popular: false
        }
      ]
    }
  }
}
</script>

<style scoped>
.pricing {
  background: var(--primary-dark);
}

.section-subtitle {
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.pricing-card {
  background: var(--card-bg);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
}

.pricing-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-red);
  box-shadow: 0 10px 30px rgba(185, 28, 28, 0.1);
}

.plan-badge {
  position: absolute;
  top: 0;
  right: 0;
  background: var(--accent-red);
  color: white;
  padding: 0.5rem 1.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;
}

.plan-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.plan-name {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  font-weight: 800;
}

.plan-price {
  margin-bottom: 0.5rem;
}

.plan-price .price {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--accent-red);
}

.setup-text {
  display: block;
  color: var(--text-secondary);
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 0.25rem;
}

.monthly-price {
  margin-bottom: 1.5rem;
}

.monthly-price .price {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1;
}

.period {
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 500;
  margin-left: 0.25rem;
}

.plan-description {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-top: 1rem;
}

.plan-features {
  flex: 1;
  margin-bottom: 2rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-list li {
  margin-bottom: 0.75rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  line-height: 1.4;
}

.features-list li i {
  color: var(--accent-red);
  font-size: 0.9rem;
  margin-top: 0.2rem;
  flex-shrink: 0;
}

.plan-button {
  display: block;
  text-align: center;
  padding: 1rem;
  background: transparent;
  color: var(--accent-red);
  border: 2px solid var(--accent-red);
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.plan-button:hover {
  background: var(--accent-red);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(185, 28, 28, 0.2);
}

.plan-button.popular {
  background: var(--accent-red);
  color: white;
}

.plan-button.popular:hover {
  background: var(--accent-red-light);
}

.pricing-footer {
  text-align: center;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.orion-cta {
  background: linear-gradient(135deg, 
    rgba(185, 28, 28, 0.1), 
    rgba(185, 28, 28, 0.05));
  border: 1px solid rgba(185, 28, 28, 0.2);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.orion-cta p {
  color: var(--text-primary);
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

.orion-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 2rem;
  background: var(--accent-red);
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.orion-button:hover {
  background: var(--accent-red-light);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(185, 28, 28, 0.2);
}

.orion-button i:first-child {
  font-size: 1.1rem;
}

.orion-button i:last-child {
  font-size: 0.9rem;
}

.footer-note {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-top: 1rem;
  font-style: italic;
}

@media (max-width: 768px) {
  .pricing-grid {
    grid-template-columns: 1fr;
  }
  
  .orion-cta {
    padding: 1.5rem;
    text-align: center;
  }
  
  .orion-cta p {
    font-size: 1.1rem;
  }
  
  .orion-button {
    padding: 0.75rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .plan-name {
    font-size: 1.3rem;
  }
  
  .monthly-price .price {
    font-size: 2rem;
  }
  
  .plan-price .price {
    font-size: 1.5rem;
  }
  
  .features-list li {
    font-size: 0.85rem;
  }
  
  .orion-cta {
    padding: 1.25rem;
  }
  
  .orion-cta p {
    font-size: 1rem;
  }
  
  .orion-button {
    padding: 0.625rem 1.25rem;
    font-size: 0.9rem;
  }
}
</style>