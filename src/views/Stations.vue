<template>
  <v-container>
    <v-row>
      <v-col col="12" sm="3">
        <v-sheet rounded="lg" elevation="1">
          <station-list :stations="stations" />
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
import StationList from "@/components/station-list/station-list";

export default {
  name: "Stations",
  components: {
    SensorData,
    StationList,
  },
  created() {
    this.selectStation(this.stations[0] || {});
  },
  computed: {
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
