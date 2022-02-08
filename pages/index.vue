<template>
  <main>
    <CombinedNav />
    <div class="relative mt-1">
      <div class="absolute inset-x-0 bottom-0 h-full bg-gray-100" />
      <div class="w-full mx-0 max-w-none">
        <!-- was rounded-2xl -->
        <div class="relative shadow-xl sm:rounded-none sm:overflow-hidden">
          <div class="absolute inset-0">
            <img class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=70&sat=-100" alt="People working on laptops">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-900 mix-blend-multiply" />
          </div>
          <div class="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 sm:py-24 lg:py-48 lg:px-8">
            <h1 class="text-4xl font-extrabold tracking-wide text-left sm:text-5xl lg:text-6xl">
              <span class="block text-white">Legal representation</span>
              <span class="block text-blue-200">you can count on.</span>
            </h1>
            <p class="mt-6 mr-auto text-xl text-left text-blue-200 max-w-7xl sm:max-w-2xl">
              Serving the greater Orlando area for over two decades has allowed us to excel in injury law, family law, criminal law, and more. Meet our team of experienced attorneys and schedule a free consultation today.
            </p>
            <div class="max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center">
              <div class="space-y-4 sm:space-y-0 sm:mr-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <a href="#" class="flex items-center justify-center px-4 py-3 text-base font-medium text-blue-700 bg-white border border-transparent rounded-md shadow-sm hover:bg-blue-50 sm:px-8">
                  Get started
                </a>
                <a href="#" class="flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ColoredCloud />
    <Services />
    <!-- Feature section with screenshot was:pt instead of py was lg:py-32 -->
    <div class="relative py-16 bg-gray-50 sm:py-24 lg:pt-8 lg:pb-14">
      <div class="max-w-md px-4 mx-auto text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 style="letter-spacing: 0.03em;" class="text-base font-semibold tracking-wider text-blue-600 uppercase">
            simplify your case
          </h2>
          <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 playfair sm:text-4xl">
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
    <LogoCloud />
    <CheckList />
    <Testimonial />
    <OurTeam />
    <!-- <ColoredCta /> -->
    <ContactForm class="mb-12" />
    <!-- CTA Section -->
    <BlackCta />
    <CustomFooter />
  </main>
</template>

<script>
export default {
  layout: 'default'
}
</script>

<style scoped>
h1, .playfair {
  font-family: 'Source Serif Pro', sans-serif, -apple-system
}
</style>
