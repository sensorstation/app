<template>
  <v-container>
    <v-row>
      <v-col col="12" sm="3">
        <v-sheet rounded="lg" elevation="1">
          <template v-if="hasStations">
            <div class="pa-1">
              <v-list nav>
                <div class="font-weight-bold text-lg text--secondary pl-2 pb-2">
                  Station List
                </div>

                <v-list-item-group color="primary" mandatory>
                  <v-list-item
                    v-for="station in stations"
                    :key="station.id"
                    @click="selectStation(station)"
                  >
                    <v-list-item-content>
                      <v-list-item-title :title="station.name">
                        {{ station.name }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
          </template>
          <template v-else>
            <div class="pa-3">No stations available</div>
          </template>
        </v-sheet>
      </v-col>

      <v-col col="12" sm="9">
        <v-sheet rounded="lg" class="px-4 py-2" elevation="1">
          <v-row>
            <v-col>
              <h2>{{ selectedStation.name }} Sensors</h2>
            </v-col>
          </v-row>

          <v-row>
            <v-col v-for="(value, key) in sensors" :key="key" :cols="4">
              <SensorData :key="key" :name="key" :value="value" />
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SensorData from "@/components/sensor-data-card/sensor-data-card";

export default {
  name: "Stations",
  components: {
    SensorData,
  },
  created() {
    this.selectStation(this.stations[0] || {});
  },
  computed: {
    hasStations() {
      return this.stations.length > 0;
    },
    sensors() {
      return this.$store.getters.getSensorData;
    },
  },
  data() {
    return {
      selectedStation: "",
      stations: [{ id: "default", name: "Default Station" }],
    };
  },
  methods: {
    selectStation(station) {
      this.selectedStation = station;
    },
  },
};
</script>
