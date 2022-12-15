<template>
  <v-container>
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
            class="mx-auto"
          >
            <v-img :src="item.img" height="225px" cover> </v-img>
            <v-card-title>{{ item.title }}</v-card-title>

            <v-card-subtitle> 15/12/2022</v-card-subtitle>
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
        img: 'images/i1.jpg',
        title: 'Background Examples',
        link: '/background-examples',
      },
      {
        img: 'images/i1.jpg',
        title: 'Hover Examples',
        link: '/hover-examples',
      },
      {
        img: 'images/i1.jpg',
        title: 'Slider Examples',
        link: '/slider-examples',
      },
      {
        img: 'images/i1.jpg',
        title: 'Carousel Examples',
        link: '/carousel-examples',
      },
      {
        img: 'images/i1.jpg',
        title: 'Inner Zoom ',
        link: '/inner-zoom',
      },
      {
        img: 'images/i1.jpg',
        title: 'Text Hover Examples',
        link: '/text-hover',
      },
      {
        img: 'images/i1.jpg',
        title: 'Parallax Examples',
        link: '/parallax',
      },
    ],
  }),
}
</script>

<style scoped>
.imgHover {
  padding: 0 200px;
}
</style>
