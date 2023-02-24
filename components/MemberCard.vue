<script lang="ts" setup>
import {
    mdiHome,
    mdiTwitter
} from "@mdi/js"

const props = defineProps({
    name: { type: String },
    engname: { type: String },
    icon: { type: String },
    description: { type: String },
    affiliation: { type: String },
    hp: { type: String },
    twitter: { type: String }
})
</script>

<template>
    <v-card color="secondary" :elevation="2">
        <v-img :src="props.icon" cover height="200"></v-img>
        <v-card-title>{{ props.name }}</v-card-title>
        <v-card-subtitle>{{ props.engname }}</v-card-subtitle>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :icon="mdiHome" style="visibility: hidden;"></v-btn>
            <v-btn v-if="props.hp" :icon="mdiHome" :href="props.hp"></v-btn>
            <v-btn v-if="props.twitter" :icon="mdiTwitter" :href="`https://twitter.com/${props.twitter}`"></v-btn>
        </v-card-actions>
    </v-card>
</template>
