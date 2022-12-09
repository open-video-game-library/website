<script lang="ts">
import { defineComponent } from '#imports'
export default defineComponent({
    props: {
        code: {
            type: String,
            default: ''
        },
        language: {
            type: String,
            default: null
        },
        filename: {
            type: String,
            default: null
        },
        highlights: {
            type: Array as () => number[],
            default: () => []
        }
    }
})
</script>

<template>
    <v-card color="#424242" class="text-white my-8">
        <template v-if="filename" v-slot:subtitle>{{ filename }}</template>
        <template v-slot:text>
            <code>
                <slot />
            </code>
        </template>
    </v-card>
</template>

<style>
pre code .line {
    display: block;
    min-height: 1rem;
}
pre {
    overflow-x: scroll;
    -ms-overflow-style: none;
}
pre::-webkit-scrollbar{
    display: none;
}
</style>