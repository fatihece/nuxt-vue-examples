<template>
  <v-container fluid>
    <v-row
      class="fill-height imgHover"
      align="center"
      justify="center"
      cols="12"
    >
      <v-col v-for="(item, index) in items" :key="index" cols="12" md="4">
        <v-hover v-slot="{ hover }">
          <v-card
            :to="item.link"
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto blue-grey lighten-5"
          >
            <v-img :src="item.img" height="225px" cover> </v-img>
            <v-card-title>
              <span class="left-border"></span>{{ item.title }}</v-card-title
            >

            <v-card-subtitle> {{ formatDate(new Date()) }}</v-card-subtitle>
            <v-card-text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rem
              saepe sapiente deleniti, odio non laborum fuga.
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        img: 'images/blog/blog1.jpg',
        title: 'Background Examples',
        link: '/background-examples',
      },
      {
        img: 'images/blog/blog2.jpg',
        title: 'Hover Examples',
        link: '/hover-examples',
      },
      {
        img: 'images/blog/blog3.jpg',
        title: 'Slider Examples',
        link: '/slider-examples',
      },
      {
        img: 'images/blog/blog4.jpg',
        title: 'Carousel Examples',
        link: '/carousel-examples',
      },
      {
        img: 'images/blog/blog5.jpg',
        title: 'Inner Zoom ',
        link: '/inner-zoom',
      },
      {
        img: 'images/blog/blog6.jpg',
        title: 'Text Hover Examples',
        link: '/text-hover',
      },
      {
        img: 'images/blog/blog8.jpg',
        title: 'Parallax Examples',
        link: '/parallax',
      },
      {
        img: 'images/testimonials/story2.jpg',
        title: 'Testimonials Examples',
        link: '/testimonials',
      },
    ],
  }),
  methods: {
    formatDate(time) {
      const date = new Date(time)

      // Get year, month, and day part from the date
      const year = date.toLocaleString('default', { year: 'numeric' })
      const month = date.toLocaleString('default', { month: '2-digit' })
      const day = date.toLocaleString('default', { day: '2-digit' })

      return `${year}/${month}/${day}`
    },
  },
}
</script>

<style scoped>
.imgHover {
  padding: 0 200px;
}
/* .left-border {
  border-left: 5px solid purple;
  height: 16px;
  width: 8px;
} */
</style>
