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
              <h2>{{ selectedCamera.name }} Cameras</h2>
            </v-col>
          </v-row>

          <v-row>
            <v-col v-for="(value, key) in cameras" :key="key" :cols="4">
              <CameraData :key="key" :name="key" :value="value" />
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CameraData from "@/components/camera-data-card/camera-data-card";
import CameraList from "@/components/camera-list/camera-list";

export default {
  name: "Cameras",
  components: {
    CameraData,
    CameraList,
  },
  data() {
    return {
      selectedCamera: "",
      cameras: [{ id: "default", name: "Default Camera" }],
    };
  },
  created() {
    this.selectCamera(this.cameras[0] || {});
  },

  computed: {
    getCameras() {
      return this.$store.getters.getCameras;
    },
  },
  methods: {
    selectCamera(camera) {
      this.selectedCamera = camera;
    },
  },
};
</script>
