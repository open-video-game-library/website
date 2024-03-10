<script lang="ts" setup>
/** Material Design Iconのインポート */
import { mdiTwitter, mdiFileCode } from "@mdi/js";

/** nuxt/contentのインポート */
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

/** 記事のクエルの設定 */
const query: QueryBuilderParams = {
  path: "/articles",
  sort: [{ created_at: -1 }],
};
</script>

<template>
  <div>
    <section class="content-wrapper">
      <div class="content-container">
        <v-container>
          <!-- <h2>記事一覧</h2> -->
          <h2>Articles</h2>
          <v-row align="center" justify="end" class="my-4 px-3">
            <!-- <span>各SNSでもゲーム研究・開発に関する情報を発信しています！</span> -->
            <span>
              Get latest information from
            </span>
            <v-btn
              href="https://twitter.com/openvideogame"
              :prependIcon="mdiTwitter"
              color="#1DA1F2"
              class="ml-2 text-white"
              >X(Twitter)</v-btn
            >
          </v-row>

          <ContentList :query="query" path="/article" v-slot="{ list }">
            <v-row>
              <v-col v-for="article in list" :key="article._path" cols="12">
                <ArticleCard
                  :path="article._path"
                  :title="article.title"
                  :description="article.description"
                  :thumbnail="article.thumbnail"
                  :exlink="article.exlink"
                  :created_at="article.created_at"
                  :updated_at="article.updated_at"
                />
              </v-col>
            </v-row>
          </ContentList>
        </v-container>
      </div>
    </section>
  </div>
</template>

<style scoped>
.text-white {
  color: white;
}
</style>
