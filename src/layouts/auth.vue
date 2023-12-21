<template>
  <navi-brand />
  <slot />
</template>

<script>
import NaviBrand from '@/components/NaviBrand.vue'

export default {
  name: 'AuthLayout',
  components: { NaviBrand }
}
</script>
