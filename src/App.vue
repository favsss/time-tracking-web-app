<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      clipped-left
    >
      <v-app-bar-title>Time Tracker</v-app-bar-title>
      <v-spacer></v-spacer>

      <v-tabs centered v-if="IsAuthenticated">
        <v-tab to="/checkins">Checkin</v-tab>
        <v-tab to="/charts">Charts</v-tab>
      </v-tabs>
      <v-btn v-if="IsAuthenticated" @click="submit">Logout</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'App',

  components: {
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters("auth", ["IsAuthenticated"])
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    submit() {
      this.logout();
      this.$router.push("/");
    }
  }
};
</script>
