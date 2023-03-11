<script lang="ts" setup>
import { mdiOpenInNew } from "@mdi/js"

const datas = defineProps({
    path: { type: String },
    title: { type: String },
    description: { type: String },
    thumbnail: { type: String },
    exlink: { type: String },
    created_at: { type: String },
    updated_at: { type: String }
})
</script>

<template>
    <div>
        <v-hover
            v-slot="{ isHovering, props }">
            <v-card color="secondary" :elevation="isHovering ? 8 : 2" v-bind="props">
                <a v-if="datas.exlink" :href="datas.exlink" class="full-link" target="_blank" rel="noopener noreferrer"></a>
                <NuxtLink v-else :to="datas.path" class="full-link"></NuxtLink>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="4">
                            <v-img 
                                :src="datas.thumbnail"
                                height="160px"
                            ></v-img>
                        </v-col>
                        <v-col cols="12" sm="8">
                            <v-card-title>{{ title }}</v-card-title>
                            <v-card-subtitle v-if="datas.updated_at">更新日 {{ datas.updated_at }}</v-card-subtitle>
                            <v-card-subtitle v-else>作成日 {{ datas.created_at }}</v-card-subtitle>
                            <v-card-text>{{ datas.description }}</v-card-text>
                            <v-card-actions v-if="datas.exlink">
                                <v-spacer></v-spacer>
                                <p>{{ datas.exlink.split("/")[2] }} </p>
                                <v-icon :icon="mdiOpenInNew" class="mx-2" color="grey" size="20" />
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-hover>
    </div>
</template>