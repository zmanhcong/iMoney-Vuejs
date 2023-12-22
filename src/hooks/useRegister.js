import { auth } from '@/configs/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ref } from 'vue'

export function useRegister() {
  const error = ref(null)
  const isPending = ref(false)

  // Email format validate
  function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  async function register(email, password, fullName) {
    if (!validateEmail) {
      error.value = 'Please enter a valid email address'
      return
    }

    error.value = null
    isPending.value = true
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(userCredential.user, { displayName: fullName })

      error.value = null
      isPending.value = false

      return userCredential
    } catch (err) {
      console.error('Registration error: ', err)

      // Define error send from firebase
      if (err.code === 'auth/invalid-email') {
        error.value = 'Please enter a valid email address'
      } else if (err.code === 'auth/email-already-in-use') {
        error.value = 'Email already in use. Please use a different email.'
      } else if (err.code === 'auth/weak-password') {
        error.value = 'Password should be at least 6 characters'
      } else {
        error.value = err.message || 'An error occurred. Please try again.'
      }
      isPending.value = false
    }
  }
  return { register, error, isPending }
}
