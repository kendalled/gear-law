<template>
  <div class="relative">
    <div class="absolute inset-x-0 bottom-0 h-full bg-gray-100" />
    <div class="w-full mx-0 max-w-none">
      <!-- was rounded-2xl -->
      <div class="relative shadow-xl sm:rounded-none sm:overflow-hidden">
        <div class="absolute inset-0">
          <picture>
            <source srcset="~/static/hero-optim.webp" type="image/webp">
            <source srcset="~/static/hero-1.jpg" type="image/jpeg">
            <img src="~/static/hero-1.jpg" alt="Example of personal injury" class="object-cover w-full h-full">
          </picture>
          <!-- <img class="object-cover w-full h-full" src="~/static/hero_1_optim.jpg" alt="People working on laptops"> -->
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-900 mix-blend-multiply" />
        </div>
        <div class="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 sm:py-24 lg:py-48 lg:px-8">
          <h1 class="text-4xl font-bold text-left sm:tracking-wide sm:text-5xl lg:text-6xl">
            <span class="block text-white">Speak to a licensed</span>
            <span class="block text-blue-200">lawyer within one hour.</span>
          </h1>
          <p class="mt-6 mr-auto text-xl text-left text-blue-200 max-w-7xl sm:max-w-2xl">
            Serving the greater Orlando area for over two decades has allowed us to excel in injury law, family law, criminal law, and more. Meet our team of experienced attorneys and schedule a free consultation today.
          </p>
          <div class="max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center">
            <div class="space-y-4 sm:space-y-0 sm:mr-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <nuxt-link to="/contact" title="Contact form" class="flex items-center justify-center px-4 py-3 text-base font-medium text-blue-700 bg-white border border-transparent rounded-md shadow-sm hover:bg-blue-50 sm:px-8">
                Get started
              </nuxt-link>
              <a href="#" class="flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8">
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
  name: 'HeroSection'
}
</script>
