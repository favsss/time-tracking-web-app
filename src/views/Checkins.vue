<template>
    <v-container>
        <div>
            <AddCheckin />
        </div>
        <div>
            <v-select 
                :items="entries"
                filled
                label="Show Entries"
                v-model="pageSize"
                @change="updateVisibleCheckins"
            >
            </v-select>
        </div>
        <div v-for="checkin in visible_checkins" :key="checkin.id">
            <Checkin :detail="checkin"/>
        </div>
        <br>
        <br>
        <v-pagination 
            :length="this.totalPages" 
            v-model="page"
            @input="onPageChange"
        >
        </v-pagination>
    </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

import AddCheckin from '../components/AddCheckin.vue';
import Checkin from '../components/Checkin.vue';
export default {
    name: "Checkins",
    components: {
        AddCheckin,
        Checkin
    },
    computed: {
        ...mapGetters("checkin", ["allCheckins"]),
        totalPages() {
            return this.allCheckins.length / this.pageSize;
        }
    },
    data: () => ({
        page: 1,
        entries: [5, 10, 20, 50, 100],
        visible_checkins: [],
        pageSize: 5
    }),
    methods: {
        ...mapActions("checkin", ["fetchCheckins"]),
        updateVisibleCheckins() {
            this.visible_checkins = this.allCheckins.slice(0, this.pageSize)
        },
        onPageChange() {
            const left = (this.page - 1) * this.pageSize;
            const totalItems = this.allCheckins.length;
            let right = left + this.pageSize;
            right = right <= totalItems ? right : totalItems;
            this.visible_checkins = this.allCheckins.slice(left, right);
        }
    },
    async created() {
        await this.fetchCheckins();
        let checkins = this.allCheckins;
        this.visible_checkins = checkins.slice(0, this.entries[0]);
    },
    watch:{
        allCheckins(curr, prev) {
            if (curr.length != prev.length) {
                this.onPageChange();
            }
        }
    }
}
</script>
