<script setup lang="ts">
const cards = [
  {
    icon: 'pi pi-th-large',
    title: 'Feed',
    description: 'Dive into my quick thoughts',
    buttonText: 'View Feed',
  },
  {
    icon: 'pi pi-briefcase',
    title: 'Design Services',
    description: 'Explore my range of design services.',
    buttonText: 'View Services',
  },
]
</script>

<template>
  <div class="grid gap-6 md:grid-cols-2">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="flex flex-col items-start gap-6 rounded-lg border border-zinc-700 p-6"
    >
      <div
        class="flex size-10 items-center justify-center rounded-full bg-zinc-800"
      >
        <i :class="card.icon" class="text-lg" />
      </div>

      <div class="flex-1">
        <h3 class="text-sm font-semibold">
          {{ card.title }}
        </h3>
        <p class="text-sm text-zinc-500">
          {{ card.description }}
        </p>
      </div>
      <Button :label="card.buttonText" />
    </div>
  </div>
</template>
