<script setup lang="ts">
import { h, useI18n } from '#imports';
import GlobalButton from '@/components/global/GlobalButton.vue';
import ArticleCard from '@/components/partials/ArticleCard.vue';
import IconX from '@/components/icon/IconX.vue';

const { locale } = useI18n();
</script>

<template>
  <main>
    <section class="content-wrapper">
      <div class="content-container article-wrapper">
        <h1 class="title">
          {{ $t('article.title') }}
        </h1>
        <div class="description">
          <span>{{ $t('article.description') }}</span>
          <GlobalButton
            :link="{ to: 'https://twitter.com/openvideogame' }"
            color="black"
            :icon="h(IconX, { class: 'button-icon' })"
          >
            {{ $t('article.x') }}
          </GlobalButton>
        </div>

        <ContentList
          v-slot="{ list: articleList }"
          :query="{
            path: `/article/${locale}`,
            sort: [{ created_at: -1 }],
          }"
        >
          <div class="article-list">
            <ArticleCard
              v-for="{ _path, title, description, thumbnail, exlink, created_at, updated_at } in articleList"
              :key="title"
              :to="_path?.replace('/ja/', '/').replace('/en/', '/')"
              :title="title"
              :description="description"
              :thumbnail="thumbnail"
              :exlink="exlink"
              :created-at="created_at"
              :updated-at="updated_at"
            />
          </div>
        </ContentList>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.article-wrapper {
  > .title {
    margin-bottom: 32px;
  }

  > .description {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    gap: 8px;
    margin-bottom: 32px;

    @media screen and (min-width: 640px) {
      flex-direction: row;
      align-items: center;
    }
  }
}

.article-list {
  display: grid;
  gap: 16px;
}
</style>
