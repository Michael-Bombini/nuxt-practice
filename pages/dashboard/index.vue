<template>
  <div class="container mx-auto mb-12">
    <h2 class="text-3xl text-white font-bold">Posts Category Distribution</h2>
  </div>
  <div v-if="!pending">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
  <div class="container mx-auto py-6">
    <h2 class="text-3xl text-white font-bold my-12">Latest Posts</h2>
    <Table class="text-white">
      <TableCaption>Most recent post articles</TableCaption>
      <TableHeader>
        <TableRow class="hover:bg-green-200">
          <TableHead>Date </TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow
          v-for="post in posts"
          class="hover:bg-green-500 hover:text-black "
        >
          <TableCell class="font-medium"
            >{{ formatDate(post.created_at) }}
          </TableCell>
          <TableCell>{{ post.title }}</TableCell>
          <TableCell>{{ post.category }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Bar } from "vue-chartjs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
