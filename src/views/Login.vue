<template>
    <div>
        <b-container>
            <b-card>
        <h1>hola mundo</h1>
        <b-form>
            <b-form-group
            id="input-group-1"
            label="Email adress:"
            label-for="input-1"
            description="We'll never share your email with"
        >
            <b-form-input
             id="input-1"
             type="email"
             placeholder="Enter email"
             required
             ></b-form-input>
            </b-form-group>
        <b-form-group label="Password" label-for="password">
            <b-form-input
            id="password"
            type="password"
            placeholder="Ingrese contraseña"
            required
            v-model="password"
            ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
        </b-card>
        </b-container>
    </div>
</template>

<script>
import Firebase from "firebase";

export default {
    data: () => ({
        email: "",
        password: "",
    }),
    methods: {
        login() {
            Firebase.auth()
             .signInWithEmailAndPassword(this.email, this.password)
             .then((response) => {
                 this.$store.dispatch("defineCurrentUser", {
                     email: response.user.email
                 });
                 
                 this.$router.push("/about");
             })
             .catch((error) => {
                 console.error(error);
             });
        }
    }

}
</script>

<style scoped>

</style>