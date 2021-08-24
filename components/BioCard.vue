<template>
  <section class="relative bg-white" aria-labelledby="join-heading">
    <div class="absolute inset-x-0 hidden h-1/2 bg-blue-gray-50 lg:block" aria-hidden="true" />
    <div class="mx-auto bg-blue-600 max-w-7xl lg:bg-transparent lg:px-8">
      <div class="lg:grid lg:grid-cols-12">
        <div class="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
          <div class="absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:hidden" aria-hidden="true" />
          <div class="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
            <div class="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
              <img class="object-cover object-center shadow-2xl rounded-3xl" src="~/static/mike.png" alt="Michael Gagnon, PA">
            </div>
          </div>
        </div>

        <div class="relative bg-blue-600 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
          <div class="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block" aria-hidden="true">
            <svg
              class="absolute transform bottom-full left-full translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-blue-500"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
            </svg>
            <svg
              class="absolute transform top-full -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-blue-500"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
            </svg>
          </div>
          <div class="relative max-w-md px-4 py-12 mx-auto space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
            <h2 id="join-heading" class="text-3xl font-extrabold text-white">
              Mike Gagnon, Attorney
            </h2>
            <p class="text-lg text-white">
              Mike Gagnon is a self-proclaimed “good guy”. He has a passion for justice and cares even more about people. Litigation is not for everyone, but his ability to deal with nonsense and his love for arguing tough issues head-on has produced great results. Gratitude is a way of life for Mike. Grateful for all he has, grateful for every opportunity, and grateful for the clients who put trust in him to get results when they need it most.
            </p>
            <a class="block w-full px-5 py-3 text-base font-medium text-center text-blue-700 bg-white border border-transparent rounded-md shadow-md hover:bg-blue-gray-50 sm:inline-block sm:w-auto" href="#">Get in touch</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BioCard'
}
</script>
