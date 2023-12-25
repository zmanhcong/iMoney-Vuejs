// src/hooks/useAuthState.js
import { onAuthStateChanged } from 'firebase/auth'
import { ref } from 'vue'
import { auth } from '@/configs/firebase'

export function useManageLogin() {
  const user = ref(null)
  const error = ref(null)

  onAuthStateChanged(
    auth,
    (firebaseUser) => {
      if (firebaseUser) {
        user.value = firebaseUser
      } else {
        user.value = null
      }
    },
    (err) => {
      error.value = err
    }
  )

  return { user, error }
}
