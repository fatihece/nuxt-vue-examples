<template>
  <div>
    <v-app-bar app class="blue-grey white--text">
      <v-app-bar-nav-icon class="d-flex d-sm-none" @click="drawer = true">
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        <nuxt-link to="/">fth blog</nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/" class="white--text">Home</v-btn>
      <v-btn text to="/about" class="white--text">About</v-btn>
      <v-btn text to="/examples" class="white--text">Examples</v-btn>
      <v-btn text to="/contact" class="white--text">Contact</v-btn>
      <v-btn text to="/inspire" icon
        ><v-icon color="white">fa-comment-code</v-icon></v-btn
      >
      <v-spacer></v-spacer>
      <v-autocomplete
        v-model="model"
        clearable
        hide-selected
        item-text="title"
        no-filter
        label="Search any component..."
        class="elevation-0 rounded mt-5 white--text"
        :style="'max-width:360px'"
        outlined
        dense
        append-icon=""
        :items="filters"
        :search-input.sync="search"
        return-object
        background-color="white "
      >
        <template #prepend-inner>
          <div
            class="d-flex justify-center align-center"
            style="padding-top: 3px"
          >
            <v-icon size="18"> fas fa-search </v-icon>
          </div>
        </template>
      </v-autocomplete>
    </v-app-bar>
    <!-- Add a navigation bar -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title @click="tab = index">{{
              item
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- Navigation bar ends -->
  </div>
</template>

<script>
import { filters } from '~/assets/constants'
export default {
  data: () => ({
    model: '',
    filters,
    search: '',
    drawer: false,
    tab: null,
    items: ['Home', 'About', 'Examples', 'Contact'],
  }),
  watch: {
    search(val) {
      // console.log(val)
    },
    model(val) {
      // console.log('model', val)
      this.$router.push(val.link)
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>
