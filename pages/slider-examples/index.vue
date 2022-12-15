<template>
  <v-container>
    <v-row class="my-4 mt-10" justify="center">
      <v-col>
        <h3 class="text-center">You can see slide examples here</h3>
      </v-col>
    </v-row>
    <v-row>
      <SliderSection></SliderSection>
      <SliderWithDialog></SliderWithDialog>
      <SliderCard></SliderCard>
    </v-row>
  </v-container>
</template>

<script>
import SliderSection from '~/components/BlogSection/SliderSection.vue'
import SliderWithDialog from '~/components/BlogSection/SliderWithDialog.vue'
import SliderCard from '~/components/BlogSection/SliderCard.vue'
export default {
  components: {
    SliderSection,
    SliderWithDialog,
    SliderCard,
  },
}
</script>

<style></style>
