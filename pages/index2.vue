<template>
  <div class="bg-white">
    <div class="relative overflow-hidden">
      <main>
        <header class="relative">
          <div class="absolute w-full h-24 shadow bg-gray-50" />
          <div class="pt-6 bg-gray-900 ">
            <nav class="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6" aria-label="Global">
              <div class="flex items-center flex-1">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span class="sr-only">Gear Law Logo</span>
                    <!-- was: sm:h-10 -->
                    <img class="w-auto h-8 sm:h-16" src="~/static/gear2.svg" alt="Gear law logo">
                  </a>
                  <div class="flex items-center -mr-2 md:hidden">
                    <button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" aria-expanded="false" @click="mobileOpen = true">
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
                <div class="hidden space-x-8 md:flex md:ml-10">
                  <a href="#" class="text-base font-medium text-white hover:text-gray-300">Home</a>

                  <a href="#" class="text-base font-medium text-white hover:text-gray-300">Attorneys</a>

                  <nuxt-link to="/support" class="text-base font-medium text-white hover:text-gray-300">
                    Support
                  </nuxt-link>

                  <a href="#" title="Blog Posts" class="text-base font-medium text-white hover:text-gray-300">
                    Blog
                  </a>
                </div>
              </div>
              <div class="hidden md:flex md:items-center md:space-x-6">
                <a href="#" class="text-base font-medium text-white hover:text-gray-300">
                  Log in
                </a>
                <nuxt-link to="/contact" title="Contact page" class="inline-flex items-center px-4 py-2 text-base font-medium text-white bg-gray-600 border border-transparent rounded-md hover:bg-gray-700">
                  Get started
                </nuxt-link>
              </div>
            </nav>
          </div>

          <!--
          Mobile menu, show/hide based on menu open state.
        -->
          <transition
            enter-active-class="duration-150 ease-out"
            enter-class="scale-95 opacity-0"
            enter-to-class="scale-100 opacity-100"
            leave-active-class="duration-100 ease-in"
            leave-class="scale-100 opacity-100"
            leave-to-class="scale-95 opacity-0"
          >
            <div v-if="mobileOpen" class="absolute inset-x-0 top-0 p-2 transition origin-top transform md:hidden">
              <div class="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                <div class="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img class="w-auto h-8" src="~/static/gear2.svg" alt="Gear law logo">
                  </div>
                  <div class="-mr-2">
                    <button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light-blue-600" @click="mobileOpen = false">
                      <span class="sr-only">Close menu</span>
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
                <div class="pt-5 pb-6">
                  <div class="px-2 space-y-1">
                    <a href="#" class="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50">Home</a>

                    <a href="#" class="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50">Attorneys</a>

                    <nuxt-link to="/support" title="Support" class="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50">
                      Support
                    </nuxt-link>

                    <a href="#" class="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50">Company</a>
                  </div>
                  <div class="px-5 mt-6">
                    <nuxt-link to="/contact" title="Contact page" class="block w-full px-4 py-3 font-medium text-center text-white rounded-md shadow bg-gradient-to-r from-blue-500 to-light-blue-600 hover:from-blue-600 hover:to-light-blue-700">
                      Get started
                    </nuxt-link>
                  </div>
                  <div class="px-5 mt-6">
                    <p class="text-base font-medium text-center text-gray-500">
                      Existing customer? <a href="#" class="text-gray-900 hover:underline">Login</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </header>
        <!-- style="background-image: url(https://www.keydesign-themes.com/etalon/lawyer/wp-content/uploads/sites/10/2017/10/slider4.jpg);"-->
        <div class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-0 lg:overflow-hidden">
          <div class="mx-auto max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8">
              <div class="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div class="lg:py-24">
                  <a href="#" class="inline-flex items-center p-1 pr-2 text-white bg-black rounded-full sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                    <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-blue-500 to-light-blue-600 rounded-full">We're hiring</span>
                    <span class="ml-4 text-sm">Visit our careers page</span>
                    <!-- Heroicon name: solid/chevron-right -->
                    <svg class="w-5 h-5 ml-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <h1 class="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span class="block">Legal representation</span>
                    <span class="block pb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-light-blue-400 sm:pb-5">you can count on.</span>
                  </h1>
                  <p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                    Serving the greater Orlando area for over two decades has allowed us to excel in injury law, family law, criminal law, and more. Meet our team of experienced attorneys and book an appointment today.
                  </p>
                  <div class="mt-10 sm:mt-12">
                    <form action="#" class="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div class="sm:flex">
                        <div class="flex-1 min-w-0">
                          <label for="email" class="sr-only">Email address</label>
                          <input id="email" type="email" placeholder="Enter your email" class="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-400 focus:ring-offset-gray-900">
                        </div>
                        <div class="mt-3 sm:mt-0 sm:ml-3">
                          <nuxt-link to="/contact" title="Contact page" class="flex justify-center w-full px-4 py-3 font-medium text-center text-white rounded-md shadow bg-gradient-to-r from-blue-500 to-light-blue-600 hover:from-blue-600 hover:to-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-400 focus:ring-offset-gray-900">
                            Get started
                          </nuxt-link>
                        </div>
                      </div>
                      <p class="mt-3 text-sm text-gray-300 sm:mt-4">
                        Start your free consultation, no credit card necessary. By providing your email, you agree to our <a href="#" class="font-medium text-white">terms or service</a>.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div class="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
                  <Shield class="hidden" />
                  <img class="w-full lg:absolute lg:bottom-0 lg:top-4 lg:left-0 lg:h-auto lg:w-auto lg:max-w-screen-sm" src="~/static/gearteam.png" alt="Our team">
                </div>
              </div>
            </div>
            <!-- <div class="relative mx-auto max-w-7xl">
              <div class="w-full mx-auto">
                <dl class="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                  <div class="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                    <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                      Guarantee
                    </dt>
                    <dd class="order-1 text-5xl font-extrabold text-blue-600">
                      100%
                    </dd>
                  </div>
                  <div class="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                    <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                      Delivery
                    </dt>
                    <dd class="order-1 text-5xl font-extrabold text-blue-600">
                      24/7
                    </dd>
                  </div>
                  <div class="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                    <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                      Clients
                    </dt>
                    <dd class="order-1 text-5xl font-extrabold text-blue-600">
                      100k
                    </dd>
                  </div>
                </dl>
              </div>
            </div> -->
          </div>
          <Stats />
        </div>

        <!-- Feature section with screenshot was:pt instead of py was lg:py-32 -->
        <div class="relative py-16 bg-gray-50 sm:py-24 lg:pt-8 lg:pb-14">
          <div class="max-w-md px-4 mx-auto text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
            <div>
              <h2 class="text-base font-semibold tracking-wider text-blue-600 uppercase">
                simplify your case
              </h2>
              <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                No lawyer? No problem.
              </p>
              <p class="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
                Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
              </p>
            </div>
            <!-- was lg:-mb-80 -->
            <div class="grid grid-cols-1 mt-8 md:grid-cols-2">
              <img class="col-span-1 rounded-lg shadow-xl ring-1 ring-black ring-opacity-5" src="~/static/team.jpg" alt="Meeting photo">
              <span class="col-span-1 text-left">
                <p class="py-8 text-lg font-medium text-gray-600 lg:mt-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet adipisci, animi corrupti perspiciatis libero molestiae ad praesentium similique quis repudiandae possimus eligendi atque dolorem corporis impedit sint dolores exercitationem sapiente.
                </p>
                <div class="pt-6 border-t border-gray-200">
                  <blockquote>
                    <div>
                      <p class="text-base text-gray-500">
                        &ldquo;I was involved in a car accident [...] &amp; Mike Gagnon is an experienced, dependable, and knowledgeable attorney. Couldn’t be happier with my results.&rdquo;
                      </p>
                    </div>
                    <footer class="mt-3">
                      <div class="flex items-center space-x-3">
                        <div class="flex-shrink-0">
                          <img class="w-6 h-6 rounded-full" src="https://images.unsplash.com/photo-1529701870190-9ae4010fd124?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
                        </div>
                        <div class="text-base font-medium text-gray-700">
                          John Fitzgerald, Business Owner
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </span>
            </div>
          </div>
        </div>
        <logo-cloud />

        <CheckList />

        <!-- Feature section with grid was bg:white -->
        <div class="relative hidden py-16 bg-white sm:py-24 lg:py-32">
          <div class="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h2 class="text-base font-semibold tracking-wider uppercase text-light-blue-600">
              our advantage
            </h2>
            <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to be confident in court
            </p>
            <p class="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
              Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
            </p>
            <div class="mt-12">
              <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div class="pt-6">
                  <div class="flow-root px-6 pb-8 rounded-lg bg-gray-50">
                    <div class="-mt-6">
                      <div>
                        <span class="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-blue-500 to-light-blue-600">
                          <!-- Heroicon name: outline/cloud-upload -->
                          <svg
                            class="w-6 h-6 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                        </span>
                      </div>
                      <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">
                        Legal Counsel
                      </h3>
                      <p class="mt-5 text-base text-gray-500">
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="pt-6">
                  <div class="flow-root px-6 pb-8 rounded-lg bg-gray-50">
                    <div class="-mt-6">
                      <div>
                        <span class="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-blue-500 to-light-blue-600">
                          <!-- Heroicon name: outline/lock-closed -->
                          <svg
                            class="w-6 h-6 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </span>
                      </div>
                      <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">
                        Secure Communication
                      </h3>
                      <p class="mt-5 text-base text-gray-500">
                        Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="pt-6">
                  <div class="flow-root px-6 pb-8 rounded-lg bg-gray-50">
                    <div class="-mt-6">
                      <div>
                        <span class="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-blue-500 to-light-blue-600">
                          <!-- Heroicon name: outline/refresh -->
                          <svg
                            class="w-6 h-6 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </span>
                      </div>
                      <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">
                        Honest Pricing
                      </h3>
                      <p class="mt-5 text-base text-gray-500">
                        Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="pt-6">
                  <div class="flow-root px-6 pb-8 rounded-lg bg-gray-50">
                    <div class="-mt-6">
                      <div>
                        <span class="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-blue-500 to-light-blue-600">
                          <!-- Heroicon name: outline/shield-check -->
                          <svg
                            class="w-6 h-6 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </span>
                      </div>
                      <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">
                        Experienced Attorneys
                      </h3>
                      <p class="mt-5 text-base text-gray-500">
                        Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="pt-6">
                  <div class="flow-root px-6 pb-8 rounded-lg bg-gray-50">
                    <div class="-mt-6">
                      <div>
                        <span class="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-blue-500 to-light-blue-600">
                          <!-- Heroicon name: outline/cog -->
                          <svg
                            class="w-6 h-6 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </span>
                      </div>
                      <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">
                        Quick Turnarounds
                      </h3>
                      <p class="mt-5 text-base text-gray-500">
                        Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="pt-6">
                  <div class="flow-root px-6 pb-8 rounded-lg bg-gray-50">
                    <div class="-mt-6">
                      <div>
                        <span class="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-blue-500 to-light-blue-600">
                          <!-- Heroicon name: outline/server -->
                          <svg
                            class="w-6 h-6 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                          </svg>
                        </span>
                      </div>
                      <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">
                        Database Backups
                      </h3>
                      <p class="mt-5 text-base text-gray-500">
                        Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Testimonial section -->
        <div class="pb-16 bg-gradient-to-r from-blue-500 to-light-blue-600 lg:pb-0 lg:z-10 lg:relative">
          <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <div class="relative lg:-my-8">
              <div aria-hidden="true" class="absolute inset-x-0 top-0 bg-white h-1/2 lg:hidden" />
              <div class="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                <div class="overflow-hidden shadow-xl aspect-w-10 aspect-h-6 rounded-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                  <img class="object-cover lg:h-full lg:w-full" src="https://images.unsplash.com/photo-1606002830191-c1b4f20e6cda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=90" alt="">
                </div>
              </div>
            </div>
            <div class="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
              <div class="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                <blockquote>
                  <div>
                    <svg class="w-12 h-12 text-white opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p class="mt-6 text-2xl font-medium text-white">
                      I was involved in a serious car accident and my attorney Justin Eisele was a godsend. [...] He was extremely professional in every way. He always returned my calls and answered all my questions. When he called to update me on my case, I was ecstatic as he thoroughly explained that all medical costs had been taken care of.
                    </p>
                  </div>
                  <footer class="mt-6">
                    <p class="text-base font-medium text-white">
                      Phillip Sanders
                    </p>
                    <p class="text-base font-medium text-light-blue-100">
                      CEO at PureInsights
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <!-- Blog section -->
        <div class="relative hidden py-16 bg-gray-50 sm:py-24 lg:py-32">
          <div class="relative">
            <div class="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <h2 class="text-base font-semibold tracking-wider uppercase text-light-blue-600">
                Learn
              </h2>
              <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Helpful Resources
              </p>
              <p class="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
                Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
              </p>
            </div>
            <div class="grid max-w-md gap-8 px-4 mx-auto mt-12 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img class="object-cover w-full h-48" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">
                </div>
                <div class="relative z-50 flex flex-col justify-between flex-1 p-6 bg-white">
                  <div class="flex-1">
                    <p class="text-sm font-medium text-light-blue-600">
                      <a href="#" class="hover:underline">
                        Article
                      </a>
                    </p>
                    <a href="#" class="block mt-2">
                      <p class="text-xl font-semibold text-gray-900">
                        Boost your conversion rate
                      </p>
                      <p class="mt-3 text-base text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
                      </p>
                    </a>
                  </div>
                  <div class="flex items-center mt-6">
                    <div class="flex-shrink-0">
                      <a href="#">
                        <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Roel Aufderehar">
                      </a>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">
                        <a href="#" class="hover:underline">
                          Roel Aufderehar
                        </a>
                      </p>
                      <div class="flex space-x-1 text-sm text-gray-500">
                        <time datetime="2020-03-16">
                          Mar 16, 2020
                        </time>
                        <span aria-hidden="true">
                          &middot;
                        </span>
                        <span>
                          6 min read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img class="object-cover w-full h-48" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">
                </div>
                <div class="relative z-50 flex flex-col justify-between flex-1 p-6 bg-white">
                  <div class="flex-1">
                    <p class="text-sm font-medium text-light-blue-600">
                      <a href="#" class="hover:underline">
                        Video
                      </a>
                    </p>
                    <a href="#" class="block mt-2">
                      <p class="text-xl font-semibold text-gray-900">
                        How to use search engine optimization to drive sales
                      </p>
                      <p class="mt-3 text-base text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.
                      </p>
                    </a>
                  </div>
                  <div class="flex items-center mt-6">
                    <div class="flex-shrink-0">
                      <a href="#">
                        <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Brenna Goyette">
                      </a>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">
                        <a href="#" class="hover:underline">
                          Brenna Goyette
                        </a>
                      </p>
                      <div class="flex space-x-1 text-sm text-gray-500">
                        <time datetime="2020-03-10">
                          Mar 10, 2020
                        </time>
                        <span aria-hidden="true">
                          &middot;
                        </span>
                        <span>
                          4 min read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img class="object-cover w-full h-48" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">
                </div>
                <div class="relative z-50 flex flex-col justify-between flex-1 p-6 bg-white">
                  <div class="flex-1">
                    <p class="text-sm font-medium text-light-blue-600">
                      <a href="#" class="hover:underline">
                        Case Study
                      </a>
                    </p>
                    <a href="#" class="block mt-2">
                      <p class="text-xl font-semibold text-gray-900">
                        Improve your customer experience
                      </p>
                      <p class="mt-3 text-base text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.
                      </p>
                    </a>
                  </div>
                  <div class="flex items-center mt-6">
                    <div class="flex-shrink-0">
                      <a href="#">
                        <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Daniela Metz">
                      </a>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">
                        <a href="#" class="hover:underline">
                          Daniela Metz
                        </a>
                      </p>
                      <div class="flex space-x-1 text-sm text-gray-500">
                        <time datetime="2020-02-12">
                          Feb 12, 2020
                        </time>
                        <span aria-hidden="true">
                          &middot;
                        </span>
                        <span>
                          11 min read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OurTeam />
        <ContactForm class="mb-12" />
        <!-- CTA Section -->
        <BlackCta />
      </main>
      <CustomFooter />
    </div>
  </div>
</template>

<script>
import LogoCloud from '~/components/LogoCloud.vue'
export default {
  components: { LogoCloud },
  data () {
    return {
      mobileOpen: false
    }
  }
}
</script>

<style>
 /* h1, h2 {
   font-family: 'Merriweather'
 } */
</style>
