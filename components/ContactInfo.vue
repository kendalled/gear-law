<template>
  <div class="flex text-left">
    <span class="items-center hidden pr-4 lg:flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-blue-800"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
      </svg>
      <div>
        <p class="ml-2 text-sm font-semibold text-gray-800">+1-833-GEAR-LAW</p>
        <p class="ml-2 text-sm text-gray-600">Toll free: 407-379-9557</p>
      </div>
    </span>
    <span class="items-center hidden px-4 border-l-2 lg:flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-blue-800"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15 15" />
      </svg>
      <div>
        <p class="ml-2 text-sm font-semibold text-gray-800">Mon - Fri, 9:00 - 6:00</p>
        <p class="ml-2 text-sm text-gray-600">Sat: 10:00 - 6:00, Sun: Closed</p>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ContactInfo',
  methods: {
    // find the z score of the given array
    zScore (arr) {
      const mean = arr.reduce((a, b) => a + b) / arr.length
      const variance = arr.reduce((a, b) => a + Math.pow(b - mean, 2), 0) /
        arr.length
      const stdDev = Math.sqrt(variance)
      const zScore = (arr[0] - mean) / stdDev
      return zScore
    }
  }
}
</script>
