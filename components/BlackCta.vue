<template>
  <div class="relative bg-gray-900">
    <div class="relative h-56 bg-blue-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
      <!-- <picture>
        <source srcset="~/static/ourTeam.webp" type="image/webp">
        <source srcset="~/static/ourTeam.jpg" type="image/jpeg">
        <img src="~/static/justinSmile.jpg" alt="Our team of attorneys." class="object-cover w-full h-full">
      </picture> -->
      <!-- todo: webp optimize -->
      <img src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=65" alt="Our team of attorneys." class="object-cover object-right w-full h-full">
      <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 mix-blend-multiply" />
    </div>
    <div class="relative max-w-md px-4 py-12 mx-auto sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <h2 class="text-base font-semibold tracking-wider text-gray-300 uppercase">
          Award winning lawyers
        </h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-50 playfair sm:text-4xl">
          We’re here to help
        </p>
        <p class="mt-3 text-lg text-gray-300">
          With over five decades of experience between our attorneys, we are ready to tackle any case, and do so with experience. Not sure how to get started? Contact our stellar customer support.
        </p>
        <div class="mt-8">
          <div class="inline-flex rounded-md shadow">
            <button class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-50">
              Visit the help center
              <svg class="w-5 h-5 ml-3 -mr-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlackCta'
}
</script>
