<template>
  <main class="me-page">
    <section class="page-hero">
      <div class="container">
        <h1>Emiliano's Portfolio</h1>
        <p>Personal portfolio and professional journey</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2>Coming Soon</h2>
        <p>Personal portfolio page is under development.</p>
        <router-link to="/" class="btn-back">
          <i class="fas fa-arrow-left"></i> Back to Home
        </router-link>
      </div>
    </section>
  </main>
</template>

<style scoped>
.page-hero {
  padding: 150px 0 80px;
  background: linear-gradient(135deg, var(--secondary-dark), var(--primary-dark));
  text-align: center;
  border-bottom: 4px solid var(--accent-red);
}

.page-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.page-hero p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.btn-back {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background: var(--accent-red);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
}
</style>