<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row justify="center" class="white py-8">
      <h1
        class="title"
        :style="$vuetify.breakpoint.smAndDown && 'font-size:3rem !important'"
      >
        Testimonials
      </h1>
    </v-row>
    <v-row
      justify="center"
      align="center"
      style="background: rgba(244, 209, 167, 0.7); height: 100%"
      class="pa-16"
    >
      <v-col
        v-for="(item, i) in comments"
        :key="i"
        cols="12"
        sm="6"
        md="3"
        class="pa-4 white mr-0 mr-sm-4 mb-4 rounded"
      >
        <div
          class="white rounded pa-4"
          style="min-height: 250px; position: relative"
        >
          <v-rating v-model="rating" color="orange darken-2" x-small></v-rating>
          <p class="font-italic font-weight-medium">{{ item.text }}</p>
        </div>
        <v-divider class="mb-4"></v-divider>
        <div class="d-flex align-center justify-start flex">
          <img
            class="rounded-circle"
            alt="Testimonials Avatar"
            :src="item.image"
            height="60px"
            width="60px"
          />
          <p class="ml-2 font-italic text-h6 mb-0">{{ item.name }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    rating: 5,
    comments: [
      {
        text: '"Working with your company has been nothing short of fantastic. They’re always reliable, available, and transparent. There’s no hesitation in recommending them to my friends and family."',
        image: 'images/testimonials/story1.jpg',
        name: 'Ece N.',
      },
      {
        text: '"5 star service and 5 star team. Love my new closet and am anxiously awaiting my mom’s closet transformation next!"',
        image: 'images/testimonials/story2.jpg',
        name: 'John D.',
      },
      {
        text: '"Incredibly efficient process with lots of attention to detail. I really felt like I had their undivided care and attention. My wife and I are thoroughly enjoying our new master closet and pantry. Thanks again!"',
        image: 'images/testimonials/story3.jpg',
        name: 'Jonny K.',
      },
    ],
  }),
}
</script>

<style scoped>
.title {
  font-weight: 500 !important;
  font-size: 4rem !important;
}
.card-actions {
  position: absolute;
  bottom: 0;
  padding: 12px;
}

.line {
  width: 80%;
  margin: auto;
  height: 3px;
}
</style>
