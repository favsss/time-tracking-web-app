<template>
  <v-app>
    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar> -->

    <v-main>
      <AddCheckin />
      <div v-for="checkin in allCheckins" :key="checkin.id">
        <Checkin :detail="checkin"/>
      </div>
      <br>
      <br>
      <PieChart />
      <br>
      <BarChart />
      <br>
      <StackedBarChart />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import AddCheckin from './components/AddCheckin.vue';
import Checkin from './components/Checkin.vue';
import PieChart from './components/PieChart.vue';
import BarChart from './components/BarChart.vue';
import StackedBarChart from './components/StackedBarChart.vue';
export default {
  name: 'App',

  components: {
    AddCheckin,
    Checkin,
    PieChart,
    BarChart,
    StackedBarChart
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters('checkin', ["allCheckins"])
  }
};
</script>
