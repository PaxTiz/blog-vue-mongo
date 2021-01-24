<template>
    <div class="container">
        <h1>Register</h1>

        <div class="errors" v-if="errors.length > 0">
            <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </div>

        <div class="errors" v-if="serverError.length > 0">
            {{ serverError }}
        </div>

        <form method="post" @submit="onSubmit">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" v-model="username" id="username" name="username">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="email" id="email" name="email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="password" id="password" name="password">
            </div>
            <div class="form-group">
                <label for="confirmationPassword">Password confirmation</label>
                <input type="password" v-model="confirmationPassword" id="confirmationPassword" name="confirmationPassword">
            </div>

            <button class="btn btn-blue" type="submit">Create account</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Register",
    data: () => {
        return {
            errors: [],
            serverError: "",
            username: "",
            email: "",
            password: "",
            confirmationPassword: ""
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()
            this.errors = []
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

            if(this.username.length < 6 || this.username.length > 15)
                this.errors.push("Username sould be between 6 and 15 characters.")
            if(!emailRegex.test(this.email))
                this.errors.push("Please enter valid email.")
            if(!passRegex.test(this.password))
                this.errors.push("Password sould contains at least one lower character, one upper character and one number.")
            if(this.password.length < 8)
                this.errors.push("Password length sould be more than 8 characters.")
            if(this.password !== this.confirmationPassword)
                this.errors.push("Password and confirmation password are not equals.")

            if(this.errors.length === 0) {
                fetch("http://localhost:8000/register", {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        username: this.username,
                        email: this.email,
                        password: this.password
                    })
                })
                .then(async (res) => {
                    const data = await res.json()
                    console.log(data)
                    this.$store.commit({
                        type: 'login',
                        user: data.user,
                        token: data.token
                    })
                    await this.$router.replace('/')
                })
                .catch((err) => this.serverError = err)
                console.info("OK - Send form !")
            }
        }
    }
}
</script>

<style scoped>
form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

input {
    padding: 8px;
    border: 1px solid #333333;
    border-radius: 16px;
    font-family: Avenir, sans-serif;
}

button {
    width: 200px;
}
.errors {
    background-color: lightpink;
    color: crimson;
    padding: 16px;
    border-radius: 16px;
    font-weight: bold;
    margin-bottom: 32px;
}

</style>
