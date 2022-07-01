<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative z-40 bg-gray-50">
    <BlueBar />
    <div class="relative bg-white border-b border-gray-200">
      <div class="px-4 mx-auto max-w-7xl sm:px-6">
        <div class="flex items-center justify-between py-6 lg:justify-start lg:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <!-- todo: more elegant solution? -->
            <nuxt-link to="/" title="Home page" class="mr-24">
              <span class="sr-only">Gear Law</span>
              <img class="absolute w-auto h-12 top-3 md:h-12 lg:h-16" src="~/static/gear2.svg" alt="">
            </nuxt-link>
            <nav class="hidden space-x-10 lg:flex">
              <nuxt-link to="/attorneys" title="Our Attorneys" class="text-base font-medium text-gray-500 lg:ml-14 hover:text-gray-900">
                Attorneys
              </nuxt-link>
              <div class="relative">
                <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                <button type="button" class="inline-flex items-center text-base font-medium text-gray-500 bg-white rounded-md group hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-expanded="false" @click.prevent="servicesOpen = true">
                  <span>Services</span>
                  <!--
                  Heroicon name: solid/chevron-down

                  Item active: "text-gray-600", Item inactive: "text-gray-400"
                -->
                  <svg class="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>

                <!--
                'Services' flyout menu, show/hide based on flyout menu state.
                -->
                <ServicesOpen :open="servicesOpen" @close="servicesOpen = false" />
              </div>
              <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Results </a>

              <div class="relative">
                <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                <button type="button" class="inline-flex items-center text-base font-medium text-gray-500 bg-white rounded-md group hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-expanded="false" @click.prevent="moreOpen = true">
                  <span>About</span>
                  <!--
                Heroicon name: solid/chevron-down

                Item active: "text-gray-600", Item inactive: "text-gray-400"
              -->
                  <svg class="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>

                <!--
              'More' flyout menu, show/hide based on flyout menu state.

              Entering: "transition ease-out duration-200"
                From: "opacity-0 translate-y-1"
                To: "opacity-100 translate-y-0"
              Leaving: "transition ease-in duration-150"
                From: "opacity-100 translate-y-0"
                To: "opacity-0 translate-y-1"
            -->
                <MoreOpen :open="moreOpen" @close="moreOpen = false" />
              </div>
            </nav>
          </div>
          <div class="-my-2 -mr-2 lg:hidden">
            <button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-expanded="false" @click.prevent="mobileOpen = !mobileOpen">
              <span class="sr-only">Open menu</span>
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
          <!-- was nav element -->
          <div class="items-center justify-end hidden lg:flex lg:flex-1 lg:w-0">
            <a href="#" class="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900"> Sign in </a>
            <nuxt-link to="/contact" title="Contact page" class="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-blue-700">
              Contact us
            </nuxt-link>
          </div>
        </div>
      </div>

      <!--
      Mobile menu, show/hide based on mobile menu state.
      -->
      <transition
        enter-active-class="duration-200 ease-out"
        enter-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="duration-100 ease-in"
        leave-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
      >
        <div v-show="mobileOpen" class="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform lg:hidden">
          <div class="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div class="px-5 pt-5 pb-6">
              <div class="flex items-center justify-between">
                <div>
                  <img class="w-auto h-12" src="~/static/gear2.svg" alt="Gear Law">
                </div>
                <div class="-mr-2">
                  <button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" @click.prevent="mobileOpen = false">
                    <span class="sr-only">Close menu</span>
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
              <div class="mt-6">
                <nav class="grid gap-y-8">
                  <a href="#" class="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                    <!-- Heroicon name: outline/chart-bar -->
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-900"> Personal Injury </span>
                  </a>

                  <a href="#" class="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                    <!-- Heroicon name: outline/cursor-click -->
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-900"> Business Law </span>
                  </a>

                  <a href="#" class="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                    <!-- Heroicon name: outline/shield-check -->
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-900"> Family Law </span>
                  </a>

                  <a href="#" class="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                    <!-- Heroicon name: outline/view-grid -->
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-900"> Criminal Law </span>
                  </a>

                  <a href="#" class="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                    <!-- Heroicon name: outline/refresh -->
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-900"> Automations </span>
                  </a>
                </nav>
              </div>
            </div>
            <div class="px-5 py-6 space-y-6">
              <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                <nuxt-link to="/attorneys" title="Our Attorneys" class="text-base font-medium text-gray-900 hover:text-gray-700">
                  Attorneys
                </nuxt-link>

                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Results </a>

                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Help Center </a>

                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Guides </a>

                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Events </a>

                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Security </a>
              </div>
              <div>
                <nuxt-link to="/contact" title="Contact form" class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700">
                  Contact us
                </nuxt-link>
                <p class="mt-6 text-base font-medium text-center text-gray-500">
                  Existing customer?
                  <a href="#" class="text-blue-600 hover:text-blue-500"> Sign in </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewNav',
  data () {
    return {
      mobileOpen: false,
      servicesOpen: false,
      moreOpen: false
    }
  }
}
</script>
