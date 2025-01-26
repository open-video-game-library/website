<script setup lang="ts">
import { computed, useLocalePath } from '#imports';

type Props = {
  to: string;
  tag?: 'NuxtLink' | 'a' | 'div';
  target?: 'blank';
  locale?: 'en' | 'ja';
  isUnderlinedOnHover?: boolean;
};
const { to, tag = 'NuxtLink', target, locale, isUnderlinedOnHover = true } = defineProps<Props>();

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
    :class="isUnderlinedOnHover && '-underlined'"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="component === 'a'"
    :href="to"
    :target="target && '_blank'"
    :rel="target && 'noopener noreferrer'"
    class="global-link external-link"
    :class="isUnderlinedOnHover && '-underlined'"
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

  &.-underlined {
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.4s 0s ease;

    &:hover {
      border-color: #5e1ce2;
    }
  }
}

.external-link:hover {
  cursor: pointer;
};
</style>
