<template>
    <v-container fluid class="stations">
	<v-row>
	    <v-col
		v-for="station in stations"
		       :key="station.title"
		       :cols="4"
	    >
		<v-card>
		    <v-row>
			<v-col>
			    <v-card-title>{{ station.location }}</v-card-title>
			    <v-card-subtitle>{{ station.name }}</v-card-subtitle>
			</v-col>
			<v-col>
			    <h1>{{station.soil}} %</h1>
			    <h6>Soil Moisture</h6>
			</v-col>
		    </v-row>
		</v-card>
	    </v-col>
	</v-row>
    </v-container>
</template>

<script>
 export default {
     name: 'Stations',
     data: () => ({
	 title: "Sensor Network",
	 stations: [
	     {
		 name: "station-01",
		 location: "Tomatoes",
		 tempf: 77.1,
		 soil: 12.1,
		 battery: "battery-charging-wireless-50",
	     },
	     {
		 name: "station-02",
		 location: "Succulents",
		 tempf: 77.8,
		 soil: 9.8,
		 battery: "battery-charging-wireless-50",
	     },
	     {
		 name: "station-03",
		 location: "Corn",
		 tempf: 88.8,
		 soil: 11.1,
		 battery: "battery-charging-wireless-50",
	     },
	     {
		 name: "station-04",
		 location: "Egg Plant",
		 tempf: 78.8,
		 soil: 18.1,
		 battery: "battery-charging-wireless-50",
	     },
	     {
		 name: "station-05",
		 location: "Squash",
		 tempf: 72.8,
		 soil: 14.1,
		 battery: "battery-charging-wireless-50",
	     },
	     {
		 name: "station-06",
		 location: "Plantiens",
		 tempf: 77.8,
		 soil: 32.1,
		 battery: "battery-charging-wireless-50",		 
	     }
	 ],

     })
 }
</script>
