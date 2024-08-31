<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },
  blank: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <span class="marked">
    <NuxtLink :href="href">
      <slot />
    </NuxtLink>
  </span>
</template>
