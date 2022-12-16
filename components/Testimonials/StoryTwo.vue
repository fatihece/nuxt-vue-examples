<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row class="section">
      <v-col>
        <div class="text-center pb-2">
          <h2 class="title">What Our Customers Are Saying</h2>
        </div>
        <template>
          <v-carousel
            v-model="model"
            cycle
            interval="2000"
            :show-arrows="false"
            hide-delimiters
          >
            <v-carousel-item v-for="(comment, i) in comments" :key="i">
              <v-row
                class="fill-height flex-column"
                align="center"
                justify="center"
              >
                <p
                  class="text--secondary font-italic font-weight-bold text-center"
                  :style="{ width: '60%', padding: '0 10px' }"
                >
                  {{ comment.text }}
                </p>
                <img
                  :src="comment.image"
                  class="rounded-circle"
                  alt="TEstimonial Avatar"
                  width="65px"
                  height="65px"
                />
                <div class="text-center">
                  <v-rating
                    v-model="rating"
                    color="orange darken-2"
                    x-small
                  ></v-rating>
                </div>
                <span class="font-weight-bold orange--text text-darken-2">{{
                  comment.name
                }}</span>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </template>
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
        text: '"Working with your company has been a dream come true. I never thought my home would feel so comfortable and so me. Everything has a place. I get compliments every single time I have guests over."',
        image: 'images/testimonials/story2.jpg',
        name: '- Asli, Istanbul',
      },
      {
        text: '"Teresa did an outstanding job of customizing two layouts to meet our specific requirements.Installation was completed flawlessly by Sulo. Very tidy, and meticulous in his attention to detail. It came out FANTASTIC!I would strongly advise you to have a bespoke closet constructed."',
        image: 'images/testimonials/story3.jpg',
        name: '- Ece Naz, Tekirdag',
      },
    ],
  }),
}
</script>

<style scoped>
.section {
  padding: 100px 0;
  position: relative;
  background-color: #f8f9fc !important;
}

.title {
  letter-spacing: 0.5px;
  font-size: 30px !important;
}
</style>
