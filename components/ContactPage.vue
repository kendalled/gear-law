<template>
  <!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:
  -->
  <div class="bg-white">
    <NewNav />

    <main class="overflow-hidden">
      <!-- Header -->
      <div class="bg-warm-gray-50">
        <div class="py-24 lg:py-32">
          <div class="relative z-10 pl-4 pr-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 class="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
              Get started in minutes.
            </h1>
            <p class="max-w-3xl mt-6 text-xl text-warm-gray-500">
              Simply fill out the form below, and our team of legal professionals will be in touch with you shortly. No matter the details of your case, we will be happy to help you. Simply describe your issue below to begin.
            </p>
          </div>
        </div>
      </div>

      <!-- Contact section -->
      <section class="relative bg-white" aria-labelledby="contact-heading">
        <div class="absolute w-full h-1/2 bg-warm-gray-50" aria-hidden="true" />
        <!-- Decorative dot pattern -->
        <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <svg
            class="absolute top-0 right-0 z-0 transform translate-x-1/2 -translate-y-16 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
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
                  class="text-warm-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
          </svg>
        </div>
        <FormOnly />
      </section>

      <!-- Contact grid -->
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="bg-white">
        <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Legal Support
              </h2>
              <div class="mt-3">
                <p class="text-lg text-gray-500">
                  Need legal counsel? Unsure of what to do? Contact one of our lawyers using the information below.
                </p>
              </div>
              <div class="mt-9">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: outline/phone -->
                    <svg
                      class="w-6 h-6 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div class="ml-3 text-base text-gray-500">
                    <p>+1 (407) 379 9957</p>
                    <p class="mt-1">
                      Mon-Fri 8am to 6pm EST
                    </p>
                  </div>
                </div>
                <div class="flex mt-6">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: outline/mail -->
                    <svg
                      class="w-6 h-6 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="ml-3 text-base text-gray-500">
                    <p>contact@gear.law</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-12 sm:mt-16 md:mt-0">
              <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Case Management
              </h2>
              <div class="mt-3">
                <p class="text-lg text-gray-500">
                  Managing your case has never been easier. Contact our office and case managers below.
                </p>
              </div>
              <div class="mt-9">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: outline/phone -->
                    <svg
                      class="w-6 h-6 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div class="ml-3 text-base text-gray-500">
                    <p>+1 (407) 379 9957</p>
                    <p class="mt-1">
                      Mon-Fri 8am to 6pm EST
                    </p>
                  </div>
                </div>
                <div class="flex mt-6">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: outline/mail -->
                    <svg
                      class="w-6 h-6 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="ml-3 text-base text-gray-500">
                    <p>anna@gear.law</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="bg-warm-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">
        Footer
      </h2>
      <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8 xl:col-span-1">
            <img class="h-10" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=warmGray&shade=400" alt="Company name">
            <p class="text-base text-warm-gray-400">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div class="flex space-x-6">
              <a href="#" class="text-warm-gray-400 hover:text-warm-gray-300">
                <span class="sr-only">Facebook</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                </svg>
              </a>

              <a href="#" class="text-warm-gray-400 hover:text-warm-gray-300">
                <span class="sr-only">Instagram</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                </svg>
              </a>

              <a href="#" class="text-warm-gray-400 hover:text-warm-gray-300">
                <span class="sr-only">Twitter</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>

              <a href="#" class="text-warm-gray-400 hover:text-warm-gray-300">
                <span class="sr-only">GitHub</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
              </a>

              <a href="#" class="text-warm-gray-400 hover:text-warm-gray-300">
                <span class="sr-only">Dribbble</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold tracking-wider uppercase text-warm-gray-200">
                  Solutions
                </h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li>
                    <a href="#" class="text-base text-warm-gray-400 hover:text-warm-gray-300"> Marketing </a>
                  </li>

                  <li>
                    <a href="#" class="text-base text-warm-gray-400 hover:text-warm-gray-300"> Analytics </a>
                  </li>

                  <li>
                    <a href="#" class="text-base text-warm-gray-400 hover:text-warm-gray-300"> Commerce </a>
                  </li>

                  <li>
                    <a href="#" class="text-base text-warm-gray-400 hover:text-warm-gray-300"> Insights </a>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h3 class="text-sm font-semibold tracking-wider uppercase text-warm-gray-200">
                  Support
                </h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li>
                    <a href="#" class="text-base text-warm-gray-400 hover:text-warm-gray-300"> Pricing </a>
                  </li>

                  <li>
                    <a href="#" class="text-base text-warm-gray-400 hover:text-warm-gray-300"> Documentation </a>
                  </li>

                  <li>
                    <a href="#" class="text-base text-warm-gray-400 hover:text-warm-gray-300"> Guides </a>
                  </li>

                  <li>
                    <a href="#" class="text-base text-warm-gray-400 hover:text-warm-gray-300"> API Status </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold tracking-wider uppercase text-warm-gray-200">
                  Company
                </h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li>
                    <a href="#" class="text-base text-warm-gray-400 hover:text-warm-gray-300"> About </a>
                  </li>

                  <li>
                    <a href="#" class="text-base text-warm-gray-400 hover:text-warm-gray-300"> Blog </a>
                  </li>

                  <li>
                    <a href="#" class="text-base text-warm-gray-400 hover:text-warm-gray-300"> Jobs </a>
                  </li>

                  <li>
                    <a href="#" class="text-base text-warm-gray-400 hover:text-warm-gray-300"> Press </a>
                  </li>

                  <li>
                    <a href="#" class="text-base text-warm-gray-400 hover:text-warm-gray-300"> Partners </a>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h3 class="text-sm font-semibold tracking-wider uppercase text-warm-gray-200">
                  Legal
                </h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li>
                    <a href="#" class="text-base text-warm-gray-400 hover:text-warm-gray-300"> Claim </a>
                  </li>

                  <li>
                    <a href="#" class="text-base text-warm-gray-400 hover:text-warm-gray-300"> Privacy </a>
                  </li>

                  <li>
                    <a href="#" class="text-base text-warm-gray-400 hover:text-warm-gray-300"> Terms </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="pt-8 mt-12 border-t border-warm-gray-700">
          <p class="text-base text-warm-gray-400 xl:text-center">
            &copy; 2022 Gear Law, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data () {
    return {
      mobileOpen: false,
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>
