<script setup lang="ts">
import { assets } from '@/assets/json/extool.json';
import ToolMiniCard from '@/components/partials/ToolMiniCard.vue';

const { models, sounds, graphics } = assets;
</script>

<template>
  <main>
    <section class="content-wrapper">
      <div class="content-container">
        <h1 class="tool-title">
          {{ $t("tool.asset.title") }}
        </h1>

        <h2>{{ $t("tool.asset.models") }}</h2>
        <div class="tool-cards">
          <ToolMiniCard
            v-for="{ name, image, description, link } in models"
            :key="name"
            :name="name"
            :image="image"
            :description="description"
            :link="link"
          />
        </div>
      </div>
    </section>

    <section class="content-wrapper background-gray">
      <div class="content-container">
        <h2>{{ $t("tool.asset.sounds") }}</h2>
        <div class="tool-cards">
          <ToolMiniCard
            v-for="{ name, image, description, link } in sounds"
            :key="name"
            :name="name"
            :image="image"
            :description="description"
            :link="link"
          />
        </div>
      </div>
    </section>

    <section class="content-wrapper">
      <div class="content-container">
        <h2>{{ $t("tool.asset.graphics") }}</h2>
        <div class="tool-cards">
          <ToolMiniCard
            v-for="{ name, image, description, link } in graphics"
            :key="name"
            :name="name"
            :image="image"
            :description="description"
            :link="link"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.tool-title {
  margin-bottom: 32px;
  font-size: 24px;
}

.tool-cards {
  display: grid;
  gap: 16px;

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
