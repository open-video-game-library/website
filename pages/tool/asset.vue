<script setup>
import { assets } from '@/assets/json/extool.json';
</script>

<template>
  <div>
    <section class="content-wrapper">
      <div class="content-container">
        <v-container>
          <!-- <h2>3Dモデル</h2> -->
          <h2>3D models</h2>
          <v-row>
            <v-col
              v-for="model in assets.models"
              :key="model.name"
              cols="12"
              sm="4"
              xl="3"
            >
              <ToolMiniCard
                :name="model.name"
                :image="model.image"
                :description="model.description"
                :link="model.link"
                style="height: 100%"
              />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <section class="content-wrapper background-gray">
      <div class="content-container">
        <v-container>
          <h2>BGM / SE</h2>
          <v-row>
            <v-col
              v-for="sound in assets.sounds"
              :key="sound.name"
              cols="12"
              sm="4"
              xl="3"
            >
              <ToolMiniCard
                :name="sound.name"
                :image="sound.image"
                :description="sound.description"
                :link="sound.link"
                style="height: 100%"
              />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <section class="content-wrapper">
      <div class="content-container">
        <v-container>
          <!-- <h2>グラフィック / UI</h2> -->
          <h2>Graphics / UI</h2>
          <v-row>
            <v-col
              v-for="graphic in assets.graphics"
              :key="graphic.name"
              cols="12"
              sm="4"
            >
              <ToolMiniCard
                :name="graphic.name"
                :image="graphic.image"
                :description="graphic.description"
                :link="graphic.link"
                :article-link="graphic.articleLink"
                style="height: 100%"
              />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>
  </div>
</template>
