<template>
  <v-app id="sensorstation">
    <v-card>
      <v-navigation-drawer
        app
        v-model="drawer"
        class="pt-4"
        color="grey lighten-3"
        :mini-variant.sync="mini"
        permanent
      >
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-title>Sensor Station</v-list-item-title>

          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.url"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>

    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h3><i>Sensor Station</i></h3>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/sensorstation/app/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: true,
    items: [
      { title: "Home", icon: "mdi-home-city", url: "/" },
      { title: "Stations", icon: "mdi-network-outline", url: "/stations" },
      { title: "Settings", icon: "mdi-cog-outline", url: "/settings" },
      { title: "About", icon: "mdi-information-outline", url: "/about" },
    ],
    mini: true,
  }),
};
</script>
