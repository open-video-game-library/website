<template>
  <div class="marked">
    <h1 :id="id">
      <a
        v-if="generate"
        :href="`#${id}`"
      >
        <slot />
      </a>
      <slot v-else />
    </h1>
  </div>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports';

defineProps<{ id: string }>();
const heading = 1;
const { anchorLinks } = useRuntimeConfig().public.content;
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading);
</script>
