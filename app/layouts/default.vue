<script setup lang="ts">
import Button from 'primevue/button'
import Drawer from 'primevue/drawer'

const visible = ref(false)

function toggleSidebar() {
  visible.value = !visible.value
}

function closeSidebar() {
  visible.value = false
}
</script>

<template>
  <div>
    <div class="flex lg:hidden justify-end p-4">
      <Button icon="pi pi-bars" @click="toggleSidebar" />
    </div>

    <Drawer class="lg:hidden" v-model:visible="visible" header="Menu">
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
        class="sticky hidden lg:block left-0 top-0 h-screen w-64 flex-none border-r border-zinc-600 bg-zinc-800 p-6"
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
