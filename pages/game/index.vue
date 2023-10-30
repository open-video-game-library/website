<script setup>
import { mdiGithub, mdiController, mdiFilePdfBox } from "@mdi/js";
import games from '~/assets/json/game.json';

/** @type {String} コンタクトへのリンク画像の参照URL */
const moreImg = new URL("../../assets/image/more.png", import.meta.url).href;

/** @type {String} パラメータ入力の説明画像の参照URL */
const inputImg = new URL("../../assets/image/input.png", import.meta.url).href;

/** @type {String} パラメータ出力の説明画像の参照URL */
const outputImg = new URL("../../assets/image/output.png", import.meta.url)
  .href;
</script>

<template>
  <div>
    <section class="content-wrapper">
      <div class="content-container">
        <v-container>
          <!-- <h2>オープンビデオゲーム一覧</h2> -->
          <h2>Open Video Games</h2>
          <!-- <aside>
            オープンビデオゲームは<strong>MITライセンス</strong>として公開しております。
            詳しくは<a href="https://github.com/open-video-game-library"
              >GitHub</a
            >をご覧ください。
            各オープンビデオゲームの設計・開発のため、サーベイした論文は<NuxtLink
              to="/game/survey"
              >こちら</NuxtLink
            >をご覧ください。
          </aside> -->
          <aside>
            Open Video Game is released under the <strong>MIT License</strong>.
            Please see
            <a href="https://github.com/open-video-game-library">GitHub</a>
            for more information. For the design and development of each open
            video game, please click
            <NuxtLink to="/game/survey">here</NuxtLink> to see the surveyed
            papers.
          </aside>
          <v-row>
            <v-col v-for="game in games" :key="game.name" cols="12" sm="6">
              <GameCard
                :name="game.name"
                :image="game.image"
                :description="game.description"
                :github="game.github"
                :webgl="game.webgl"
                :standalone="game.standalone"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-hover v-slot="{ isHovering, props }">
                <v-card :elevation="isHovering ? 8 : 2" v-bind="props">
                  <NuxtLink to="/contact" class="full-link"></NuxtLink>
                  <v-img :src="moreImg" height="320" cover />
                  <v-row v-if="isHovering" class="details" align="center">
                    <v-col>
                      <!-- <v-card-text
                        >その他、研究利用したいジャンルのビデオゲームがありましたら、ぜひご連絡ください。</v-card-text
                      > -->
                      <v-card-text
                        >If you have other video games in your genre that you
                        would like to research and use, please contact
                        us.</v-card-text
                      >
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
          <!-- <h2>パラメータの調整・取得</h2> -->
          <h2>Parameter Adjustment and Retrieval</h2>
          <!-- <aside>
            オープンビデオゲームでは、コードを書くことなくパラメータを調整・取得することができます。
          </aside> -->
          <aside>
            Open video games allow you to adjust and retrieve parameters without
            writing code.
          </aside>
          <!-- <h3>パラメータの調整</h3> -->
          <h3>Adjustment</h3>
          <!-- <aside>
            パラメータ調整によって、実験環境などの都合に合わせてゲームの難易度や仕様を手軽に調整することができます。数値調整だけでなく、画像差し替えによるビジュアルの調整も可能です。
          </aside> -->
          <aside>
            Parameter adjustment allows for easy adjustment of game difficulty
            and specifications to suit the experimental environment and other
            circumstances. In addition to numerical adjustments, visual
            adjustments can also be made by replacing images.
          </aside>
          <v-img class="mx-auto" :src="inputImg" />
          <!-- <h3>パラメータの取得</h3> -->
          <h3>Retrieval</h3>
          <!-- <aside>
            観察だけでは把握しきれない、ゲームの内部データを取得することができます。ゲーム体験やコントローラデバイスの評価分析に活用できます。
          </aside> -->
          <aside>
            It is possible to obtain internal game data that cannot be
            ascertained by observation alone. It can be used for evaluation and
            analysis of game experience and controller devices.
          </aside>
          <v-img class="mx-auto" :src="outputImg" />
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
