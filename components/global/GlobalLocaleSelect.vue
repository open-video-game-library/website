<script setup lang="ts">
import { onMounted, ref, useI18n } from '#imports';

const { defaultLocale, getBrowserLocale, getLocaleCookie, setLocale, setLocaleCookie } = useI18n();

/** 言語 */
const locale = ref<string>('en');

onMounted(() => {
  const cookieLocale = getLocaleCookie();
  const browserLocale = getBrowserLocale();
  setLocale(cookieLocale || browserLocale || defaultLocale);
  locale.value = cookieLocale || browserLocale || defaultLocale;
});

/** 言語を変更する */
const changeLocale = () => {
  setLocaleCookie(locale.value);
  setLocale(locale.value);
};
</script>

<template>
  <select v-model="locale" class="locale-selection" @change="changeLocale">
    <option value="en">
      English
    </option>
    <option value="ja">
      日本語
    </option>
  </select>
</template>

<style scoped lang="scss">
.locale-selection {
  cursor: pointer;
  border: none;
  margin: 0 16px;
  padding: 8px 16px;
  border-radius: 4px;
  width: 194px;

  @media screen and (min-width: 640px) {
    width: auto;
  }
}
</style>
