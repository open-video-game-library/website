<script lang="ts" setup>
const props = defineProps({
    path: { type: String },
    title: { type: String },
    description: { type: String },
    thumbnail: { type: String },
    created_at: { type: String },
    updated_at: { type: String }
})
</script>

<template>
    <div>
        <v-hover
            v-slot="{ isHovering }">
            <v-card color="secondary" :elevation="isHovering ? 8 : 2">
                <NuxtLink :to="props.path" class="full-link" />
                <v-container>
                    <v-row>
                        <v-col cols="4">
                            <v-img 
                                :src="props.thumbnail"
                                height="160px"
                            ></v-img>
                        </v-col>
                        <v-col cols="8">
                            <v-card-title>{{ title }}</v-card-title>
                            <v-card-subtitle v-if="props.updated_at">更新日 {{ updated_at }}</v-card-subtitle>
                            <v-card-subtitle v-else>作成日 {{ props.created_at }}</v-card-subtitle>
                            <v-card-text>{{ props.description }}</v-card-text>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-hover>
    </div>
</template>