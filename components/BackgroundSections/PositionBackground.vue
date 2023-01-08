<template>
  <section>
    <VContainer
      fluid
      class="text-center d-flex justify-center align-center ma-0 pa-0"
    >
      <v-row>
        <img
          src="https://images.unsplash.com/photo-1554088559-b9c59b87915a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt=""
          width="100%"
          height="100%"
        />
        <v-col
          cols="12"
          md="8"
          class="d-flex justify-center align-center"
          style="position: absolute; top: 1%; left: 0"
        >
          <v-card flat class="transparent pa-2">
            <v-card-text class="text-left costomized-title mx-0 px-0">
              Lorem Ipsum,
            </v-card-text>
            <v-card-text class="text-left costomized-title2 py-3 mx-0 px-0">
              Hand-crafted <span class="costomized-title">Our Products</span>
            </v-card-text>
            <v-card-text class="text-left px-0 mx-0 customized-subtitle">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </v-card-text>
            <v-card-text
              class="text-left customized-subtitle-2 px-0 mx-0 py-0 pt-5"
              >Lorem ipsum dolor sit amet consectetur.
            </v-card-text>
            <v-card-text class="text-left px-0 mx-0">
              <v-btn
                to="#popular-products"
                text
                class="elevation-0 rounded outlined"
                style="
                  color: #c5785e;
                  border: 1px solid #c5785e;
                  padding: 32px 16px;
                "
              >
                Explore NOW
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </VContainer>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.costomized-title {
  font-family: 'Abril Fatface';
  font-style: normal;
  font-weight: 400;
  color: #fff !important;
  font-size: 40px;
  line-height: 65px;
}
.costomized-title2 {
  font-family: 'Abril Fatface';
  font-style: normal;
  color: #fff !important;
  font-size: 64px;
  font-weight: 400;
}

.customized-subtitle {
  font-family: 'American Typewriter';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 37px;
  color: #fff;
}
.customized-subtitle-2 {
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 43px;
  color: #f77d1a !important;
}
</style>
