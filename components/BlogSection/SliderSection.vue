<template>
  <v-row align="center" justify="center" class="my-4">
    <v-col
      cols="12"
      md="8"
      class="d-flex flex-wrap justify-center align-center px-0"
    >
      <v-sheet
        class="mx-auto transparent"
        elevation="0"
        :max-width="
          $vuetify.breakpoint.width < 600
            ? 380
            : 800 && $vuetify.breakpoint.width < 1025
            ? 800
            : 1200
        "
      >
        <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
          <v-slide-item v-for="(items, i) in slideItems" :key="i">
            <v-card class="ma-4">
              <v-row class="fill-height" align="center" justify="center">
                <v-img :src="items.image" :max-height="400" :max-width="340">
                </v-img>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    model: null,
    slideItems: [
      { image: 'images/i1.jpg' },
      { image: 'images/i1.jpg' },
      { image: 'images/i1.jpg' },
      { image: 'images/i1.jpg' },
      { image: 'images/i1.jpg' },
      { image: 'images/i1.jpg' },
      { image: 'images/i1.jpg' },
      { image: 'images/i1.jpg' },
    ],
  }),
}
</script>

<style></style>
