<template>
  <section id="about-company" class="section about-company">
    <div class="container">
      <h2 class="section-title">About EGOS</h2>
      <div class="about-content">
        <div class="about-text">
          <h3 class="about-subtitle">Transforming Vision into Digital Excellence</h3>
          <p class="about-description">
            Eclipse Growth Optimization Services is a premier digital solutions provider dedicated to accelerating business growth through innovative technology and data-driven strategies.
          </p>
          <p class="about-description">
            Founded on the principle that every business deserves access to cutting-edge optimization tools, we specialize in creating bespoke solutions that bridge the gap between ambition and achievement.
          </p>
          
          <div class="mission-card">
            <i class="fas fa-bullseye mission-icon"></i>
            <div class="mission-content">
              <h4>Our Mission</h4>
              <p>To empower businesses with intelligent optimization solutions that drive sustainable growth and competitive advantage.</p>
            </div>
          </div>
        </div>
        
        <div class="values-grid">
          <div class="value-card" v-for="value in values" :key="value.id">
            <div class="value-icon-wrapper">
              <i :class="value.icon"></i>
            </div>
            <h4>{{ value.title }}</h4>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutCompany',
  data() {
    return {
      values: [
        {
          id: 1,
          icon: 'fas fa-crosshairs',
          title: 'Precision Focus',
          description: 'Tailored solutions for your specific business goals and challenges.'
        },
        {
          id: 2,
          icon: 'fas fa-chart-line',
          title: 'Growth-Driven',
          description: 'Strategies designed to deliver measurable growth and maximum ROI.'
        },
        {
          id: 3,
          icon: 'fas fa-handshake',
          title: 'Partnership',
          description: 'We stand by our clients through every phase of growth.'
        },
        {
          id: 4,
          icon: 'fas fa-lightbulb',
          title: 'Innovation',
          description: 'Constantly evolving with the latest technologies and methodologies.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.about-company {
  background: var(--secondary-dark);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-subtitle {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;
  padding-bottom: 1rem;
}

.about-subtitle::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: var(--accent-red);
  border-radius: 2px;
}

.about-description {
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.mission-card {
  background: rgba(185, 28, 28, 0.1);
  border: 1px solid rgba(185, 28, 28, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.mission-icon {
  font-size: 2rem;
  color: var(--accent-red);
  flex-shrink: 0;
}

.mission-content h4 {
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.mission-content p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.value-card {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 12px;
  border-top: 4px solid var(--accent-red);
  transition: all 0.3s ease;
  text-align: center;
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(185, 28, 28, 0.15);
}

.value-icon-wrapper {
  width: 60px;
  height: 60px;
  background: rgba(185, 28, 28, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.value-icon-wrapper i {
  font-size: 1.5rem;
  color: var(--accent-red);
}

.value-card h4 {
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  font-size: 1.1rem;
}

.value-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Remove the visual container and orbs */
.visual-container,
.orb,
.network-lines {
  display: none;
}

@media (max-width: 992px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .values-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
</style>