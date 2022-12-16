<template>
  <v-container fluid>
    <StoryOne></StoryOne>
    <StoryTwo></StoryTwo>
    <StoryThree></StoryThree>
  </v-container>
</template>

<script>
import StoryOne from '~/components/Testimonials/StoryOne.vue'
import StoryTwo from '~/components/Testimonials/StoryTwo.vue'
import StoryThree from '~/components/Testimonials/StoryThree.vue'
export default {
  components: {
    StoryOne,
    StoryTwo,
    StoryThree,
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Poppins:wght@100;200;300;400;700&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}
</style>
