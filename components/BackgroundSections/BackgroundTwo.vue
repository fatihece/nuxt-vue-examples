<template>
  <div style="position: relative; overflow: hidden">
    <div
      style="
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: 0px;
        left: 0px;
        top: 0px;
        right: 0px;
        overflow-x: hidden !important;
      "
    >
      <div id="main-hero"></div>
      <div id="main-hero-overlay"></div>
    </div>
    <v-container fluid class="pa-0 ma-0" style="z-index: 50">
      <v-row
        class="fill-height"
        justify="center"
        align="center"
        style="padding: 170px 0"
      >
        <v-col
          cols="12"
          sm="8"
          md="7"
          xl="7"
          lg="7"
          class="d-flex flex-column justify-center mb-6 pa-md-16 text-block"
          style="z-index: 10"
        >
          <div class="pa-4 pl-md-16">
            <div class="pa-2">
              <h6 class="d-flex flex-column flex-md-row">
                <span
                  style="
                    font-size: 18px;
                    padding: 10px 10px;
                    color: white;
                    text-shadow: 2px 1px #000;
                    text-align: center;
                  "
                  class="orange darken-2"
                  >Rated by hundreds of our clients</span
                >
                <img
                  src="images/landing1/five-stars.png"
                  height="40px;"
                  alt="Five Stars"
                  class="ml-0 ml-md-2"
                  style="object-fit: contain"
                />
              </h6>
            </div>

            <div class="pl-10 pa-md-0">
              <h1
                class="font-weight-bold mb-4 mt-2 white--text"
                style="
                  text-shadow: 2px 2px #000;
                  font-family: 'Nunito', sans-serif;
                  font-size: 42px;
                "
              >
                Lorem #1 Ipsun Gonzale TExtarea
              </h1>
            </div>
            <div class="pa-5 pa-md-0">
              <h2 class="white--text font-weight-500 para-desc" style="">
                It has survived not only five centuries,
              </h2>
            </div>

            <ul class="hero_bullets">
              <li class="white--text font-weight-bold">Why do we use it?</li>

              <li class="white--text font-weight-bold">
                Where does it come from?
              </li>

              <li class="white--text font-weight-bold">
                Where can I get some?
              </li>

              <li class="white--text font-weight-bold">Lifetime Warranty</li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" sm="4" md="4" xl="4" lg="4"> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
* ::not(i) {
  font-family: 'Nunito', sans-serif;
  overflow-x: hidden !important;
  font-size: 16px;
  color: #161c2d;
  margin: 0;
  padding: 0;
}

#main-hero {
  height: 100%;
  width: 10000px;
  object-fit: contain;
  position: absolute;
  animation: linear infinite;
  animation-name: run;
  animation-duration: 5000s;
  background-image: url('https://images.unsplash.com/photo-1554747706-2e474e1ae0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
  background-repeat: repeat-x;
  overflow-x: hidden !important;
}

#main-hero-overlay {
  height: 100%;
  width: 10000px;
  background: #3736365d;
  z-index: 10;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}

@keyframes run {
  0% {
    left: 0;
  }
  100% {
    left: -10000%;
  }
}

@media screen and (max-width: 768px) {
  #main-hero {
    background-size: 40%;
  }
  .form-card {
    zoom: 90%;
  }
}
ul.hero_bullets {
  list-style: none;
}

ul.hero_bullets li {
  color: white;
  font-size: 20px;
  font-weight: 500;
  text-shadow: 1px 1px #000;
  margin-left: 16px;
}

ul.hero_bullets li:before {
  content: '✓';
  color: #f99849;
  font-weight: bold;
  padding-right: 20px;
}

.text-white {
  font-size: 42px;
  line-height: 1.3;
}

.para-desc {
  max-width: 600px;
  line-height: 1.6;
  font-size: 32px;
  text-shadow: 2px 2px #000;
  font-family: 'Nunito', sans-serif;
}

.form-btn {
  padding: 8px 20px;
  outline: none;
  text-decoration: none;
  font-size: 16px;
  letter-spacing: 0.5px;
  transition: all 0.3s;
  font-weight: 600;
  border-radius: 6px;
}
</style>
