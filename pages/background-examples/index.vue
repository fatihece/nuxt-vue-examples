<template>
  <v-container>
    <BackgroundOne></BackgroundOne>
    <BackgroundTwo></BackgroundTwo>
    <BackgroundThree></BackgroundThree>
    <BackgroundFour></BackgroundFour>
    <div class="mt-16">
      <HeroOne></HeroOne>
    </div>
  </v-container>
</template>

<script>
import HeroOne from '~/components/HeroComponents/HeroOne.vue'
import BackgroundOne from '~/components/BackgroundSections/BackgroundOne.vue'
import BackgroundTwo from '~/components/BackgroundSections/BackgroundTwo.vue'
import BackgroundThree from '~/components/BackgroundSections/BackgroundThree.vue'
import BackgroundFour from '~/components/BackgroundSections/BackgroundFour.vue'
export default {
  components: {
    HeroOne,
    BackgroundOne,
    BackgroundTwo,
    BackgroundThree,
    BackgroundFour,
  },
}
</script>

<style></style>
