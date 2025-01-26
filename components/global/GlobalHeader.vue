<script setup lang="ts">
import GlobalButton from '@/components/global/GlobalButton.vue';
import GlobalLink from '@/components/global/GlobalLink.vue';
import GlobalLocaleSelect from '@/components/global/GlobalLocaleSelect.vue';
import IconController from '@/components/icon/IconController.vue';
import IconDocument from '@/components/icon/IconDocument.vue';
import IconEmail from '@/components/icon/IconEmail.vue';
import IconMenu from '@/components/icon/IconMenu.vue';
import IconTools from '@/components/icon/IconTools.vue';
import { INTERNAL_URL } from '@/constants';

type Props = {
  /** ハンバーガーメニューを開閉する */
  handleHamburgerMenu: () => void;
  /** ハンバーガーメニューを開いているかどうか */
  isHamburgerMenuOpen: boolean;
};

const { handleHamburgerMenu, isHamburgerMenuOpen } = defineProps<Props>();
</script>

<template>
  <header class="header-wrapper">
    <GlobalLink to="/">
      <NuxtImg
        src="/logos/white.png"
        width="100"
      />
    </GlobalLink>
    <nav class="header-navigation">
      <ul class="links">
        <li>
          <GlobalButton
            :link="{
              to: INTERNAL_URL.GAME,
            }"
            :icon="IconController"
          >
            OPEN VIDEO GAME
          </GlobalButton>
        </li>
        <li>
          <GlobalButton
            :link="{
              to: INTERNAL_URL.TOOL,
            }"
            :icon="IconTools"
          >
            TOOL
          </GlobalButton>
        </li>
        <li>
          <GlobalButton
            :link="{
              to: INTERNAL_URL.ARTICLE,
            }"
            :icon="IconDocument"
          >
            ARTICLE
          </GlobalButton>
        </li>
        <li>
          <GlobalButton
            :link="{
              to: INTERNAL_URL.CONTACT,
            }"
            :icon="IconEmail"
          >
            CONTACT
          </GlobalButton>
        </li>
        <li>
          <GlobalLocaleSelect />
        </li>
      </ul>
    </nav>

    <!-- ハンバーガーメニューアイコン -->
    <button class="hamburger-button" :class="isHamburgerMenuOpen && 'open'" @click="handleHamburgerMenu">
      <IconMenu class="icon" fill="white" />
    </button>
  </header>
</template>

<style scoped lang="scss">
.header-wrapper {
  position: sticky;
  top: 0;
  width: 100%;
  height: 64px;
  background-color: #5e1ce2;
  box-shadow: 0 0 8px #0e0c0d;
  z-index: 10;
  color: white;
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-navigation {
  display: none;

  @media screen and (min-width: 640px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > .links {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.hamburger-button {
  position: relative;
  border: none;
  background-color: #5e1ce2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  transition: background-color 0.4s 0s ease;

  @media screen and (min-width: 640px) {
    display: none;
  }

  &.open {
    background-color: rgba(255, 255, 255, 0.2);
  }

  > .icon {
    width: 32px;
    height: 32px;
  }
}
</style>
