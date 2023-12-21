<template>
  <div class="mt-8 container">
    <div class="flex flex-col mx-auto px-8">
      <h1 class="text-center text-2xl font-medium">Best way to saving your Money!</h1>
      <form class="mt-8" action="" @submit.prevent="onSubmit">
        <div class="row flex flex-col">
          <label class="text-gray-500 font-medium" for="">Full Name</label>
          <input
            type="text"
            class="border border-black h-9 rounded-md p-4 font-medium"
            placeholder="Input your name!"
          />
        </div>
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
          Sign Up
        </button>
      </form>
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
