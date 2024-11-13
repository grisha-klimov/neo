<script setup lang="ts">
const { windowSize } = storeToRefs(useUIStore())

function listenWindowSize() {
  windowSize.value.width = window.innerWidth
  windowSize.value.height = window.innerHeight
}

onMounted(() => {
  listenWindowSize()
  window.addEventListener('resize', listenWindowSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', listenWindowSize)
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
