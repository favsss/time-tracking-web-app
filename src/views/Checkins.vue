<template>
    <v-container>
        <div>
            <AddCheckin />
        </div>
        <div v-for="checkin in allCheckins" :key="checkin.id">
            <Checkin :detail="checkin"/>
        </div>
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
    }
}
</script>
