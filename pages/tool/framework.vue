<script setup>
import { frameworks } from '@/assets/json/extool.json';
</script>

<template>
  <div>
    <section class="content-wrapper">
      <div class="content-container">
        <v-container>
          <!-- <h2>開発フレームワーク</h2> -->
          <h2>Development Frameworks</h2>
          <v-row>
            <v-col
              v-for="framework in frameworks"
              :key="framework.name"
              cols="12"
              sm="4"
            >
              <ToolMiniCard
                :name="framework.name"
                :image="framework.image"
                :description="framework.description"
                :link="framework.link"
                :article-link="framework.articleLink"
                style="height: 100%"
              />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>
  </div>
</template>
