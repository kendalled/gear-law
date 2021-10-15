<template>
  <ul class="cursor-pointer">
    <slot />
  </ul>
</template>

<script>
export default {
  provide () {
    return { Accordion: this.Accordion }
  },
  props: {},
  data () {
    return {
      Accordion: {
        count: 0,
        active: null
      }
    }
  }
}
</script>
