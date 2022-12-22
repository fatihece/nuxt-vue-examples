<template>
  <v-container fluid class="home-hero" style="max-height: 100vh">
    <v-row justify="center" align="center" class="pa-5">
      <v-col
        class="d-flex align-center flex-column justify-center mt-9 mt-lg-16 title-container"
        style="z-index: 10"
      >
        <div
          class="font-weight-black text-center hero-title"
          style="font-size: 5rem; font-family: 'Raleway', sans-serif"
        >
          Lorem Ipsumaneten
        </div>
        <div
          class="font-weight-black text-center mb-3 mt-n4 mt-md-n8 hero-title"
          style="font-size: 5rem; font-family: 'Raleway', sans-serif"
        >
          Sunny Program
        </div>
        <p class="text-center hero-par" style="font-size: 3rem">
          Make Money While Your <br />
          Friends Save Money
        </p>
      </v-col>
      <div class="overlay"></div>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped>
.home-hero {
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/785239/background.jpg');
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  height: 100vh;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  position: relative;
}
.overlay {
  position: absolute;
  inset: 0;
  background-color: #f4d1a7;
  opacity: 0.7;
}

@media only screen and (max-width: 900px) {
  .hero-title {
    font-size: 2.25rem !important;
  }

  .hero-par {
    font-size: 1.5rem !important;
  }
  .home-hero {
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/785239/background.jpg');
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 100%;
    height: 100vh;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
    position: relative;
    object-fit: contain;
    background-position: right center;
  }
}

@media only screen and (min-width: 768px) and (max-width: 900px) {
  .hero-title {
    font-size: 3rem !important;
  }

  .hero-par {
    font-size: 2.25rem !important;
  }
}

@media only screen and (min-width: 2000px) {
  .title-container {
    margin-top: 350px !important;
  }
}
</style>
