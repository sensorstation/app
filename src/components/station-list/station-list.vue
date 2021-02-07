<template>
  <div>
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
  </div>
</template>

<script>
export default {
  props: {
    stations: {
      name: String,
      id: String,
    },
  },
  computed: {
    hasStations() {
      return this.stations.length > 0;
    },
  },
};
</script>
