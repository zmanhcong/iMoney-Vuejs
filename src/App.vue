<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script>
import { useRoute } from 'vue-router'
import { PUBLIC_LAYOUT } from '@/constants'
import { computed } from 'vue'

export default {
  name: 'MainApp',

  setup() {
    const route = useRoute()
    console.log(route.meta.layout)

    return {
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + '-layout')
    }
  }
}
</script>
