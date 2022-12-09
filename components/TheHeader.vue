<script lang="ts" setup>
import { 
    mdiInformation, 
    mdiController, 
    mdiHammerWrench, 
    mdiFileDocument,
    mdiEmail
} from "@mdi/js"
</script>

<template>
    <v-app-bar color="primary">
        <template v-slot:prepend>
            <v-img
                src="https://res.cloudinary.com/dz1tqxdzg/image/upload/v1666456733/opengame-info/logos/logo_white_aq5j4v.png"
                width="100"
            ></v-img>
        </template>
        <template v-slot:append>
            <v-btn
                :prependIcon="mdiInformation"
                to="/"
            >About</v-btn>
            <v-btn
                to="/openvideogame"
                :prependIcon="mdiController"
            >Open Video Game</v-btn>
            <v-btn
                to="/tool"
                :prependIcon="mdiHammerWrench"
            >Tool</v-btn>
            <v-btn
                to="/article"
                :prependIcon="mdiFileDocument"
            >Article</v-btn>
            <v-btn
                to="/contact"
                :prependIcon="mdiEmail"
            >Contact</v-btn>
        </template>
    </v-app-bar>
</template>
