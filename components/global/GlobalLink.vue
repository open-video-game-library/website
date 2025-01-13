<script setup lang="ts">
type Props = {
  to: string;
  tag?: 'NuxtLink' | 'a' | 'div';
  target?: 'blank';
  locale?: 'en' | 'ja';
};
const { to, tag = 'NuxtLink', target, locale } = defineProps<Props>();

const localePath = useLocalePath();

/**
 * リンクのタグ
 * - 絶対リンクの場合はaタグにする
 */
const component = computed(() => to.includes('http') ? 'a' : tag);
/**
 * リンクのパス
 * - 言語も考慮したリンクにする
 */
const localeLink = computed(() => locale ? localePath(to, locale) : localePath(to));
</script>

<template>
  <NuxtLink
    v-if="component === 'NuxtLink'"
    :to="localeLink"
    :target="target && '_blank'"
    :rel="target && 'noopener noreferrer'"
    class="global-link"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="component === 'a'"
    :href="to"
    :target="target && '_blank'"
    :rel="target && 'noopener noreferrer'"
    class="global-link external-link"
  >
    <slot />
  </a>
  <div v-else>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.global-link {
  color: #5e1ce2;
}

.external-link:hover {
  cursor: pointer;
};
</style>
