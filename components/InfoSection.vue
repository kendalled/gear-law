<template>
  <!-- Feature section with screenshot was:pt instead of py was lg:py-32 -->
  <div class="relative py-16 bg-gray-50 sm:py-24 lg:pb-14">
    <div class="max-w-md px-4 mx-auto text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
      <div>
        <h2 style="letter-spacing: 0.03em;" class="text-base font-semibold tracking-wider text-blue-600 uppercase">
          simplify your case
        </h2>
        <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 playfair sm:text-4xl">
          No lawyer? No problem.
        </p>
        <p class="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
          Our lawyers have the necessary litigation skills and experience to give you the confidence you need to move forward with any case. Our team has you covered &mdash; no matter the issue.
        </p>
      </div>
      <!-- was lg:-mb-80 -->
      <div class="grid grid-cols-1 mt-8 md:grid-cols-2">
        <img class="col-span-1 rounded-lg shadow-xl ring-1 ring-black ring-opacity-5" src="~/static/team.jpg" alt="Meeting photo">
        <span class="col-span-1 text-left">
          <p class="py-8 text-lg font-medium text-gray-600 lg:mt-2">
            We collect evidence, secure witnesses, employ effective strategies, research and prepare your documents and pleadings, as well as protect your rights against those who wish to bring harm to you or minimize your claim. Take a look at our countless testimonials below.
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
</template>

<script>
export default {
  name: 'InfoSection'
}
</script>
