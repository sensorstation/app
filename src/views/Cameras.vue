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
              <h2>Camera: {{ selectedCamera.name }}</h2>
            </v-col>
          </v-row>

          <v-row>
            {{ selectedCamera }}
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CameraList from "@/components/camera-list/camera-list";

export default {
  name: "Cameras",
  components: {
    CameraList,
  },
  data() {
    return {
      cameras: this.$store.getters.getCameras,
    };
  },
  created() {
    if (this.cameras[0]) {
      this.selectedCamera = this.cameras[0];
    } else {
      this.selectedCamera = {};
    }
  },

  computed: {
    getCameras() {
      return this.$store.getters.getCameras;
    },
    selectedCamera() {
      return this.$store.getters.selectedCamera;
    },
  },
  methods: {
    selectCamera(camera) {
      this.selectedCamera = camera;
    },
  },
};
</script>
