<template>
  <li class="bg-white border border-gray-200 rounded-sm">
    <div class="" @click="open">
      <div class="flex justify-between px-10 py-5">
        <h3 class="font-bold text-gray-900">
          {{ question }}
        </h3>
        <svg xmlns="http://www.w3.org/2000/svg" :class="[visible ? '-rotate-180' : '-rotate-0', 'transform transition w-6 h-6']" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>

    <transition name="accordion" @enter="start" @after-enter="end" @before-leave="start" @after-leave="end">
      <div v-show="visible" class="">
        <ul class="px-10 pb-4">
          <p class="text-sm text-gray-600">
            {{ answer }}
          </p>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  inject: ['Accordion'],
  props: {
    question: String,
    answer: String
  },
  data () {
    return {
      index: null
    }
  },
  computed: {
    visible () {
      return this.index === this.Accordion.active
    }
  },
  created () {
    this.index = this.Accordion.count++
  },
  methods: {
    open () {
      if (this.visible) {
        this.Accordion.active = null
      } else {
        this.Accordion.active = this.index
      }
    },
    start (el) {
      el.style.height = el.scrollHeight + 'px'
    },
    end (el) {
      el.style.height = ''
    }
  }
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
