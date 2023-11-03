<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <ModalAuthor :show="show" />
</template>

<script setup lang="ts">
const authors = useAuthors();
const show = ref(false);
watch(authors, () => {
  show.value = true;
  setTimeout(() => {
    show.value = false;
  }, 2000);
});
</script>

<style>
html,
body {
  @apply bg-slate-950;
}
</style>
