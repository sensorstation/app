<template>
  <v-container fluid class="about">
      <v-row>
	  <v-col>
	      <h1 class="text-center">Sensor stations is a collection of projects</h1>
	  </v-col>
      </v-row>

      <v-row dense>
	  <v-col
	      v-for="card in cards"
	      :key="card.title"
	      :cols="6"
	  >
	      <v-card :href="card.github">
		  <v-card-title>
		      <span class="title font-weight-light">{{ card.title }}</span>
		  </v-card-title>
		  <v-card-text>
		      {{ card.description }}
		  </v-card-text>
		  <v-card-text>
		      {{ card.github }}
		  </v-card-text>
	      </v-card>
	  </v-col>
      </v-row>	

  </v-container>
</template>

<script>
 export default{
     name: 'About',
     data: () => ({
	 title: "Hello, World Vue!",
	 cards: [
	     {
		 title: "Sensor Station",
		 description: "Data Collection",
		 github: "https://github.com/sensorstation/esp32"
	     },
	     {
		 title: "Control Hub",
		 description: "Control Station",
		 github: "https://github.com/sensorstation/stub"
	     },
	     {
		 title: "Dashboard",
		 description: "That is me!",
		 github: "https://github.com/sensorstation/app"
	     },
	     {
		 title: "Clowd Ops",
		 description: "Clowd Operations",
		 github: "https://github.com/sensorstation/stub"
	     },

	 ]
     }),
 }
</script>
