<template>
    <v-row>
        <v-col class="text-center">
            <h3>{{ tempf }} F</h3>
            <div>{{ station }}</div>
        </v-col>
    </v-row>
</template>

<script>
 export default {
     name: "Temperature",
     props: {
        tempf: String,
	humidity: String,
	soil: String, 
        station: String,
     }
 }
</script>

<style>
</style>
