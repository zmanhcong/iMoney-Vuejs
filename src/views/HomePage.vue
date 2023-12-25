<template>
  <div>
    <h1>Home Page</h1>
    <div v-if="user">
      <p>Email: {{ user.email }}</p>
      <p>DisplayName: {{ user.displayName }}</p>
    </div>
    <div v-else>
      <p>Người dùng chưa đăng nhập.</p>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'HomePage',

  setup() {
    // Sử dụng inject để lấy thông tin người dùng từ context cung cấp
    const user = inject('user')

    return { user }
  }
}
</script>
