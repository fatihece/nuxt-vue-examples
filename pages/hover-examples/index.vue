<template>
  <v-container style="height: 100vh">
    <v-row>
      <v-col>
        <HoverButtons></HoverButtons>
        <HoverTexts></HoverTexts>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HoverButtons from '~/components/HoverSection/HoverButtons.vue'
import HoverTexts from '~/components/HoverSection/HoverTexts.vue'
export default {
  components: {
    HoverButtons,
    HoverTexts,
  },
}
</script>

<style></style>
