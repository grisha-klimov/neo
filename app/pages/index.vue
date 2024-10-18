<script setup lang="ts">
import Hero from './-components/Hero.vue'
import InfoCards from './-components/InfoCards.vue'
import NewDrops from './-components/NewDrops.vue'
import Thoughts from './-components/Thoughts.vue'
</script>

<template>
  <main>
    <div class="container max-w-[960px]">
      <div
        class="grid gap-[24px] px-[24px] pb-[48px] pt-[120px] md:gap-[48px] md:px-[48px] md:pt-[140px]"
      >
        <Hero />
        <NewDrops />
        <Thoughts />
        <InfoCards />
      </div>
    </div>
  </main>
</template>
