<script lang="ts" setup>
const datas = defineProps({
    name: { type: String },
    image: { type: String },
    sub: { type: String },
    description: { type: String },
    link: { type: String },
    tags: { type: String }
})
</script>

<template>
    <div>
        <v-hover v-slot="{ isHovering, props }">
            <v-card color="secondary" :elevation="isHovering ? 8 : 2" v-bind="props" width="100%">
                <a :href="datas.link" target="_blank" rel="noopener noreferrer" class="full-link"></a>
                <v-img :src="datas.image" height="200" cover></v-img>
                <v-card-title>{{ datas.name }}</v-card-title>
                <v-card-subtitle v-if="datas.sub">{{ datas.sub }}</v-card-subtitle>
                <v-card-text v-if="datas.description">{{ datas.description }}</v-card-text>
                <v-card-actions v-if="tags">
                    <v-spacer></v-spacer>
                    <v-btn variant="plain" color="primary" v-for="tag in tags?.split(',')" :key="tag">
                        #{{ tag }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-hover>
    </div>
</template>

<style scoped>
</style>