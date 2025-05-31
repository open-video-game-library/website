<script setup lang="ts">
import { h } from '#imports';
import GlobalButton from '@/components/global/GlobalButton.vue';
import IconController from '@/components/icon/IconController.vue';
import IconGithub from '@/components/icon/IconGithub.vue';
import IconHtml5 from '@/components/icon/IconHtml5.vue';

type Props = {
  name: string;
  image: string;
  description: string;
  github?: string;
  webgl?: string;
  standalone?: string;
};

const { name, image, description, github = '', webgl = '', standalone = '' } = defineProps<Props>();
</script>

<template>
  <div class="game-card">
    <NuxtImg
      :src="image"
      loading="lazy"
      :alt="name"
      class="image"
    />
    <div class="overlay">
      <h3 class="title">
        {{ name }}
      </h3>
      <p class="description">
        {{ description }}
      </p>
      <div class="buttons">
        <slot />
        <GlobalButton
          v-if="github"
          color="black"
          :link="{
            to: github,
          }"
          :icon="h(IconGithub, { class: 'button-icon' })"
        >
          {{ $t('game.buttons.github') }}
        </GlobalButton>
        <p class="hidden-pc">
          {{ $t('game.buttons.sp') }}
        </p>
        <GlobalButton
          v-if="webgl"
          :link="{
            to: webgl,
          }"
          :icon="h(IconHtml5, { class: 'button-icon' })"
          class="hidden-sp"
        >
          {{ $t('game.buttons.webgl') }}
        </GlobalButton>
        <GlobalButton
          v-if="standalone"
          :link="{
            to: standalone,
          }"
          :icon="h(IconController, { class: 'button-icon' })"
          class="hidden-sp"
        >
          {{ $t('game.buttons.standalone') }}
        </GlobalButton>
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

.hidden-sp {
  display: none;

  @media screen and (min-width: 640px) {
    display: block;
  }
}

.hidden-pc {
  @media screen and (min-width: 640px) {
    display: none;
  }
}
</style>
