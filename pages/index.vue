<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row justify="center" align="center" class="py-4">
      <BlogDetails></BlogDetails>
    </v-row>
  </v-container>
</template>

<script>
import BlogDetails from '~/components/BlogSection/BlogDetails.vue'

export default {
  name: 'IndexPage',
  components: {
    BlogDetails,
  },
  data: () => ({
    items: [
      {
        img: 'images/i1.jpg',
      },
      {
        img: 'images/i1.jpg',
      },
      {
        img: 'images/i1.jpg',
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
