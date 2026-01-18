<template>
  <section id="projects" class="section projects">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
      <div class="projects-grid">
        <div class="project-card" v-for="project in projects" :key="project.id">
          <div class="project-image">
            <div class="image-placeholder" :style="{ backgroundColor: project.color }">
              <i :class="project.icon"></i>
            </div>
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tags">
              <span class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>
            <a :href="project.link" class="project-link">
              View Project <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="projects-footer">
        <router-link to="/projects" class="btn-view-all">
          <i class="fas fa-folder-open"></i> View All Projects
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Site Twilight Community",
          description: "A comprehensive digital platform for the Site Twilight roleplay community, with an extensive array of moderation tools.",
          tags: ["Vue.js", "Django", "Custom Servers"],
          icon: "fas fa-people-group",
          color: "#1e40af",
          link: "/projects/twilight"
        },
        {
          id: 2,
          title: "Insight Grid Analytics",
          description: "Advanced business analytics platform with real-time data treatment and predictive analytics.",
          tags: ["TailwindCSS", "Python", "FastAPI"],
          icon: "fas fa-chart-bar",
          color: "#059669",
          link: "/projects/insightgrid"
        },
        {
          id: 3,
          title: "LibreCourse",
          description: "An open-source project designed to empower educators and communities by providing a modern platform to share knowledge. ",
          tags: ["TailwindCSS", "Django", "FastAPI"],
          icon: "fas fa-graduation-cap",
          color: "#7c3aed",
          link: "/projects/librecourse"
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects {
  background: var(--primary-dark);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.project-card {
  background: var(--card-bg);
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(185, 28, 28, 0.2);
  border-color: var(--accent-red);
}

.project-image {
  height: 200px;
  background: linear-gradient(135deg, var(--secondary-dark), var(--primary-dark));
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder i {
  font-size: 2rem;
  color: white;
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.project-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-size: 0.9rem;
  line-height: 1.6;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background: rgba(185, 28, 28, 0.1);
  color: var(--accent-red);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 500;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent-red);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: gap 0.3s ease;
}

.project-link:hover {
  gap: 1rem;
}

.projects-footer {
  text-align: center;
  margin-top: 3rem;
}

.btn-view-all {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--accent-red);
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-view-all:hover {
  background: var(--accent-red);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(185, 28, 28, 0.2);
}
</style>