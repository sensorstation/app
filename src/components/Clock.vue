<template>
  <v-container>
    <v-row>
      <v-col></v-col>
      <v-col cols="2">
        <v-card class="text-center">
          <v-card-title> {{ hour }}:{{ minute }}:{{ second }} </v-card-title>
          <v-card-subtitle> {{ month }}/{{ day }}/{{ year }} </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Clock",
  computed: {
    year() {
      return this.$store.state.time.time.year;
    },
    month() {
      return this.$store.state.time.time.month;
    },
    day() {
      return this.$store.state.time.time.day;
    },
    hour() {
      return this.$store.state.time.time.hour;
    },
    minute() {
      return this.$store.state.time.time.minute;
    },
    second() {
      return this.$store.state.time.time.second;
    },
    timeStr() {
      return this.$store.state.time.time;
    },
  },
};
</script>

<style :scoped>
body {
  background: black;
}

h1 {
  font-size: 96px;
  color: #2085a3;
}
</style>
