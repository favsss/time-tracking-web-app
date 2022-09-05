<template>
    <v-card>
        <v-container>
            <v-row>
                <v-col>
                    <v-text-field 
                         placeholder="<float> hr/hrs #<tag> <activity>" 
                         clearable
                         v-model="rawCheckin"
                    >
                    </v-text-field>
                </v-col>
                <v-col>
                    <v-btn dark x-large color="green" @click="submit">CHECKIN</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'AddCheckin',
    data: () => ({
        rawCheckin: ''
    }),
    methods: {
        ...mapActions('checkin', ["addCheckin"]),
        submit() {
            const hours_tagActivity =  this.rawCheckin.split("#");
            const hours = parseFloat(hours_tagActivity[0].split()[0])
            const tag_activity = hours_tagActivity[1]
            const tag = tag_activity.substring(0, tag_activity.indexOf(' '));
            const activity = tag_activity.substring(tag_activity.indexOf(' ') + 1)

            console.log(`hours=${hours} tag=${tag} activity=${activity}`);
            this.addCheckin({
                id: 1,
                hours: hours,
                tag: tag,
                activity: activity
            });
        }
    }
}
</script>
