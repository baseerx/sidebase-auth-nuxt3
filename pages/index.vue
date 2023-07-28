<template>
  <div class="w-96 h-48 bg-white rounded-lg flex justify-center items-center">
    <h1
      class="text-2xl p-4 font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent"
    >
      {{name}}
      <hr class="border-b border-green-500 my-2">
      following is the composable value:
        {{composeableVal}}
    </h1>
  </div>
</template>

<script setup>
const {showAlert}=useUtilis()
const composeableVal=ref('')

const { status, data, getSession, signOut } = useAuth();
getSession().then((session) => {
  const sessionRef = ref(session);
  console.log(sessionRef.value); // Log the session once it's resolved
  console.log(sessionRef.value.user); // Log the session once it's resolved
  console.log(sessionRef.value.expires); // Log the session once it's resolved
});
console.log(status.value);
console.log(data.value.user.name);


import {setNameStore} from '../store/setNameStore.ts'

const store=setNameStore()
onMounted(() => {
    store.setName('Home set Via Pinia Store')
    composeableVal.value=showAlert()
  
})
const name=ref('')

const homeTitleFromStore= computed(() => {
  return store.getName
})
watchEffect(() => {
  name.value = homeTitleFromStore.value;
});

console.log("homeTitleFromStore.value")
console.log(name.value)
</script>

<style lang="scss" scoped>
</style>