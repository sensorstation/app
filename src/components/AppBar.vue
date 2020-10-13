<template>
    <v-app-bar
        app
        color="primary"
        dark
    >
        <v-toolbar-title>Sensor Station</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn v-for="link in links"
               :key="link.label"
               :to="link.url"
               color="white"
               text
               rounded
               class="my-2"
        >
            {{ link.label }}
        </v-btn>
    </v-app-bar>
</template>

<script>
 export default {
     name: "AppBar",
     props: ['links']
 }
</script>
