<script setup>
import { browserGames } from '@/assets/json/extool.json';
</script>

<template>
  <div>
    <section class="content-wrapper">
      <div class="content-container">
        <v-container>
          <!-- <h2>ブラウザで遊べるゲーム</h2> -->
          <h2>Browser Games</h2>
          <v-row>
            <v-col
              v-for="game in browserGames"
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
