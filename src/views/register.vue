<template>
  <div class="mt-8 container">
    <div class="flex flex-col mx-auto px-8">
      <form class="mt-8" action="" @submit.prevent="onSubmit">
        <div class="row flex flex-col">
          <label class="text-gray-500 font-medium" for="">Full Name</label>
          <input
            type="text"
            class="border border-black h-9 rounded-md p-4 font-medium"
            placeholder="Input your name!"
            v-model="fullName"
          />
        </div>
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
          Sign Up
        </button>
        <button v-else class="mt-7 border w-full h-9 rounded-md text-white font-medium bg-gray-500">
          Loading
        </button>
      </form>
      <!-- <div v-if="error" class="mt-3 text-center text-[#e43434]"> -->
      <span v-if="error" class="text-[#e43434] text-center mt-3">{{ error }}</span>

      <!-- </div> -->
      <div class="mt-3 flex gap-2 justify-center">
        <p class="font-medium">I'm ready a member</p>
        <!-- <button class="text-blue-700 font-bold">Sign In</button> -->
        <router-link :to="{ name: 'login', params: {} }" class="text-blue-700 font-bold">
          Sign In
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRegister } from '@/hooks/useRegister'

export default {
  name: 'RegisterPage',

  setup() {
    const fullName = ref('')
    const email = ref('')
    const password = ref('')
    const { error, isPending, register } = useRegister()

    async function onSubmit() {
      if (isPending.value) return
      await register(email.value, password.value, fullName.value)
      if (!error.value) {
        console.log('Registered successfully')
      } else {
        console.error('Registration failed:', error.value)
      }
    }

    return { onSubmit, fullName, email, password, error, isPending }
  }
}
</script>
