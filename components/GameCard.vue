<script lang="ts" setup>
import {
    mdiGithub,
    mdiController
} from "@mdi/js"

const props = defineProps({
    name: { type: String },
    image: { type: String },
    description: { type: String },
    repository: { type: String }
})
</script>

<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card color="secondary" :elevation="isHovering ? 8 : 2" v-bind="props">
            <v-img :src="image" height="320" cover />
            <div v-if="isHovering" class="details align-center">
                <v-card-title class="text-center">{{ name }}</v-card-title>
                <v-card-text>{{ description }}</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn v-if="repository" variant="flat" :prependIcon="mdiGithub" :href="`https://github.com/open-video-game-library/${repository}`" color="info">Download</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn v-if="repository" variant="flat" :prependIcon="mdiController" :to="`/game/${repository}`" color="primary">Play</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </div>
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