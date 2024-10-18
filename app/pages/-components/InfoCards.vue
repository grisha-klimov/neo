<script setup lang="ts">
const cards = [
  {
    icon: "pi pi-th-large",
    title: "Feed",
    description: "Dive into my quick thoughts",
    buttonText: "View Feed",
  },
  {
    icon: "pi pi-briefcase",
    title: "Design Services",
    description: "Explore my range of design services.",
    buttonText: "View Services",
  },
];
</script>

<template>
  <div class="grid gap-[24px] sm:grid-cols-2">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="flex flex-col items-start gap-[24px] rounded-[8px] border border-[#242424] bg-[#1c1c1c] p-[24px]"
    >
      <div
        class="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#2c2c2c]"
      >
        <i :class="card.icon" class="text-[20px] text-white"></i>
      </div>

      <div class="flex-1">
        <h3 class="text-[14px] font-semibold text-[#f6f6f6]">
          {{ card.title }}
        </h3>
        <p class="text-[14px] text-[#858585]">{{ card.description }}</p>
      </div>
      <Button :label="card.buttonText" />
    </div>
  </div>
</template>
