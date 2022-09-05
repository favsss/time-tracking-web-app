<template>
    <v-container>
        <div>
            <AddCheckin />
        </div>
        <div>
            <v-select 
                :items="entries"
                filled
                label="Show Entries">
            </v-select>
        </div>
        <div v-for="checkin in allCheckins" :key="checkin.id">
            <Checkin :detail="checkin"/>
        </div>
        <br>
        <br>
        <v-pagination>
        </v-pagination>
    </v-container>
</template>
<script>
import { mapGetters } from 'vuex';

import AddCheckin from '../components/AddCheckin.vue';
import Checkin from '../components/Checkin.vue';
export default {
    name: "Checkins",
    components: {
        AddCheckin,
        Checkin
    },
    computed: {
        ...mapGetters("checkin", ["allCheckins"])
    },
    data: () => ({
        page: 1,
        entries: [5, 10, 20, 50, 100]
    }) 
}
</script>
