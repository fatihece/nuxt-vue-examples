<template>
  <div class="countdown-container">
    <div class="d-flex flex-column align-center">
      <p class="pa-0 ma-0">{{ days % 365 }}</p>
      <span class="white--text font-weight-regular">Days</span>
    </div>
    <span class="white--text mb-6">:</span>
    <div class="d-flex flex-column align-center">
      <p class="pa-0 ma-0">{{ hours % 24 }}</p>
      <span class="white--text font-weight-regular">Hour</span>
    </div>
    <span class="white--text mb-6">:</span>
    <div class="d-flex flex-column align-center">
      <p class="pa-0 ma-0">{{ minutes % 60 }}</p>
      <span class="white--text font-weight-regular">Min</span>
    </div>
    <span class="white--text mb-6">:</span>
    <div class="d-flex flex-column align-center">
      <p class="pa-0 ma-0">
        {{ seconds % 60 }}
      </p>
      <span class="white--text font-weight-regular">Sec</span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const days = ref(0)
    const hours = ref(0)
    const minutes = ref(0)
    const seconds = ref(0)
    const lunchDate = new Date('12 March 2023')
    setInterval(() => {
      const currentDate = new Date()
      const lunchTime = lunchDate - currentDate
      seconds.value = parseInt(lunchTime / 1000)
      minutes.value = parseInt(seconds.value / 60)
      hours.value = parseInt(minutes.value / 60)
      days.value = parseInt(hours.value / 24)
    }, 1000)
    return { days, hours, minutes, seconds }
  },
}
</script>

<style>
.countdown-container {
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 48px;
}
.countdown-container p {
  font-family: 'Poppins';
  border-radius: 999px;
  font-size: 28px;
  color: #fff;
  width: 72px;
  height: 72px;
  background-color: rgb(232, 106, 9);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
</style>
