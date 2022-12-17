<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex justify-center align-center">
        <button class="btn-1">Buton 1</button>
        <button class="ml-4 btn-2">Click Effect</button>
        <button class="ml-4 btn-3">Get Started</button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped>
.btn-1 {
  color: red;
  padding: 25px 20px 4px 20px;
  font-size: 30px;
  font-weight: 700;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
}
.btn-1::after {
  content: '';
  height: 2px;
  width: 0%;
  background-color: blue;
  display: block;
  transition: 0.5sn ease-in-out;
}

.btn-1:hover::after {
  content: '';
  height: 2px;
  width: 100%;
  background-color: blue;
  display: block;
}

.btn-2 {
  padding: 1rem 2rem;
  cursor: pointer;
  background: #3498db;
  color: #fff;
  border: none;
  outline: none;
}

.btn-2:hover {
  background-color: 3268acd;
}

.btn-2:active {
  transform: scale(0.95, 0.95);
}

.btn-3 {
  display: block;
  background-color: #745b37;
  color: #fff;
  font-weight: 700;
  padding: 1rem 2rem;
  cursor: pointer;
  border-top-left-radius: 35px;
  border-bottom-right-radius: 35px;
  position: relative;
  overflow: hidden;
}

.btn-3::after {
  content: 'BUY';
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #5b2a02;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}

.btn-3:hover::after {
  top: 0;
}
</style>
