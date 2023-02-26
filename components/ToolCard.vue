<script lang="ts" setup>
const datas = defineProps({
    name: { type: String },
    image: { type: String },
    description: { type: String },
    link: { type: String }
})
</script>

<template>
    <div>
        <v-hover v-slot="{ isHovering, props }">
            <v-card color="secondary" :elevation="isHovering ? 8 : 2" v-bind="props">
                <a :href="datas.link" class="full-link" ></a>
                <v-container>
                    <v-row>
                        <v-col cols="4">
                            <v-img :src="datas.image" height="160px"></v-img>
                        </v-col>
                        <v-col cols="8">
                            <v-card-title>{{ datas.name }}</v-card-title>
                            <v-card-text>{{ datas.description }}</v-card-text>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-hover>
    </div>
</template>