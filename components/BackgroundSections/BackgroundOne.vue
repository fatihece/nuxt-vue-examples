<template>
  <v-container>
    <v-row>
      <div class="d-flex justify-center align-center background">
        <div class="">
          <h1 class="text-center">
            The browser renders this text on top of the background image!
          </h1>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped>
.background {
  /* image url  */
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/785239/background.jpg');

  /* make the image full height */
  height: 100%;

  /* center and scale the image */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /* use the following only if if you are able to scroll past the image to see a white area (this is the <body> peeking out) above or below the image */
  overflow: hidden;
  height: 100vh;
}

h1 {
  color: #fff;
  font-size: 3em;
  font-family: 'Arial', sans-serif;
}
</style>
