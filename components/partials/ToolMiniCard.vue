<script setup lang="ts">
import GlobalLink from '@/components/global/GlobalLink.vue';
import IconDocument from '@/components/icon/IconDocument.vue';

type Props = {
  name: string;
  image: string;
  link: string;
  sub?: string;
  description?: string;
  tags?: string;
  articleLink?: string;
};

const { name, image, link, sub, description, tags = '', articleLink = '' } = defineProps<Props>();
</script>

<template>
  <GlobalLink
    class="global-link"
    :to="link"
    target="blank"
    :is-underlined-on-hover="false"
  >
    <div class="tool-mini-card">
      <NuxtImg
        :src="image"
        height="200"
        class="image"
      />
      <div class="details">
        <h4>{{ name }}</h4>
        <p v-if="sub">
          {{ sub }}
        </p>
        <p v-if="description" class="description">
          {{ description }}
        </p>
        <div v-if="tags || articleLink">
          <GlobalLink v-if="articleLink" :to="articleLink" :is-underlined-on-hover="false">
            <IconDocument fill="#0e0c0d" />
          </GlobalLink>
          <div v-if="tags" class="tool-tags">
            <span v-for="tag in tags.split(',')" :key="tag">#{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </GlobalLink>
</template>

<style scoped lang="scss">
.global-link {
  display: flex;
}

.tool-mini-card {
  color: #0e0c0d;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 4px;
  overflow: hidden;
  transition: box-shadow 0.4s 0s ease;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  > .image {
    height: 200px;
    width: 100%;
    margin: 0 auto;
    object-fit: cover;
    object-position: center;
  }

  > .details {
    padding: 16px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 16px;

    > .description {
      font-size: 14px;
      flex-grow: 1;
    }
  }

  &:hover {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3);
  }
}

.tool-tags {
  color: #5e1ce2;
  display: flex;
  gap: 8px;
  justify-content: end;
}
</style>
