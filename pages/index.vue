<template>
  <div
    class="grid grid-cols-1 md:grid-cols-3 px-12 md:px-0 max-w-screen-sm mx-auto py-12 text-center justify-items-center gap-6"
  >
    <div class="h-20 w-20 bg-green-400"></div>
    <h2 class="text-4xl text-white font-bold">{{!loggedIn ? "Login to Continue" : "Welcome Back"}}</h2>
    <div class="h-20 w-20 bg-green-400"></div>
  </div>
  <button
    v-if="!loggedIn"
    class="border border-green-400 px-6 py-2 text-white mx-auto block hover:scale-125 transition-all duration-700 font-bold mb-6"
    @click="handleSignIn"
  >
    Sign In
  </button>
  <button
    v-if="loggedIn"
    class="border border-green-400 px-6 py-2 text-white mx-auto block hover:scale-125 transition-all duration-700 font-bold"
    @click="signOut"
  >
    Sign Out
  </button>
</template>

<script setup>
const { status, signIn, signOut } = useAuth();
const loggedIn = computed(() => status.value === "authenticated")
async function handleSignIn() {
  await signIn('github',{callbackUrl: "/profile"});
}
async function handleSignOut(){
  await signOut();
}

</script>

<style lang="scss" scoped></style>
