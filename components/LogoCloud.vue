<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-gray-50">
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <p class="mb-8 text-base font-semibold tracking-wider text-center text-gray-600 uppercase">
        as featured on
      </p>
      <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        <div class="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <img class="h-12 filter" src="~/static/business.png" alt="CNN Business">
        </div>
        <div class="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <img class="h-10 mt-1 filter" src="~/static/radio.svg" alt="iHeartRadio">
        </div>
        <div class="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <img class="h-16 -mt-1 filter" src="~/static/sentinel2.png" alt="Orlando Sentinel">
        </div>
        <div class="flex justify-center col-span-1 md:col-span-3 lg:col-span-1">
          <img class="h-14 filter" src="~/static/journal.svg" alt="The News Journal">
        </div>
        <div class="flex justify-center col-span-2 md:col-span-3 lg:col-span-1">
          <img class="h-12 filter" src="~/static/nbc.svg" alt="NBC">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoCloud'
}
</script>
