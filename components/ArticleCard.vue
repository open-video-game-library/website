<script lang="ts" setup>
interface Props {
    path: string
    title: string
    description: string
    thumbnail: string
    created_at: string
    updated_at?: string
}

const props = withDefaults(
    defineProps<Props>(), { 
        path: "",
        title: "",
        description: "",
        thumbnail: "",
        created_at: "",
        updated_at: ""
    }
)
</script>

<template>
    <v-container>
        <v-hover
            v-slot="{ isHovering, props }">
            <v-card color="secondary" :elevation="isHovering ? 8 : 2" v-bind="props">
                <NuxtLink :to="path" class="full-link" />
                <v-container>
                    <v-row>
                        <v-col cols="4">
                            <v-img 
                                :src="thumbnail"
                                height="160px"
                            ></v-img>
                        </v-col>
                        <v-col cols="8">
                            <v-card-title>{{ title }}</v-card-title>
                            <v-card-subtitle v-if="updated_at">更新日 {{ updated_at }}</v-card-subtitle>
                            <v-card-subtitle v-else>作成日 {{ created_at }}</v-card-subtitle>
                            <v-card-text>{{ description }}</v-card-text>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-hover>
    </v-container>
</template>