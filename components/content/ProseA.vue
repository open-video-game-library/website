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
    <GlobalLink :to="href" tag="a">
      <slot />
    </GlobalLink>
  </span>
</template>
