<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon class="d-flex d-sm-none" @click="drawer = true">
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        <nuxt-link to="/">fth blog</nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/about">About</v-btn>
      <v-btn text to="/examples">Examples</v-btn>
      <v-btn text to="/contact">Contact</v-btn>
      <v-spacer></v-spacer>
      <v-autocomplete
        v-model="model"
        clearable
        hide-selected
        item-text="title"
        no-filter
        label="Search any component..."
        class="elevation-0 rounded mt-5"
        :style="'max-width:360px'"
        outlined
        dense
        append-icon=""
        :items="filters"
        :search-input.sync="search"
        return-object
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
      console.log(val)
    },
    model(val) {
      console.log('model', val)
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
