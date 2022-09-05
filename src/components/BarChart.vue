<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>
<script>
import { Bar } from 'vue-chartjs/legacy';
import { mapGetters } from 'vuex';

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
export default {
    name: "BarChart",
    components: {
        Bar
    },
    props: {
        chartId: {
        type: String,
        default: "bar-chart",
        },
        datasetIdKey: {
        type: String,
        default: "label",
        },
        width: {
        type: Number,
        default: 400,
        },
        height: {
        type: Number,
        default: 400,
        },
        cssClasses: {
        default: "",
        type: String,
        },
        styles: {
        type: Object,
        default: () => {},
        },
        plugins: {
        type: Array,
        default: () => [Title],
        },
    },
  computed: {
    ...mapGetters("checkin", ["getChartDatabyDate"])
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Logged Hours per day",
            backgroundColor: "#f87979",
            data: [],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Daily Logged Hours",
          },
        },
      },
    };
  },
  created() {
    const chartData = this.getChartDatabyDate;
    this.chartData.labels = chartData.labels;
    this.chartData.datasets[0]["data"] = chartData.data;
  }
}
</script>
