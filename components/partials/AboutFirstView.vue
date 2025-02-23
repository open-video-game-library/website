<script setup lang="ts">
import GlobalButton from '@/components/global/GlobalButton.vue';
import IconController from '@/components/icon/IconController.vue';
import IconGithub from '@/components/icon/IconGithub.vue';
import { INTERNAL_URL, EXTERNAL_URL } from '@/constants';
</script>

<template>
  <div class="about-first-view">
    <video
      autoplay
      muted
      loop
      playsinline
      src="/images/background.mp4"
      poster="/images/background.png"
      class="background"
    />
    <div class="message">
      <h1>
        <NuxtImg
          src="/logos/white.png"
          height="125"
          :alt="$t('about.firstView.title')"
        />
      </h1>
      <p class="description">
        {{ $t('about.firstView.catchCopy') }}
      </p>
      <div class="buttons">
        <GlobalButton
          color="black"
          :link="{
            to: EXTERNAL_URL.GITHUB,
          }"
          :icon="IconGithub"
        >
          {{ $t('about.firstView.links.gitHub') }}
        </GlobalButton>
        <GlobalButton
          :link="{
            to: INTERNAL_URL.GAME,
          }"
          :icon="IconController"
        >
          {{ $t('about.firstView.links.game') }}
        </GlobalButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-first-view {
  position: relative;
  width: 100%;
  height: calc(100vh - 61px);
  overflow: hidden;

  > .background {
    object-fit: cover;
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0;
  }

  // テキストを見やすくするための黒ドット
  &::after {
    content: "";
    display: block;
    position: absolute;
    inset: 0;
    height: calc(100vh - 61px);
    background-color: rgba(0, 0, 0, 0.3);
    background-image: radial-gradient(#111 30%, transparent 31%),
      radial-gradient(#111 30%, transparent 31%);
    background-size: 4px 4px;
    background-position: 0 0, 2px 2px;
    background-repeat: repeat;
  }

  > .message {
    margin: 0 16px;
    z-index: 5;
    inset: 0;
    position: absolute;
    display: grid;
    place-content: center;
    place-items: center;
    gap: 32px 0;

    > .description {
      color: white;
      font-weight: bold;
    }

    > .buttons {
      display: flex;
      gap: 0 32px;
    }
  }
}
</style>
