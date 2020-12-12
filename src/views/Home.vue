<template>
  <v-container class="home">
    <v-row>
      <Clock />
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Clock from "@/components/Clock.vue";

export default {
  name: "Home",
  components: {
    Clock,
  },
};
</script>
