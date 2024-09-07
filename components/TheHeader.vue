<script setup lang="ts">
import {
  mdiInformation,
  mdiController,
  mdiHammerWrench,
  mdiFileDocument,
  mdiEmail,
} from '@mdi/js';
import { useDisplay } from 'vuetify';
import logoImg from '@/assets/image/logo_white.png';

const { sm } = useDisplay();
const { setLocaleCookie, setLocale } = useI18n();

const headerLinks = [
  {
    name: 'About',
    icon: mdiInformation,
    to: '/',
  },
  {
    name: 'Open Video Game',
    icon: mdiController,
    to: '/game',
  },
  {
    name: 'Tool',
    icon: mdiHammerWrench,
    to: '/tool',
  },
  {
    name: 'Article',
    icon: mdiFileDocument,
    to: '/article',
  },
  {
    name: 'Contact',
    icon: mdiEmail,
    to: '/contact',
  },
];

const showDrawer = ref(false);
const language = ref('en');

const changeLocale = (language: 'en' | 'ja') => {
  setLocaleCookie(language);
  setLocale(language);
};
</script>

<template>
  <v-app-bar
    color="primary"
    class="w-100"
  >
    <template #prepend>
      <v-img
        :src="logoImg"
        width="100"
      />
    </template>
    <template
      v-if="!sm"
      #append
    >
      <v-btn
        v-for="link in headerLinks"
        :key="link.name"
        :prepend-icon="link.icon"
        :to="link.to"
      >
        {{ link.name }}
      </v-btn>
      <v-btn-toggle
        v-model="language"
        divided
        rounded="xl"
        color="primary"
        density="compact"
        mandatory
      >
        <v-btn value="en" @click="changeLocale('en')">
          EN
        </v-btn>
        <v-btn value="ja" @click="changeLocale('ja')">
          JA
        </v-btn>
      </v-btn-toggle>
    </template>

    <v-app-bar-nav-icon
      v-if="sm"
      variant="text"
      @click.stop="showDrawer = !showDrawer"
    />
  </v-app-bar>

  <v-navigation-drawer
    v-if="sm"
    v-model="showDrawer"
    color="primary"
    location="right"
    temporary
  >
    <v-list>
      <v-list-item
        v-for="link in headerLinks"
        :key="link.name"
      >
        <v-btn
          color="primary"
          :prepend-icon="link.icon"
          :to="link.to"
        >
          {{ link.name }}
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn-toggle
          v-model="language"
          divided
          rounded="xl"
          color="primary"
          mandatory
          density="compact"
        >
          <v-btn value="en" @click="setLocale('en')">
            EN
          </v-btn>
          <v-btn value="ja" @click="setLocale('ja')">
            JA
          </v-btn>
        </v-btn-toggle>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
