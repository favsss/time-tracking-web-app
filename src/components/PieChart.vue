<template>
  <Pie
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
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);
export default {
    name: "PieChart",
    components: {
        Pie
    },
    props: {
        chartId: {
        type: String,
        default: 'pie-chart'
        },
        datasetIdKey: {
        type: String,
        default: 'label'
        },
        width: {
        type: Number,
        default: 400
        },
        height: {
        type: Number,
        default: 400
        },
        cssClasses: {
        default: '',
        type: String
        },
        styles: {
        type: Object,
        default: () => {}
        },
        plugins: {
        type: Array,
        default: () => []
        }
    },
    computed: {
      ...mapGetters("checkin", ["getChartDataByTag"]),
    },
    data: () => ({
      chartData: {
        labels: [],
        datasets: [
          {
            data: []
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: "Recorded hours per Tag"
            }
        }
      }
    }),
    created() {
        const chartData = this.getChartDataByTag
        this.chartData.labels = chartData.labels;
        this.chartData.datasets[0].data = chartData.data;
        this.chartData.datasets[0].backgroundColor = chartData.backgroundColor;
    }
}
</script>
