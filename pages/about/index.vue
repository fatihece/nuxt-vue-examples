<template>
  <v-container style="height: 100vh">
    <v-row>
      <v-col cols="12">
        <v-col cols="12" class="d-flex justify-center align-center">
          <h2>About</h2>
        </v-col>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="6" class="d-flex justify-center">
            <img
              src="images/blog/blog1.jpg"
              style="max-height: 600px; max-width: 400px"
          /></v-col>
          <v-col cols="12" sm="6">
            <h5>About Me</h5>
            <h4 class="">I Am a Creative Web Designer</h4>
            <h4 class="">And Developer</h4>
            <p class="text-grey">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur, ullam perspiciatis fugiat temporibus laboriosam
              accusamus tempora repellendus sequi sed cum dolorum vero est.
              Placeat dicta architecto reiciendis est veniam. Unde.
            </p>
            <p class="text-grey">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur, ullam perspiciatis fugiat temporibus laboriosam
              accusamus tempora repellendus sequi sed cum dolorum vero est.
              Placeat dicta architecto reiciendis est veniam. Unde.
            </p>
            <v-btn tile dark color="orange" class="mt-4">
              Download Resume
            </v-btn>
          </v-col>
        </v-row>

        <v-col cols="12">
          <div class="first">
            <v-row>
              <v-col cols="12">
                <div class="child">
                  <v-btn color="#fbb87e"> <v-icon> fa-laptop</v-icon></v-btn>
                  <h3 class="ml-3 mt-4">Web Design</h3>
                  <p class="text-grey ml-3 mt-4 text-caption">
                    Lorem, ipsum dolor sit amet <br />consectetur adipisicing
                    <br />consectetur adipis
                  </p>
                </div>
                <div class="child">
                  <v-btn color="#fbb87e"><v-icon>fa-mobile-alt</v-icon> </v-btn>
                  <h3 class="ml-3 mt-4">App Design</h3>
                  <p class="text-grey ml-3 mt-4 text-caption">
                    Lorem, ipsum dolor sit amet <br />consectetur adipisicing
                    <br />consectetur adipis
                  </p>
                </div>
                <div class="child">
                  <v-btn color="#fbb87e"><v-icon>fa-camera</v-icon> </v-btn>
                  <h3 class="ml-3 mt-4">Photography</h3>
                  <p class="text-grey ml-3 mt-4 text-caption">
                    Lorem, ipsum dolor sit amet <br />consectetur adipisicing
                    <br />consectetur adipis
                  </p>
                </div>
              </v-col>
            </v-row>
            <v-divider></v-divider>
          </div>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped>
h2 {
  font-family: Great Vibes, cursive;
  font-size: 60px;
  font-weight: 500;
  width: 100%;
  text-align: center;
  margin-bottom: 25px;
}

h2::after {
  content: '';
  width: 100px;
  height: 4px;
  background-color: #000;
  margin: 0 auto;
  display: block;
}

.first {
  width: 100%;
  height: 280px;
  text-align: center;
  padding: 2rem 2rem;
}
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: center;
  margin-right: 8px;
}

.egg {
  display: block;
  margin-left: 100px;
  margin-top: 50px;
  width: 356px;
  height: 300px;
  background-color: #fbb87e;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
</style>
