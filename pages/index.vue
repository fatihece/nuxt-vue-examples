<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row justify="center" align="center">
      <HeroOne></HeroOne>
      <v-col cols="12" class="imgHover">
        <v-row class="fill-height" align="center" justify="center">
          <template v-for="(item, index) in items">
            <v-col :key="index" cols="12" md="4">
              <v-hover v-slot="{ isHovering, props }">
                <v-card
                  :elevation="isHovering ? 12 : 2"
                  :class="{ 'on-hover': isHovering }"
                  v-bind="props"
                >
                  <v-img :src="item.img" height="225px" cover> </v-img>
                  <v-card-title> Background Examples</v-card-title>

                  <v-card-subtitle> 15/12/2022</v-card-subtitle>
                  <v-card-text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    rem saepe sapiente deleniti, odio non laborum fuga.
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-col>
          </template>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HeroOne from '~/components/HeroComponents/HeroOne.vue'

export default {
  name: 'IndexPage',
  components: {
    HeroOne,
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
