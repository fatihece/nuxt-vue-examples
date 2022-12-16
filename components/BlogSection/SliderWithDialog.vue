<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row class="my-4 mt-10" justify="center">
      <v-col>
        <h3 class="text-center">
          This is a slider-group. And if you click any image in this group you
          open a dialig and a carousel.
        </h3>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="d-flex flex-wrap justify-center align-center">
        <v-slide-group class="pa-4" active-class="success" show-arrows>
          <v-slide-item
            v-for="(item, i) in items"
            :key="i"
            class="mr-4 rounded mb-2"
          >
            <div class="wrapper">
              <div class="hover-section" @click.stop="dialog = true">
                <v-img
                  height="120"
                  width="210"
                  :src="item.image"
                  alt="Sunny Day"
                >
                </v-img>
                <p class="text-center font-weight-bold text-subtitle-1 pa-3">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </v-slide-item>
        </v-slide-group>
        <v-dialog v-model="dialog">
          <v-carousel
            v-model="model"
            :height="$vuetify.breakpoint.height - 100"
          >
            <v-carousel-item
              v-for="(image, n) in items"
              :key="n"
              :src="image.image"
            >
            </v-carousel-item>
          </v-carousel>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,

    model: 0,
    items: [
      { image: 'images/slider/s1.jpg', text: 'Slider 1' },
      { image: 'images/slider/s2.jpg', text: 'Slider 2' },
      { image: 'images/slider/s3.jpg', text: 'Slider 3' },
      { image: 'images/slider/s4.jpg', text: 'Slider 4' },
      { image: 'images/slider/s5.jpg', text: 'Slider 5' },
      { image: 'images/slider/s6.jpg', text: 'Slider 6' },
      { image: 'images/slider/s7.jpg', text: 'Slider 7' },
      { image: 'images/slider/s8.jpg', text: 'Slider 8' },
    ],
  }),
}
</script>

<style scoped>
.wrapper {
  height: 120px;
  width: 210px;
  overflow: hidden;
}
.wrapper img {
  transition: all 0.5s ease;
}
.wrapper .hover-section {
  transition: all 0.5s ease;
  height: 170px;
}
.wrapper .hover-section:hover {
  transition: all 0.5s ease;
  margin-top: -50px;
}
.wrapper .hover-section:hover img {
  height: 90px;
  transition: all 0.5s ease;
}
.hover-section p:hover {
  color: #f99849;
}
</style>
