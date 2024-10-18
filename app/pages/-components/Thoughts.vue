<script setup lang="ts">
import { ref } from "vue";

import InputText from "primevue/inputtext";
import Button from "primevue/button";

const articles = ref([
  {
    title: "Productize Your Design Skills",
    category: "Business",
    icon: "pi pi-chart-line",
  },
  {
    title: "Designing for Shareability",
    category: "Design",
    icon: "pi pi-chart-pie",
  },
  {
    title: "The Age of Mobile and VR",
    category: "Business",
    icon: "pi pi-images",
  },
  {
    title: "Freelancing in Digital Design",
    category: "Business",
    icon: "pi pi-th-large",
  },
  {
    title: "A New Era of Entrepreneurship",
    category: "Business",
    icon: "pi pi-building-columns",
  },
  {
    title: "The Evolution of Digital Design",
    category: "Design",
    icon: "pi pi-chart-scatter",
  },
]);
</script>

<template>
  <div class="rounded-[8px] border border-[#393939]">
    <div class="px-[12px] py-[24px]">
      <div class="px-[12px]">
        <h2>Thoughts</h2>
        <p class="text-[14px] text-[#858585]">
          Sharing experiences, knowledge and videos on design & tech.
        </p>
      </div>

      <div class="mt-[24px] grid sm:grid-cols-2">
        <a
          href="#"
          v-for="(article, index) in articles"
          :key="index"
          class="flex items-center gap-[16px] rounded-[8px] border border-transparent p-[12px] transition-all duration-300 hover:border-[#242424] hover:bg-[#1c1c1c]"
        >
          <div
            class="flex h-[40px] w-[40px] items-center justify-center rounded-[6px] bg-[#2c2c2c]"
          >
            <i
              :class="article.icon"
              class="text-[20px] font-semibold text-[#f6f6f6]"
            ></i>
          </div>
          <div class="text-section">
            <p class="text-[14px] font-medium">{{ article.title }}</p>
            <p class="text-[14px] text-[#858585]">{{ article.category }}</p>
          </div>
        </a>
      </div>
    </div>

    <div class="grid gap-[16px] bg-[#1c1c1c] p-[24px] sm:grid-cols-2">
      <div>
        <h3 class="text-[14px] font-medium text-[#f6f6f6]">Join 1K+ Readers</h3>
        <p class="text-[14px] text-[#858585]">
          Sent out every two weeks. No spam.
        </p>
      </div>

      <div class="flex gap-[8px]">
        <InputText type="text" class="flex-1" placeholder="Your E-Mail" />
        <Button label="Subscribe" class="w-[100px] flex-none" />
      </div>
    </div>
  </div>
</template>
