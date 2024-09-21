<script setup lang="ts">
type Props = {
  to: string;
  tag?: 'NuxtLink' | 'a' | 'div';
  target?: 'blank';
  locale?: 'en' | 'ja';
};
const { to, tag, target, locale } = withDefaults(defineProps<Props>(), {
  tag: 'NuxtLink',
});

const localePath = useLocalePath();

/**
 * リンクのタグ
 * * 絶対リンクの場合はaタグにする
 */
const component = computed(() => to.includes('http') ? 'a' : tag);
/**
 * リンクのパス
 * * 言語も考慮したリンクにする
 */
const localeLink = computed(() => locale ? localePath(to, locale) : localePath(to));
</script>

<template>
  <NuxtLink
    v-if="component === 'NuxtLink'"
    :to="localeLink"
    :target="target && '_blank'"
    :rel="target && 'noopener noreferrer'"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="component === 'a'"
    :to="to"
    :target="target && '_blank'"
    :rel="target && 'noopener noreferrer'"
    class="external-link"
  >
    <slot />
  </a>
  <div v-else>
    <slot />
  </div>
</template>

<style scoped>
.external-link:hover {
  cursor: pointer;
};
</style>
