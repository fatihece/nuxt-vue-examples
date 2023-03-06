<template>
  <div>
    <position-background></position-background>
    <companies-section></companies-section>
    <v-container fluid class="pa-0 ma-0 black">
      <v-row justify="center" class="py-12">
        <v-col cols="12" sm="8" class="text-center counter-wrapper">
          <h2 class="mb-4">Our website will be open soon</h2>
          <p class="white--text pa-0 ma-0 mb-4">Ready for updates!</p>

          <CountDown></CountDown>

          <a
            class="font-weight-bold inquire-btn"
            aria-label="Contact Us!"
            href=""
            >Contact Us!
          </a>
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-container fluid pa-0 ma-0>
      <v-row
        ><v-col class="pa-0">
          <section class="orange-banner">
            <v-container fluid pa-0 ma-0>
              <v-row justify="center">
                <v-col md="8" class="">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, voluptatum.
                  </p>
                  <p class="font-italic" style="font-size: 24px">
                    Expires {{ expireDate }}
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </section>
        </v-col></v-row
      >
    </v-container> -->
  </div>
</template>

<script>
import PositionBackground from '~/components/BackgroundSections/PositionBackground.vue'
import CompaniesSection from '~/components/CompaniesSection/CompaniesSection.vue'
import CountDown from '~/components/CountDown/CountDown.vue'
export default {
  components: {
    PositionBackground,
    CompaniesSection,
    CountDown,
  },
  data: () => ({}),
  computed: {
    expireDate() {
      const dt = new Date()
      dt.setDate(dt.getDate() + 2)
      return (
        Number(dt.getMonth()) + 1 + '/' + dt.getDate() + '/' + dt.getFullYear()
      )
    },
  },
}
</script>

<style scoped>
.orange-banner {
  background-color: #fea054;
  text-align: center;
  font-family: 'Playfair Display', serif;
  padding: 12px 40px;
}
.orange-banner p {
  font-size: 32px;
  color: #000;
  margin-bottom: 0;
  font-weight: 600;
}

.counter-wrapper h2 {
  color: #e86a09;
  font-family: Poppins;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  line-height: 1;
}

.counter-wrapper p {
  font-size: 24px;
  font-weight: 500;
}

.inquire-btn {
  padding: 12px 24px;
  color: #ff9001;
  font-size: 16px;
  background-color: #fff;
  outline: none;
  border: none !important;
  border: 2px solid white;
}

@media only screen and (max-width: 600px) {
  .counter-wrapper h2 {
    padding: 0 24px;
  }
}
</style>
