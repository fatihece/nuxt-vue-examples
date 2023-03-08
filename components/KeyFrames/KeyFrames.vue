<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <form class="ui-form">
          <input class="ui-input" type="email" placeholder="your@email.com" />
          <button
            class="ui-button"
            type="button"
            onclick="setState('subscribing')"
          >
            <span>Subscribe</span>
          </button>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
:root {
  --color-gray: #8c97b7;
  --color-blue: #1c38f1;
  --color-green: #1fcdb0;
  --input-height: 3rem;
  //   0.3s: 0.3s;
  --transition-easing: cubic-bezier(0.5, 0, 0.5, 1);
  --animation-duration: 0.8s;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fbff;
  height: 100vh;
}

.ui-form {
  background: #fff;
  box-shadow: 0 0.5rem 1rem #0003;
  padding: 1rem;
  border-radius: 0.25rem;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;
  grid-template-areas: 'input button';
  transition: all 0.3s cubic-bezier(0.5, 0, 0.5, 1);
  will-change: transform;

  color: #8c97b7;
  &:focus-within {
    color: #1c38f1;
  }

  animation: slide-up 0.3s cubic-bezier(0.5, 0, 0.5, 1);

  .ui-input,
  .ui-button {
    animation-name: shake;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
    animation-delay: 1s;
  }
}

.ui-input {
  grid-area: input;
  padding: 0 1rem;
  height: 3rem;
  border: 2px solid #1c38f1;
  border-radius: 0.25rem;
  outline: none;
  transition: inherit;

  &:invalid:not(:focus) {
    animation: shake 1s;
  }
}

.ui-button {
  grid-area: button;
  border: none;
  padding: 0 1rem;
  color: white;
  font-weight: bold;
  border-radius: 0.25rem;
  height: 3rem;
  background-color: #1c38f1;
  transition: inherit;
}

[data-show]:not([data-active]) {
  display: none;
}

.ui-form {
  overflow: hidden;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes shake {
  20%,
  40%,
  60%,
  80% {
    transform: translateX(1%);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-1%);
  }
  from,
  to {
    transform: none;
  }
}
</style>
