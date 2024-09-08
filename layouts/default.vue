<template>
  <v-app>
    <GlobalHeader />
    <main
      class="wrapper"
      style="padding-top: 64px;"
    >
      <slot class="container" />
    </main>
    <GlobalFooter />
  </v-app>
</template>
