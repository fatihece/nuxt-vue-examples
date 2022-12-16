<template>
  <v-footer
    class="d-flex flex-column justify-center align-center blue-grey white--text w-full py-12 overflow-hidden px-sm-6 px-lg-8 mt-12"
  >
    <ul
      class="-mx-5 -my-2 d-flex flex-wrap justify-center align-center text-white px-6 text-center"
    >
      <!--[-->
      <li class="pb-6 pb-lg-0 pr-6">
        <a href="/" class="hover:no-underline">Home</a>
      </li>
      <li class="pb-6 pb-lg-0 pr-6">
        <a href="/about" class="hover:no-underline">About</a>
      </li>
      <li class="pb-6 pb-lg-0 pr-6">
        <a href="/examples" class="hover:no-underline">Examples</a>
      </li>
      <li class="pb-6 pb-lg-0 pr-6">
        <a href="/contact" class="hover:no-underline">Contact</a>
      </li>

      <!--]-->
    </ul>
    <ul class="mt-8 d-flex flex-wrap justify-center mb-6 px-6">
      <li class="mr-4">
        <a
          href="https://www.linkedin.com/in/fatihy%C3%BCrek/"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="linkedIn"
          ><svg
            id="linkedIn"
            enable-background="new 0 0 128 128"
            height="42px"
            version="1.1"
            viewBox="0 0 128 128"
            width="42px"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="h-10 w-10"
          >
            <g><circle cx="64" cy="64" fill="#0076B4" r="64"></circle></g>
            <g>
              <path
                d="M44.119,95.934H29.184V47.93h14.935V95.934z M36.656,41.371c-4.792,0-8.656-3.876-8.656-8.653   c0-4.775,3.864-8.652,8.656-8.652c4.771,0,8.646,3.876,8.646,8.652C45.303,37.495,41.428,41.371,36.656,41.371z M100,95.934H85.081   V72.59c0-5.566-0.097-12.728-7.752-12.728c-7.765,0-8.948,6.065-8.948,12.33v23.742H53.479V47.93H67.78v6.562h0.204   c1.99-3.774,6.857-7.753,14.117-7.753c15.105,0,17.897,9.939,17.897,22.868L100,95.934L100,95.934z"
                fill="#FFFFFF"
              ></path>
            </g></svg
        ></a>
      </li>
      <li>
        <a
          href="https://github.com/fatihece"
          aria-label="github"
          target="_blank"
          rel="nofollow noopener noreferrer"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="fill-white github"
            viewBox="0 0 24 24"
            width="42px"
            height="42px"
          >
            <path
              fill="white"
              fill-rule="evenodd"
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
              class="drop-shadow"
              clip-rule="evenodd"
            ></path></svg
        ></a>
      </li>
    </ul>
    <p
      class="mt-4 text-center text--disabled text-h6 grey--text text--lighten-5"
    >
      <span>&copy; {{ new Date().getFullYear() }}</span> Fatih Yurek, Istanbul,
      Turkey
    </p>
  </v-footer>
</template>

<script>
export default {}
</script>

<style scoped>
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: 700;
}
</style>
