<script setup lang="ts">
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const articles = [
  {
    title: 'Productize Your Design Skills',
    category: 'Business',
    icon: 'pi pi-chart-line',
  },
  {
    title: 'Designing for Shareability',
    category: 'Design',
    icon: 'pi pi-chart-pie',
  },
  {
    title: 'The Age of Mobile and VR',
    category: 'Business',
    icon: 'pi pi-images',
  },
  {
    title: 'Freelancing in Digital Design',
    category: 'Business',
    icon: 'pi pi-th-large',
  },
  {
    title: 'A New Era of Entrepreneurship',
    category: 'Business',
    icon: 'pi pi-building-columns',
  },
  {
    title: 'The Evolution of Digital Design',
    category: 'Design',
    icon: 'pi pi-chart-scatter',
  },
]
</script>

<template>
  <div class="overflow-hidden rounded-lg border border-zinc-700">
    <div class="px-3 py-6">
      <div class="px-3">
        <h2>Thoughts</h2>
        <p class="text-sm text-zinc-500">
          Sharing experiences, knowledge and videos on design & tech.
        </p>
      </div>

      <div class="mt-6 grid md:grid-cols-2">
        <a
          v-for="(article, index) in articles"
          :key="index"
          href="#"
          class="flex items-center gap-4 rounded-lg border border-transparent p-3 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-800/30"
        >
          <div
            class="flex size-10 items-center justify-center rounded-lg bg-zinc-800"
          >
            <i
              :class="article.icon"
              class="text-xl font-semibold"
            />
          </div>
          <div>
            <p class="text-sm font-medium">{{ article.title }}</p>
            <p class="text-sm text-zinc-500">{{ article.category }}</p>
          </div>
        </a>
      </div>
    </div>

    <div class="grid gap-4 bg-zinc-800/50 p-6 md:grid-cols-2">
      <div>
        <h3 class="text-sm">
          Join 1K+ Readers
        </h3>
        <p class="text-sm text-zinc-500">
          Sent out every two weeks. No spam.
        </p>
      </div>

      <div class="flex gap-2">
        <InputText type="text" class="flex-1" placeholder="Your E-Mail" />
        <Button label="Subscribe" class="w-[100px] flex-none" />
      </div>
    </div>
  </div>
</template>
