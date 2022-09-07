<template>
    <v-card>
        
            <v-row>
                <v-col><v-card-text>{{ detail.hours }} hours</v-card-text></v-col>
            
            
                <v-col><v-card-text><v-chip>{{ detail.tag }}</v-chip></v-card-text></v-col>
            
            
                <v-col><v-card-text>{{ detail.activity}}</v-card-text></v-col>
                <v-col><v-card-text>{{ detail.creation_date }}</v-card-text></v-col>
                <v-col>
                    <v-btn @click="submit">Delete</v-btn>
                </v-col>
            </v-row>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'Checkin',
    props: {
        detail: Object
    },
    methods: {
        ...mapActions("checkin", ["deleteCheckin"]),
        submit() {
            this.deleteCheckin(this.detail.id);
        }
    }
}
</script>
