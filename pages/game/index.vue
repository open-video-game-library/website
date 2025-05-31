<script setup lang="ts">
import { h, useI18n } from '#imports';
import GameCard from '@/components/partials/GameCard.vue';
import GlobalButton from '@/components/global/GlobalButton.vue';
import GlobalLink from '@/components/global/GlobalLink.vue';
import IconEmail from '@/components/icon/IconEmail.vue';
import { games } from '@/assets/json/game.json';
import { INTERNAL_URL } from '@/constants';

const { locale } = useI18n();
</script>

<template>
  <main>
    <section class="content-wrapper">
      <div class="content-container game-wrapper">
        <h1 class="title">
          {{ $t('game.title') }}
        </h1>
        <I18nT
          keypath="game.description"
          tag="p"
          for="tos"
          scope="global"
          class="description"
        >
          <template #license>
            <strong>{{ $t("game.details.license") }}</strong>
          </template>
          <template #gitHub>
            <GlobalLink to="https://github.com/open-video-game-library">
              {{ $t("game.details.gitHub") }}
            </GlobalLink>
          </template>
          <template #survey>
            <GlobalLink to="/game/survey">
              {{ $t("game.details.survey") }}
            </GlobalLink>
          </template>
        </I18nT>
        <div class="list">
          <GameCard
            v-for="{ name, image, description, description_JP, github, webgl, standalone } in games"
            :key="name"
            :name="name"
            :image="image"
            :description="(locale === 'ja' && description_JP) ? description_JP : description"
            :github="github"
            :webgl="webgl"
            :standalone="standalone"
          />
          <GameCard
            :name="$t('game.more.title')"
            :description="$t('game.more.description')"
            image="/images/more.png"
          >
            <GlobalButton
              :link="{
                to: INTERNAL_URL.CONTACT,
              }"
              :icon="h(IconEmail, { class: 'button-icon' })"
            >
              {{ $t("contact.title") }}
            </GlobalButton>
          </GameCard>
        </div>
      </div>
    </section>

    <section class="content-wrapper background-gray">
      <div class="content-container parameter-wrapper">
        <h2>{{ $t('game.parameter.title') }}</h2>
        <p class="description">
          {{ $t('game.parameter.description') }}
        </p>
        <div class="adjustment">
          <h3>{{ $t('game.parameter.adjustment.title') }}</h3>
          <p>{{ $t('game.parameter.adjustment.description') }}</p>
          <NuxtImg
            sizes="100vw sm:50vw"
            src="/images/input.png"
            loading="lazy"
            class="image"
          />
        </div>
        <div class="retrieval">
          <h3>{{ $t('game.parameter.retrieval.title') }}</h3>
          <p>{{ $t('game.parameter.retrieval.description') }}</p>
          <NuxtImg
            sizes="100vw sm:50vw"
            src="/images/output.png"
            loading="lazy"
            class="image"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.game-wrapper {
  > .title {
    margin-bottom: 32px;
  }

  > .description {
    margin-bottom: 32px;
  }

  > .list {
    display: grid;
    gap: 40px;

    @media screen and (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

.parameter-wrapper {
  > .description {
    margin-bottom: 32px;
  }

  > .adjustment {
    > .image {
      margin: 32px auto;
    }
  }

  > .retrieval {
    > .image {
      margin: 32px auto;
    }
  }
}
</style>
