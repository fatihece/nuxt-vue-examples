<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row
      style="background-color: #c5785e"
      align="center"
      justify="center"
      class="pa-0 ma-0"
    >
      <v-col cols="12" lg="5">
        <div class="d-flex flex-column flex-sm-row align-center justify-center">
          <img src="images/Newsletter.svg" alt="Join our newsletter" />
          <div class="ml-4 text-center text-sm-left">
            <h5 class="newsletter-title">Join our newsletter now!</h5>
            <p class="text-caption newsletter-register">
              Register now and get our latest updates and promos.
            </p>
          </div>
        </div>
      </v-col>
      <VCol lg="5" cols="12">
        <div
          class="main-footer__newsletter d-flex justify-center flex-column align-center"
        >
          <v-form
            ref="subcscribeForm"
            @submit.prevent="(e) => e.preventDefault()"
          >
            <div class="form d-flex flex-column">
              <v-text-field
                v-model="name"
                type="text"
                placeholder="Enter your full name"
                :rules="nameRules"
                class="pa-0 ma-0 rounded my-1 news-input"
                outlined
                hide-details="auto"
                dense
                @keypress="isNumber($event)"
              />
              <v-text-field
                v-model="email"
                type="text"
                placeholder="Enter your e-mail"
                :rules="emailRules"
                hide-details="auto"
                dense
                outlined
                class="pa-0 ma-0 rounded my-0"
              />
              <v-text-field
                v-model="phone"
                v-mask="'###-###-####'"
                type="text"
                placeholder="Enter your phone number"
                :rules="phoneRules"
                hide-details="auto"
                dense
                outlined
                solo
                class="pa-0 ma-0 rounded my-1"
              />
              <v-btn
                class="rounded white--text text-capitalize"
                block
                color="#24535E"
                @click="
                  () => {
                    if ($refs.subcscribeForm.validate()) {
                      setSubscribe()
                    }
                  }
                "
                >Submit</v-btn
              >
            </div>
          </v-form>
        </div>

        <v-snackbar
          v-model="snackbar"
          outlined
          text
          bottom
          center
          color="success"
          :timeout="3000"
          :type="subscribe.status"
        >
          {{ subscribe.message }}
        </v-snackbar>
      </VCol></v-row
    >
  </v-container>
</template>

<script>
import { socialMediaLinks } from '~/assets/constants'

export default {
  name: 'NewsletterSignup',
  data: () => ({
    socialMediaLinks,
    email: '',
    phone: '',
    name: '',
    snackbar: false,
    subscribe: {
      message: '',
      status: 'success',
    },
  }),
  mounted() {},
  methods: {
    async setSubscribe() {
      await this.$axios
        .post('/subscribe', {
          email: this.email,
          phone: this.phone,
          name: this.name.trim(),
        })
        .then((res) => {
          this.snackbar = true
          this.subscribe.message = res.data.message
          this.subscribe.status = res.data.status
          this.email = ''
          this.phone = ''
          this.name = ''
          this.$refs.subcscribeForm.reset()
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  margin-top: 20px;
  min-width: 380px;

  .v-text-field {
    text-decoration: none;
    display: inline-block;
    width: 100%;
    border-width: 0;
    font-weight: 500;
    background-color: white;

    &::placeholder {
      color: #a7a7a7;
      font-size: 14px !important;
    }

    &:focus {
      outline-width: 0;
    }
  }
}
.newsletter-title {
  font-family: 'Montserrat', sans-serif !important;
  font-style: normal;
  font-weight: 700;
  font-size: 32px !important;
  color: #fff;
}

.newsletter-register {
  font-family: 'Poppins', sans-serif !important;
  font-style: normal;
  font-weight: 400;
  color: #fff;
}

.v-text-field--placeholder {
  font-size: 14px !important;
}
</style>
