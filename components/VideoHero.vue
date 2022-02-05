<template>
  <!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
  <div class="relative overflow-hidden bg-white">
    <div class="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
      <svg class="absolute top-0 transform translate-x-64 -translate-y-8 left-1/2" width="640" height="784" fill="none" viewBox="0 0 640 784">
        <defs>
          <pattern
            id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
            x="118"
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
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
        <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
      </svg>
    </div>

    <div class="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
      <div>
        <nav class="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6" aria-label="Global">
          <div class="flex items-center flex-1">
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span class="sr-only">Workflow</span>
                <img class="w-auto h-8 sm:h-14" src="~/static/gear2.svg" alt="Gear Law Logo">
              </a>
              <div class="flex items-center -mr-2 md:hidden">
                <button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
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
            </div>
            <div class="hidden md:block md:ml-10 md:space-x-10">
              <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Product</a>

              <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Features</a>

              <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Marketplace</a>

              <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Company</a>
            </div>
          </div>
          <div class="hidden text-right md:block">
            <span class="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
              <a href="#" class="inline-flex items-center px-4 py-2 text-base font-medium text-blue-600 bg-white border border-transparent rounded-md hover:bg-gray-50">
                Get started
              </a>
            </span>
          </div>
        </nav>

        <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
        <div class="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden">
          <div class="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
            <div class="flex items-center justify-between px-5 pt-4">
              <div>
                <img class="w-auto h-8" src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg" alt="">
              </div>
              <div class="-mr-2">
                <button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span class="sr-only">Close main menu</span>
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
            <div class="px-2 pt-2 pb-3 space-y-1">
              <a href="#" class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">Product</a>

              <a href="#" class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">Features</a>

              <a href="#" class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">Marketplace</a>

              <a href="#" class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">Company</a>
            </div>
            <a href="#" class="block w-full px-5 py-3 font-medium text-center text-blue-600 bg-gray-50 hover:bg-gray-100">
              Log in
            </a>
          </div>
        </div>
      </div>

      <main class="px-4 mx-auto mt-16 max-w-7xl sm:mt-24 sm:px-6 lg:mt-32">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span class="block text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base">Coming soon</span>
              <span class="block mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
                <span class="block text-gray-900">Legal representation</span>
                <span class="block text-blue-600">you can count on.</span>
              </span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Serving the greater Orlando area for over two decades has allowed us to excel in injury law, family law, criminal law, and more. Meet our team of experienced attorneys and book an appointment today.
            </p>
            <div class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <p class="text-base font-medium text-gray-900">
                Sign up to get notified when it’s ready.
              </p>
              <form action="#" method="POST" class="mt-3 sm:flex">
                <label for="email" class="sr-only">Email</label>
                <input id="email" type="email" name="email" class="block w-full py-3 text-base placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:flex-1" placeholder="Enter your email">
                <button type="submit" class="w-full px-6 py-3 mt-3 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
                  Notify me
                </button>
              </form>
              <p class="mt-3 text-sm text-gray-500">
                We care about the protection of your data. Read our
                <a href="#" class="font-medium text-gray-900 underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
          <div class="relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <svg
              class="absolute top-0 origin-top transform scale-75 -translate-x-1/2 -translate-y-8 left-1/2 sm:scale-100 lg:hidden"
              width="640"
              height="784"
              fill="none"
              viewBox="0 0 640 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                  x="118"
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
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
              <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
            </svg>
            <div class="relative w-full mx-auto rounded-lg shadow-lg lg:max-w-md">
              <button type="button" class="relative block w-full overflow-hidden bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <span class="sr-only">Watch our video to learn more</span>
                <img class="w-full" src="~/static/team.jpg" alt="">
                <div class="absolute inset-0 flex items-center justify-center w-full h-full" aria-hidden="true">
                  <svg class="w-20 h-20 text-blue-500" fill="currentColor" viewBox="0 0 84 84">
                    <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                    <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                  </svg>
                </div>
              </button>
            </div>
            <!-- <img class="w-4/5 h-auto ml-12" src="~/static/gearteam.png" alt="Our team" /> -->
          </div>
        </div>
      </main>
    </div>
    <DarkStats />
  </div>
</template>

<script>
export default {
  name: 'VideoHero'
}
</script>
