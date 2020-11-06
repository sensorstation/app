<template>
    <v-container class="home">
	<v-row>
	    <Dashboard msg="Welcome to Sensor Station"/>
	</v-row>
    </v-container>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/Dashboard.vue'

 export default {
     name: 'Home',
     components: {
         Dashboard
     }
 }
</script>
