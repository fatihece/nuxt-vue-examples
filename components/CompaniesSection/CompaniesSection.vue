<template>
  <v-container>
    <section id="companies">
      <div class="company-item">
        <img src="/images/logos/logo-1.png" alt="Logo 1" />
      </div>
      <div class="company-item">
        <img src="/images/logos/logo-2.png" alt="Logo 2" />
      </div>
      <div class="company-item">
        <img src="/images/logos/logo-3.png" alt="Logo 3" />
      </div>
      <div class="company-item">
        <img src="/images/logos/logo-4.png" alt="Logo 4" />
      </div>
      <div class="company-item">
        <img src="/images/logos/logo-5.png" alt="Logo 5" />
      </div>
    </section>
    <section id="hero">
      <div class="hero-body">
        <h3 class="hero-sub-title">Lorem, ipsum dolor.</h3>
        <h1 class="hero-title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
          voluptas.
        </h1>
        <p class="hero-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rem
          dolores, doloribus quod provident architecto officiis esse in deserunt
          corrupti.
        </p>
        <div class="hero-actions">
          <button class="button primary-button">
            Register
            <img
              src="/images/logos/arrow-right-circle.svg"
              aria-hidden="true"
            />
          </button>
          <button class="button secondary-button">Learn More</button>
        </div>
        <div class="hero-analytics">
          <div class="hero-analytic-item">
            <div class="hero-analytic-item-icon">
              <img src="/images/logos/download.svg" aria-hidden="true" />
            </div>
            <div class="hero-analytic-item-body">
              <h5>Total Download</h5>
              <h3>1,501,234</h3>
            </div>
          </div>
          <div class="hero-analytic-item">
            <div class="hero-analytic-item-icon">
              <img src="/images/logos/user.svg" aria-hidden="true" />
            </div>
            <div class="hero-analytic-item-body">
              <h5>Total Users</h5>
              <h3>1,321,354</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-image">
        <img src="/images/logos/hero-image.png" alt="Hero Image Alt" />
      </div>
    </section>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped>
/* Hero */
.button {
  padding: 16px 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
}

.primary-button {
  background-color: var(--primary);
  color: var(--white);
  box-shadow: var(--primary-shadow);
}

.secondary-button {
  background-color: var(--primary-light);
  color: var(--primary);
}
#hero {
  display: flex;
  align-items: center;
  gap: 24px;
}

#hero > * {
  flex: 1;
}

.hero-sub-title {
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: var(--font-size-xs);
  color: var(--primary);
  margin-bottom: 16px;
}

.hero-title {
  font-size: var(--font-size-xxxl);
  color: var(--dark);
  margin-bottom: 16px;
}

.hero-actions {
  display: flex;
  gap: 24px;
  margin-top: 24px;
}

.hero-analytics {
  margin-top: 48px;
  display: flex;
  gap: 48px;
}

.hero-analytic-item {
  display: flex;
  gap: 16px;
}

.hero-analytic-item h5 {
  font-size: var(--font-size-xxs);
  text-transform: uppercase;
}

.hero-analytic-item h3 {
  font-size: var(--font-size-xl);
  color: var(--dark);
}
/* Companies */

#companies {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 62px;
  background-color: var(--primary-light);
  border-radius: 8px;
}

#companies .company-item img {
  filter: grayscale(1);
  opacity: 0.2;
  transition: all 250ms ease-in-out;
}

#companies .company-item:hover img {
  filter: grayscale(0);
  opacity: 1;
}
</style>
