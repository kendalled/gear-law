<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-blue-800">
    <div class="absolute inset-0">
      <img class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1568092806323-8ec13dfa9b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=60&sat=-100" alt="">
      <div class="absolute inset-0 bg-blue-800 mix-blend-multiply" aria-hidden="true" />
    </div>
    <div class="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Our Attorneys
      </h1>
      <p class="max-w-3xl mt-6 text-xl text-blue-100">
        Serving the greater Orlando area for over two decades has allowed us to excel in injury law, family law, criminal law, and more. Meet our team of experienced attorneys and schedule a free consultation today.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrandedImage'
}
</script>
