<template>

    <!-- signin -->
    <section class="min-h-screen bg-yellow-400 flex flex-col justify-center py-12 sm:px-6 lg:px-8">

        <div class="sm:mx-auto sm:w-full sm:max-w-md">

            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in create an account
            </h2>
            
            <p class="mt-2 text-center text-sm text-gray-600 max-w">
                Or
                <RouterLink to="/login" class="font-medium text-blue-600 hover:text-blue-500">
                    login
                </RouterLink>
            </p>
            
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">

            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">

                <form class="space-y-6" method="POST" v-on:submit.prevent="submitForm">

                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700">
                            Name *
                        </label>
                        <div class="mt-1">
                            <input id="name" name="name" type="text" v-model="form.name" required
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your name">
                        </div>
                    </div>

                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">
                            Email address *
                        </label>
                        <div class="mt-1">
                            <input id="email" name="email" type="email" v-model="form.email" autocomplete="email" required
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your email address">
                        </div>
                    </div>

                    <div>
                        <label for="password1" class="block text-sm font-medium text-gray-700">
                            Password *
                        </label>
                        <div class="mt-1">
                            <input id="password1" name="password1" type="password" v-model="form.password1" autocomplete="current-password" required
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your password">
                        </div>
                    </div>

                    <div>
                        <label for="password2" class="block text-sm font-medium text-gray-700">
                            Repeat password *
                        </label>
                        <div class="mt-1">
                            <input id="password2" name="password2" type="password" v-model="form.password2" autocomplete="current-password" required
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your password">
                        </div>
                    </div>

                    <div>
                        <label for="phone" class="block text-sm font-medium text-gray-700">
                            Phone
                        </label>
                        <div class="mt-1">
                            <input id="phone" name="phone" type="text" v-model="form.phone" 
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your phone number">
                        </div>
                    </div>

                    <div>
                        <label for="company" class="block text-sm font-medium text-gray-700">
                            Company name
                        </label>
                        <div class="mt-1">
                            <input id="company" name="company" type="text" v-model="form.company" 
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Company name">
                        </div>
                    </div>

                    <div>
                        <label for="address" class="block text-sm font-medium text-gray-700">
                            Address
                        </label>
                        <div class="mt-1">
                            <input id="address" name="address" type="text" v-model="form.address" 
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Address">
                        </div>
                    </div>

                    <div>
                        <label for="zipcode" class="block text-sm font-medium text-gray-700">
                            Zipcode
                        </label>
                        <div class="mt-1">
                            <input id="zipcode" name="zipcode" type="text" v-model="form.zipcode"
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Zipcode">
                        </div>
                    </div>

                    <div>
                        <label for="city" class="block text-sm font-medium text-gray-700">
                            City
                        </label>
                        <div class="mt-1">
                            <input id="city" name="city" type="text" v-model="form.city"
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="City">
                        </div>
                    </div>

                    <div>
                        <label for="country" class="block text-sm font-medium text-gray-700">
                            Country
                        </label>
                        <div class="mt-1">
                            <input id="country" name="country" type="text" v-model="form.country"
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Country">
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="text-sm">
                            <RouterLink to="/login" class="font-medium text-blue-600 hover:text-blue-500">
                                Already have an account? Login
                            </RouterLink>
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign in
                        </button>
                    </div>

                </form>

                <div class="mt-6">

                    <div class="relative">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-300"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="px-2 bg-gray-100 text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div class="mt-6 grid grid-cols-3 gap-3">
                        <div>
                            <RouterLink to="#"
                                class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                <img class="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                                    alt="">
                            </RouterLink>
                        </div>
                        <div>
                            <RouterLink to="#"
                                class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                <img class="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                                    alt="">
                            </RouterLink>
                        </div>
                        <div>
                            <RouterLink to="#"
                                class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                <img class="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg"
                                    alt="">
                            </RouterLink>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </section>

</template>


<script>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useToastStore } from '@/stores/toast'


export default {
    setup() {

        const router = useRouter()
        const toastStore = useToastStore()
        const errors = ref([])

        const form = ref({
            name: '',
            email: '',
            password1: '',
            password2: '',
            phone: '',
            company: '',
            address: '',
            zipcode: '',
            city: '',
            country: '',
        })

        const submitForm = () => {

            errors.value = []

            if (!form.value.name) {
                errors.value.push('Name is required')
            }

            if (!form.value.email) {
                errors.value.push('Email is required')
            }

            if (!form.value.password1) {
                errors.value.push('Password is required')
            }

            if (form.value.password1 !== form.value.password2) {
                errors.value.push('Password does not match')
            }

            if (errors.value.length > 0) {
                toastErrors()
            } else {
                axios 
                    .post('signin/', form.value)
                    .then(response => {
                        if (response.data.message === 'Sign in successfully.') {
                            toastStore.showToast(5000, 'The user is registered. Please log in', 'bg-emerald-500')
                            resetForm()
                            router.push('/login')
                        }
                    })
                    .catch(handleError)
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