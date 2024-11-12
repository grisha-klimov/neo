<script setup lang="ts">
import InfoCards from '~/pages/-components/InfoCards.vue'
import NewDrops from '~/pages/-components/NewDrops.vue'
import Thoughts from '~/pages/-components/Thoughts.vue'
import Hero from './-components/Hero.vue'
</script>

<template>
  <main>
    <div class="container max-w-5xl">
      <div class="grid gap-6 py-8 md:gap-12 md:py-16">
        <Hero />
        <NewDrops />
        <Thoughts />
        <InfoCards />
      </div>
    </div>
  </main>
</template>
