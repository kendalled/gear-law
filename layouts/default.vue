<template>
  <div>
    <!-- <UpdateBrowser v-if="isInternet" /> -->
    <!-- <FullNav /> -->
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'Default'
}
</script>

<style>
h1, .playfair {
  font-family: 'DM Serif Display', sans-serif, -apple-system
}
input[type=text] {
  @apply block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500;
}
</style>
