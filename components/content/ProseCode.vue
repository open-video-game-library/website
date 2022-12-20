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
    <div class="marked">
      <code>
        <slot />
      </code>
    </div>
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

pre::-webkit-scrollbar {
  display: none;
}
</style>