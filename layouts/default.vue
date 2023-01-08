<template>
  <v-app style="z-index: 9999">
    <v-main>
      <v-container fluid class="pa-0 ma-0">
        <NavBar></NavBar>
        <Nuxt />
      </v-container>
    </v-main>
    <NewsletterSignup></NewsletterSignup>
    <FooterSection></FooterSection>
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import FooterSection from '~/components/FooterSection.vue'
import NewsletterSignup from '~/components/NewsletterSignup/NewsletterSignup.vue'

import '~/assets/style.css'
export default {
  name: 'DefaultLayout',
  components: {
    NavBar,
    FooterSection,
    NewsletterSignup,
  },
  data() {
    return {
      fixed: true,
    }
  },
}
</script>
