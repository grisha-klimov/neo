<script setup lang="ts">
const limit = 6
const page = ref(1)
const isLoading = ref(false)
const hasMore = ref(true);

const projects = ref <any[]> ([])

async function loadProjects() {
  if (isLoading.value || !hasMore.value)
    return

  isLoading.value = true

  try {
    const { data, error } = await useFetch('/api/projects', {
      params: {
        page: page.value,
        limit,
      },
      lazy: true,
    })

    if (error.value) {
      console.error('Error loading projects:', error.value)
    }
    else if (data.value && data.value.data.length > 0) {
      projects.value.push(...data.value.data)
      page.value += 1

      if (data.value.data.length < limit) {
        hasMore.value = false
      }
    }
    else {
      hasMore.value = false
    }
  }
  catch (error) {
    console.error('Error loading projects:', error)
  }
  finally {
    isLoading.value = false
  }
}

loadProjects()

function onScroll() {
  const scrollTop = window.scrollY
  const windowHeight = window.innerHeight
  const fullHeight = document.documentElement.offsetHeight

  if (scrollTop + windowHeight >= fullHeight * 0.8) {
    loadProjects()
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div class="container max-w-5xl">
    <div class="py-8 md:py-16">
      <h1 class="mb-4 text-2xl font-bold">
        Projects
      </h1>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div
          v-for="project in projects" :key="project.id"
          class="group overflow-hidden rounded-[8px] border border-zinc-500 bg-zinc-800/50"
        >
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

      <div v-if="isLoading" class="mt-4 text-center">
        <span>Loading...</span>
      </div>
    </div>
  </div>
</template>
