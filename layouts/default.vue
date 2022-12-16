<template>
  <v-app style="z-index: 9999">
    <v-main>
      <v-container fluid class="pa-0 ma-0">
        <NavBar></NavBar>
        <Nuxt />
      </v-container>
    </v-main>
    <FooterSection></FooterSection>
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import FooterSection from '~/components/FooterSection.vue'

import '~/assets/style.css'
export default {
  name: 'DefaultLayout',
  components: {
    NavBar,
    FooterSection,
  },
  data() {
    return {
      fixed: true,
    }
  },
}
</script>
