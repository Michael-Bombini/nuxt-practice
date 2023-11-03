<template>
  <header class="bg-slate-950 text-white px-4 py-8">
    <nav
      class="container mx-auto flex justify-between items-center border-b border-white pb-6 px-4"
    >
      <NuxtLink class="text-4xl font-bold text-green-300" to="/">Nuxt</NuxtLink>
      <ul class="gap-8 text-lg items-center hidden sm:flex">
        <li>
          <NuxtLink to="/articles">Articles</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/authors">Followed Authors</NuxtLink>
        </li>
        <li v-if="loggedIn">
          <NuxtLink to="/profile"><img :src="data?.user?.image" v-if="data?.user?.image" class="w-6 h-6 rounded-full" alt=""></NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { status, data } = useAuth();
const loggedIn = computed(() => status.value === "authenticated");
</script>

<style lang="scss" scoped></style>
