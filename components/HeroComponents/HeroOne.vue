<template>
  <v-container fluid style="margin-top: -50px">
    <div class="head">
      <v-row>
        <v-col cols="5">
          <div style="position: relative" class="mt-16">
            <h1 class="text-grey">Hello,</h1>
            <h1 class="text-white">I'm Ece Naz</h1>
            <span class="text-grey">Web Designer & Developer</span><br />

            <v-btn tile dark class="text-orange mt-8" variant="outlined">
              Contact me
            </v-btn>
          </div>
        </v-col>
        <v-col cols="2">
          <div
            style="
              position: absolute;
              z-index: 9999;
              bottom: 0;
              margin-left: auto;
              margin-right: auto;
              left: 0;
              right: 0;
              text-align: center;
            "
            class="mt-16"
          >
            <v-icon color="#fff">fas fa-angles-down</v-icon>
          </div>
        </v-col>
        <v-col cols="5">
          <div
            style="position: relative; z-index: 9999"
            class="mt-16 d-flex justify-center align-center"
          >
            <v-img
              src="images/i1.jpg"
              class="rounded-circle"
              contain
              max-height="300"
              max-width="300"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped>
.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
}
.head:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, 7deg);
}
.head:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, -7deg);
}
</style>
