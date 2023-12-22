<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script>
import { useRoute } from 'vue-router'
import { PUBLIC_LAYOUT } from '@/constants'
import { computed } from 'vue'

import { fireStoreCore } from '@/configs/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default {
  name: 'MainApp',

  setup() {
    const route = useRoute()
    console.log(route.meta.layout)

    // setting firebase
    async function getTransactions() {
      const querySnapshot = await getDocs(collection(fireStoreCore, 'transactions'))
      querySnapshot.forEach((doc) => {
        const docDataFormatted = {
          id: doc.id,
          ...doc.data()
        }
        console.log(docDataFormatted)
      })
    }
    getTransactions()

    return {
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + '-layout')
    }
  }
}
</script>
