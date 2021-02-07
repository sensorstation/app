<template>
  <v-app id="sensorstation">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <h2>Sensor Station</h2>

        <v-spacer></v-spacer>

        <v-btn
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          text
          class="ml-2"
        >
          <span>{{ link.title }}</span>
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <router-view></router-view>
    </v-main>

    <v-footer app>
      <v-container>
        <Clock />
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import Clock from "@/components/clock/clock";

export default {
  name: "App",
  components: {
    Clock,
  },
  data: () => ({
    links: [
      { title: "Stations", url: "/stations" },
      { title: "Settings", url: "/settings" },
      { title: "About", url: "/about" },
    ],
  }),
};
</script>
