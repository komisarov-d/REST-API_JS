import Vue from "vue";

new Vue({
    el: '#app',
    data() {
        return {
            form: {
                name: '',
                value: ''
            },
            contacts: []
        }
    },
    methods: {
        createContact() {
            const {...contact} = this.form
            this.contacts.push({...contact, id: Date.now()})
            this.form.name = this.form.value = ''
        }
    }
})