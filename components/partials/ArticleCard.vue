<script setup lang="ts">
import GlobalLink from '@/components/global/GlobalLink.vue';
import IconTab from '@/components/icon/IconTab.vue';

type Props = {
  to?: string;
  title?: string;
  description: string;
  thumbnail: string;
  exlink?: string;
  createdAt?: string;
  updatedAt?: string;
};

const { to, title, description, thumbnail, exlink, createdAt, updatedAt } = defineProps<Props>();
</script>

<template>
  <Component
    :is="(exlink || to) ? GlobalLink : 'div'"
    :to="exlink || to"
    :target="exlink && 'blank'"
    :is-underlined-on-hover="false"
  >
    <div class="article-card background-gray">
      <div class="image">
        <NuxtImg
          :src="thumbnail"
          height="160px"
        />
      </div>
      <div class="details">
        <p class="title">
          {{ title }}
        </p>
        <time v-if="updatedAt" class="date">
          {{ updatedAt }}
        </time>
        <time v-else class="date">
          {{ createdAt }}
        </time>
        <p class="description">
          {{ description }}
        </p>
        <div v-if="exlink" class="exlink">
          <p>{{ exlink.split("/")[2] }}</p>
          <IconTab class="icon" fill="gray" />
        </div>
      </div>
    </div>
  </Component>
</template>

<style scoped lang="scss">
.article-card {
  display: grid;
  gap: 16px;
  color: #0e0c0d;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 4px;
  overflow: hidden;
  padding: 16px;
  transition: box-shadow 0.4s 0s ease;

  &:hover {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3);
  }

  > .image {
    display: flex;
    place-content: center;
  }

  > .details {
    display: flex;
    flex-direction: column;
    gap: 8px;

    > .title {
      font-weight: bold;
    }

    > .description {
      font-size: 14px;
      flex-grow: 1;
    }

    > .date {
      color: gray;
      font-size: 14px;
    }

    > .exlink {
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 8px;
    }

    > .exlink > .icon {
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (min-width: 640px) {
    padding: 32px;
    gap: 32px;
    grid-template-columns: 280px 1fr;
  }
}
</style>
