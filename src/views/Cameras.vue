<template>
  <v-container>
    <v-row>
      <v-col col="12" sm="3">
        <v-sheet rounded="lg" elevation="1">
          <camera-list :cameras="getCameras" />
        </v-sheet>
      </v-col>

      <v-col col="12" sm="9">
        <v-sheet rounded="lg" class="px-4 py-2" elevation="1">
          <v-row>
            <v-col>
              <camera-data :camera="selectedCamera" />
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CameraList from "@/components/camera-list/camera-list";
import CameraData from "@/components/camera-data-card/camera-data-card";
export default {
  name: "Cameras",
  components: {
    CameraList,
    CameraData,
  },
  data() {
    return {
      cameras: this.$store.getters.getCameras,
    };
  },
  created() {},

  computed: {
    getCameras() {
      return this.$store.getters.getCameras;
    },
    selectedCamera() {
      return this.$store.getters.selectedCamera;
    },
  },
};
</script>
