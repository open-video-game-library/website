<script setup lang="ts">
type Props = {
  code: string;
  language: string;
  filename: string;
  highlights: Array<number>;
};

defineProps<Props>();
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
