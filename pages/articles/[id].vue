<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
    <img :src="photoData.url" class="rounded-br-lg rounded-tr-lg" alt="" />
    <div class="text-center">
      <h2 class="text-3xl md:text-4xl text-green-400 font-bold mb-6">
        {{ photoData.title }}
      </h2>
      <p class="text-white text-lg mb-12">{{ photoData.description }}</p>
      <p class="text-white/70 text-sm">
        Created By The Author Number:   <NuxtLink :to="'/authors/' + photoData.user" class="underline">{{ photoData.user }}</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Photo } from "~/models/Photo";

const route = useRoute();

const { data: resp } = await useFetch<any>(
  `https://api.slingacademy.com/v1/sample-data/photos/${route.params.id}`
);

const { photo } = resp.value;
const photoData = photo as Photo;
</script>

<style lang="scss" scoped></style>
