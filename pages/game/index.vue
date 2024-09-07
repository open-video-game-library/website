<script setup>
import { games } from '~/assets/json/game.json';

/** @type {String} コンタクトへのリンク画像の参照URL */
const moreImg = new URL('../../assets/image/more.png', import.meta.url).href;

/** @type {String} パラメータ入力の説明画像の参照URL */
const inputImg = new URL('../../assets/image/input.png', import.meta.url).href;

/** @type {String} パラメータ出力の説明画像の参照URL */
const outputImg = new URL('../../assets/image/output.png', import.meta.url)
  .href;
</script>

<template>
  <div>
    <section class="content-wrapper">
      <div class="content-container">
        <v-container>
          <h2>{{ $t('game.title') }}</h2>
          <I18nT keypath="game.description" tag="aside" for="tos">
            <template #license>
              <strong>{{ $t("game.details.license") }}</strong>
            </template>
            <template #gitHub>
              <a href="https://github.com/open-video-game-library">{{ $t("game.details.gitHub") }}</a>
            </template>
            <template #survey>
              <NuxtLink to="/game/survey">
                {{ $t("game.details.survey") }}
              </NuxtLink>
            </template>
          </I18nT>
          <v-row>
            <v-col
              v-for="game in games"
              :key="game.name"
              cols="12"
              sm="6"
            >
              <GameCard
                :name="game.name"
                :image="game.image"
                :description="game.description"
                :github="game.github"
                :webgl="game.webgl"
                :standalone="game.standalone"
              />
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-hover v-slot="{ isHovering, props }">
                <v-card
                  :elevation="isHovering ? 8 : 2"
                  v-bind="props"
                >
                  <NuxtLink
                    to="/contact"
                    class="full-link"
                  />
                  <v-img
                    :src="moreImg"
                    height="320"
                    cover
                  />
                  <v-row
                    v-if="isHovering"
                    class="details"
                    align="center"
                  >
                    <v-col>
                      <!-- <v-card-text
                        >その他、研究利用したいジャンルのビデオゲームがありましたら、ぜひご連絡ください。</v-card-text
                      > -->
                      <v-card-text>
                        If you have other video games in your genre that you
                        would like to research and use, please contact
                        us.
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <section class="content-wrapper bg-gray">
      <div class="content-container">
        <v-container>
          <h2>{{ $t('game.parameter.title') }}</h2>
          <aside>{{ $t('game.parameter.description') }}</aside>
          <h3>{{ $t('game.parameter.adjustment.title') }}</h3>
          <aside>{{ $t('game.parameter.adjustment.description') }}</aside>
          <v-img
            class="mx-auto"
            :src="inputImg"
          />
          <h3>{{ $t('game.parameter.retrieval.title') }}</h3>
          <aside>{{ $t('game.parameter.retrieval.description') }}</aside>
          <v-img
            class="mx-auto"
            :src="outputImg"
          />
        </v-container>
      </div>
    </section>
  </div>
</template>

<style scoped>
.details {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s;
  margin: auto;
}
</style>
