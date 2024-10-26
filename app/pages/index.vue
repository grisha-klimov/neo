<script setup lang="ts">
import Hero from './-components/Hero.vue'
import InfoCards from './-components/InfoCards.vue'
import NewDrops from './-components/NewDrops.vue'
import Thoughts from './-components/Thoughts.vue'
</script>

<template>
  <main>
    <div class="container max-w-5xl">
      <div class="grid gap-6 py-16 md:gap-12 md:py-32">
        <Hero />
        <NewDrops />
        <Thoughts />
        <InfoCards />
      </div>
    </div>
  </main>
</template>
