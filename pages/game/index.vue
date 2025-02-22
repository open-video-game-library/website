<script setup lang="ts">
import GameCarousel from '@/components/partials/GameCarousel.vue';
import GlobalLink from '@/components/global/GlobalLink.vue';
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
            <a href="https://github.com/open-video-game-library">{{ $t("game.details.gitHub") }}</a>
          </template>
          <template #survey>
            <GlobalLink to="/game/survey">
              {{ $t("game.details.survey") }}
            </GlobalLink>
          </template>
        </I18nT>
        <div>
          <GameCarousel />
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
