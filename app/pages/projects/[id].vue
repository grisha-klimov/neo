<script setup>
const route = useRoute()
const { id } = route.params

const { data: project } = await useFetch(`/api/projects/${id}`)
</script>

<template>
  <div v-if="project" class="container max-w-3xl">
    <div class="py-8 md:py-16">
      <div class="mx-auto mb-8 max-w-xl">
        <NuxtLink to="/projects" class="mb-8 block text-zinc-500">
          &larr; All projects
        </NuxtLink>
        <h1 class="text-4xl font-semibold md:text-5xl">
          {{ project.name }}
        </h1>
      </div>
      <div class="group mb-8 overflow-hidden rounded-lg border border-zinc-500">
        <img :src="project.image" :alt="project.name">
      </div>
      <div class="project-content" v-html="project.description" />
    </div>
  </div>
</template>
