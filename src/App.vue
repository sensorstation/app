<template>
  <v-app id="sensorstation">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <h2>Sensor Station</h2>

        <v-spacer></v-spacer>

        <v-btn
          v-for="link in links"
          :key="link"
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

    <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    links: [
      { title: "Stations", icon: "mdi-network-outline", url: "/stations" },
      { title: "Settings", icon: "mdi-cog-outline", url: "/settings" },
      { title: "About", icon: "mdi-information-outline", url: "/about" },
    ],
  }),
};
</script>
