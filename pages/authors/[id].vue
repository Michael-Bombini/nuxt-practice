<template>
  <div class="flex justify-center items-center">
    <div class="text-center">
      <img
        :src="userData.profile_picture"
        alt=""
        class="h-64 w-64 rounded-full block mb-6"
      />
      <h2 class="text-3xl md:text-4xl text-green-400 font-bold mb-4">
        {{ userData.first_name }} {{ userData.last_name }}
      </h2>
      <p class="text-xl text-white mb-8">{{ userData.job }}</p>
      <button
        class="border-green-400 rounded-md px-8 py-2 font-semibold text-white border"
        @click="followAuthor"
      >
        Follow
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from "~/models/User";

const route = useRoute();

const { data: resp } = await useFetch<any>(
  `https://api.slingacademy.com/v1/sample-data/users/${route.params.id}`
);

const { user } = resp.value;
const userData = user as User;

const authors = useAuthors();

function followAuthor() {
  const isFollowed = authors.value.find((author) => author.id === userData.id);
  if (!isFollowed) {
    authors.value = [...authors.value, userData]
  }
}
</script>

<style lang="scss" scoped></style>
