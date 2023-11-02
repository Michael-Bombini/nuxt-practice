<template>
  <div>{{ photo.photo.title }}</div>
</template>

<script setup lang="ts">
import type { Photo } from "~/models/Photo";

const route = useRoute();

const { data: photo } = await useFetch<any>(
  `https://api.slingacademy.com/v1/sample-data/photos/${route.params.id}`
);

</script>

<style lang="scss" scoped></style>
