<script lang="ts" setup>
import { mdiFileDocumentOutline } from "@mdi/js"

const datas = defineProps({
    name: { type: String },
    image: { type: String },
    description: { type: String },
    link: { type: String },
    articleLink: { type: String }
})
</script>

<template>
    <div>
        <v-hover v-slot="{ isHovering, props }">
            <v-card color="secondary" :elevation="isHovering ? 8 : 2" v-bind="props">
                <a :href="datas.link" class="full-link" target="_blank" rel="noopener noreferrer"></a>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="4">
                            <v-img :src="datas.image" height="160px"></v-img>
                        </v-col>
                        <v-col cols="12" sm="8">
                            <v-card-title>{{ datas.name }}</v-card-title>
                            <v-card-text>{{ datas.description }}</v-card-text>
                            <v-card-actions v-if="datas.articleLink">
                                <v-spacer></v-spacer>
                                <v-btn
                                    :icon="mdiFileDocumentOutline"
                                    :href="datas.articleLink"
                                    style="z-index: 100;"
                                ></v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-hover>
    </div>
</template>