<template>
  <v-card rounded="lg" outlined>
    <v-card-title>
      <span style="font-size: 40px">
        <h4>Camera {{ camera.name }}</h4>
      </span>
    </v-card-title>
    <v-card-text>
      {{ getURL() }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    camera: Object,
  },
  methods: {
    getURL() {
      return (
        "http://" + this.camera.addr + ":" + this.camera.port + this.camera.uri
      );
    },
    getName() {
      return this.name;
    },
    getAddr() {
      return this.addr;
    },
  },
};
</script>
