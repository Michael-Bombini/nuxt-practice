<template>
  <div
    class="text-white text-center text-3xl font-bold"
    v-if="authors.length < 0"
  >
    You are not following any authors
  </div>
  <ul class="text-white flex justify-center items-center flex-col gap-8" v-else>
    <li v-for="author in authors" class="flex gap-6 items-center">
      <img
        :src="author.profile_picture"
        class="w-20 h-20 rounded-full"
        alt=""
      />
      <h2 class="text-green-400 font-bold text-2xl">
        {{ author.first_name }} {{ author.last_name }}
      </h2>
    </li>
  </ul>
</template>

<script setup lang="ts">
const authors = useAuthors();
</script>

<style lang="scss" scoped></style>
