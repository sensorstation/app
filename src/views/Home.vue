<template>
    <v-container>
        <AppBar :links="links"></AppBar>

        <v-row>

            <v-col>
                <HelloWorld msg="Welcome to Your Vue.js App"/>                
            </v-col>

        </v-row>

        <Footer :links="links"></Footer>
    </v-container>
</template>

<script>
 import Footer from '@/components/Footer';
 import AppBar from '@/components/AppBar';
 import HelloWorld from '@/components/HelloWorld.vue'

 export default {
     name: 'Home',
     components: {
         Footer,
         AppBar,
         HelloWorld,
     }
 }
</script>
