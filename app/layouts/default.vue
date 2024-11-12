<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import Button from 'primevue/button'
import Drawer from 'primevue/drawer'
import { ref } from 'vue'

const visible = ref(false)
const isMobile = useMediaQuery('(max-width: 767px)')

function toggleSidebar() {
  visible.value = !visible.value
}

function closeSidebar() {
  visible.value = false
}
</script>

<template>
  <div>
    <div v-if="isMobile" class="flex justify-end p-4">
      <Button icon="pi pi-bars" @click="toggleSidebar" />
    </div>

    <Drawer v-if="isMobile" v-model:visible="visible" header="Menu">
      <nav class="grid gap-2">
        <NuxtLink to="/" @click="closeSidebar">
          Home
        </NuxtLink>
        <NuxtLink to="/projects" @click="closeSidebar">
          Projects
        </NuxtLink>
      </nav>
    </Drawer>

    <div class="flex items-stretch">
      <aside
        v-if="!isMobile"
        class="sticky left-0 top-0 h-screen w-64 flex-none border-r border-zinc-600 bg-zinc-800 p-6"
      >
        <nav class="grid gap-2">
          <NuxtLink to="/">
            Home
          </NuxtLink>
          <NuxtLink to="/projects">
            Projects
          </NuxtLink>
        </nav>
      </aside>

      <div class="flex-1">
        <slot />
      </div>
    </div>
  </div>
</template>
