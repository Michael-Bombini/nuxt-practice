<template>
  <div class="container mx-auto px-12">
    <div class="text-white flex items-center justify-center gap-6 flex-wrap">
      <img
        :src="data?.user?.image"
        alt=""
        v-if="data?.user?.image"
        class="w-40 h-40 rounded-full block my-6"
      />
      <div class="text-center">
        <h2 v-if="data?.user?.name" class="text-3xl font-bold text-green-400 mb-6">
          {{ data.user.name }}
        </h2>
        <h3 v-if="data?.user?.email" class="text-lg text-white/80">
          {{ data.user.email }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { status, data } = useAuth();
const loggedIn = computed(() => status.value === "authenticated");
if (loggedIn.value === false) {
  await navigateTo("/");
}
</script>

<style lang="scss" scoped></style>
