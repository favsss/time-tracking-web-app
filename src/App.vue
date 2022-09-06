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
      <v-tabs centered>
        <v-tab to="/">Checkin</v-tab>
        <v-tab to="/charts">Charts</v-tab>
      </v-tabs>
      <v-btn>Logout</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },
  data: () => ({
    //
  })
};
</script>
