<template>
  <v-container>
    <v-row>
      <v-col col="12" sm="3">
        <v-sheet rounded="lg" elevation="1">
          <div class="pa-1">
            <v-list nav>
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="station in stations"
                  :key="station.id"
                  @click="selectStation(station)"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ station.name }}</v-list-item-title>
                    <v-list-item-subtitle>
                      {{ station.id }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
        </v-sheet>
      </v-col>

      <v-col col="12" sm="9">
        <v-sheet rounded="lg" class="px-4 py-2" elevation="1">
          <v-row>
            <v-col>
              <h2>{{ selectedStation.name }}</h2>
            </v-col>
          </v-row>

          <v-row>
            <v-col v-for="sensor in sensors" :key="sensor.title" :cols="4">
              <v-card rounded="lg" outlined>
                <v-card-title>{{ sensor.key }}</v-card-title>
                <v-card-text>
                  {{ sensor.value }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Stations",
  data() {
    return {
      selectedStation: "",
      stations: [
        {
          id: "lettuce-station-backyard",
          name: "Lettuces",
        },
        {
          id: "tomatoes",
          name: "Tomatoes",
        },
      ],
      sensors: [
        {
          key: "tempf",
          value: 88,
        },
        {
          key: "humid",
          value: 0.12,
        },
        {
          key: "soil",
          value: 0.49,
        },
        {
          key: "light",
          value: 0.62,
        },
      ],
    };
  },
  methods: {
    selectStation(station) {
      console.log("selected station:", station);
      this.selectedStation = station;
    },
  },
};
</script>
