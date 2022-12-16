<template>
  <v-container>
    <v-row>
      <HeroOne></HeroOne>
    </v-row>
    <v-row style="height: 100%" class="mt-16">
      <BackgroundOne></BackgroundOne>
    </v-row>
    <v-container fluid class="pa-0 mt-16">
      <BackgroundTwo></BackgroundTwo>
    </v-container>
  </v-container>
</template>

<script>
import HeroOne from '~/components/HeroComponents/HeroOne.vue'
import BackgroundOne from '~/components/BackgroundSections/BackgroundOne.vue'
import BackgroundTwo from '~/components/BackgroundSections/BackgroundTwo.vue'
export default {
  components: {
    HeroOne,
    BackgroundOne,
    BackgroundTwo,
  },
}
</script>

<style></style>
