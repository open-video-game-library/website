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
    <CommonLink :to="href" tag="a">
      <slot />
    </CommonLink>
  </span>
</template>
