<template>
    <div class="flex justify-center items-center">
            <div>
                <img :src="userData.profile_picture" alt="" class="w-64 rounded-full">
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
</script>

<style lang="scss" scoped></style>
