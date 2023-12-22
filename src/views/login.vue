<template>
  <div class="mt-8 container">
    <div class="flex flex-col mx-auto px-8">
      <form class="mt-8" action="" @submit.prevent="onSubmit">
        <div class="row flex flex-col mt-6">
          <label class="text-gray-500 font-medium" for="">Email Address</label>
          <input
            type="text"
            class="border border-black h-9 rounded-md p-4 font-medium"
            placeholder="Input email address"
            v-model="email"
          />
        </div>
        <div class="row flex flex-col mt-6">
          <label class="text-gray-500 font-medium" for="">Password</label>
          <input
            type="password"
            class="border border-black h-9 rounded-md p-4 font-medium"
            placeholder="Input Password"
            v-model="password"
          />
        </div>
        <button
          v-if="!isPending"
          class="mt-7 border w-full h-9 rounded-md text-white font-medium bg-primary"
        >
          Login
        </button>

        <button v-else class="mt-7 border w-full h-9 rounded-md text-white font-medium bg-gray-800">
          Loading
        </button>
      </form>
      <span v-if="error" class="mt-2 text-red text-center">{{ error }}</span>

      <div class="mt-3 flex gap-2 justify-center">
        <p class="font-medium">I'm a new user</p>
        <router-link :to="{ name: 'register', params: {} }" class="text-blue-700 font-bold">
          Sign Up
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useLogin } from '@/hooks/useLogin'

export default {
  name: 'RegisterPage',

  setup() {
    const email = ref('')
    const password = ref('')

    const { isPending, error, login } = useLogin()

    async function onSubmit() {
      if (!isPending.value) {
        await login(email.value, password.value)
        if (!error.value) {
          console.log('Login successfully')
        } else {
          console.error('Login failed', error.value)
        }
      }
    }
    return { onSubmit, email, password, isPending, error }
  }
}
</script>
