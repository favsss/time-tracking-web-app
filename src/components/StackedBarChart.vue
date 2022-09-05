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
import { mapGetters } from 'vuex';
import { Bar } from 'vue-chartjs/legacy';

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
    name: 'StackedBarChart',
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
        ...mapGetters("checkin", ["getChartDataByTagAndDate"])
    },
    data() {
        return {
        chartData: {
            labels: [],
            datasets: [],
        },
        chartOptions: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                stacked: true,
                categoryPercentage: 0.5,
                barPercentage: 1
                }],
                yAxes: [{
                stacked: true
                }]
            },
            plugins: {
                title: {
                    display: true,
                    text: "Daily Logged Hours per Tag",
                },
            },
        },
        };
    },
    created() {
        const chartData = this.getChartDataByTagAndDate;
        this.chartData.labels = chartData.labels;
        this.chartData.datasets = chartData.data;
    }
}
</script>
