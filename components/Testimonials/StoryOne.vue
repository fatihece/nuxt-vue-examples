<template>
  <section class="testimonial-section">
    <v-container fluid class="pa-0 ma-0">
      <v-row
        class="d-flex flex-column align-center justify-center py-15 mt-4"
        style="background-color: #f8dfc1"
      >
        <v-col>
          <h2 class="testimonial-title text-center">Testimonials</h2>
        </v-col>

        <v-row justify="center" align="center">
          <v-col
            md="2"
            class="line ma-0 pa-0"
            :style="$vuetify.breakpoint.mdAndDown && 'display:none'"
          ></v-col>
          <v-col
            cols="12"
            md="8"
            :style="$vuetify.breakpoint.mdAndUp && 'padding:0'"
          >
            <div
              class="d-flex flex-column flex-md-row justify-center align-center text-center text-md-left"
            >
              <div
                class="line"
                :style="$vuetify.breakpoint.mdAndDown && 'display:none'"
              ></div>
              <v-row>
                <v-col cols="12" md="4" class="image-box">
                  <div class="border mr-4">
                    <v-img
                      :src="'images/testimonials/story1.jpg'"
                      class="rounded-circle"
                      alt="Testimonial Avatar"
                      width="100%"
                      height="100%"
                      style="z-index: 99; margin-left: 10px"
                    ></v-img>
                  </div>
                </v-col>
              </v-row>

              <v-col
                cols="12"
                md="6"
                :style="$vuetify.breakpoint.mdAndDown && 'padding: 0.5rem 1rem'"
              >
                <p class="mb-0 story-name">Debora M.</p>
                <p class="story-text">
                  "Working with Peach Closets has been nothing short of
                  fantastic. They’re always reliable, available, and
                  transparent. There’s no hesitation in recommending them to my
                  friends and family."
                </p>
              </v-col>
            </div>
          </v-col>
          <v-col
            md="2"
            :style="$vuetify.breakpoint.mdAndDown && 'display:none'"
          ></v-col>
        </v-row>

        <v-row justify="center" align="center">
          <v-col
            md="2"
            :style="$vuetify.breakpoint.mdAndDown && 'display:none'"
          ></v-col>
          <v-col
            cols="12"
            md="8"
            :style="$vuetify.breakpoint.mdAndUp && 'padding:0'"
          >
            <div
              class="d-flex flex-column flex-md-row-reverse justify-center align-center text-center text-md-left"
            >
              <div
                class="line"
                :style="$vuetify.breakpoint.mdAndDown && 'display:none'"
              ></div>
              <v-row>
                <v-col cols="12" md="4" class="image-box">
                  <div></div>

                  <div
                    class="border-reverse ml-4"
                    style="margin-left: auto"
                    :style="$vuetify.breakpoint.mdAndDown && 'left:0'"
                  >
                    <v-img
                      :src="'images/testimonials/story4.jpg'"
                      class="rounded-circle"
                      alt="Testimonial Avatar"
                      width="100%"
                      height="100%"
                      style="z-index: 99; margin-left: -10px"
                      :style="
                        $vuetify.breakpoint.mdAndDown && 'margin-left:10px'
                      "
                    ></v-img>
                  </div>
                </v-col>
              </v-row>

              <v-col
                cols="12"
                md="6"
                :style="
                  $vuetify.breakpoint.mdAndDown && 'padding: 0.5rem  1rem'
                "
              >
                <p class="mb-0 story-name">Tess S.</p>
                <p class="story-text">
                  "5 star service and 5 star team. Love my new closet and am
                  anxiously awaiting my mom’s closet transformation next!"
                </p>
              </v-col>
            </div>
          </v-col>
          <v-col
            md="2"
            class="line ma-0 pa-0"
            :style="$vuetify.breakpoint.mdAndDown && 'display:none'"
          ></v-col>
        </v-row>

        <v-row justify="center" align="center">
          <v-col
            md="2"
            class="line ma-0 pa-0"
            :style="$vuetify.breakpoint.mdAndDown && 'display:none'"
          ></v-col>
          <v-col
            cols="12"
            md="8"
            :style="$vuetify.breakpoint.mdAndUp && 'padding:0'"
          >
            <div
              class="d-flex flex-column flex-md-row justify-center align-center text-center text-md-left"
            >
              <div
                class="line"
                :style="$vuetify.breakpoint.mdAndDown && 'display:none'"
              ></div>

              <v-row>
                <v-col cols="12" md="4" class="image-box">
                  <div class="border mr-4">
                    <v-img
                      :src="'images/testimonials/story3.jpg'"
                      class="rounded-circle"
                      alt="Testimonial Avatar"
                      width="100%"
                      height="100%"
                      style="z-index: 99; margin-left: 10px"
                    ></v-img>
                  </div>
                </v-col>
              </v-row>

              <v-col
                cols="12"
                md="6"
                :style="
                  $vuetify.breakpoint.mdAndDown && 'padding: 0.5rem  1rem'
                "
              >
                <p class="mb-0 story-name">Jon K.</p>
                <p class="story-text">
                  "Incredibly efficient process with lots of attention to
                  detail. I really felt like I had their undivided care and
                  attention. My wife and I are thoroughly enjoying our new
                  master closet and pantry. Thanks again!"
                </p>
              </v-col>
            </div>
          </v-col>
          <v-col
            md="2"
            :style="$vuetify.breakpoint.mdAndDown && 'display:none'"
          ></v-col>
        </v-row>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.testimonial-title {
  font-family: Great Vibes, cursive;
  font-weight: 400;
  font-size: 80px;
}

.story-name {
  font-style: italic;
  font-family: 'Poppins';
  font-size: 30px;
  font-weight: 700;
}

.story-text {
  font-style: italic;
  font-family: 'Poppins';
  font-size: 20px;
  font-weight: 500;
}

.border {
  width: 220px;
  height: 220px;
  background: black;
  border-radius: 100%;
  padding-bottom: 4px;
}
.border-reverse {
  width: 220px;
  height: 220px;
  background: black;
  border-radius: 100%;
  padding-bottom: 4px;
}
.image-box {
  position: relative;
  margin-left: -2px;
}

.line {
  height: 0.5rem;
  background-color: #000;
  display: block;
  width: 100%;
}
</style>
