<template>
  <div class="w-96 h-48 bg-white rounded-lg flex justify-center items-center">
    <h1
      class="text-5xl p-4 font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent"
    >
      {{name}}
    </h1>
  </div>
</template>

<script setup>
import {setNameStore} from '../../store/SetNameStore';
const store=setNameStore();
onMounted(() => {
  store.setName('Profile set Via Pinia Store')
})
const name=ref('')
const homeTitleFromStore= computed(() => {
  return store.getName
})
watchEffect(() => {
  name.value = homeTitleFromStore.value;
});
</script>

<style lang="scss" scoped>

</style>