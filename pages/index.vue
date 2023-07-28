<template>
    <div>
default page
<button class="px-4 py-2 bg-green-500 text-white rounded-md" @click="signOut()">SignOut</button>
    </div>
</template>

<script setup>

const {status, data, getSession, signOut}=useAuth()
getSession().then((session) => {
  const sessionRef = ref(session);
  console.log(sessionRef.value); // Log the session once it's resolved
  console.log(sessionRef.value.user); // Log the session once it's resolved
  console.log(sessionRef.value.expires); // Log the session once it's resolved
});
console.log(status.value)
console.log(data.value.user.name)
</script>

<style lang="scss" scoped>

</style>