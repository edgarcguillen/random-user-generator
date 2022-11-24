const app = Vue.createApp({
    // {{}} these allow for declarative rendering
    // template: '<h1>Hello {{firstName}} </h1>',

    // data is a function that returns an object
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg', 
        }
    }, 
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
            console.log(results)

            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
        },
    },
})

//mounts this app to the div with ID of #app on the index.html
app.mount('#app')