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

const { smAndDown } = useDisplay();
const { defaultLocale, getBrowserLocale, getLocaleCookie, setLocale, setLocaleCookie } = useI18n();

const HEADER_LINKS = [
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

const showDrawer = ref<boolean>(false);
const locale = ref<string>('en');

onMounted(() => {
  const cookieLocale = getLocaleCookie();
  const browserLocale = getBrowserLocale();
  setLocale(cookieLocale || browserLocale || defaultLocale);
  locale.value = cookieLocale || browserLocale || defaultLocale;
});

const changeLocale = (selectedLocale: 'en' | 'ja') => {
  setLocaleCookie(selectedLocale);
  setLocale(selectedLocale);
};
</script>

<template>
  <VAppBar
    color="primary"
    class="w-100"
  >
    <template #prepend>
      <VImg
        :src="logoImg"
        width="100"
      />
    </template>
    <template
      v-if="!smAndDown"
      #append
    >
      <CommonButton
        v-for="link in HEADER_LINKS"
        :key="link.name"
        variant="flat"
        :value="link.name"
        :prepend-icon="link.icon"
        :to="link.to"
      />
      <VBtnToggle
        v-model="locale"
        divided
        rounded="xl"
        color="primary"
        density="compact"
        mandatory
      >
        <VBtn value="en" size="small" @click="changeLocale('en')">
          EN
        </VBtn>
        <VBtn value="ja" size="small" @click="changeLocale('ja')">
          JA
        </VBtn>
      </VBtnToggle>
    </template>

    <VAppBarNavIcon
      v-if="smAndDown"
      variant="text"
      @click.stop="showDrawer = !showDrawer"
    />
  </VAppBar>

  <VNavigationDrawer
    v-if="smAndDown"
    v-model="showDrawer"
    color="primary"
    location="right"
    temporary
  >
    <VList>
      <VListItem
        v-for="link in HEADER_LINKS"
        :key="link.name"
      >
        <CommonButton
          variant="flat"
          :value="link.name"
          :prepend-icon="link.icon"
          :to="link.to"
        />
      </VListItem>
      <VListItem>
        <VBtnToggle
          v-model="locale"
          divided
          rounded="xl"
          color="primary"
          density="compact"
          mandatory
        >
          <VBtn value="en" size="small" @click="changeLocale('en')">
            EN
          </VBtn>
          <VBtn value="ja" size="small" @click="changeLocale('ja')">
            JA
          </VBtn>
        </VBtnToggle>
      </VListItem>
    </VList>
  </VNavigationDrawer>
</template>
