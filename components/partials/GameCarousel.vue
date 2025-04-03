<script setup lang="ts">
import { ref, useDevice } from '#imports';
import GlobalButton from '@/components/global/GlobalButton.vue';
import IconController from '@/components/icon/IconController.vue';
import IconEmail from '@/components/icon/IconEmail.vue';
import IconGithub from '@/components/icon/IconGithub.vue';
import IconHtml5 from '@/components/icon/IconHtml5.vue';
import { games } from '@/assets/json/game.json';
import { INTERNAL_URL } from '@/constants';

const { isMobile } = useDevice();

/** 現在のカルーセルスライド */
const currentSlide = ref(0);

const thumbnailConfig = {
  itemsToShow: 1,
  wrapAround: true,
  height: isMobile ? 225 : 450,
};

const galleryConfig = {
  height: 80,
  itemsToShow: 'auto',
  wrapAround: true,
  gap: isMobile ? 8 : 16,
};

const descriptionConfig = {
  slideEffect: 'fade',
  wrapAround: true,
  mouseDrag: false,
  touchDrag: false,
  height: 'auto',
};
</script>

<template>
  <div>
    <NuxtCarousel v-bind="thumbnailConfig" v-model="currentSlide">
      <NuxtSlide v-for="{ name, image } in games" :key="`thumbnail-${name}`">
        <div class="thumbnail-slide">
          <NuxtImg
            :src="image"
            loading="lazy"
            :alt="name"
            class="image"
          />
        </div>
      </NuxtSlide>
      <NuxtSlide>
        <div class="thumbnail-slide">
          <NuxtImg
            src="/images/more.png"
            loading="lazy"
            :alt="$t('game.more.title')"
            class="image"
          />
        </div>
      </NuxtSlide>
      <template #addons>
        <NuxtNavigation />
      </template>
    </NuxtCarousel>

    <NuxtCarousel v-bind="galleryConfig" v-model="currentSlide">
      <NuxtSlide v-for="{ name, image } in games" :key="`gallery-${name}`">
        <template #default="{ currentIndex, isActive }">
          <div class="gallery-slide" :class="isActive && '-active'" @click="currentSlide = currentIndex">
            <NuxtImg
              sizes="100vw md:80px"
              :src="image"
              loading="lazy"
              :alt="name"
              class="image"
            />
          </div>
        </template>
      </NuxtSlide>
      <NuxtSlide>
        <div class="gallery-slide" @click="currentSlide = games.length">
          <NuxtImg
            src="/images/more.png"
            loading="lazy"
            :alt="$t('game.more.title')"
            class="image"
          />
        </div>
      </NuxtSlide>
    </NuxtCarousel>

    <NuxtCarousel v-bind="descriptionConfig" v-model="currentSlide">
      <NuxtSlide v-for="{ name, description, github, webgl, standalone } in games" :key="`description-${name}`">
        <div class="description-slide">
          <h3 class="title">
            {{ name }}
          </h3>
          <p>{{ description }}</p>
          <div class="buttons">
            <GlobalButton
              v-if="github"
              color="black"
              :link="{
                to: github,
              }"
              :icon="IconGithub"
            >
              {{ $t('game.buttons.github') }}
            </GlobalButton>
            <template v-if="isMobile">
              <p>{{ $t('game.buttons.sp') }}</p>
            </template>
            <template v-else>
              <GlobalButton
                v-if="webgl"
                :link="{
                  to: webgl,
                }"
                :icon="IconHtml5"
              >
                {{ $t('game.buttons.webgl') }}
              </GlobalButton>
              <GlobalButton
                v-if="standalone"
                :link="{
                  to: standalone,
                }"
                :icon="IconController"
              >
                {{ $t('game.buttons.standalone') }}
              </GlobalButton>
            </template>
          </div>
        </div>
      </NuxtSlide>
      <NuxtSlide>
        <div class="description-slide">
          <h3>{{ $t("game.more.title") }}</h3>
          <p>{{ $t("game.more.description") }}</p>
          <div class="buttons">
            <GlobalButton
              :link="{
                to: INTERNAL_URL.CONTACT,
              }"
              :icon="IconEmail"
            >
              {{ $t("contact.title") }}
            </GlobalButton>
          </div>
        </div>
      </NuxtSlide>
    </NuxtCarousel>
  </div>
</template>

<style scoped lang="scss">
.thumbnail-slide {
  height: 225px;
  width: 400px;
  margin-bottom: 8px;

  @media screen and (min-width: 640px) {
    height: 450px;
    width: 800px;
    margin-bottom: 16px;
  }

  > .image {
    height: 100%;
    margin: 0 auto;
    object-fit: cover;
    object-position: center;
  }
}

.gallery-slide {
  height: 80px;
  width: 80px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  border-radius: 4px;
  overflow: hidden;

  > .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &.-active {
    opacity: 1;
  }

  &:hover {
    opacity: 1;
  }
}

.description-slide {
  width: 100%;

  > .title {
    margin-top: 16px;

    @media screen and (min-width: 640px) {
      margin-top: 32px;
    }
  }

  > .buttons {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media screen and (min-width: 640px) {
      flex-direction: row;
      gap: 16px;
    }
  }
}
</style>
