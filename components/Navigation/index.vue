<template>
  <header class="bg-slate-950 text-white px-4 py-8">
    <nav
      class="container mx-auto flex justify-between items-center border-b border-white pb-6 px-4"
    >
      <NuxtLink class="text-4xl font-bold text-green-300" to="/">Nuxt</NuxtLink>
      <ul class="flex gap-8 text-lg">
        <li>
          <NuxtLink to="/authors">Followed Authors</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
