<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon class="d-flex d-sm-none" @click="drawer = true">
      </v-app-bar-nav-icon>
      <v-toolbar-title>My Blog</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text icon
        ><v-icon class="mr-1">fa-magnifying-glass</v-icon>
      </v-btn>
      <v-icon>fa-edit</v-icon>
      <v-btn text icon>
        <v-icon>fa elipsis-vertical</v-icon>
      </v-btn>
      <v-btn>Search</v-btn>
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
export default {
  data: () => ({
    drawer: false,
    tab: null,
    items: ['Home', 'About', 'Examples', 'Contact'],
  }),
}
</script>

<style></style>
