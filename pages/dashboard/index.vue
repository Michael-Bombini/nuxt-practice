<template>
  <div class="container mx-auto mb-12">
    <h2 class="text-3xl text-white font-bold">Posts Category Distribution</h2>
  </div>
  <div v-if="!pending">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
  <div class="container mx-auto">
    <h2 class="text-3xl text-white font-bold my-12">
      Latest Posts
    </h2>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Creation Date</th>
          <th class="text-left">Title</th>
          <th class="text-left">Category</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in posts" :key="item.category">
          <td>{{ formatDate(item.created_at) }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.category }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Bar } from "vue-chartjs";
import type { PostResponse } from "~/models/Posts";

const { pending, data: postList } = await useFetch<PostResponse>(
  "https://api.slingacademy.com/v1/sample-data/blog-posts?limit=40"
);
const posts = postList.value?.blogs;

const categories = posts?.map((post) => post.category);
console.log(categories);

const categoryCounts: { [key: string]: number } = {};
posts?.forEach((post) => {
  const category = post.category;
  if (categoryCounts[category]) {
    categoryCounts[category]++;
  } else {
    categoryCounts[category] = 1;
  }
});
console.log(categoryCounts);

const chartData = ref({
  labels: Object.keys(categoryCounts),
  datasets: [
    {
      label: "Blog Posts",
      backgroundColor: "#4ade80",
      data: Object.values(categoryCounts),
    },
  ],
});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});

function formatDate(created_at: string) {
  const date = new Date(created_at);
  return date.toLocaleDateString();
}
</script>

<style lang="scss" scoped></style>
