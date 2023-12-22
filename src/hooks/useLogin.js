import { auth } from '@/configs/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'

export function useLogin() {
  const error = ref(null)
  const isPending = ref(false)

  async function login(email, password) {
    isPending.value = true
    error.value = null

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      error.value = null
      isPending.value = false
      return userCredential
    } catch (err) {
      console.error('Login error', err.message)
      error.value = err.message

      // Define error send from firebase
      if (err.code === 'auth/invalid-email') {
        error.value = 'Please enter a valid email address'
      } else if (err.code === 'auth/invalid-credential') {
        error.value = 'Invalid Email or Password. Please try again'
      } else if (err.code === 'auth/weak-password') {
        error.value = 'Password should be at least 6 characters'
      } else {
        error.value = err.message || 'An error occurred. Please try again.'
      }
      isPending.value = false
    }
  }
  return { login, error, isPending }
}
