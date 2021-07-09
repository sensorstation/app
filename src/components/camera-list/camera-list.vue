<template>
  <div>
    <template v-if="hasCameras">
      <div class="pa-1">
        <v-list nav>
          <div class="font-weight-bold text-lg text--secondary pl-2 pb-2">
            Camera List
          </div>

          <v-list-item-group color="primary" mandatory>
            <v-list-item
              v-for="camera in getCameras"
              :key="camera.name"
              @click="selectCamera(camera)"
            >
              <v-list-item-content>
                <v-list-item-title :title="camera.name">
                  {{ camera.addr }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </template>

    <template v-else>
      <div class="pa-3">No cameras available</div>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    hasCameras() {
      let c = this.$store.getters.getCameras;
      return c.length;
    },
    getCameras() {
      return this.$store.getters.getCameras;
    },
  },
  methods: {
    selectCamera(cam) {
      this.$store.dispatch("selectCamera", cam);
    },
  },
};
</script>
