<template>
  <v-card rounded="lg" outlined>
    <v-card-title>
      <span style="font-size: 40px">
        {{ this.translateValue(name, value) }}
      </span>
    </v-card-title>
    <v-card-text>
      {{ this.translateName(name) }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    name: String,
    value: Number,
  },
  methods: {
    translateName(name) {
      switch (name) {
        case "tempf":
          return "Temperature";
        case "soil":
          return "Soil Moisture";
        case "light":
          return "Light";
        case "humid":
          return "Humidity";
        default:
          return name;
      }
    },
    translateValue(name, value) {
      switch (name) {
        case "tempf":
          return `${value}°F`;
        case "soil":
          return `${value * 100}%`;
        case "light":
          return `${value * 100}%`;
        case "humid":
          return `${value * 100}%`;
      }
    },
  },
};
</script>
