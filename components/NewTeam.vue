<template>
  <!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
  <div class="bg-gray-50">
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
      <SubText :text="'get introduced'" />
      <div class="space-y-12">
        <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-gray-800 playfair sm:text-4xl">
          Meet our experienced team
        </h2>

        <ul role="list" class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
          <li v-for="person in attorneys" :key="person.name">
            <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
              <nuxt-link
                :to="'/attorneys/' + person.slug"
                :title="person.name + ' profile'"
              >
                <div class="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                  <img :class="[person.name !== 'Anna Rosario' ? 'object-top md:object-center' : 'object-center']" class="object-cover rounded-lg shadow-lg" :src="person.img" :alt="person.name + ' portrait'">
                </div>
              </nuxt-link>
              <div class="sm:col-span-2">
                <div class="space-y-4">
                  <div class="space-y-1 text-lg font-medium leading-6">
                    <h3>{{ person.name }}</h3>
                    <p class="text-blue-600">
                      {{ person.pos }}
                    </p>
                  </div>
                  <div class="text-lg">
                    <p class="inline-block text-gray-500 line-clamp-4">
                      {{ person.desc }}
                    </p>
                  </div>
                  <nuxt-link class="inline-block text-blue-600 hover:text-blue-500" :to="'/attorneys/' + person.slug">
                    Read more <span>&rarr;</span>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </li>

        <!-- More people... -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewTeam',
  data () {
    return {
      attorneys: [
        {
          name: 'Mike Gagnon',
          pos: 'Attorney at Law',
          img: require('~/static/mike04.jpeg'),
          desc: 'A self proclaimed \'good guy\', Michael Gagnon has been fighting for clients tirelessly for over two decades. He is an experienced trial lawyer who specializes in personal injury, business law, & family law.',
          slug: 'mike-gagnon'
        },
        {
          name: 'Justin Eisele',
          pos: 'Attorney at Law',
          img: require('~/static/justin01.jpeg'),
          desc: 'Mr. Eisele successfully owned and operated a small business in downtown Athens, Georgia while also attending the university full time. He is fully licensed in business law and has been practicing for over 20 years.',
          slug: 'justin-eisele'
        },
        {
          name: 'Barry Rigby',
          pos: 'Attorney & Advisor',
          img: require('~/static/barry01.jpg'),
          desc: 'Barry Rigby has been a licensed attorney since 1986.  His legal experience is wide-ranging and varied. After law school, he worked as a staff analyst with the House of Representatives.',
          slug: 'barry-rigby'
        },
        {
          name: 'Anna Rovetto',
          pos: 'Office Manager & Paralegal',
          img: require('~/static/anna01.jpg'),
          desc: 'Anna Rovetto is a jack-of-all-trades. She has worked as a Realtor, Case Manager, Paralegal, and Lawyer for over 20 years. She has worked in family law, criminal law, and business law.',
          slug: 'anna-rovetto'
        }
      ]
    }
  }
}
</script>
