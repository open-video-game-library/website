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
