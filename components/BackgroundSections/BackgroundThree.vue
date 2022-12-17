<template>
  <v-container fluid class="home-hero" style="max-height: 100vh">
    <v-row justify="center" align="center" class="pa-5">
      <div class="display-4 font-weight-black white--text text-xs-center">
        HEALTHY MEALS
      </div>
      <div class="display-4 font-weight-black white--text text-xs-center mb-3">
        FOR YOUR TABLE
      </div>
      <div class="display-1 font-weight-bold white--text text-xs-center">
        Finally be a foodie at home with fresh, chef-prepared meals delivered
        daily to your door.
      </div>
      <v-btn fab class="mt-5 brown darken-4">
        <v-icon large color="white">fa-caret-down</v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeHero',
}
</script>

<style scoped>
.home-hero {
  background: url('http://source.unsplash.com/0BhSKStVtdM');
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
}
</style>
