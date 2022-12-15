<template>
  <v-container>
    <v-row class="my-4 mt-10">
      <v-col>
        <h3>You can hover on image to see inner zoom effect</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <div class="d-flex justify-center mb-2 mb-md-0 img-container">
          <img src="images/i1.jpg" alt="Facility Image" />
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="d-flex justify-center img-container">
          <img src="images/i1.jpg" alt="Facility Image" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped>
.img-container {
  display: inline-block;
  overflow: hidden;
  width: 100%;
  border-radius: 4px;
}

.img-container img {
  display: block;
  transition: transform 0.4s; /* smoother zoom */
  width: 100%;
}
.img-container:hover img {
  transform: scale(1.1) rotate(4deg);
  transform-origin: 50% 50%;
}
</style>
