<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-white">
    <div class="absolute inset-0 shadow pointer-events-none" :class="[ moreOpen ? 'z-20' : 'z-30']" aria-hidden="true" />
    <div class="relative z-20">
      <div class="flex items-center justify-between px-4 py-5 mx-auto max-w-7xl sm:px-6 sm:py-6 lg:px-8 md:justify-start md:space-x-10">
        <div>
          <a href="#" class="flex w-20 lg:w-24 xl:w-32">
            <span class="sr-only">Workflow</span>
            <!-- todo: simplify and fix sizing issues -->
            <img class="absolute w-auto h-12 top-5 md:top-3 md:h-12 lg:h-16" src="~/static/gear2.svg" alt="">
          </a>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-expanded="false">
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
        <div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <nav class="flex space-x-10">
            <nuxt-link to="/attorneys" title="Attorneys" class="text-base font-medium text-gray-500 hover:text-gray-900">
              Attorneys
            </nuxt-link>
            <div>
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

              <ServicesOpenFull :open="servicesOpen" @close="servicesOpen = false" />
            </div>
            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Results </a>
            <div>
              <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
              <button type="button" class="inline-flex items-center text-base font-medium text-gray-500 bg-white rounded-md group hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-expanded="false" @click.prevent="moreOpen = true">
                <span>More</span>
                <!--
                Heroicon name: solid/chevron-down

                Item active: "text-gray-600", Item inactive: "text-gray-400"
              -->
                <svg class="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>

              <!-- flyout -->
              <MoreOpen :open="moreOpen" @close="moreOpen = false" />
            </div>
          </nav>
          <div class="flex items-center md:ml-12">
            <a href="#" class="hidden text-base font-medium text-gray-500 hover:text-gray-900 lg:block"> Sign in </a>
            <nuxt-link to="/contact" class="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700">
              Contact us
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
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
                  <span class="ml-3 text-base font-medium text-gray-900"> Analytics </span>
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
                  <span class="ml-3 text-base font-medium text-gray-900"> Engagement </span>
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
                  <span class="ml-3 text-base font-medium text-gray-900"> Security </span>
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
                  <span class="ml-3 text-base font-medium text-gray-900"> Integrations </span>
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
              <a href="#" class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700"> Contact us </a>
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
</template>

<script>
export default {
  name: 'NavRedux',
  data () {
    return {
      mobileOpen: false,
      servicesOpen: false,
      moreOpen: false
    }
  }
}
</script>
