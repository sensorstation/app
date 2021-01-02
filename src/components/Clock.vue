<template>
  <div>
    <div class="py-2 text-body-2">
      <div>Server Time</div>
      <div class="text--secondary">{{ date }} &ndash; {{ time }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Clock",
  computed: {
    time() {
      const { hour, minute, second } = this.$store.state.time.time;

      const formattedHour = this.addZeroPrefix(hour);
      const formattedMinute = this.addZeroPrefix(minute);
      const formattedSecond = this.addZeroPrefix(second);

      return `${formattedHour}:${formattedMinute}:${formattedSecond}`;
    },
    date() {
      const { month, day, year } = this.$store.state.time.time;

      const formattedMonth = this.addZeroPrefix(month);
      const formattedDay = this.addZeroPrefix(day);
      const formattedYear = this.addZeroPrefix(year);

      return `${formattedMonth}/${formattedDay}/${formattedYear}`;
    },
  },
  methods: {
    addZeroPrefix(value) {
      if (!value) {
        return "";
      }

      if (value > 9) {
        return String(value);
      }

      return `0${value}`;
    },
  },
};
</script>
