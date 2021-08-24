<template>
  <main>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <ContentSection :doc="document" />
    <BlackCta />
    <CustomFooter />
  </main>
</template>

<script>
export default {
  layout: 'default',
  async asyncData ({ $content }) {
    const document = await $content('mike').fetch()

    return {
      document
    }
  }
}
</script>
