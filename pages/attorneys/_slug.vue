<template>
  <main>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <NewNav />
    <ContentSection :doc="document" />
    <BlackCta />
    <CustomFooter />
  </main>
</template>

<script>
export default {
  layout: 'default',
  async asyncData ({ $content, params }) {
    const document = await $content('attorneys', params.slug).fetch()
    // returns page data
    return {
      document
    }
  }
}
</script>
