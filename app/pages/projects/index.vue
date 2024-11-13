<script setup lang="ts">
const { data } = await useFetch('/api/projects', {
  lazy: true
})
const projects = computed(() => data.value?.data || [])
</script>

<template>
  <div class="container max-w-5xl">
    <div class="py-8 md:py-16">
      <h1 class="mb-4 text-2xl font-bold">
        Projects
      </h1>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div v-for="project in projects" :key="project.id" class="group overflow-hidden rounded-[8px] border border-zinc-500 bg-zinc-800/50">
          <img :src="project.image" :alt="project.name">
          <div class="flex items-end gap-4 p-4">
            <div class="flex-1">
              <h2 class="text-sm font-semibold">
                {{ project.name }}
              </h2>
              <p class="text-sm text-zinc-500">
                {{ project.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
