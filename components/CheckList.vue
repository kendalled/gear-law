<template>
  <!-- start new features -->
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-white">
    <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div>
        <SubText :text="'everything you need'" />
        <p class="mt-2 text-3xl font-extrabold text-gray-800 playfair">
          Feel confident in the courtroom.
        </p>
        <p class="mt-4 text-lg text-gray-500">
          Our team of experienced attorneys are always prepared for any case. We have everything you need to succeed.
        </p>
      </div>
      <div class="mt-12 lg:mt-0 lg:col-span-2">
        <dl class="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
          <div class="relative">
            <dt>
              <!-- Heroicon name: outline/check -->
              <svg
                class="absolute w-6 h-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <p class="text-lg font-medium leading-6 text-gray-900 ml-9">
                Legal advice
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500 ml-9">
              You can manage phone, email and chat conversations all from a single mailbox.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <!-- Heroicon name: outline/check -->
              <svg
                class="absolute w-6 h-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <p class="text-lg font-medium leading-6 text-gray-900 ml-9">
                Calendars
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500 ml-9">
              You can manage phone, email and chat conversations all from a single mailbox.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <!-- Heroicon name: outline/check -->
              <svg
                class="absolute w-6 h-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <p class="text-lg font-medium leading-6 text-gray-900 ml-9">
                Notifications
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500 ml-9">
              Find what you need with advanced filters, bulk actions, and quick views.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <!-- Heroicon name: outline/check -->
              <svg
                class="absolute w-6 h-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <p class="text-lg font-medium leading-6 text-gray-900 ml-9">
                Boards
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500 ml-9">
              Find what you need with advanced filters, bulk actions, and quick views.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <!-- Heroicon name: outline/check -->
              <svg
                class="absolute w-6 h-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <p class="text-lg font-medium leading-6 text-gray-900 ml-9">
                Reporting
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500 ml-9">
              Find what you need with advanced filters, bulk actions, and quick views.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <!-- Heroicon name: outline/check -->
              <svg
                class="absolute w-6 h-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <p class="text-lg font-medium leading-6 text-gray-900 ml-9">
                24/7 Support
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500 ml-9">
              Find what you need with advanced filters, bulk actions, and quick views.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

  <!-- end new features -->
</template>

<script>
export default {
  name: 'CheckList'
}
</script>
