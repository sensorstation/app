<template>
    <v-sheet class="text-center">
        <div class="bg">
            <p>{{ quote.text }}</p>
            <h3>{{ quote.author }}</h3>
            <h5>{{ quote.source }}</h5>
        </div>
    </v-sheet>
</template>

<script>
 export default {
     name: "Quote",
     props: {
         quote: Object,
     },
 }
</script>

<style>
 .text-center {
     font-style: italic;
     text-align: center;
 }
</style>
