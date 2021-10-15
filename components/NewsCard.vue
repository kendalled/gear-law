<template>
  <div class="flex flex-col items-center text-center bg-white rounded-sm">
    <div class="w-full h-56 bg-blue-200 grid place-items-center">
      <h1>Post Image</h1>
    </div>
    <div class="flex flex-col px-10 py-8 space-y-4">
      <div>
        <h1 class="text-lg font-semibold uppercase">
          {{ postTitle }}
        </h1>
        <span class="text-sm font-bold text-gray-400 uppercase">{{ postDate }}</span>
      </div>
      <p class="text-gray-600">
        {{ postBlurb }}
      </p>
    </div>
    <div class="pb-6 grid place-items-center">
      <a class="px-8 py-4 uppercase border-2 border-blue-500 transition hover:bg-blue-500 hover:text-white" href="#">Read More</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    postTitle: String,
    postDate: String,
    postBlurb: String
  }
}
</script>
