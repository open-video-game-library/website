<script setup lang="ts">
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
    <main><slot /></main>
    <GlobalFooter />

    <!-- ハンバーガーメニュー -->
    <Transition name="fade" class="hamburger-background">
      <div v-if="isHamburgerMenuOpen" @click="handleHamburgerMenu" />
    </Transition>
    <Transition name="slide" class="hamburger-transition">
      <nav v-if="isHamburgerMenuOpen" class="hamburger-navigation">
        <ul class="links">
          <li>
            <GlobalLink to="/game">
              <div class="navigation-link">
                <IconController class="icon" fill="white" />
                <span class="text">OPEN VIDEO GAME</span>
              </div>
            </GlobalLink>
          </li>
          <li>
            <GlobalLink to="/tool">
              <div class="navigation-link">
                <IconTools class="icon" fill="white" />
                <span class="text">TOOL</span>
              </div>
            </GlobalLink>
          </li>
          <li>
            <GlobalLink to="/article">
              <div class="navigation-link">
                <IconDocument class="icon" fill="white" />
                <span class="text">ARTICLE</span>
              </div>
            </GlobalLink>
          </li>
          <li>
            <GlobalLink to="/contact">
              <div class="navigation-link">
                <IconEmail class="icon" fill="white" />
                <span class="text">CONTACT</span>
              </div>
            </GlobalLink>
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
