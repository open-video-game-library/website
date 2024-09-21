<script setup>
import { opensSourceGames } from '@/assets/json/extool.json';
</script>

<template>
  <div>
    <section class="content-wrapper">
      <div class="content-container">
        <v-container>
          <!-- <h2>オープンソースゲーム</h2> -->
          <h2>Open Source Games</h2>

          <!-- <h3>スポーツ</h3> -->
          <h3>Sports</h3>
          <v-row>
            <v-col
              v-for="game in opensSourceGames.sportsGames"
              :key="game.name"
              cols="12"
              sm="4"
            >
              <ToolMiniCard
                :name="game.name"
                :image="game.image"
                :description="game.description"
                :link="game.link"
                :article-link="game.articleLink"
                style="height: 100%"
              />
            </v-col>
          </v-row>

          <!-- <h3>シューティング</h3> -->
          <h3>Shootings</h3>
          <v-row>
            <v-col
              v-for="game in opensSourceGames.shootingGames"
              :key="game.name"
              cols="12"
              sm="4"
            >
              <ToolMiniCard
                :name="game.name"
                :image="game.image"
                :description="game.description"
                :link="game.link"
                :article-link="game.articleLink"
                style="height: 100%"
              />
            </v-col>
          </v-row>

          <!-- <h3>プラットフォーム</h3> -->
          <h3>Platforms</h3>
          <v-row>
            <v-col
              v-for="game in opensSourceGames.platformGames"
              :key="game.name"
              cols="12"
              sm="4"
            >
              <ToolMiniCard
                :name="game.name"
                :image="game.image"
                :description="game.description"
                :link="game.link"
                :article-link="game.articleLink"
                style="height: 100%"
              />
            </v-col>
          </v-row>

          <!-- <h3>レーシング / ドライビング</h3> -->
          <h3>Racings / Drivings</h3>
          <v-row>
            <v-col
              v-for="game in opensSourceGames.drivingGames"
              :key="game.name"
              cols="12"
              sm="4"
            >
              <ToolMiniCard
                :name="game.name"
                :image="game.image"
                :description="game.description"
                :link="game.link"
                :article-link="game.articleLink"
                style="height: 100%"
              />
            </v-col>
          </v-row>

          <!-- <h3>格闘</h3> -->
          <h3>Fightings</h3>
          <v-row>
            <v-col
              v-for="game in opensSourceGames.fightingGames"
              :key="game.name"
              cols="12"
              sm="4"
            >
              <ToolMiniCard
                :name="game.name"
                :image="game.image"
                :description="game.description"
                :link="game.link"
                :article-link="game.articleLink"
                style="height: 100%"
              />
            </v-col>
          </v-row>

          <!-- <h3>パズル / ボードゲーム</h3> -->
          <h3>Puzzles</h3>
          <v-row>
            <v-col
              v-for="game in opensSourceGames.puzzleGames"
              :key="game.name"
              cols="12"
              sm="4"
            >
              <ToolMiniCard
                :name="game.name"
                :image="game.image"
                :description="game.description"
                :link="game.link"
                :article-link="game.articleLink"
                style="height: 100%"
              />
            </v-col>
          </v-row>

          <!-- <h3>その他</h3> -->
          <h3>Others</h3>
          <v-row>
            <v-col
              v-for="game in opensSourceGames.otherGames"
              :key="game.name"
              cols="12"
              sm="4"
            >
              <ToolMiniCard
                :name="game.name"
                :image="game.image"
                :description="game.description"
                :link="game.link"
                :article-link="game.articleLink"
                style="height: 100%"
              />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>
  </div>
</template>
