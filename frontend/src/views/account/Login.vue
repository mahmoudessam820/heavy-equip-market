<template>

    <!-- login -->
    <section class="py-16 bg-yellow-400">

        <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">

            <div class="hidden lg:flex lg:justify-center lg:w-1/2 bg-cover">
                <img src="@/assets/images/icons/trucking-svgrepo-com.png" alt="trucking" style="max-width: 400px; max-height: 400px;">
            </div>

            <div class="w-full p-8 lg:w-1/2">
                <h2 class="text-2xl font-semibold text-gray-700 text-center">Heavy Equip Market</h2>
                <p class="text-xl text-gray-600 text-center">Welcome back!</p>
                
                <a href="#" class="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                    <div class="px-4 py-3">
                        <svg class="h-6 w-6" viewBox="0 0 40 40">
                            <path
                                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                fill="#FFC107" />
                            <path
                                d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                fill="#FF3D00" />
                            <path
                                d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                fill="#4CAF50" />
                            <path
                                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                fill="#1976D2" />
                        </svg>
                    </div>
                    <h1 class="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
                </a>

                <div class="mt-4 flex items-center justify-between">
                    <span class="border-b w-1/5 lg:w-1/4"></span>
                    <a href="#" class="text-xs text-center text-gray-500 uppercase">or login with email</a>
                    <span class="border-b w-1/5 lg:w-1/4"></span>
                </div>

                <form method="post" v-on:submit.prevent="submitForm">

                    <div class="mt-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            required
                            v-model="form.email"
                            type="email" 
                            name="email"
                            />
                    </div>

                    <div class="mt-4">
                        <div class="flex justify-between">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <a href="#" class="text-xs text-gray-500">Forget Password?</a>
                        </div>
                        <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            required
                            v-model="form.password"
                            type="password"
                            name="password"
                            />
                    </div>

                    <div class="mt-8">
                        <button class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
                    </div>

                </form>
                
                <div class="mt-4 flex items-center justify-between">
                    <span class="border-b w-1/5 md:w-1/4"></span>
                    <RouterLink to="/signin" class="text-xs text-gray-500 uppercase">or sign in</RouterLink>
                    <span class="border-b w-1/5 md:w-1/4"></span>
                </div>

            </div>

        </div>
    </section>

</template>



<script>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/UserStore'
import { useToastStore } from '@/stores/toast'


export default {
    setup() {

        const toastStore = useToastStore()
        const userStore = useUserStore()
        const router = useRouter()

        const form = ref({
            email: '',
            password: ''
        })

        console.log(form.email, form.password)

        const errors = ref([])

        console.log(errors.value.email)

        const submitForm = async () => {
            errors.value = []

            if (!form.value.email) {
                errors.value.push('Your e-mail is missing')
            }

            if (!form.value.password) {
                errors.value.push('Your password is missing')
            }

            if (errors.value.length > 0) {
                toastErrors()
            }else{
                try {

                    const response = await axios.post('/login/', form.value)
                    userStore.setToken(response.data)
                    axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.access;

                    const userInfoResponse = await axios.get('/me/')
                    userStore.setUserInfo(userInfoResponse.data)

                    resetForm()

                    router.push('/')

                } catch (error) {
                    console.log('call to reset')
                    handleError(error)
                }
            }
        }

        const toastErrors = () => {
            errors.value.forEach(errorMessage => {
                toastStore.showToast(5000, errorMessage, 'bg-red-300')
            })
        } 

        const handleError = (error) => {
            console.error('Error submitting form:', error)
    
            // Extract all error messages from the errors object
            const errorMessages = Object.values(error.response.data.errors)
                .flatMap(errorList => errorList.map(error => error.message))

            // Join all error messages into a single string
            const errorMessage = errorMessages.join(', ')

            toastStore.showToast(5000, errorMessage, 'bg-red-300')
        }

        const resetForm = () => {
            for (const key in form.value) {
                form.value[key] = ''
            }
            errors.value = []
        }

        return {
            form,
            errors,
            submitForm
        }
    }
}
</script>
