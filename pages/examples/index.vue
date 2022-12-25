<template>
  <v-container fluid pa-0 ma-0>
    <v-row
      ><v-col class="pa-0">
        <section class="orange-banner">
          <v-container fluid pa-0 ma-0>
            <v-row justify="center">
              <v-col md="8" class="">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                  voluptatum.
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
  </v-container>
</template>

<script>
export default {
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
</style>
