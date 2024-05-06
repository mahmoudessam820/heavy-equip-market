import { defineStore } from 'pinia'

// Toast for notifications
export const useToastStore = defineStore('toast', {
    
    state: () => ({
        milliseconds: 0,
        message: '',
        classes: '',
        isVisible: true,
    }),

    actions: {

        showToast(milliseconds, message, classes) {

            this.milliseconds = parseInt(milliseconds)
            this.message = message
            this.classes = classes
            this.isVisible = true

            // Delay adding the translate class by 10ms
            setTimeout(() => {
                this.classes += ' -translate-y-28'; // Add space before the class to separate classes
            }, 10)

            // Remove the translate class after (milliseconds - 500)ms
            setTimeout(() => {
                this.classes = this.classes.replace(' -translate-y-28', ''); // Replace the class correctly
            }, this.milliseconds - 500)

            // Hide the toast after milliseconds
            setTimeout(() => {
                this.isVisible = false;
            }, this.milliseconds)
        },
    }

})
