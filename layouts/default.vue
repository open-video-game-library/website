<script setup lang="ts">
const { getLocaleCookie, setLocale } = useI18n();

onBeforeMount(() => {
  const cookieLanguage = getLocaleCookie();
  if (cookieLanguage) {
    setLocale(cookieLanguage);
  }
});
</script>

<template>
  <v-app>
    <TheHeader />
    <main
      class="wrapper"
      style="padding-top: 64px;"
    >
      <slot class="container" />
    </main>
    <TheFooter />
  </v-app>
</template>
