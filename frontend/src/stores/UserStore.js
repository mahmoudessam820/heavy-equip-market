import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('userStore', {

    state: () => ({
        user: {
            isAuthenticated: false,
            id: null,
            name: null,
            email: null,
            access: null,
            refresh: null
        }
    }),

    actions: {

        initStore() {
            // console.log('initStore', localStorage.getItem('user.access'))

            if (localStorage.getItem('user.access')) {
                console.log('User has access!')

                this.user.access = localStorage.getItem('user.access')
                this.user.refresh = localStorage.getItem('user.refresh')
                this.user.id = localStorage.getItem('user.id')
                this.user.name = localStorage.getItem('user.name')
                this.user.email = localStorage.getItem('user.email')
                this.user.isAuthenticated = true
            }

            this.refreshToken()

            console.log('Initialized user:', this.user)
        },

        setToken(data) {

            this.user.access = data.access
            this.user.refresh = data.refresh
            this.user.isAuthenticated = data.isAuthenticated

            localStorage.setItem('user.access', data.access)
            localStorage.setItem('user.refresh', data.refresh)

            console.log('user.access: ', localStorage.getItem('user.access'))
        },

        removeToken() {

            this.user.isAuthenticated = false
            this.user.refresh = null
            this.user.access = null
            this.user.id = null
            this.user.name = null
            this.user.email = null

            localStorage.removeItem('user.access')
            localStorage.removeItem('user.refresh')
            localStorage.removeItem('user.id')
            localStorage.removeItem('user.name')
            localStorage.removeItem('user.email')
        },

        setUserInfo(user) {
            // console.log('setUserInfo', user)

            this.user.id = user.id
            this.user.name = user.name
            this.user.email = user.email

            localStorage.setItem('user.id', user.id)
            localStorage.setItem('user.name', user.name)
            localStorage.setItem('user.email', user.email)

            console.log('User', this.user)
        },

        refreshToken() {
            axios.post('refresh/', {
                refresh: this.user.refresh
            })
            .then((response) => {
                this.user.access = response.data.access
                localStorage.setItem('user.access', response.data.access)
                axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.access
            }).catch((error) => {
                this.removeToken()
            })
        },

        logout() {
            this.removeToken()
        },

    }
})