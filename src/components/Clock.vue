<template>
    <v-sheet>
        <h1 class="bg">{{ time.hour }}:{{ time.minute }}</h1>
        <h3 class="bg">{{ time.month }} / {{ time.day }} / {{time.year}}</h3>
    </v-sheet>
</template>

<script>
 export default {
     name: "Clock",
     props: {
         time: Object,
         location: String,
     }
 }
</script>

<style>
 h1 {
     color: #83a9cf;
     text-align: center;
     font-size: 48px;
 }

 h3 {
     text-align: center;
     font-size: 19px;
     color: #83bce1;
         
 }
</style>
