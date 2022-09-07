<template>
    <v-card>
        <v-container>
            <v-card-title>Personal Time Tracker</v-card-title>
            <v-text-field
                label="username"
                v-model="username"
            ></v-text-field>
            <v-text-field
                type="password"
                label="password"
                v-model="password"
            ></v-text-field>
            <v-btn @click="submit">Log In</v-btn>
        </v-container>
    </v-card>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: "LoginForm",
    data: () => ({
        username: '',
        password: ''
    }),
    methods: {
        ...mapActions("auth", ["login"]),
        async submit() {
            await this.login({
                "username" : this.username,
                "password" : this.password
            });

            this.$router.push("/checkins");
        }
    }
}
</script>
