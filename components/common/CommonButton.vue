<script setup lang="ts">
type Props = {
  value: string;
  onClicked?: () => void;
  color?: 'primary' | 'secondary' | 'info';
  variant?: 'elevated' | 'flat' | 'outlined';
  icon?: string;
  to?: string;
  href?: string;
  locale?: 'en' | 'ja';
};
const { value, onClicked, color, icon, to, href, locale } = withDefaults(defineProps<Props>(), {
  variant: 'elevated',
  color: 'primary',
});

const localePath = useLocalePath();

const link = computed(() => locale ? localePath(to, locale) : localePath(to));
</script>

<template>
  <VBtn
    v-if="href"
    :variant="variant"
    :color="color"
    :prepend-icon="icon"
    :href="href"
    @click="onClicked"
  >
    {{ value }}
  </VBtn>
  <VBtn
    v-else
    :variant="variant"
    :color="color"
    :prepend-icon="icon"
    :to="link"
    @click="onClicked"
  >
    {{ value }}
  </VBtn>
</template>
