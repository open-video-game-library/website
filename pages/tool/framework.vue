<script setup lang="ts">
import { frameworks } from '@/assets/json/extool.json';
import ToolMiniCard from '@/components/partials/ToolMiniCard.vue';
</script>

<template>
  <main>
    <section class="content-wrapper">
      <div class="content-container">
        <h1 class="tool-title">
          {{ $t("tool.framework.title") }}
        </h1>
        <div class="tool-cards">
          <ToolMiniCard
            v-for="{ name, image, description, link } in frameworks"
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
