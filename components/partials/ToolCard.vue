<script setup lang="ts">
import GlobalLink from '@/components/global/GlobalLink.vue';
import IconDocument from '@/components/icon/IconDocument.vue';

type Props = {
  name: string;
  image?: string;
  description: string;
  link: string;
  articleLink?: string;
};

const { name, image = '', description, link, articleLink = '' } = defineProps<Props>();
</script>

<template>
  <GlobalLink :to="link" :is-underlined-on-hover="false">
    <div class="tool-card">
      <NuxtImg
        :src="image"
        height="160px"
      />
      <div class="details">
        <h4 class="title">
          {{ name }}
        </h4>
        <p class="description">
          {{ description }}
        </p>
        <div v-if="articleLink" class="article">
          <GlobalLink :to="articleLink" :is-underlined-on-hover="false">
            <IconDocument fill="#0e0c0d" />
          </GlobalLink>
        </div>
      </div>
    </div>
  </GlobalLink>
</template>

<style scoped lang="scss">
.tool-card {
  padding: 16px;
  display: grid;
  color: #0e0c0d;
  gap: 32px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 4px;
  transition: box-shadow 0.4s 0s ease;

  > .details {
    > .title {
      margin-bottom: 16px;
    }

    > .description {
      font-size: 14px;
    }
  }

  &:hover {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3);
  }

  @media screen and (min-width: 640px) {
    grid-template-columns: 280px 1fr;
  }
}
</style>
