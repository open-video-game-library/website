<script setup>
const logoImg = new URL('../assets/image/logo_black.png', import.meta.url).href
</script>

<template>
    <v-footer class="py-16" color="grey-lighten-3">
        <v-img
            :src="logoImg"
            height="125"
        ></v-img>
    </v-footer>
</template>