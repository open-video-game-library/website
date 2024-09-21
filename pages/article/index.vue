<script setup lang="ts">
import { type QueryBuilderParams } from '@nuxt/content/dist/runtime/types';
import logoX from '@/assets/image/logo_x.svg';

/** 記事のクエリの設定 */
const query: QueryBuilderParams = {
  path: '/articles',
  sort: [{ created_at: -1 }],
};
</script>

<template>
  <div>
    <section class="content-wrapper">
      <div class="content-container">
        <VContainer>
          <h2>{{ $t('article.title') }}</h2>
          <VRow
            align="center"
            justify="end"
            class="my-4 px-3"
          >
            <span>{{ $t('article.description') }}</span>
            <VBtn
              href="https://twitter.com/openvideogame"
              color="#0F1419"
              rounded="pill"
              class="ml-2 fill-white"
            >
              <VImg :src="logoX" width="16" />
            </VBtn>
          </VRow>

          <ContentList
            v-slot="{ list: articleList }"
            :query="query"
            path="/article"
          >
            <VRow>
              <VCol
                v-for="article in articleList"
                :key="article._path"
                cols="12"
              >
                <ArticleCard
                  :to="article._path"
                  :title="article.title"
                  :description="article.description"
                  :thumbnail="article.thumbnail"
                  :exlink="article.exlink"
                  :created-at="article.created_at"
                  :updated-at="article.updated_at"
                />
              </VCol>
            </VRow>
          </ContentList>
        </VContainer>
      </div>
    </section>
  </div>
</template>

<style scoped>
.fill-white {
  fill: white;
}
</style>
