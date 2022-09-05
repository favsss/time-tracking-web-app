<template>
    <v-card>
        
            <v-row>
                <v-col><v-card-text>{{ detail.hours }} hours</v-card-text></v-col>
            
            
                <v-col><v-card-text>{{ detail.tag }}</v-card-text></v-col>
            
            
                <v-col><v-card-text>{{ detail.activity}}</v-card-text></v-col>
            
            
                <v-col>
                    <v-btn>Edit</v-btn>
                    <v-btn>Delete</v-btn>
                </v-col>
            </v-row>
    </v-card>
</template>

<script>
export default {
    name: 'Checkin',
    props: {
        detail: Object
    }
}
</script>
