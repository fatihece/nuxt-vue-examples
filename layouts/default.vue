<template>
  <v-app>
    <v-main>
      <v-container>
        <NavBar></NavBar>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
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
