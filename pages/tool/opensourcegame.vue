<script setup lang="ts">
import { opensSourceGames } from '@/assets/json/extool.json';
import ToolMiniCard from '@/components/partials/ToolMiniCard.vue';

const {
  sportsGames,
  shootingGames,
  platformGames,
  drivingGames,
  fightingGames,
  puzzleGames,
  otherGames,
} = opensSourceGames;
</script>

<template>
  <main>
    <section class="content-wrapper">
      <div class="content-container">
        <h1 class="tool-title">
          {{ $t("tool.opensourcegame.title") }}
        </h1>

        <h2>{{ $t("tool.opensourcegame.sports") }}</h2>
        <div class="tool-cards">
          <ToolMiniCard
            v-for="{ name, image, description, link } in sportsGames"
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
        <h2>{{ $t("tool.opensourcegame.shooting") }}</h2>
        <div class="tool-cards">
          <ToolMiniCard
            v-for="{ name, image, description, link } in shootingGames"
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
        <h2>{{ $t("tool.opensourcegame.platform") }}</h2>
        <div class="tool-cards">
          <ToolMiniCard
            v-for="{ name, image, description, link } in platformGames"
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
        <h2>{{ $t("tool.opensourcegame.driving") }}</h2>
        <div class="tool-cards">
          <ToolMiniCard
            v-for="{ name, image, description, link } in drivingGames"
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
        <h2>{{ $t("tool.opensourcegame.fighting") }}</h2>
        <div class="tool-cards">
          <ToolMiniCard
            v-for="{ name, image, description, link } in fightingGames"
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
        <h2>{{ $t("tool.opensourcegame.puzzle") }}</h2>
        <div class="tool-cards">
          <ToolMiniCard
            v-for="{ name, image, description, link } in puzzleGames"
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
        <h2>{{ $t("tool.opensourcegame.other") }}</h2>
        <div class="tool-cards">
          <ToolMiniCard
            v-for="{ name, image, description, link } in otherGames"
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
