<template>
  <v-container fluid>
    <v-row class="my-4 mt-10" justify="center">
      <v-col>
        <h3 class="text-center">
          You see slider-group with card component. And olsa you can customize
          prev/next buttons
        </h3>
      </v-col>
    </v-row>
    <v-sheet class="mt-5 mx-auto" elevation="8" max-width="90%">
      <v-slide-group mobile-break="1000" show-arrows center-active>
        <template #next>
          <v-icon color="orange" large>fa-hand-point-right</v-icon>
        </template>
        <template #prev>
          <v-icon color="orange" large>fa-hand-point-left</v-icon>
        </template>
        <v-slide-item v-for="(slide, i) in slides" :key="i">
          <v-card width="200" class="ma-4">
            <v-card-title>
              <v-img height="200px" contain :src="slide.image"></v-img>
            </v-card-title>
            <v-card-text>
              <b>{{ slide.price }}€</b>
            </v-card-text>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    slides: [
      {
        title: 'TERRA PC-BUSINESS 5050S',
        image:
          'https://www.wortmann.de/content/files/images/ProductImages/medium/item100955910000.jpg',
        price: 559,
      },
      {
        title: 'TERRA PC-BUSINESS 5000',
        image:
          'https://www.wortmann.de/content/files/images/ProductImages/medium/item100956890000.jpg',
        price: 609,
      },
      {
        title: 'TERRA PC-Micro 6000SE SILENT GREENLINE ',
        image:
          'https://www.wortmann.de/content/files/images/ProductImages/medium/item100955650000.jpg',
        price: 689,
      },
      {
        title: 'HP ENVY 5030 multifunction printer',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/81DzbjMdK8L._AC_SX569_.jpg',
        price: 66,
      },
      {
        title: 'TERRA PC-BUSINESS 5050S',
        image:
          'https://www.wortmann.de/content/files/images/ProductImages/medium/item100955910000.jpg',
        price: 559,
      },
      {
        title: 'TERRA PC-BUSINESS 5000',
        image:
          'https://www.wortmann.de/content/files/images/ProductImages/medium/item100956890000.jpg',
        price: 609,
      },
      {
        title: 'TERRA PC-Micro 6000SE SILENT GREENLINE ',
        image:
          'https://www.wortmann.de/content/files/images/ProductImages/medium/item100955650000.jpg',
        price: 689,
      },
      {
        title: 'HP ENVY 5030 multifunction printer',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/81DzbjMdK8L._AC_SX569_.jpg',
        price: 66,
      },
    ],
  }),
}
</script>

<style></style>
