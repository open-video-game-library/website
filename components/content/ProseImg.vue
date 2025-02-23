<template>
  <div class="marked">
    <img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
    >
  </div>
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
});
</script>
