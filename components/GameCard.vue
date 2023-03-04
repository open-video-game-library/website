<script lang="ts" setup>
import {
    mdiGithub,
    mdiController,
    mdiLanguageHtml5
} from "@mdi/js"
import { useDisplay } from 'vuetify'

const datas = defineProps({
    name: { type: String },
    image: { type: String },
    description: { type: String },
    github: { type: String },
    webgl: { type: String },
    standalone: { type: String }
})

const { xs, mobile } = useDisplay()
</script>

<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card :elevation="isHovering ? 8 : 2" v-bind="props">
            <v-img :src="datas.image" height="320" cover />
            <v-row v-if="isHovering" class="details" align="center">
                <v-col>
                    <v-card-title class="text-center">{{ datas.name }}</v-card-title>
                    <v-card-text>{{ datas.description }}</v-card-text>
                    <v-card-actions v-if="!(xs && mobile)">
                        <v-spacer></v-spacer>
                        <v-btn variant="flat" :prependIcon="mdiGithub" :href="datas.github" color="info" :disabled="datas.github == ''">code</v-btn>
                        <v-btn variant="flat" :prependIcon="mdiLanguageHtml5" :href="datas.webgl" color="primary" :disabled="datas.webgl == ''">WebGL</v-btn>
                        <v-btn variant="flat" :prependIcon="mdiController" :href="datas.standalone" color="primary" :disabled="datas.standalone == ''">Standalone</v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                    <v-card-text v-else>ゲームで遊ぶにはPCでご覧ください。</v-card-text>
                </v-col>
            </v-row>
        </v-card>
    </v-hover>
</template>

<style scoped>
.details {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.9);
    transition : all 0.3s;
    margin: auto;
}
</style>