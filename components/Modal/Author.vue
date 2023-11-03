<template>
  <div
    class="rounded-md absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 bg-gray-300 h-32 flex justify-center items-center px-20 text-center transition-all duration-500"
    :class="props.show ? `opacity-100` : 'opacity-0'"
  >
    <h2 class="text-2xl font-bold">You are now following this author</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
});
</script>

<style lang="scss" scoped></style>
