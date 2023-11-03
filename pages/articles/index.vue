<template>
    <div class="container mx-auto py-12">
      <div v-if="pending">Loading...</div>
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <div v-for="photo in photos" :key="photo.id">
          <Photo
            :key="photo.id"
            :title="photo.title"
            :image="photo.url"
            :description="photo.description"
            :user="photo.user"
            :id="photo.id"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { PhotoResponse } from "~/models/Photo";
  
  const { pending, data: photosList } = await useFetch<PhotoResponse>(
    "https://api.slingacademy.com/v1/sample-data/photos"
  );
  const photos = photosList.value?.photos;
  
  </script>
  
  <style lang="scss" scoped></style>
  