<template>
  <div class="bg-gray-50">
    <div class="px-4 py-12 mx-auto max-w-7xl md:grid grid-cols-2 gap-8">
      <div class="flex flex-col max-w-md mb-8 space-y-8 lg:mb-0">
        <h1 style="font-family: Merriweather" class="text-3xl text-gray-900">
          Any questions?
        </h1>
        <div class="mb-4">
          <p class="mb-4 text-gray-600">
            Tempus urna et pharetra pharetra massa massa ultricies. Nulla posuere sollicitudin aliquam ultrices sagittis orci.
          </p>
          <p class="text-gray-600">
            Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Fusce ut placerat orci nulla pellentesque.
          </p>
        </div>
        <div>
          <a class="px-6 py-4 font-semibold text-white uppercase bg-blue-500 border-2 border-blue-500 rounded-sm text-md transition hover:bg-white hover:text-gray-900" href="#">Get Started</a>
        </div>
      </div>
      <div>
        <Accordion class="flex flex-col space-y-4">
          <accordion-item v-for="faq in faqs" :key="faq.question" :question="faq.question" :answer="faq.answer" />
        </Accordion>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  data: () => ({
    faqs: [
      {
        question: 'Why should I hire a lawyer?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a      liquip ex ea commodo consequat.'
      },
      {
        question: 'How much does it cost?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a      liquip ex ea commodo consequat.'
      },
      {
        question: 'What other help is available?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a      liquip ex ea commodo consequat.'
      }
    ]
  })
}
</script>
