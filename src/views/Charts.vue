<template>
    <v-container>
        <div>
            <PieChart />
        </div>
        <div>
            <BarChart />
        </div>
        <div>
            <StackedBarChart />
        </div>   
    </v-container>
</template>
<script>
import PieChart from './../components/PieChart.vue';
import BarChart from './../components/BarChart.vue';
import StackedBarChart from './../components/StackedBarChart.vue';

export default {
    name: 'Charts',
    components: {
        PieChart,
        BarChart,
        StackedBarChart
    }
}
</script>
