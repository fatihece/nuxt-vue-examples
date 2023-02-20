<template>
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
</template>

<script>
export default {}
</script>

<style scoped>
/* Companies */
:root {
  --primary-light: rgba(74, 114, 255, 0.05);
}

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
