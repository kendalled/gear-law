<template>
  <section id="services" class="py-12 bg-gray-50">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div class="col-span-1 pt-16 md:col-span-2">
          <SubText :text="'legal services'" />
          <h1 class="mt-2 text-4xl font-semibold text-gray-900 md:text-5xl playfair">
            Our Key Practice Areas
          </h1>
          <p class="max-w-xl pr-2 mt-6 text-xl text-gray-600">
            We provide a full array of affordable business law and bankruptcy law services to small and middle market businesses and entrepenuers. We are a full service law firm that provides a comprehensive range of services to help you achieve your goals.
          </p>
        </div>
        <ServiceCard service1="Personal" service2="Injury" class="mt-6 lg:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-16 h-16"
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
            <line x1="3" y1="21" x2="21" y2="21" />
            <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
            <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
            <line x1="10" y1="9" x2="14" y2="9" />
            <line x1="12" y1="7" x2="12" y2="11" />
          </svg>
        </ServiceCard>

        <ServiceCard service1="Family" service2="Law" class="mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-16 h-16"
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
            <path d="M4 21c1.147 -4.02 1.983 -8.027 2 -12h6c.017 3.973 .853 7.98 2 12" />
            <path d="M12.5 13h4.5c.025 2.612 .894 5.296 2 8" />
            <path d="M9 5a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1" />
            <line x1="3" y1="21" x2="22" y2="21" />
          </svg>
        </ServiceCard>
        <ServiceCard service1="Criminal" service2="Law" class="mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-16 h-16"
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
            <line x1="3" y1="21" x2="21" y2="21" />
            <path d="M5 21v-14l8 -4v18" />
            <path d="M19 21v-10l-6 -4" />
            <line x1="9" y1="9" x2="9" y2="9.01" />
            <line x1="9" y1="12" x2="9" y2="12.01" />
            <line x1="9" y1="15" x2="9" y2="15.01" />
            <line x1="9" y1="18" x2="9" y2="18.01" />
          </svg>
        </ServiceCard>
        <ServiceCard service1="Business" service2="Law" class="mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-16 h-16"
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
            <line x1="3" y1="21" x2="21" y2="21" />
            <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
            <line x1="5" y1="21" x2="5" y2="10.85" />
            <line x1="19" y1="21" x2="19" y2="10.85" />
            <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
          </svg>
        </ServiceCard>

        <!-- <div class="col-span-1 mt-8 bg-blue-800 rounded-sm shadow h-96 w-96" />
        <div class="col-span-1 mt-8 bg-blue-800 rounded-sm shadow h-96 w-96" />
        <div class="col-span-1 mt-8 bg-blue-800 rounded-sm shadow h-96 w-96" /> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services'
}
</script>
