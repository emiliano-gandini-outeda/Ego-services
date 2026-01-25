<template>
  <main class="portfolio-page">
    <!-- Modern Hero Section -->
    <section class="modern-hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <div class="hero-badge">
              <i class="fas fa-code"></i>
              <span>Backend Developer</span>
            </div>
            
            <h1 class="hero-title">
              <span class="title-gradient">Emiliano Gandini</span>
              <span class="title-line">Building Scalable Backend Solutions</span>
            </h1>
            
            <p class="hero-description">
              {{ age }}-year-old developer from Uruguay specializing in Python backend systems.
              Passionate about clean architecture, system design, and building efficient APIs.
            </p>
            
            <div class="hero-metrics">
              <div class="metric">
                <span class="metric-number">5+</span>
                <span class="metric-label">Years Coding</span>
              </div>
              <div class="metric">
                <span class="metric-number">10+</span>
                <span class="metric-label">Projects</span>
              </div>
              <div class="metric">
                <span class="metric-number">3</span>
                <span class="metric-label">Languages</span>
              </div>
            </div>
            
            <div class="hero-buttons">
              <a href="/emiliano-gandini-outeda.pdf" download class="btn btn-primary">
                <i class="fas fa-download"></i> Download CV
              </a>
              <a href="#workflow" class="btn btn-secondary">
                <i class="fas fa-cogs"></i> My Workflow
              </a>
            </div>
          </div>
          
          <div class="hero-visual">
            <div class="profile-container">
              <div class="profile-image-wrapper">
                <div class="profile-glow"></div>
              </div>
              <div class="profile-details">
                <div class="location">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>Montevideo, Uruguay</span>
                  <img src="https://flagcdn.com/w40/uy.png" alt="Uruguay" class="flag" />
                </div>
                <div class="availability">
                  <i class="fas fa-calendar-check"></i>
                  <span>Available for projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="hero-scroll">
          <span>Scroll to explore</span>
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>

    <!-- About Me Section -->
    <section class="about-section" id="about">
      <div class="container">
        <div class="about-content">
          <div class="about-image">
            <div class="image-container">
              <div class="image-glow"></div>
              <div class="about-image-placeholder">
                <i class="fas fa-user-secret"></i>
              </div>
            </div>
          </div>
          
          <div class="about-text">
            <div class="section-header">
              <h2 class="section-title">About Me</h2>
              <p class="section-subtitle">The person behind the code</p>
            </div>
            
            <div class="about-description">
              <p>I'm a passionate backend developer with a deep interest in creating robust, scalable systems that solve real-world problems. My journey into programming started at a young age, fueled by curiosity about how things work behind the scenes.</p>
              
              <p>What drives me is the challenge of taking complex requirements and translating them into elegant, efficient code. I believe in the importance of clean architecture, thorough testing, and writing documentation that actually helps people.</p>
              
              <div class="about-highlights">
                <div class="highlight-item">
                  <div class="highlight-icon">
                    <i class="fas fa-bullseye"></i>
                  </div>
                  <div class="highlight-content">
                    <h4>Problem Solver</h4>
                    <p>I thrive on breaking down complex problems into manageable solutions.</p>
                  </div>
                </div>
                
                <div class="highlight-item">
                  <div class="highlight-icon">
                    <i class="fas fa-book"></i>
                  </div>
                  <div class="highlight-content">
                    <h4>Continuous Learner</h4>
                    <p>Always exploring new technologies and improving my skills through projects.</p>
                  </div>
                </div>
                
                <div class="highlight-item">
                  <div class="highlight-icon">
                    <i class="fas fa-users"></i>
                  </div>
                  <div class="highlight-content">
                    <h4>Team Player</h4>
                    <p>Believe in collaborative development and sharing knowledge with others.</p>
                  </div>
                </div>
              </div>
              
              <p>When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or diving into technical books to expand my understanding of system design and software architecture.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Icon-Based Tech Stack Section -->
    <section class="icon-tech-section" id="tech">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Tech Stack</h2>
          <p class="section-subtitle">Technologies I work with</p>
        </div>
        
        <div class="tech-icons-grid">
          <div 
            class="tech-icon-item" 
            v-for="tech in techStack" 
            :key="tech.name"
            @mouseenter="handleMouseEnter(tech, $event)"
            @mouseleave="handleMouseLeave"
            @mousemove="handleMouseMove"
          >
            <div class="icon-wrapper" :style="{ '--tech-color': tech.color }">
              <i v-if="tech.icon" :class="tech.icon"></i>
              <img v-else-if="tech.img" :src="tech.img" :alt="tech.name" />
            </div>
            <!-- Mobile label (always visible) -->
            <div class="mobile-label">
              <span>{{ tech.name }}</span>
            </div>
          </div>
        </div>
        
        <!-- Desktop hover tooltip -->
        <div 
          v-if="activeTech && !isMobile"
          class="desktop-tooltip" 
          :style="desktopTooltipStyle"
          ref="desktopTooltip"
        >
          <span class="tooltip-name">{{ activeTech?.name }}</span>
        </div>
        
        <!-- Mobile tooltip (fixed position) -->
        <div 
          class="mobile-tooltip" 
          :class="{ active: isMobile }"
          ref="mobileTooltip"
        >
        </div>
      </div>
    </section>

    <!-- Modern Workflow Section -->
    <section class="modern-workflow" id="workflow">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Development Workflow</h2>
          <p class="section-subtitle">My approach to solving problems</p>
        </div>
        
        <div class="workflow-container">
          <div class="workflow-phase" v-for="(phase, index) in workflow" :key="phase.title">
            <div class="phase-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="phase-content">
              <div class="phase-icon">
                <i :class="phase.icon"></i>
              </div>
              <h3>{{ phase.title }}</h3>
              <p>{{ phase.description }}</p>
              <div class="phase-tools">
                <span v-for="tool in phase.tools" :key="tool" class="tool-tag">{{ tool }}</span>
              </div>
            </div>
            <div v-if="index < workflow.length - 1" class="phase-connector">
              <div class="connector-line"></div>
              <div class="connector-arrow">
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="experience-section" id="experience">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Professional Experience</h2>
          <p class="section-subtitle">My work journey</p>
        </div>
        
        <div class="experience-timeline">
          <div class="timeline-item" v-for="(exp, index) in experience" :key="exp.title">
            <div class="timeline-dot" :style="`background: ${exp.color}`"></div>
            <div class="timeline-content">
              <div class="timeline-date">{{ exp.period }}</div>
              <h3>{{ exp.title }}</h3>
              <div class="timeline-company">{{ exp.company }}</div>
              <p>{{ exp.description }}</p>
              <div class="timeline-tech">
                <span v-for="tech in exp.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
              </div>
            </div>
            <div v-if="index < experience.length - 1" class="timeline-line"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="education-section" id="education">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Education</h2>
          <p class="section-subtitle">Academic background</p>
        </div>
        
        <div class="education-grid">
          <template v-for="(edu, index) in education" :key="edu.title">
            <div class="education-card" 
                 :class="{ 'featured-card': index === 0, 'regular-card': index > 0 }">
              <div class="education-icon">
                <i :class="edu.icon"></i>
              </div>
              <div class="education-content">
                <h3>{{ edu.title }}</h3>
                <div class="education-meta">
                  <span class="institution">{{ edu.institution }}</span>
                  <span class="period">{{ edu.period }}</span>
                </div>
                <p>{{ edu.description }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>

    <!-- Languages Section -->
    <section class="languages-section" id="languages">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Languages</h2>
          <p class="section-subtitle">Communication skills</p>
        </div>
        
        <div class="languages-container">
          <div class="language-card" v-for="lang in languages" :key="lang.name">
            <div class="language-flag">
              <img :src="lang.flag" :alt="lang.name" />
            </div>
            <div class="language-content">
              <h3>{{ lang.name }}</h3>
              <div class="language-level">{{ lang.level }}</div>
              <div class="proficiency-indicator">
                <div class="proficiency-dots">
                  <div v-for="n in 5" :key="n" 
                       class="proficiency-dot" 
                       :class="{ 'active': n <= lang.dots }"></div>
                </div>
                <span class="proficiency-label">{{ lang.proficiency }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reading Section -->
    <section class="reading-section" id="reading">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Reading List</h2>
          <p class="section-subtitle">Books that have shaped my technical understanding</p>
        </div>
        
        <div class="reading-filter">
          <button v-for="status in ['All', 'Currently Reading', 'Read']" 
                  :key="status"
                  @click="filterBooks(status)"
                  :class="{ active: bookFilter === status }"
                  class="filter-button">
            {{ status }}
            <span class="filter-count">({{ getBookCount(status) }})</span>
          </button>
        </div>
        
        <div class="books-grid">
          <div class="book-card" v-for="book in filteredBooks" :key="book.title">
            <div class="book-cover-container">
              <div class="book-cover">
                <img :src="book.image" :alt="book.title" />
                <div class="book-cover-overlay">
                  <i class="fas fa-book-open"></i>
                </div>
              </div>
              <div class="book-status" :class="book.status.toLowerCase().replace(' ', '-')">
                {{ book.status }}
              </div>
            </div>
            <div class="book-info">
              <div class="book-header">
                <h3>{{ book.title }}</h3>
                <div class="book-author">{{ book.author }}</div>
              </div>
              <p class="book-description">{{ book.description }}</p>
              <div class="book-meta">
                <span class="book-pages" v-if="book.pages">
                  <i class="fas fa-book"></i> {{ book.pages }} pages
                </span>
                <span class="book-rating" v-if="book.rating">
                  <i class="fas fa-star"></i> {{ book.rating }}/5
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="projects-section" id="projects">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">Real-world applications and solutions</p>
        </div>
        
        <div class="projects-grid">
          <div class="project-card" 
               v-for="(project, index) in projects" 
               :key="project.title"
               :class="{ 'featured-project': index === 0, 'regular-project': index > 0 }">
            
            <div class="project-visual">
              <div class="project-icon-bg" :style="{ background: projectColors[index] }">
                <i :class="project.icon"></i>
              </div>
              <div class="project-status" :class="{ 'wip': project.status === 'WIP' }">
                {{ project.status === 'WIP' ? 'In Progress' : 'Live' }}
              </div>
            </div>
            
            <div class="project-content">
              <div class="project-header">
                <h3>{{ project.title }}</h3>
                <div class="project-links">
                  <a v-if="project.github" :href="project.github" target="_blank" class="project-link">
                    <i class="fab fa-github"></i>
                  </a>
                  <a v-if="project.demo && project.status !== 'WIP'" :href="project.demo" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-details">
                <div class="project-tech">
                  <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{ tech }}</span>
                </div>
                
                <div class="project-footer">
                  <div class="project-meta">
                    <span class="meta-item">
                      <i class="fas fa-code"></i>
                      {{ project.lines }} lines
                    </span>
                  </div>
                  <a v-if="project.demo && project.status !== 'WIP'" :href="project.demo" class="btn btn-small">
                    View Project <i class="fas fa-arrow-right"></i>
                  </a>
                  <button v-else-if="project.status === 'WIP'" class="btn btn-small disabled">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <div class="cta-content">
            <h2>Let's Build Something Amazing</h2>
            <p>Interested in collaborating or have a project in mind? Let's discuss how we can work together to create powerful backend solutions.</p>
            <div class="cta-buttons">
              <router-link to="/contact" class="btn btn-primary">
                <i class="fas fa-envelope"></i> Get In Touch
              </router-link>
            </div>
          </div>
          <div class="cta-visual">
            <i class="fas fa-rocket"></i>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'PortfolioView',
  data() {
    return {
      age: this.calculateAge(),
      bookFilter: 'All',
        techStack: [
          // Languages
          { 
            name: 'Python', 
            icon: 'fab fa-python',
            color: '#3776AB',
            img: null
          },
          { 
            name: 'PHP', 
            icon: 'fab fa-php',
            color: '#777BB4',
            img: null
          },
          { 
            name: 'JavaScript', 
            icon: 'fab fa-js-square',
            color: '#F7DF1E',
            img: null
          },
          { 
            name: 'HTML/CSS', 
            icon: 'fab fa-html5',
            color: '#E34F26',
            img: null
          },

          // Backend frameworks & tools
          { 
            name: 'FastAPI', 
            icon: null,
            color: '#009688',
            img: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png'
          },
          { 
            name: 'Django', 
            icon: null,
            color: '#092E20',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
          },
          { 
            name: 'Django REST', 
            icon: null,
            color: '#FF1700',
            img: 'https://www.django-rest-framework.org/img/logo.png'
          },
          { 
            name: 'Laravel', 
            icon: null,
            color: '#FF2D20',
            img: 'https://laravel.com/img/logomark.min.svg'
          },
          { 
            name: 'Celery', 
            icon: null,
            color: '#B2D862',
            img: 'https://products.containerize.com/message-queue-software/celery/menu_image.png'
          },

          // Frontend frameworks & tooling
          { 
            name: 'Vue.js', 
            icon: 'fab fa-vuejs',
            color: '#42b883',
            img: null
          },
          { 
            name: 'Alpine.js', 
            icon: null,
            color: '#8ABDCB',
            img: "https://avatars.githubusercontent.com/u/59030169?s=200&v=4"
          },
          { 
            name: 'Tailwind CSS', 
            icon: null,
            color: '#06B6D4',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
          },
          { 
            name: 'Vite', 
            icon: null,
            color: '#646CFF',
            img: 'https://vitejs.dev/logo.svg'
          },

          // Databases & data tools
          { 
            name: 'PostgreSQL', 
            icon: null,
            color: '#336791',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
          },
          { 
            name: 'MySQL', 
            icon: null,
            color: '#4479A1',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
          },
          { 
            name: 'Redis', 
            icon: null,
            color: '#DF3834',
            img: 'https://cdn.iconscout.com/icon/free/png-256/free-redis-icon-svg-download-png-1175103.png'
          },
          { 
            name: 'Pandas', 
            icon: null,
            color: '#1B237B',
            img: 'https://img.icons8.com/color/512/pandas.png'
          },

          // DevOps, infra & automation
          { 
            name: 'Docker', 
            icon: 'fab fa-docker',
            color: '#2496ED',
            img: null
          },
          {
            name: "Kubernetes",
            icon: null,
            color: "#2496ED",
            img: 'https://raw.githubusercontent.com/kubernetes/kubernetes/refs/heads/master/logo/logo.svg'
          },
          { 
            name: 'Ansible', 
            icon: null,
            color: '#F8F8F8',
            img: 'https://icon.icepanel.io/Technology/png-shadow-512/Ansible.png'
          },
          { 
            name: 'n8n', 
            icon: null,
            color: '#FF6B6B',
            img: 'https://raw.githubusercontent.com/n8n-io/n8n/master/packages/nodes-base/nodes/N8n/n8n.svg'
          },

          // Systems & tooling
          { 
            name: 'Unix Systems', 
            icon: 'fab fa-linux',
            color: '#FCC624',
            img: null
          },
          { 
            name: 'Bash', 
            icon: null,
            color: '#4EAA25',
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/960px-Bash_Logo_Colored.svg.png"
          },
          { 
            name: 'Git', 
            icon: 'fab fa-git-alt',
            color: '#F05032',
            img: null
          }
        ],
      workflow: [
        {
          title: 'Analysis & Planning',
          icon: 'fas fa-search',
          description: 'Understanding requirements, defining scope, and planning architecture before writing any code.',
          tools: ['Requirements', 'Architecture', 'Scope']
        },
        {
          title: 'System Design',
          icon: 'fas fa-drafting-compass',
          description: 'Designing database schemas, API structure, and defining clear interfaces between components.',
          tools: ['Database Design', 'API Design', 'Interfaces']
        },
        {
          title: 'Implementation',
          icon: 'fas fa-code',
          description: 'Writing clean, maintainable code with proper testing and following best practices.',
          tools: ['Clean Code', 'Testing', 'Best Practices']
        },
        {
          title: 'Deployment',
          icon: 'fas fa-rocket',
          description: 'Automated deployment with CI/CD pipelines, containerization, and environment management.',
          tools: ['CI/CD', 'Docker', 'Automation']
        },
        {
          title: 'Monitoring',
          icon: 'fas fa-chart-line',
          description: 'Monitoring performance, gathering feedback, and continuously improving the system.',
          tools: ['Metrics', 'Logging', 'Optimization']
        }
      ],
      experience: [
        {
          title: 'Founder & Lead Developer',
          company: 'Eclipse Growth Optimization Services',
          period: 'May 2025 - Present',
          description: 'Leading development of scalable web applications and data analysis solutions using modern backend frameworks.',
          technologies: ['Python', 'FastAPI', 'Django', 'PostgreSQL'],
          color: '#B91C1C'
        }
      ],
      education: [
        {
          title: 'Bachelor\'s in Computer Engineering',
          institution: 'Facultad de Ingeniería de la Universidad de la República',
          period: '2025 - 2030',
          icon: 'fas fa-university',
          description: 'Specializing in system security, data structures, algorithms, and software architecture.'
        },
        {
          title: 'French Baccalauréat',
          institution: 'Lycée Français Jules Supervielle',
          period: '2010 - 2025',
          icon: 'fas fa-graduation-cap',
          description: 'Specialized in advanced mathematics, physics, and chemistry with C2 French proficiency.'
        },
        {
          title: 'Web Development',
          institution: 'Johns Hopkins University',
          period: '2022',
          icon: 'fas fa-laptop-code',
          description: 'Introduction to web development focusing on functional web design principles.'
        }
      ],
      languages: [
        {
          name: 'Spanish',
          flag: 'static/es.svg',
          level: 'Native Speaker',
          proficiency: 'Native',
          dots: 5
        },
        {
          name: 'French',
          flag: 'static/fr.svg',
          level: 'C2 Mastery',
          proficiency: 'Proficient',
          dots: 4
        },
        {
          name: 'English',
          flag: 'static/gb.svg',
          level: 'C2 Mastery',
          proficiency: 'Proficient',
          dots: 4
        }
      ],
      books: [
        {
          title: 'Python Crash Course',
          author: 'Eric Matthes',
          status: 'Read',
          image: 'static/pythonCrashCourse.png',
          description: 'Hands-on introduction to Python with practical projects and clear explanations.',
          pages: 544,
          rating: 4.7
        },
        {
          title: 'Django 5 By Example',
          author: 'Antonio Melé',
          status: 'Read',
          image: 'static/django.png',
          description: 'Build real-world Django applications through practical examples and projects.',
          pages: 680,
          rating: 4.6
        },
        {
          title: 'Python for Data Analysis',
          author: 'Wes McKinney',
          status: 'Currently Reading',
          image: 'static/pythonDataAnalysis.png',
          description: 'Comprehensive guide to data manipulation and analysis with pandas.',
          pages: 500,
          rating: 4.5
        },
        {
          title: 'Effective pandas Patterns',
          author: 'Matt Harrison',
          status: 'Currently Reading',
          image: 'static/pandaPatterns.png',
          description: 'Best practices and patterns for efficient data manipulation with pandas.',
          pages: 320,
          rating: 4.4
        },
        {
          title: 'Data Structures in Python',
          author: 'Goodrich, Tamassia, Goldwasser',
          status: 'Currently Reading',
          image: 'static/pythonDataStructures.png',
          description: 'Comprehensive guide to data structures and algorithms with Python implementations.',
          pages: 736,
          rating: 4.8
        },
        {
          title: 'UNIX: A History and a Memoir',
          author: 'Brian Kernighan',
          status: 'Read',
          image: 'static/unix.png',
          description: 'Personal account of UNIX development and its impact on modern computing.',
          pages: 256,
          rating: 4.3
        }
      ],
      projects: [
        {
          title: 'devBot',
          description: 'Comprehensive Discord bot for community management with automation, integrations, and administrative tools. Built with Python and PostgreSQL.',
          status: 'Live',
          tech: ['Python', 'PostgreSQL', 'Discord.py'],
          icon: 'fas fa-robot',
          github: 'https://github.com/emiliano-gandini-outeda/devbot',
          demo: 'https://www.ego-services.com/devbot',
          lines: '5000+'
        },
        {
          title: 'LibreCourse',
          description: 'Open-source Django platform for creating, organizing, and collaborating on educational courses with real-time collaboration features.',
          status: 'WIP',
          tech: ['Django', 'PostgreSQL', 'Vue.js', 'WebSockets'],
          icon: 'fas fa-graduation-cap',
          github: 'https://github.com/emiliano-gandini-outeda/LibreCourse',
          lines: '3000+'
        },
        {
          title: 'FastAPI Boilerplate',
          description: 'Production-ready FastAPI template with authentication, database setup, testing, and deployment configurations.',
          status: 'Live',
          tech: ['FastAPI', 'PostgreSQL', 'Docker', 'JWT'],
          icon: 'fas fa-bolt',
          github: 'https://github.com/emiliano-gandini-outeda/fastapi-boilerplate',
          lines: '2000+'
        },
        {
          title: 'Portfolio Website',
          description: 'Modern portfolio website built with Vue.js and showcasing projects, skills, and experience with smooth animations.',
          status: 'Live',
          tech: ['Vue.js', 'Tailwind CSS', 'Vue Router', 'Vuex'],
          icon: 'fas fa-laptop-code',
          github: 'https://github.com/emiliano-gandini-outeda/portfolio',
          demo: '/',
          lines: '1500+'
        }
      ],
      projectColors: [
        'linear-gradient(135deg, #B91C1C, #DC2626)',
        'linear-gradient(135deg, #059669, #10B981)',
        'linear-gradient(135deg, #7C3AED, #8B5CF6)',
        'linear-gradient(135deg, #2563EB, #3B82F6)'
      ],
      activeTech: null,
      desktopTooltipStyle: {
        left: '0px',
        top: '0px'
      },
      isMobile: false
    }
  },
  computed: {
    filteredBooks() {
      if (this.bookFilter === 'All') return this.books;
      return this.books.filter(book => book.status === this.bookFilter);
    }
  },
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile);
  },
  methods: {
    calculateAge() {
      const birthDate = new Date(2006, 6, 19); // July 19, 2006 (month is 0-indexed)
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
    
    filterBooks(status) {
      this.bookFilter = status;
    },
    
    getBookCount(status) {
      if (status === 'All') return this.books.length;
      return this.books.filter(book => book.status === status).length;
    },
    
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    
    handleMouseEnter(tech, event) {
      if (this.isMobile) return;
      this.activeTech = tech;
      this.updateTooltipPosition(event);
    },
    
    handleMouseMove(event) {
      if (this.isMobile || !this.activeTech) return;
      this.updateTooltipPosition(event);
    },
    
    handleMouseLeave() {
      if (this.isMobile) return;
      this.activeTech = null;
    },
    
    updateTooltipPosition(event) {
      if (!this.activeTech || this.isMobile) return;
      
      const offsetX = 15;
      const offsetY = 15;
      
      this.desktopTooltipStyle = {
        left: `${event.clientX + offsetX}px`,
        top: `${event.clientY + offsetY}px`
      };
    }
  }
}
</script>

<style scoped>
.portfolio-page {
  background: var(--primary-dark);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.portfolio-page::before {
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

/* Modern Hero */
.modern-hero {
  padding: 120px 0 80px;
  background: linear-gradient(135deg, 
    rgba(15, 15, 15, 0.95) 0%, 
    rgba(26, 26, 26, 0.98) 100%);
  position: relative;
  overflow: hidden;
}

.modern-hero::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(185, 28, 28, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(185, 28, 28, 0.1) 0%, transparent 50%);
  animation: float 20s ease-in-out infinite alternate;
}

@keyframes float {
  0% { transform: translate(0, 0) rotate(0deg); }
  100% { transform: translate(-5%, -5%) rotate(1deg); }
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
  max-width: 600px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(185, 28, 28, 0.15);
  color: var(--accent-red);
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(185, 28, 28, 0.2);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title-gradient {
  background: linear-gradient(90deg, 
    var(--accent-red) 0%, 
    var(--accent-red-light) 50%,
    #ff6b6b 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-size: 200% auto;
  animation: gradientShift 3s ease-in-out infinite;
}

.title-line {
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 600;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.hero-metrics {
  display: flex;
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.metric {
  display: flex;
  flex-direction: column;
}

.metric-number {
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent-red);
  line-height: 1;
}

.metric-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
}

.btn-primary {
  background: var(--accent-red);
  color: white;
}

.btn-primary:hover {
  background: var(--accent-red-light);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(185, 28, 28, 0.3);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border-color: rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--accent-red);
  transform: translateY(-2px);
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.profile-container {
  position: relative;
}

.profile-image-wrapper {
  width: 320px;
  height: 320px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid rgba(185, 28, 28, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0.1);
}

.profile-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(45deg, 
    transparent, 
    rgba(185, 28, 28, 0.1), 
    transparent);
  border-radius: 30px;
  z-index: -1;
  animation: glow 3s ease-in-out infinite alternate;
}

@keyframes glow {
  0% { opacity: 0.3; }
  100% { opacity: 0.6; }
}

.profile-details {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(26, 26, 26, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 250px;
}

.location, .availability {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.location i, .availability i {
  color: var(--accent-red);
}

.flag {
  width: 20px;
  height: 14px;
  border-radius: 2px;
  margin-left: auto;
}

.hero-scroll {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-10px); }
}

/* About Me Section */
.about-section {
  padding: 100px 0;
  background: var(--primary-dark);
  position: relative;
}

.about-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 70%, rgba(185, 28, 28, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 70% 30%, rgba(185, 28, 28, 0.05) 0%, transparent 50%);
  z-index: 0;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.about-image {
  position: relative;
}

.image-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.image-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: linear-gradient(45deg, 
    transparent, 
    rgba(185, 28, 28, 0.15), 
    transparent);
  border-radius: 30px;
  z-index: -1;
  animation: glow 3s ease-in-out infinite alternate;
}

.about-image-placeholder {
  width: 100%;
  padding-bottom: 100%;
  background: linear-gradient(135deg, var(--accent-red), var(--accent-red-light));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  color: white;
  box-shadow: 0 20px 40px rgba(185, 28, 28, 0.3);
  transition: transform 0.3s ease;
}

.about-image-placeholder:hover {
  transform: scale(1.05) rotate(-5deg);
}

.about-text {
  max-width: 600px;
}

.about-text .section-header {
  text-align: left;
  margin-bottom: 2rem;
}

.about-description {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-description p {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1.1rem;
}

.about-highlights {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}

.highlight-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.highlight-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: rgba(185, 28, 28, 0.1);
  border: 1px solid rgba(185, 28, 28, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-red);
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.highlight-item:hover .highlight-icon {
  background: var(--accent-red);
  color: white;
  transform: scale(1.1) rotate(5deg);
}

.highlight-content {
  flex: 1;
}

.highlight-content h4 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.highlight-content p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

/* Icon-Based Tech Stack Section */
.icon-tech-section {
  padding: 100px 0;
  background: var(--secondary-dark);
  position: relative;
}

.icon-tech-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 20%, rgba(185, 28, 28, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(185, 28, 28, 0.03) 0%, transparent 50%);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.tech-icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 2.5rem;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

@media (min-width: 768px) {
  .tech-icons-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}

@media (min-width: 1024px) {
  .tech-icons-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

.tech-icon-item {
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.tech-icon-item:hover {
  transform: translateY(-10px);
}

.icon-wrapper {
  width: 90px;
  height: 90px;
  background: var(--card-bg);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.tech-icon-item:hover .icon-wrapper {
  border-color: var(--tech-color);
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.3),
    0 0 30px color-mix(in srgb, var(--tech-color) 30%, transparent);
  transform: scale(1.15) rotate(5deg);
}

.icon-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    color-mix(in srgb, var(--tech-color) 20%, transparent) 0%, 
    transparent 50%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.tech-icon-item:hover .icon-wrapper::before {
  opacity: 1;
}

.icon-wrapper::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  background: var(--tech-color);
  border-radius: 50%;
  filter: blur(20px);
  opacity: 0;
  transition: all 0.5s ease;
}

.tech-icon-item:hover .icon-wrapper::after {
  width: 100px;
  height: 100px;
  opacity: 0.4;
}

.icon-wrapper i {
  font-size: 3rem;
  color: var(--tech-color);
  z-index: 1;
  transition: all 0.4s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.tech-icon-item:hover .icon-wrapper i {
  transform: scale(1.2);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4));
}

.icon-wrapper img {
  width: 50px;
  height: 50px;
  object-fit: contain;
  filter: 
    brightness(1.2)
    drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  z-index: 1;
  transition: all 0.4s ease;
}

.tech-icon-item:hover .icon-wrapper img {
  transform: scale(1.2);
  filter: 
    brightness(1.4)
    drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4));
}

/* Mobile labels */
.mobile-label {
  display: none;
  text-align: center;
  margin-top: 0.5rem;
}

.mobile-label span {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  background: rgba(255, 255, 255, 0.05);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  display: inline-block;
}

/* Desktop Tooltip */
.desktop-tooltip {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  transform: translate(-50%, 10px);
  animation: tooltip-appear 0.2s ease forwards;
}

@keyframes tooltip-appear {
  from {
    opacity: 0;
    transform: translate(-50%, 15px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

.desktop-tooltip::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 12px;
  height: 12px;
  background: var(--accent-red);
  border-radius: 2px;
}

.desktop-tooltip .tooltip-name {
  display: block;
  background: var(--accent-red);
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 10px 30px rgba(185, 28, 28, 0.4); }
  50% { box-shadow: 0 10px 40px rgba(185, 28, 28, 0.6); }
}

/* Mobile Tooltip (always visible on mobile) */
.mobile-tooltip {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.mobile-tooltip.active {
  opacity: 1;
}

.mobile-tooltip-content {
  background: var(--accent-red);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
  animation: float-mobile 3s ease-in-out infinite;
}

@keyframes float-mobile {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* Modern Workflow Section */
.modern-workflow {
  padding: 80px 0;
  background: var(--primary-dark);
}

.workflow-container {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
}

.workflow-phase {
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;
}

.phase-number {
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent-red);
  opacity: 0.3;
  margin-right: 2rem;
  min-width: 60px;
}

.phase-content {
  flex: 1;
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;
}

.workflow-phase:hover .phase-content {
  border-color: var(--accent-red);
  transform: translateX(5px);
  box-shadow: 0 10px 30px rgba(185, 28, 28, 0.1);
}

.phase-icon {
  position: absolute;
  top: -20px;
  left: 2rem;
  width: 40px;
  height: 40px;
  background: var(--accent-red);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  z-index: 2;
}

.phase-content h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.phase-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.phase-tools {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tool-tag {
  background: rgba(185, 28, 28, 0.1);
  color: var(--accent-red);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.phase-connector {
  position: absolute;
  left: 30px;
  top: 100%;
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.connector-line {
  width: 2px;
  height: calc(100% - 20px);
  background: var(--accent-red);
  opacity: 0.3;
}

.connector-arrow {
  width: 20px;
  height: 20px;
  background: var(--accent-red);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: white;
}

.workflow-phase:last-child .phase-connector {
  display: none;
}

/* Experience Section */
.experience-section {
  padding: 80px 0;
  background: var(--secondary-dark);
}

.experience-timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, transparent, var(--accent-red), transparent);
}

.timeline-item {
  position: relative;
  padding-left: 80px;
  margin-bottom: 3rem;
}

.timeline-dot {
  position: absolute;
  left: 26px;
  top: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 3px solid var(--secondary-dark);
  z-index: 2;
  box-shadow: 0 0 0 3px rgba(185, 28, 28, 0.2);
}

.timeline-content {
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  border-color: var(--accent-red);
  transform: translateX(5px);
  box-shadow: 0 10px 30px rgba(185, 28, 28, 0.1);
}

.timeline-date {
  color: var(--accent-red);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.timeline-content h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.timeline-company {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.timeline-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.timeline-tech {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tech-tag {
  background: rgba(185, 28, 28, 0.1);
  color: var(--accent-red);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.timeline-line {
  position: absolute;
  left: 30px;
  top: 25px;
  bottom: -3rem;
  width: 2px;
  background: var(--accent-red);
  opacity: 0.2;
}

.timeline-item:last-child .timeline-line {
  display: none;
}

/* Education Section */
.education-section {
  padding: 80px 0;
  background: var(--primary-dark);
}

.education-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .education-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .education-card.featured-card {
    grid-column: 1 / -1;
  }
  
  .education-card.regular-card {
    grid-column: span 1;
  }
}

.education-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.education-card.featured-card {
  padding: 2.5rem;
}

.education-card:hover {
  border-color: var(--accent-red);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(185, 28, 28, 0.1);
}

.education-icon {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: var(--accent-red);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
}

.education-card.featured-card .education-icon {
  width: 60px;
  height: 60px;
  font-size: 2rem;
}

.education-content {
  flex: 1;
}

.education-content h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.education-card.featured-card h3 {
  font-size: 1.5rem;
}

.education-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.institution {
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 500;
}

.period {
  color: var(--accent-red);
  font-size: 0.95rem;
  font-weight: 600;
}

.education-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1rem;
}

.education-card.featured-card p {
  font-size: 1.1rem;
}

/* Languages Section */
.languages-section {
  padding: 80px 0;
  background: var(--secondary-dark);
}

.languages-container {
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
}

.language-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.language-card:hover {
  border-color: var(--accent-red);
  transform: translateX(5px);
  box-shadow: 0 10px 30px rgba(185, 28, 28, 0.1);
}

.language-flag {
  width: 50px;
  height: 30px;
  border-radius: 6px;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.language-flag img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.language-content {
  flex: 1;
}

.language-content h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.language-level {
  color: var(--accent-red);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.proficiency-indicator {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.proficiency-dots {
  display: flex;
  gap: 0.5rem;
}

.proficiency-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.proficiency-dot.active {
  background: var(--accent-red);
  transform: scale(1.2);
}

.proficiency-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 600;
  min-width: 80px;
}

/* Modern Reading Section */
.reading-section {
  padding: 80px 0;
  background: var(--primary-dark);
}

.reading-filter {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-button {
  padding: 0.5rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filter-button:hover {
  border-color: var(--accent-red);
  color: var(--text-primary);
  transform: translateY(-2px);
}

.filter-button.active {
  background: var(--accent-red);
  color: white;
  border-color: var(--accent-red);
  box-shadow: 0 5px 15px rgba(185, 28, 28, 0.3);
}

.filter-count {
  font-size: 0.8rem;
  opacity: 0.9;
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.book-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
}

.book-card:hover {
  border-color: var(--accent-red);
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(185, 28, 28, 0.15);
}

.book-cover-container {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.book-cover {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.book-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  filter: brightness(0.95);
}

.book-card:hover .book-cover img {
  transform: scale(1.08);
  filter: brightness(1.05);
}

.book-cover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, 
    transparent 40%, 
    rgba(15, 15, 15, 0.8) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.book-card:hover .book-cover-overlay {
  opacity: 1;
}

.book-cover-overlay i {
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.8);
}

.book-status {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.book-status.currently-reading {
  color: #f59e0b;
  border-color: #f59e0b;
  background: rgba(245, 158, 11, 0.1);
}

.book-status.read {
  color: #22c55e;
  border-color: #22c55e;
  background: rgba(34, 197, 94, 0.1);
}

.book-info {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.book-header {
  margin-bottom: 1rem;
}

.book-info h3 {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.book-author {
  color: var(--accent-red);
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.book-description {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

.book-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.85rem;
}

.book-pages, .book-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.book-pages i, .book-rating i {
  color: var(--accent-red);
}

.book-rating {
  color: #f59e0b;
}

.book-rating i {
  color: #f59e0b;
}

/* Projects Section */
.projects-section {
  padding: 80px 0;
  background: var(--secondary-dark);
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .project-card.featured-project {
    grid-column: 1 / -1;
  }
  
  .project-card.regular-project {
    grid-column: span 1;
  }
}

.project-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  display: flex;
  gap: 2rem;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.project-card.featured-project {
  padding: 3rem;
}

.project-card:hover {
  border-color: var(--accent-red);
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(185, 28, 28, 0.2);
}

.project-visual {
  flex-shrink: 0;
  width: 120px;
  position: relative;
}

.project-card.featured-project .project-visual {
  width: 140px;
}

.project-icon-bg {
  width: 100%;
  height: 120px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.project-card.featured-project .project-icon-bg {
  height: 140px;
  font-size: 3.5rem;
}

.project-card:hover .project-icon-bg {
  transform: scale(1.05) rotate(5deg);
}

.project-icon-bg i {
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
  z-index: 2;
}

.project-status {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 3;
}

.project-status.wip {
  background: #f59e0b;
  color: #000;
  box-shadow: 0 5px 15px rgba(245, 158, 11, 0.3);
}

.project-status:not(.wip) {
  background: #22c55e;
  color: white;
  box-shadow: 0 5px 15px rgba(34, 197, 94, 0.3);
}

.project-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.project-header h3 {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.2;
}

.project-card.featured-project .project-header h3 {
  font-size: 1.8rem;
}

.project-links {
  display: flex;
  gap: 0.5rem;
}

.project-link {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-secondary);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: var(--accent-red);
  color: white;
  transform: translateY(-2px) rotate(5deg);
}

.project-description {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1.05rem;
  flex: 1;
}

.project-card.featured-project .project-description {
  font-size: 1.1rem;
}

.project-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.project-tech {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.project-meta {
  display: flex;
  gap: 1rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.meta-item i {
  color: var(--accent-red);
}

.btn-small {
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-small:hover {
  background: var(--accent-red);
  color: white;
  border-color: var(--accent-red);
  transform: translateY(-2px);
}

.btn-small.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-small.disabled:hover {
  transform: none;
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  border-color: rgba(255, 255, 255, 0.2);
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  background: var(--primary-dark);
}

.cta-card {
  background: linear-gradient(135deg, 
    var(--accent-red) 0%, 
    var(--accent-red-light) 100%);
  border-radius: 20px;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.cta-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  animation: rotate 20s linear infinite;
}

.cta-content {
  position: relative;
  z-index: 2;
  flex: 1;
  max-width: 600px;
}

.cta-content h2 {
  font-size: 2rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
}

.cta-content p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
}

.cta-visual {
  position: relative;
  z-index: 2;
  font-size: 8rem;
  color: rgba(255, 255, 255, 0.2);
  animation: float 3s ease-in-out infinite;
}

/* Animations */
@keyframes gradientShift {
  0%, 100% { background-position: 0% center; }
  50% { background-position: 100% center; }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    gap: 3rem;
  }
  
  .hero-title {
    font-size: 2.8rem;
  }
  
  .profile-image-wrapper {
    width: 280px;
    height: 280px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .about-content {
    gap: 3rem;
  }
  
  .about-image-placeholder {
    font-size: 5rem;
  }
}

@media (max-width: 768px) {
  .modern-hero {
    padding: 100px 0 60px;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
  
  .hero-text {
    max-width: 100%;
  }
  
  .hero-title {
    font-size: 2.2rem;
  }
  
  .title-line {
    font-size: 1.2rem;
  }
  
  .hero-metrics {
    justify-content: center;
  }
  
  .hero-buttons {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .profile-image-wrapper {
    width: 240px;
    height: 240px;
    margin: 0 auto;
  }
  
  .profile-details {
    min-width: 200px;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  /* About Me Responsive */
  .about-section {
    padding: 60px 0;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  
  .about-text .section-header {
    text-align: center;
  }
  
  .about-image-placeholder {
    max-width: 300px;
    margin: 0 auto;
  }
  
  .highlight-item {
    text-align: left;
  }
  
  .tech-icons-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  .icon-wrapper {
    width: 80px;
    height: 80px;
  }
  
  .icon-wrapper i {
    font-size: 2.5rem;
  }
  
  .icon-wrapper img {
    width: 45px;
    height: 45px;
  }
  
  .mobile-label {
    display: block;
  }
  
  .desktop-tooltip {
    display: none;
  }
  
  .mobile-tooltip.active {
    opacity: 1;
  }
  
  .workflow-phase {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2rem;
  }
  
  .phase-number {
    margin-right: 0;
    margin-bottom: 1rem;
  }
  
  .phase-connector {
    display: none;
  }
  
  .experience-timeline::before {
    display: none;
  }
  
  .timeline-item {
    padding-left: 0;
  }
  
  .timeline-dot {
    display: none;
  }
  
  .books-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .book-cover-container {
    height: 200px;
  }
  
  .book-info {
    padding: 1.5rem;
  }
  
  .project-card {
    flex-direction: column;
    padding: 1.5rem;
  }
  
  .project-card.featured-project {
    padding: 2rem;
  }
  
  .project-visual {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .project-links {
    align-self: flex-end;
  }
  
  .project-footer {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  
  .cta-card {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
  
  .cta-visual {
    font-size: 4rem;
    margin-top: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-metrics {
    gap: 1.5rem;
  }
  
  .metric-number {
    font-size: 1.5rem;
  }
  
  .btn {
    padding: 0.875rem 1.5rem;
    font-size: 0.9rem;
  }
  
  .about-image-placeholder {
    font-size: 4rem;
  }
  
  .about-description p {
    font-size: 1rem;
  }
  
  .tech-icons-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .icon-wrapper {
    width: 70px;
    height: 70px;
  }
  
  .icon-wrapper i {
    font-size: 2rem;
  }
  
  .icon-wrapper img {
    width: 40px;
    height: 40px;
  }
  
  .mobile-label span {
    font-size: 0.75rem;
    padding: 0.2rem 0.5rem;
  }
  
  .book-cover-container {
    height: 180px;
  }
  
  .book-status {
    padding: 0.4rem 0.8rem;
    font-size: 0.7rem;
  }
  
  .book-info h3 {
    font-size: 1.2rem;
  }
}
</style>