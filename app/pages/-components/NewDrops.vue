<script setup lang="ts">
import imageNewDrop1 from "./assets/images/new-drop-1.avif";
import imageNewDrop2 from "./assets/images/new-drop-2.avif";

const products = [
  {
    name: "Billify",
    description: "A digital invoice template for designers.",
    price: "$25",
    image: imageNewDrop1,
    alt: "New Drop 1",
  },
  {
    name: "Supply",
    description: "Lemonsqueezy-powered digital store template.",
    price: "$99",
    image: imageNewDrop2,
    alt: "New Drop 2",
  },
];
</script>

<template>
  <div class="grid gap-[24px]">
    <h2>New Drops</h2>
    <div class="grid gap-[16px] sm:grid-cols-2 sm:gap-[32px]">
      <a
        v-for="(product, index) in products"
        :key="index"
        class="group overflow-hidden rounded-[8px] border border-[#242424] bg-[#1c1c1c]"
        href="#"
      >
        <img :src="product.image" :alt="product.alt" />
        <div class="flex items-end gap-[16px] p-[16px]">
          <div class="flex-1">
            <h3 class="text-[14px] font-semibold text-[#f6f6f6]">
              {{ product.name }}
            </h3>
            <p class="text-[14px] text-[#858585]">{{ product.description }}</p>
          </div>
          <div
            class="flex-none rounded-[40px] border border-[#242424] bg-[#1c1c1c] px-[12px] py-[6px] text-[12px] text-[#858585]"
          >
            {{ product.price }}
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
