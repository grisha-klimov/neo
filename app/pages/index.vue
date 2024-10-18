<script setup lang="ts">
import Hero from "./-components/Hero.vue";
import NewDrops from "./-components/NewDrops.vue";
import Thoughts from "./-components/Thoughts.vue";
import InfoCards from "./-components/InfoCards.vue";
</script>

<template>
  <main class="bg-black">
    <div class="container max-w-[960px]">
      <div
        class="grid gap-[24px] px-[24px] pb-[48px] pt-[120px] sm:gap-[48px] sm:px-[48px] sm:pt-[140px]"
      >
        <Hero />
        <NewDrops />
        <Thoughts />
        <InfoCards />
      </div>
    </div>
  </main>
</template>
