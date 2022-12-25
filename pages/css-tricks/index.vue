<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row justify="center" align="center" class="d-flex flex-column">
      <v-col class="d-flex justify-center">
        <h3 class="animate">Neffex</h3>
      </v-col>

      <v-col class="d-flex justify-center">
        <div class="blend">
          <img src="images/slider/s1.jpg" alt="" />
          <h1>
            NEW <br />
            CITY
          </h1>
        </div>
      </v-col>
      <v-col class="pa-12">
        <h6>Shake when input value invalid</h6>
        <input type="text" pattern="[a-z]*" placeholder="Name..." />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped>
.animate {
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 20%,
    #ff1361 67%,
    #fff800 100%
  );
  /* background-size: auto auto; */
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textAnimation 2s linear infinite;
  display: inline-block;
  font-size: 140px;
}

@keyframes textAnimation {
  to {
    background-position: 200% center;
  }
}

input {
  border: 1px solid black;
  padding: 12px;
  border-radius: 8px;
}

input:invalid {
  animation: shake 0.3s;
}

@keyframes shake {
  25% {
    transform: translateX(4px);
  }
  50% {
    transform: translateX(-4px);
  }
  75% {
    transform: translateX(4px);
  }
}

.blend {
  height: 100vh;
  display: flex;
}

.blend img {
  height: 100vh;
  position: absolute;
  filter: contrast(1.2);
}

.blend h1 {
  mix-blend-mode: overlay;
  color: #fff;
  font: 800 5rem 'Montserrat';
  margin: 25px;
}
</style>
