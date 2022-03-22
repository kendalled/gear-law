<template>
  <!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
  <section class="relative pb-12 bg-white" aria-labelledby="contact-heading">
    <div class="absolute w-full h-1/2 bg-warm-gray-50" aria-hidden="true" />
    <!-- Decorative dot pattern -->
    <div class="absolute px-4 mx-auto mt-24 md:relative max-w-7xl sm:px-6 lg:px-8">
      <SubText :text="'get started'" />
      <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
        <h3 class="mt-2 text-3xl font-extrabold tracking-tight text-gray-800 playfair sm:text-4xl">
          Schedule your free consultation in minutes.
        </h3>
        <p class="text-xl text-gray-600">
          With over five decades of combined experience on your side, one of our experienced attorneys will fight tirelessly for your case.
        </p>
      </div>
      <svg
        class="absolute top-0 right-0 z-0 transform translate-x-1/2 -translate-y-16 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
        width="404"
        height="384"
        fill="none"
        viewBox="0 0 404 384"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-warm-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
      </svg>
    </div>
    <FormOnly class="mt-12" />
  </section>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>
