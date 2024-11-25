<script setup lang="ts">
const { data: projects, status } = await useFetch('/api/projects', {
  lazy: true,
  deep: true,
})

const scroll = ref<HTMLDivElement>()
const scrollIsVisible = useElementVisibility(scroll)

async function loadProjects() {
  if (status.value === 'pending' || !projects.value || !projects.value.hasMore)
    return

  status.value = 'pending'

  try {
    const { data, hasMore: has } = await $fetch('/api/projects', {
      params: {
        cursor: projects.value.data.at(-1)!.id,
      },
    })

    projects.value.data.push(...data)
    projects.value.hasMore = has
    status.value = 'success'
  }
  catch (error) {
    console.error('Error loading projects:', error)
    status.value = 'error'
  }
}

watch(scrollIsVisible, (isVisible) => {
  if (isVisible) {
    loadProjects()
  }
})
</script>

<template>
  <div class="container max-w-5xl">
    <div class="py-8 md:py-16">
      <h1 class="mb-4 text-2xl font-bold">
        Projects
      </h1>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <NuxtLink
          v-for="project in projects?.data" :key="project.id" :to="`/projects/${project.id}`"
          class="group overflow-hidden rounded-[8px] border border-zinc-500 bg-zinc-800/50"
        >
          <img :src="project.image" :alt="project.name">
          <div class="flex items-end gap-4 p-4">
            <div class="flex-1">
              <h2 class="text-sm font-semibold">
                {{ project.name }}
              </h2>
              <p class="text-sm text-zinc-500">
                {{ project.shortDescription }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div ref="scroll" class="py-10" />
    </div>
  </div>
</template>
