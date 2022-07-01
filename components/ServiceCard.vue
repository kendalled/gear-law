<template>
  <div class="relative w-full col-span-1 transition-colors bg-blue-900 rounded shadow-md cursor-pointer group hover:bg-blue-500 h-96 md:w-96">
    <nuxt-link :to="link" :title="fullTitle">
      <span class="flex items-center justify-start w-full h-full text-gray-200">
        <div class="px-16">
          <slot />
          <p class="mt-3 text-3xl font-medium text-gray-100 playfair">{{ service1 }} {{ service2 }}</p>
        </div>
      </span>
      <span class="absolute bottom-0 right-0 flex items-center justify-center w-16 h-16 bg-blue-500 rounded-tl rounded-br group-hover:text-gray-50 text-blue-50 group-hover:bg-blue-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 h-12"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    service1: {
      type: String,
      default: 'Personal'
    },
    link: {
      type: String,
      default: '/'
    },
    service2: {
      type: String,
      default: 'Bankruptcy'
    }
  },
  computed: {
    fullTitle () {
      return this.service1 + ' ' + this.service2
    }
  }
}
</script>
