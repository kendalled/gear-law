<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="pt-12 -mt-32 bg-transparent sm:pt-16">
    <div class="pb-12 mt-10 sm:pb-16">
      <div class="relative">
        <div class="absolute inset-x-0 h-full bg-gray-50 top-1/2" />
        <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="w-full mx-auto">
            <dl class="rounded-lg shadow-lg bg-gray-50 sm:grid sm:grid-cols-3">
              <!-- was text-center -->
              <div class="flex flex-col p-6 border-b border-gray-100 cursor-pointer group sm:border-0 sm:border-r">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-gray-400 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg> -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-10 h-10 text-gray-400 group-hover:text-blue-400"
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
                  <circle cx="5" cy="17" r="2" />
                  <circle cx="17" cy="17" r="2" />
                  <path d="M7 18h8m4 0h2v-6a5 5 0 0 0 -5 -5h-1l1.5 5h4.5" />
                  <path d="M12 18v-11h3" />
                  <polyline points="3 17 3 12 12 12" />
                  <line x1="3" y1="9" x2="21" y2="3" />
                  <line x1="6" y1="12" x2="6" y2="8" />
                </svg>
                <h2 class="mt-2 text-lg font-semibold leading-6 text-gray-600 group-hover:text-gray-700">
                  Personal injury
                </h2>
                <p class="mt-1 text-base text-gray-500">
                  Whether you need assistance after a car accident or a work-related injury, Gear Law's attorneys have got your back.
                </p>
                <!-- <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Satisfaction rating
                </dt>
                <dd class="order-1 text-5xl font-extrabold text-blue-600">
                  100%
                </dd> -->
              </div>
              <div class="flex flex-col p-6 border-t border-b border-gray-100 cursor-pointer group sm:border-0 sm:border-l sm:border-r">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-gray-400 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h2 class="mt-2 text-lg font-semibold leading-6 text-gray-600 group-hover:text-gray-700">
                  Criminal law
                </h2>
                <p class="mt-1 text-base text-gray-500">
                  We understand that criminal law can be a tricky territory to navigate. With two decades of experience, let us guide you through it.
                </p>
                <!-- <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Satisfaction rating
                </dt>
                <dd class="order-1 text-5xl font-extrabold text-blue-600">
                  100%
                </dd> -->
              </div>
              <div class="flex flex-col p-6 border-t border-gray-100 cursor-pointer group sm:border-0 sm:border-l">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-gray-400 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                <h2 class="mt-2 text-lg font-semibold leading-6 text-gray-600 group-hover:text-gray-700">
                  Family law
                </h2>
                <p class="mt-1 text-base text-gray-500">
                  Through twenty years of divorce settlements &amp; family related cases, Barry Rigby is the perfect attorney to keep you on the winning side.
                </p>
                <!-- <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Satisfaction rating
                </dt>
                <dd class="order-1 text-5xl font-extrabold text-blue-600">
                  100%
                </dd> -->
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewStats'
}
</script>
