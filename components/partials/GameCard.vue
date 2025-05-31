<script setup lang="ts">
import { h, useDevice, useI18n } from '#imports';
import GlobalButton from '@/components/global/GlobalButton.vue';
import IconController from '@/components/icon/IconController.vue';
import IconGithub from '@/components/icon/IconGithub.vue';
import IconHtml5 from '@/components/icon/IconHtml5.vue';

const { isMobile } = useDevice();
const { locale } = useI18n();

type Game = {
  name: string;
  image: string;
  description: string;
  github?: string;
  webgl?: string;
  standalone?: string;
  description_JP?: string;
};

type Props = {
  game: Game;
};

const { game } = defineProps<Props>();
</script>

<template>
  <div class="game-card">
    <NuxtImg
      :src="game.image"
      loading="lazy"
      :alt="game.name"
      class="image"
    />
    <div class="overlay">
      <h3 class="title">
        {{ game.name }}
      </h3>
      <p class="description">
        {{ locale === 'en' ? game.description : game.description_JP || game.description }}
      </p>
      <div class="buttons">
        <slot />
        <GlobalButton
          v-if="game.github"
          color="black"
          :link="{
            to: game.github,
          }"
          :icon="h(IconGithub, { class: 'button-icon' })"
        >
          {{ $t('game.buttons.github') }}
        </GlobalButton>
        <template v-if="isMobile">
          <p>{{ $t('game.buttons.sp') }}</p>
        </template>
        <template v-else>
          <GlobalButton
            v-if="game.webgl"
            :link="{
              to: game.webgl,
            }"
            :icon="h(IconHtml5, { class: 'button-icon' })"
          >
            {{ $t('game.buttons.webgl') }}
          </GlobalButton>
          <GlobalButton
            v-if="game.standalone"
            :link="{
              to: game.standalone,
            }"
            :icon="h(IconController, { class: 'button-icon' })"
          >
            {{ $t('game.buttons.standalone') }}
          </GlobalButton>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.game-card {
  position: relative;
  height: 320px;
  overflow: hidden;
  border-radius: 8px;

  > .image {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }

  > .overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 32px 16px;

    > .title {
      margin-bottom: 32px;
    }

    > .description {
      margin-bottom: 32px;
    }

    > .buttons {
      display: grid;
      gap: 8px;

      @media screen and (min-width: 640px) {
        grid-template-columns: repeat(3, auto);
      }
    }
  }
}
</style>
