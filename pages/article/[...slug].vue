<script setup lang="ts">
import { useI18n, useRoute } from '#imports';
import GlobalButton from '@/components/global/GlobalButton.vue';
import { INTERNAL_URL } from '@/constants';

const { params: { slug } } = useRoute();
const { locale } = useI18n();
</script>

<template>
  <div>
    <section class="content-wrapper">
      <div class="content-container">
        <article>
          <ContentDoc :path="`/article/${locale}/${slug[0]}`">
            <template #default="{ doc }">
              <div class="article-meta">
                <h1 class="title">
                  {{ doc.title }}
                </h1>
                <p class="date">
                  <span>{{ $t('article.createdAt') }} {{ doc.created_at }}</span>
                  <span v-if="doc.updated_at">{{ $t('article.updatedAt') }} {{ doc.updated_at }}</span>
                </p>
                <p class="description">
                  {{ doc.description }}
                </p>
                <div class="image">
                  <NuxtImg :src="doc.thumbnail" class="img" />
                </div>
              </div>
              <ContentRenderer :value="doc" />
            </template>
            <template #not-found>
              <h1>{{ $t('article.error') }}</h1>
            </template>
            <template #empty>
              <h1>{{ $t('article.error') }}</h1>
            </template>
          </ContentDoc>
        </article>
        <div class="back-button">
          <GlobalButton :link="{ to: INTERNAL_URL.ARTICLE }">
            {{ $t('article.back') }}
          </GlobalButton>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.article-meta {
  > .title {
    border-bottom: 1px #0e0c0d solid;
  }

  > .description {
    margin: 16px 0;
  }

  > .date {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 8px;
    color: gray;
  }

  > .image {
    display: flex;
    place-content: center;

    > .img {
      width: 100%;
    }
  }
}

.back-button {
  display: flex;
  place-content: center;
  margin-top: 32px;
}
</style>
