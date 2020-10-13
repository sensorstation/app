<template>
    <v-app>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
 export default {
     name: 'App',
     data: () => ({
         links: [
             {
                 label: 'Dashboard',
                 url: '/',
             },
             {
                 label: 'Login',
                 url: '/login'
             },
             {
                 label: 'Dashboard',
                 url: '/dashboard'
             }

         ],
     }),
 };
</script>
