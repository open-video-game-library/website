<template>
  <div class="marked">
    <h4 :id="id">
      <a
        v-if="generate"
        :href="`#${id}`"
      >
        <slot />
      </a>
      <slot v-else />
    </h4>
  </div>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports';

defineProps<{ id: string }>();
const heading = 4;
const { anchorLinks } = useRuntimeConfig().public.content;
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading);
</script>
