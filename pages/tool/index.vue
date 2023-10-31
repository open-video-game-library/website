<script setup>
import { internalTools, externalTools, pickedTools } from '~/assets/json/tool.json';

const openSourceGames = pickedTools.filter(tool => tool.category == "opensourcegame");
const browserGames = pickedTools.filter(tool => tool.category == "browsergame");
const frameworks = pickedTools.filter(tool => tool.category == "framework");
const assets = pickedTools.filter(tool => tool.category == "asset");
</script>

<template>
  <div>
    <section class="content-wrapper" id="tool">
      <div class="content-container">
        <v-container>
          <!-- <h2>ツール</h2> -->
          <h2>Tools</h2>
          <!-- <aside>
            ゲーム研究の実験や評価に利用できるツールを開発し、提供しています。
          </aside> -->
          <aside>
            We develop and provide tools that can be used for experimentation
            and evaluation of game research.
          </aside>
          <v-row>
            <v-col v-for="tool in internalTools" cols="12" :key="tool.name">
              <ToolCard
                :name="tool.name"
                :image="tool.image"
                :description="tool.description"
                :link="tool.link"
              />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <section class="content-wrapper bg-gray" id="extool">
      <div class="content-container">
        <v-container>
          <!-- <h2>外部ツール</h2> -->
          <h2>External Tools</h2>
          <!-- <aside>
            他の研究者やゲーム開発者が提供している、評価・実験・開発に役立つツールやゲームも紹介します。
          </aside> -->
          <aside>
            Tools and games provided by other researchers and game developers
            that are useful for evaluation, experimentation, and development
            will also be presented.
          </aside>
          <v-row>
            <v-col v-for="tool in externalTools" cols="12" :key="tool.name">
              <ToolCard
                :name="tool.name"
                :image="tool.image"
                :description="tool.description"
                :link="tool.link"
                :articleLink="tool.articleLink"
              />
            </v-col>
          </v-row>

          <!-- <h3>オープンソースゲーム</h3> -->
          <h3>Open Source Games</h3>
          <v-row>
            <v-col
              v-for="game in openSourceGames"
              cols="12"
              sm="4"
              :key="game.name"
            >
              <ToolMiniCard
                :name="game.name"
                :image="game.image"
                :sub="game.description"
                :link="game.link"
                :tags="game.tags"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <!-- <v-btn color="primary" class="my-8" to="/tool/opensourcegame"
              >もっと見る→</v-btn
            > -->
            <v-btn color="primary" class="my-8" to="/tool/opensourcegame"
              >See more→</v-btn
            >
            <v-spacer></v-spacer>
          </v-row>

          <!-- <h3>ブラウザで遊べるゲーム</h3> -->
          <h3>Browser Games</h3>
          <v-row>
            <v-col
              v-for="game in browserGames"
              cols="12"
              sm="4"
              :key="game.name"
            >
              <ToolMiniCard
                :name="game.name"
                :image="game.image"
                :sub="game.description"
                :link="game.link"
                :tags="game.tags"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <!-- <v-btn color="primary" class="my-8" to="/tool/browsergame"
              >もっと見る→</v-btn
            > -->
            <v-btn color="primary" class="my-8" to="/tool/browsergame"
              >See more→</v-btn
            >
            <v-spacer></v-spacer>
          </v-row>

          <!-- <h3>開発フレームワーク</h3> -->
          <h3>Development Frameworks</h3>
          <v-row>
            <v-col
              v-for="framework in frameworks"
              cols="12"
              sm="4"
              :key="framework.name"
            >
              <ToolMiniCard
                :name="framework.name"
                :image="framework.image"
                :sub="framework.description"
                :link="framework.link"
                :tags="framework.tags"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <!-- <v-btn color="primary" class="my-8" to="/tool/framework"
              >もっと見る→</v-btn
            > -->
            <v-btn color="primary" class="my-8" to="/tool/framework"
              >see more→</v-btn
            >
            <v-spacer></v-spacer>
          </v-row>

          <!-- <h3>アセット</h3> -->
          <h3>Asset</h3>
          <v-row>
            <v-col v-for="asset in assets" cols="12" sm="4" :key="asset.name">
              <ToolMiniCard
                :name="asset.name"
                :image="asset.image"
                :sub="asset.description"
                :link="asset.link"
                :tags="asset.tags"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <!-- <v-btn color="primary" class="my-8" to="/tool/asset"
              >もっと見る→</v-btn
            > -->
            <v-btn color="primary" class="my-8" to="/tool/asset"
              >see more→</v-btn
            >
            <v-spacer></v-spacer>
          </v-row>
        </v-container>
      </div>
    </section>
  </div>
</template>
