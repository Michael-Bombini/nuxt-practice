<template>
  <NuxtLink :to="articlePath" class="relative">
    <img :src="image" alt="" />
    <div class="absolute inset-0 hover:bg-black/80 transition-all duration-500">
      <h2
        class="flex items-end pb-8 px-4 justify-center h-full transition-opacity opacity-0 hover:opacity-100 text-white text-lg text-center"
      >
        {{ title }}
      </h2>
    </div>
    <div
      class="absolute top-0 right-0 rounded-bl-md bg-blue-700 text-white px-6 py-1"
    >
      {{ user }}
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  title: String,
  image: String,
  description: String,
  id: Number,
  user: Number,
});

const articlePath = "/articles/" + props.id;
</script>

<style lang="scss" scoped></style>
