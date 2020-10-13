<template>
    <v-container fill-height fluid class="bg">
        <v-row align="center" justify="center">
            <v-col>
                <Clock :time=timen location="Huntington Beach"/>
                <Quote :quote=quote />
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
 import Clock from '@/components/Clock.vue'
 import Quote from '@/components/Quote.vue'

 export default {
     components: {
         Clock,
         Quote,
     },
     data () {
         return {
             msg: "Welcome to the APP"
         }
     },
     computed: {
         temp() {
             return this.$store.state.env.temp
         },
         timen() {
             return this.$store.state.env.time
         },
         quote() {
             return this.$store.state.quote.quote
         }
     }
 }
</script>

<style>

 .bg {
     background: #23230e;
 }

</style>
