<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script>
import { useRoute } from 'vue-router'
import { PUBLIC_LAYOUT } from '@/constants'
import { computed, provide } from 'vue'
import { useManageLogin } from './hooks/useManageLogin'

export default {
  name: 'MainApp',

  setup() {
    const route = useRoute()
    const { user } = useManageLogin()

    // Cung cấp user cho các component con
    provide('user', user)

    return {
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + '-layout')
    }
  }
}
</script>
