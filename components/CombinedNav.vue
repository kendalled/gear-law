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
    ],
  }
  ```
-->
  <div>
    <div class="h-auto bg-blue-900 text-blue-50">
      <div class="flex items-center justify-between w-full h-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <!-- icons only -->
        <div class="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block w-5 h-5 text-blue-100"
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
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block w-5 h-5 text-blue-100"
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
            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block w-5 h-5 text-blue-100"
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
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8.01" />
            <line x1="12" y1="16" x2="12" y2="11" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg>
        </div>
        <!-- icons w/ info -->
        <div class="flex items-center space-x-4">
          <!-- phone -->
          <span class="flex items-center space-x-2 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block w-5 h-5 text-blue-100 cursor-pointer group-hover:text-blue-50"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              @click.prevent="togglePhone"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
            <a class="hidden text-sm text-blue-100 md:inline-block hover:text-blue-50" href="tel:4073799557" target="_blank">407-379-9557</a>
            <a v-show="phoneOpen" class="text-sm text-blue-100 md:hidden hover:text-blue-50" href="tel:4073799557" target="_blank">407-379-9557</a>
          </span>
          <!-- email -->
          <span class="flex items-center space-x-2 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block w-5 h-5 text-blue-100 cursor-pointer group-hover:text-blue-50"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              @click.prevent="openEmail"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
            <a class="hidden text-sm text-blue-100 md:inline-block hover:text-blue-50" href="mailto:mike@gear.law" target="_blank">mike@gear.law</a>
            <a v-show="emailOpen" class="inline-block text-sm text-blue-100 md:hidden hover:text-blue-50" href="mailto:mike@gear.law" target="_blank">mike@gear.law</a>
          </span>

          <!-- location -->
          <span class="flex items-center space-x-2 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block w-5 h-5 text-blue-100 cursor-pointer group-hover:text-blue-50"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              @click.prevent="openMap"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="11" r="3" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <a class="hidden text-sm text-blue-100 md:inline-block hover:text-blue-50" href="https://www.google.com/search?q=gear+law+address&oq=gear+law+address&aqs=chrome..69i57j33i160l2.2896j1j7&sourceid=chrome&ie=UTF-8#" target="_blank">1881 Lee Road, Winter Park, FL</a>
            <a v-show="mapOpen" class="inline-block text-sm text-blue-100 md:hidden hover:text-blue-50" href="https://www.google.com/search?q=gear+law+address&oq=gear+law+address&aqs=chrome..69i57j33i160l2.2896j1j7&sourceid=chrome&ie=UTF-8#" target="_blank">1881 Lee Rd, 32792</a>
          </span>
        </div>
      </div>
    </div>
    <div class="py-2 bg-white">
      <!-- was: relative flex -->
      <nav class="items-center justify-between hidden px-4 mx-auto max-w-7xl sm:px-6" aria-label="Global">
        <div class="flex items-center flex-1">
          <div class="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <span class="sr-only">Workflow</span>
              <img class="hidden w-auto sm:block h-14 sm:h-14" src="~/static/gear2.svg" alt="Gear Law Logo">
              <img class="absolute top-0 w-auto -mt-1.5 sm:hidden h-14" src="~/static/gear2.svg" alt="Gear Law Logo">
            </a>
            <div class="flex items-center -mr-2 md:hidden">
              <button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <!-- Heroicon name: outline/menu -->
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          <div class="hidden md:block md:ml-10 md:space-x-10">
            <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Home</a>

            <a class="font-medium text-gray-500 cursor-pointer hover:text-gray-900" @click.prevent="scrollTo('services')">Services</a>

            <a class="font-medium text-gray-500 cursor-pointer hover:text-gray-900" @click.prevent="scrollTo('attorneys')">Attorneys</a>

            <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Company</a>
          </div>
        </div>
        <div class="items-center hidden space-x-2 text-right md:flex">
          <!-- <button type="button" class="inline-flex items-center px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 mr-3 -ml-1 text-blue-100"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
            407-716-8966
          </button> -->
          <ContactInfo />
          <span class="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
            <a href="#" class="inline-flex items-center px-4 py-2 text-base font-medium text-blue-600 bg-white border border-transparent rounded-md hover:bg-gray-50">
              Get started
            </a>
          </span>
          <!-- <button type="button" class="inline-flex items-center px-4 py-2 text-base font-medium text-white bg-blue-700 border border-transparent rounded-md shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
            Get started
          </button> -->
          <!-- <button type="button" class="inline-flex items-center px-4 py-2 text-base font-medium text-blue-700 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Get started
          </button> -->
        </div>
      </nav>
      <!-- end was -->

      <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
      <div v-show="mobileOpen" class="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden">
        <div class="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
          <div class="flex items-center justify-between px-5 pt-4">
            <div>
              <img class="absolute w-auto top-4 h-14" src="~/static/gear2.svg" alt="">
            </div>
            <div class="-mr-2">
              <button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span class="sr-only">Close main menu</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a href="#" class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">Home</a>

            <a href="#" class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">Services</a>

            <a href="#" class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">Attorneys</a>

            <a href="#" class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">Company</a>
          </div>
          <a href="#" class="block w-full px-5 py-3 font-medium text-center text-blue-600 bg-gray-50 hover:bg-gray-100">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CombinedNav',
  data () {
    return {
      mobileOpen: false
    }
  },
  methods: {
    scrollTo (elem) {
      if (process.browser) {
        document.getElementById(elem).scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    },
    toggleMobileMenu () {
      this.mobileOpen = !this.mobileOpen
    }
  }
}
</script>
