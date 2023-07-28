<template>
  <div
    class="h-24 fixed w-full bg-green-500 text-white flex justify-between items-center py-2 px-4"
  >
    <div class="w-fit font-bold text-3xl">Pinia Store</div>
    <div class="flex justify-evenly items-center">
      <NuxtLink to="/" class="mx-2">Home</NuxtLink>
      <NuxtLink to="/profile" class="mx-2">Profile</NuxtLink>
      <NuxtLink
        @click="signOut()"
        class="mx-2 bg-white hover:scale-125 delay-300 text-black rounded-lg py-2 px-4"
        >Signout</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
const {signOut}=useAuth()
</script>

<style lang="scss" scoped>
</style>