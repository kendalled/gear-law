<template>
  <div class="px-4 bg-gray-50">
    <div class="py-6 mx-auto max-w-7xl">
      <div class="py-8 text-center">
        <h1 style="font-family: Merriweather" class="mb-4 text-3xl font-semibold text-gray-900">
          Latest news
        </h1>
        <h2 class="text-xl text-gray-600">
          Catch all the latest news, events, updates and inspiration on our blog.
        </h2>
      </div>
      <div class="mb-4 md:grid grid-cols-3 gap-6">
        <NewsCard
          v-for="post in blogPosts"
          :key="post.title"
          class="mb-4 md:mb-0"
          :post-title="post.title"
          :post-date="post.date"
          :post-blurb="post.blurb"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    blogPosts: [
      {
        title: 'Blog Post 1',
        date: 'July 16, 2021',
        blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum tempor risus. Morbi a metus lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque interdum odio sit amet mi cursus, eget finibus purus interdum.'
      },
      {
        title: 'Blog Post 2',
        date: 'August 4, 2021',
        blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum tempor risus. Morbi a metus lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque interdum odio sit amet mi cursus, eget finibus purus interdum.'
      },
      {
        title: 'Blog Post 3',
        date: 'September 28, 2021',
        blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum tempor risus. Morbi a metus lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque interdum odio sit amet mi cursus, eget finibus purus interdum.'
      }
    ]
  })
}
</script>
