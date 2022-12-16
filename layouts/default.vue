<template>
  <v-app style="z-index: 9999">
    <v-main>
      <v-container fluid class="pa-0 ma-0">
        <NavBar></NavBar>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer class="blue-grey white--text">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import '~/assets/style.css'
export default {
  name: 'DefaultLayout',
  components: {
    NavBar,
  },
  data() {
    return {
      fixed: true,
    }
  },
}
</script>
