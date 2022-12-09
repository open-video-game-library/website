<script setup lang="ts">
import { useRuntimeConfig } from '#imports'
defineProps<{ id: string }>()
const heading = 3
const { anchorLinks } = useRuntimeConfig().public.content
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)

import { mdiLink } from "@mdi/js"

const isHovered = ref(false)
const overed = () => {
    isHovered.value = true
}
const left = () => {
    isHovered.value = false
}
</script>

<template>
    <h3 :id="id" class="mt-16 mb-8">
        <a v-if="generate" 
            :href="`#${id}`" 
            class="text-normal"
            v-on:mouseover="overed"
            v-on:mouseleave="left">
            <slot />
            <v-icon 
                v-show="isHovered"
                style="vertical-align: -5px;"
                size="small">
                {{ mdiLink }}
            </v-icon>
        </a>
        <slot v-else />
    </h3>
</template>
