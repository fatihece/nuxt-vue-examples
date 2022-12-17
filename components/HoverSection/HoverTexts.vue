<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex justify-center align-center">
        <h1 class="title-underline">HOVERME!</h1>
        <h1 class="title-underline-2">HOVERME!</h1>
        <h1 class="title-underline-3">HOVERME!</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped>
.title-underline {
  display: inline-block;
  position: relative;
  color: #3498db;
  font-size: 40px;
  cursor: pointer;
  margin-left: 40px;
}

.title-underline::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #3498db;
  transform: scaleX(0);
  transition: transform 0.3s ease-out;
}

.title-underline:hover::after {
  transform: scaleX(1);
}

.title-underline-2 {
  display: inline-block;
  position: relative;
  color: #3498db;
  font-size: 40px;
  cursor: pointer;
  margin-left: 40px;
}

.title-underline-2::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #3498db;
  transform: scaleX(0);
  transform-origin: bottom left;
  transition: transform 0.3s ease-out;
}

.title-underline-2:hover::after {
  transform: scaleX(1);
}
.title-underline-3 {
  display: inline-block;
  position: relative;
  color: #3498db;
  font-size: 40px;
  cursor: pointer;
  margin-left: 40px;
}

.title-underline-3::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #3498db;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}

.title-underline-3:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
