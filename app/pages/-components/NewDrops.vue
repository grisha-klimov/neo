<script setup lang="ts">
import imageNewDrop1 from './assets/images/new-drop-1.avif'
import imageNewDrop2 from './assets/images/new-drop-2.avif'

const products = [
  {
    name: 'Billify',
    description: 'A digital invoice template for designers.',
    price: '$25',
    image: imageNewDrop1,
    alt: 'New Drop 1',
  },
  {
    name: 'Supply',
    description: 'Lemonsqueezy-powered digital store template.',
    price: '$99',
    image: imageNewDrop2,
    alt: 'New Drop 2',
  },
]
</script>

<template>
  <div class="grid gap-6">
    <h2>New Drops</h2>
    <div class="grid gap-4 md:grid-cols-2 md:gap-6">
      <a
        v-for="(product, index) in products"
        :key="index"
        class="group overflow-hidden rounded-[8px] border border-zinc-500 bg-zinc-800/50"
        href="#"
      >
        <img :src="product.image" :alt="product.alt">
        <div class="flex items-end gap-4 p-4">
          <div class="flex-1">
            <h3 class="text-sm font-semibold">
              {{ product.name }}
            </h3>
            <p class="text-sm text-zinc-500">{{ product.description }}</p>
          </div>
          <div
            class="flex-none rounded-full border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-zinc-400"
          >
            {{ product.price }}
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
