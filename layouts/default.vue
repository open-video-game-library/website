<script setup lang="ts">
import { h, ref } from '#imports';
import GlobalButton from '@/components/global/GlobalButton.vue';
import GlobalFooter from '@/components/global/GlobalFooter.vue';
import GlobalHeader from '@/components/global/GlobalHeader.vue';
import GlobalLocaleSelect from '@/components/global/GlobalLocaleSelect.vue';
import IconController from '@/components/icon/IconController.vue';
import IconDocument from '@/components/icon/IconDocument.vue';
import IconEmail from '@/components/icon/IconEmail.vue';
import IconTools from '@/components/icon/IconTools.vue';
import { INTERNAL_URL } from '@/constants';

/** ハンバーガーメニューを開いているかどうか */
const isHamburgerMenuOpen = ref<boolean>(false);

/** ハンバーガーメニューを開閉する */
const handleHamburgerMenu = () => {
  isHamburgerMenuOpen.value = !isHamburgerMenuOpen.value;

  /** 開いている間はスクロール禁止にする */
  const body = document.getElementsByTagName('body');
  if (isHamburgerMenuOpen.value) {
    body[0].style.overflowY = 'hidden';
  }
  else {
    body[0].style.overflowY = 'auto';
  }
};
</script>

<template>
  <div>
    <GlobalHeader
      :handle-hamburger-menu="handleHamburgerMenu"
      :is-hamburger-menu-open="isHamburgerMenuOpen"
    />
    <slot />
    <GlobalFooter />

    <!-- ハンバーガーメニュー -->
    <Transition name="fade" class="hamburger-background">
      <div v-if="isHamburgerMenuOpen" @click="handleHamburgerMenu" />
    </Transition>
    <Transition name="slide" class="hamburger-transition">
      <nav v-if="isHamburgerMenuOpen" class="hamburger-navigation">
        <ul class="links">
          <li>
            <GlobalButton
              :link="{
                to: INTERNAL_URL.GAME,
              }"
              :icon="h(IconController, { class: 'button-icon' })"
            >
              OPEN VIDEO GAME
            </GlobalButton>
          </li>
          <li>
            <GlobalButton
              :link="{
                to: INTERNAL_URL.TOOL,
              }"
              :icon="h(IconTools, { class: 'button-icon' })"
            >
              TOOL
            </GlobalButton>
          </li>
          <li>
            <GlobalButton
              :link="{
                to: INTERNAL_URL.ARTICLE,
              }"
              :icon="h(IconDocument, { class: 'button-icon' })"
            >
              ARTICLE
            </GlobalButton>
          </li>
          <li>
            <GlobalButton
              :link="{
                to: INTERNAL_URL.CONTACT,
              }"
              :icon="h(IconEmail, { class: 'button-icon' })"
            >
              CONTACT
            </GlobalButton>
          </li>
          <li class="locale">
            <GlobalLocaleSelect />
          </li>
        </ul>
      </nav>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.hamburger-background {
  z-index: 8;
  position: absolute;
  inset: 0;
  transition: opacity 0.4s 0s ease;
  background-color: #0e0c0d;
  opacity: 0.5;
  display: block;

  @media screen and (min-width: 640px) {
    display: none;
  }
}

.hamburger-navigation {
  background-color: #5e1ce2;
  z-index: 9;
  position: absolute;
  top: 0;
  right: 0;
  transition: width 0.4s 0s ease;
  box-shadow: 0 0 8px #0e0c0d;
  padding-top: 80px;
  height: 100vh;
  width: 240px;
  display: block;

  > .links {
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    margin: 0 8px;
    white-space: nowrap;

    > .locale {
      margin-top: 16px;
    }
  }

  @media screen and (min-width: 640px) {
    display: none;
  }
}

.navigation-link {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  transition: background-color 0.4s 0s ease;
  border-radius: 4px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  > .icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  > .text {
    color: white;
  }
}

/** ハンバーガーメニューが閉じた状態 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/** ハンバーガーメニューが開いた状態 */
.fade-enter-to,
.fade-leave-from {
  opacity: 0.5;
}

/** ハンバーガーメニューが閉じた状態 */
.slide-enter-from,
.slide-leave-to {
  width: 0;
}

/** ハンバーガーメニューが開いた状態 */
.slide-enter-to,
.slide-leave-from {
  width: 240px;
}
</style>
