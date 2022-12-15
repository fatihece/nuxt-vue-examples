<template>
  <div>
    <v-card v-show="error.statusCode === 404">
      <v-card-title class="d-flex justify-center align-center mt-8 text-h4">
        Page Not Found
      </v-card-title>
      <v-card-text class="d-flex justify-center align-center mt-8">
        <v-btn to="/" color="success" outlined aria-label="Go Home Button">
          Go Home
        </v-btn>
      </v-card-text>
      <v-card-text class="d-flex justify-center align-center pa-5 text-caption">
        <nuxt-img
          format="webp"
          src="images/error/404.jpg"
          width="400px"
          alt="404 Error"
        ></nuxt-img>
      </v-card-text>
    </v-card>
    <v-card v-show="error.statusCode === 401">
      <v-card-title class="d-flex justify-center align-center mt-8">
        Unauthorized page</v-card-title
      >
      <v-card-text class="d-flex justify-center align-center mt-8">
        <v-btn to="/" color="success" outlined aria-label="Go Home Button">
          Go Home
        </v-btn>
      </v-card-text>
      <v-card-text class="d-flex justify-center align-center pa-5 text-caption">
        <nuxt-img
          format="webp"
          src="images/error/401.jpg"
          width="401px"
          alt="404 Error"
        ></nuxt-img>
      </v-card-text>
    </v-card>
    <v-card v-show="error.statusCode === 500">
      <v-card-title class="d-flex justify-center align-center mt-8">
        Something went wrong</v-card-title
      >
      <v-card-text class="d-flex justify-center align-center mt-8">
        <v-btn to="/" color="success" outlined aria-label="Go Home Button">
          Go Home
        </v-btn>
      </v-card-text>
      <v-card-text class="d-flex justify-center align-center pa-5 text-caption">
        <nuxt-img
          format="webp"
          src="images/error/500.jpg"
          width="401px"
          alt="500 Error"
        ></nuxt-img>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ErrorLayout',
  props: {
    error: {
      type: Object,
      default: null,
      require: false,
    },
  },
}
</script>
