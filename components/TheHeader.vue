<script setup lang="ts">
import { 
    mdiInformation, 
    mdiController, 
    mdiHammerWrench, 
    mdiFileDocument,
    mdiEmail
} from "@mdi/js";
import { useDisplay } from 'vuetify';
import logoImg from '@/assets/image/logo_white.png';

const { xs } = useDisplay();

const headerLinks = [
    {
        name: "About",
        icon: mdiInformation,
        to: "/"
    },
    {
        name: "Open Video Game",
        icon: mdiController,
        to: "/game"
    },
    {
       name: "Tool",
        icon: mdiHammerWrench,
        to: "/tool"
    },
    {
        name: "Article",
        icon: mdiFileDocument,
        to: "/article"
    },
    {
        name: "Contact",
        icon: mdiEmail,
        to: "/contact"
    }
]

const showDrawer = ref(false)
</script>

<template>
    <v-app-bar color="primary" class="w-100">
        <template v-slot:prepend>
            <v-img
                :src="logoImg"
                width="100"
            ></v-img>
        </template>
        <template v-slot:append v-if="!xs">
            <v-btn v-for="link in headerLinks"
                :key="link.name"
                :prependIcon="link.icon"
                :to="link.to"
            >{{ link.name }}</v-btn>
        </template>

        <v-app-bar-nav-icon
            v-if="xs"
            variant="text"
            @click.stop="showDrawer = !showDrawer"
        ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
        v-if="xs"
        color="primary"
        v-model="showDrawer"
        location="right"
        temporary
    >
        <v-list>
            <v-list-item v-for="link in headerLinks" :key="link.name">
                <v-btn
                    color="primary"
                    :prependIcon="link.icon"
                    :to="link.to"
                >{{ link.name }}</v-btn>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
