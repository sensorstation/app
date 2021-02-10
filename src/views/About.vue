<template>
  <v-container>
    <header class="my-6">
      <h2 class="text-center">Sensor stations is a collection of projects</h2>
    </header>

    <v-row>
      <v-col v-for="card in cards" :key="card.title" :cols="6">
        <v-card rounded="lg" elevation="1">
          <v-card-title>
            <div class="title">{{ card.title }}</div>
          </v-card-title>

          <v-card-subtitle>
            {{ card.description }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              v-if="!card.comingSoon"
              color="primary"
              text
              :href="card.github"
            >
              View on Github
            </v-btn>

            <v-btn v-if="card.comingSoon" color="primary" text disabled
              >Coming Soon</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    title: "Hello, World Vue!",
    cards: [
      {
        title: "Sensor Station",
        description: "Data Collection",
        github: "https://github.com/sensorstation/esp32",
      },
      {
        title: "Dashboard",
        description: "That is me!",
        github: "https://github.com/sensorstation/app",
      },
      {
        title: "Control Hub",
        description: "Control Station",
        github: "https://github.com/sensorstation/stub",
        comingSoon: true,
      },
      {
        title: "Clowd Ops",
        description: "Clowd Operations",
        github: "https://github.com/sensorstation/stub",
        comingSoon: true,
      },
    ],
  }),
};
</script>
