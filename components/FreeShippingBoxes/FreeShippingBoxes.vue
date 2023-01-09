<template>
  <v-container class="py-10">
    <v-row justify="center" align="center">
      <v-col v-for="(item, i) in boxItems" :key="i">
        <div class="d-flex justify-center align-center mb-4">
          <div
            class="text-center py-8"
            style="
              border: 1px solid #e7e7e7;
              max-width: 250px;
              min-width: 250px;
              border-radius: 14px;
              position: relative;
              padding: 20px !important;
            "
          >
            <div
              class="mb-4"
              style="
                position: absolute;
                top: -40px;

                left: 80px;
                padding-left: 10px !important;
                padding-right: 10px !important;
                z-index: 1000;
                background: #fff;
              "
            >
              <v-icon size="56" color="#C5785E" class="my-3">{{
                item.icon
              }}</v-icon>
            </div>
            <div class="font-weight-bold">
              <h5
                class="text-h5 font-weight-bold mt-6 mb-2 text-uppercase"
                style="color: #24535e"
              >
                {{ item.title }}
              </h5>
            </div>
            <div>
              <p
                class="font-weight-light text-uppercase"
                style="color: #24535e"
              >
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    boxItems: [
      { icon: 'fa-truck', title: 'TUNED', text: 'BY EXPERTS' },
      { icon: 'fa-star', title: 'Weather', text: 'Resistant' },
      { icon: 'fa-clock', title: 'Guarantee', text: '60 DAY SATISFACTION' },
      { icon: 'fa-gears', title: 'Loremon', text: 'CUSTOMIZABLE' },
    ],
  }),
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap');
*::not(i) {
  font-family: 'Poppins', sans-serif;
}
</style>
