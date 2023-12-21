<template>
  <div class="mt-8 container">
    <div class="flex flex-col mx-auto px-8">
      <form class="mt-8" action="" @submit.prevent="onSubmit">
        <div class="row flex flex-col mt-6">
          <label class="text-gray-500 font-medium" for="">Email Address</label>
          <input
            type="email"
            class="border border-black h-9 rounded-md p-4 font-medium"
            placeholder="Input email address"
          />
        </div>
        <div class="row flex flex-col mt-6">
          <label class="text-gray-500 font-medium" for="">Password</label>
          <input
            type="password"
            class="border border-black h-9 rounded-md p-4 font-medium"
            placeholder="Input Password"
          />
        </div>
        <button class="mt-7 border w-full h-9 rounded-md text-white font-medium bg-primary">
          Sign In
        </button>
      </form>
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
export default {
  name: 'RegisterPage',

  setup() {
    function onSubmit() {
      console.log('submit')
    }
    return { onSubmit }
  }
}
</script>
