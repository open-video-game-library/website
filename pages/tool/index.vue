<script setup lang="ts">
import { internalTools, externalTools, pickedTools } from '@/assets/json/tool.json';
import ToolCard from '@/components/partials/ToolCard.vue';
import ToolMiniCard from '@/components/partials/ToolMiniCard.vue';
import GlobalButton from '@/components/global/GlobalButton.vue';
import { ID_NAME, INTERNAL_URL } from '@/constants';

/** オープンソースゲームのデータ */
const openSourceGames = pickedTools.filter(tool => tool.category == 'opensourcegame');
/** ブラウザゲームのデータ */
const browserGames = pickedTools.filter(tool => tool.category == 'browsergame');
/** 開発フレームワークのデータ */
const frameworks = pickedTools.filter(tool => tool.category == 'framework');
/** アセットのデータ */
const assets = pickedTools.filter(tool => tool.category == 'asset');
</script>

<template>
  <main>
    <section :id="ID_NAME.TOOL" class="content-wrapper">
      <div class="content-container">
        <h2>{{ $t('tool.internal.title') }}</h2>
        <p>{{ $t('tool.internal.description') }}</p>
        <div class="tool-cards">
          <ToolCard
            v-for="{ name, image, description, link } in internalTools"
            :key="name"
            :name="name"
            :image="image"
            :description="description"
            :link="link"
          />
        </div>
      </div>
    </section>

    <section :id="ID_NAME.EXTOOL" class="content-wrapper background-gray">
      <div class="content-container">
        <h2>{{ $t('tool.external.title') }}</h2>
        <p>{{ $t('tool.external.description') }}</p>
        <div class="tool-cards">
          <ToolCard
            v-for="{ name, image, description, link, articleLink } in externalTools"
            :key="name"
            :name="name"
            :image="image"
            :description="description"
            :link="link"
            :article-link="articleLink"
          />
        </div>

        <div class="extool-wrapper">
          <h3>{{ $t('tool.external.openSourceGame') }}</h3>
          <div class="cards">
            <ToolMiniCard
              v-for="{ name, image, description, link, tags } in openSourceGames"
              :key="name"
              :name="name"
              :image="image"
              :description="description"
              :link="link"
              :tags="tags"
            />
          </div>
          <div class="button">
            <GlobalButton :link="{ to: INTERNAL_URL.TOOL_OPENSOURCEGAME }">
              {{ $t('tool.seeMore') }}
            </GlobalButton>
          </div>
        </div>

        <div class="extool-wrapper">
          <h3>{{ $t('tool.external.browserGame') }}</h3>
          <div class="cards">
            <ToolMiniCard
              v-for="{ name, image, description, link, tags } in browserGames"
              :key="name"
              :name="name"
              :image="image"
              :description="description"
              :link="link"
              :tags="tags"
            />
          </div>
          <div class="button">
            <GlobalButton :link="{ to: INTERNAL_URL.TOOL_BROWSERGAME }">
              {{ $t('tool.seeMore') }}
            </GlobalButton>
          </div>
        </div>

        <div class="extool-wrapper">
          <h3>{{ $t('tool.external.developmentFramework') }}</h3>
          <div class="cards">
            <ToolMiniCard
              v-for="{ name, image, description, link, tags } in frameworks"
              :key="name"
              :name="name"
              :image="image"
              :description="description"
              :link="link"
              :tags="tags"
            />
          </div>
          <div class="button">
            <GlobalButton :link="{ to: INTERNAL_URL.TOOL_FRAMEWORK }">
              {{ $t('tool.seeMore') }}
            </GlobalButton>
          </div>
        </div>

        <div class="extool-wrapper">
          <h3>{{ $t('tool.external.asset') }}</h3>
          <div class="cards">
            <ToolMiniCard
              v-for="{ name, image, description, link, tags } in assets"
              :key="name"
              :name="name"
              :image="image"
              :description="description"
              :link="link"
              :tags="tags"
            />
          </div>
          <div class="button">
            <GlobalButton :link="{ to: INTERNAL_URL.TOOL_ASSET }">
              {{ $t('tool.seeMore') }}
            </GlobalButton>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.tool-cards {
  display: grid;
  gap: 16px;
  margin-top: 16px;
}

.extool-wrapper {
  margin-top: 64px;

  > .cards {
    display: grid;
    gap: 16px;

    @media screen and (min-width: 640px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  > .button {
    display: flex;
    place-content: center;
    margin-top: 32px;
  }
}
</style>
