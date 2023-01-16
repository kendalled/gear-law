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
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
  <div class="overflow-hidden bg-white">
    <div class="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="absolute top-0 bottom-0 hidden w-screen lg:block bg-gray-50 left-3/4" />
      <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
        <div>
          <h2 class="text-base font-semibold tracking-wide text-blue-600 uppercase">
            Biography
          </h2>
          <h3 class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 playfair sm:text-4xl">
            {{ doc.title }}
          </h3>
        </div>
      </div>
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative lg:row-start-1 lg:col-start-2">
          <svg
            class="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
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
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
          </svg>
          <div class="relative mx-auto text-base max-w-prose lg:max-w-none">
            <figure>
              <!-- was: aspect-h-7 and messed w focal points -->
              <div class="aspect-w-12 aspect-h-11 lg:aspect-none">
                <ContentImage
                  :src="doc.img"
                  width="1184"
                  height="1376"
                  :alt="doc.title + ' portrait'"
                  class="object-cover object-top rounded-lg shadow-lg lg:object-center"
                />
              </div>
              <figcaption class="flex mt-3 text-sm text-gray-500">
                <!-- Heroicon name: solid/camera -->
                <svg class="flex-none w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                </svg>
                <span class="ml-2">Photograph by Ella &amp; Gary Photography</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div class="mx-auto text-base max-w-prose lg:max-w-none">
            <p class="text-lg text-gray-500">
              {{ doc.description }}
            </p>
          </div>
          <nuxt-content :document="doc" class="mx-auto mt-5 prose text-gray-500 prose-blue lg:max-w-none lg:row-start-1 lg:col-start-1" />
          <div class="flex mx-auto mt-10 text-base max-w-prose lg:max-w-none">
            <div class="rounded-md shadow">
              <nuxt-link to="/contact" title="Contact page" class="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
                Contact sales
              </nuxt-link>
            </div>
            <div class="ml-4 rounded-md shadow">
              <a href="#" class="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-blue-600 bg-white border border-transparent rounded-md hover:bg-gray-50">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // async asyncData ({ $content }) {
  //   const document = await $content('mike').fetch()

  //   return {
  //     document
  //   }
  // },
  props: {
    doc: {
      type: Object,
      default () {
        return {
          title: 'Mike'
        }
      }
    }
  },
  data () {
    return {
      page: {
        title: 'IDK'
      }
    }
  },
  computed: {
    correct () {
      if (this.document) {
        return this.document
      } return this.page
    }
  }
}
</script>
