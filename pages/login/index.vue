<template>
  <div
    class="bg-gradient-to-b from-green-600 to-green-300 h-screen w-full flex items-center justify-center"
  >
    <div class="bg-white w-96 p-4 rounded-md shadow-lg z-10">
      <h1 class="text-3xl font-bold text-center">Login</h1>
      <form @submit.prevent="SignIn" class="flex flex-col space-y-4 mt-4">
        <input
          type="text"
          placeholder="username"
          v-model="username"
          class="border border-gray-300 p-2 rounded-md"
        />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          class="border border-gray-300 p-2 rounded-md"
        />
        <button type="submit" class="bg-green-500 text-white p-2 rounded-md">
          Login
        </button>

        <button v-if="error" class="bg-red-500 text-white p-2 rounded-md">
          Authentication failed, try again
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"; // Assuming you are using Vue composition API

interface Credentials {
  username: string;
  password: string;
  credential: boolean;
}

// Assuming 'definePageMeta' is a function for defining page meta properties
definePageMeta({
  // Your implementation for defining page meta here
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/",
  },
});

const username = ref("");
const password = ref("");
const error = ref(false);

// Assuming 'useAuth' is a hook providing authentication functions
interface AuthFunctions {
  signIn: (method: string, credentials: Credentials) => Promise<void>;
}

const { signIn } = useAuth(); // Use type assertion to provide typing for signIn

const SignIn = async (e: Event) => {
  e.preventDefault();

  const credentials: Credentials = {
    username: username.value,
    password: password.value,
    redirect: false,
  };

  try {
    const response= await signIn("credentials", credentials);
   
    if (response.error) {
      error.value = true;
    } else {
      error.value = false;
      navigateTo('/');
    }
  } catch (err) {
    error.value = true;
  }
};
</script>

<style lang="scss" scoped></style>
