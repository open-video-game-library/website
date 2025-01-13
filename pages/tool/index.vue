<script setup>
import { internalTools, externalTools, pickedTools } from '@/assets/json/tool.json';

const openSourceGames = pickedTools.filter(tool => tool.category == 'opensourcegame');
const browserGames = pickedTools.filter(tool => tool.category == 'browsergame');
const frameworks = pickedTools.filter(tool => tool.category == 'framework');
const assets = pickedTools.filter(tool => tool.category == 'asset');
</script>

<template>
  <div>
    <section
      id="tool"
      class="content-wrapper"
    >
      <div class="content-container">
        <v-container>
          <h2>{{ $t('tool.internal.title') }}</h2>
          <aside>{{ $t('tool.internal.description') }}</aside>
          <v-row>
            <v-col
              v-for="tool in internalTools"
              :key="tool.name"
              cols="12"
            >
              <ToolCard
                :name="tool.name"
                :image="tool.image"
                :description="tool.description"
                :link="tool.link"
              />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <section
      id="extool"
      class="content-wrapper background-gray"
    >
      <div class="content-container">
        <v-container>
          <h2>{{ $t('tool.external.title') }}</h2>
          <aside>{{ $t('tool.external.description') }}</aside>
          <v-row>
            <v-col
              v-for="tool in externalTools"
              :key="tool.name"
              cols="12"
            >
              <ToolCard
                :name="tool.name"
                :image="tool.image"
                :description="tool.description"
                :link="tool.link"
                :article-link="tool.articleLink"
              />
            </v-col>
          </v-row>

          <h3>{{ $t('tool.external.openSourceGame') }}</h3>
          <v-row>
            <v-col
              v-for="game in openSourceGames"
              :key="game.name"
              cols="12"
              sm="4"
            >
              <ToolMiniCard
                :name="game.name"
                :image="game.image"
                :sub="game.description"
                :link="game.link"
                :tags="game.tags"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-spacer />
            <v-btn
              color="primary"
              class="my-8"
              to="/tool/opensourcegame"
            >
              {{ $t('tool.seeMore') }}
            </v-btn>
            <v-spacer />
          </v-row>

          <h3>{{ $t('tool.external.browserGame') }}</h3>
          <v-row>
            <v-col
              v-for="game in browserGames"
              :key="game.name"
              cols="12"
              sm="4"
            >
              <ToolMiniCard
                :name="game.name"
                :image="game.image"
                :sub="game.description"
                :link="game.link"
                :tags="game.tags"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-spacer />
            <v-btn
              color="primary"
              class="my-8"
              to="/tool/browsergame"
            >
              {{ $t('tool.seeMore') }}
            </v-btn>
            <v-spacer />
          </v-row>

          <h3>{{ $t('tool.external.developmentFramework') }}</h3>
          <v-row>
            <v-col
              v-for="framework in frameworks"
              :key="framework.name"
              cols="12"
              sm="4"
            >
              <ToolMiniCard
                :name="framework.name"
                :image="framework.image"
                :sub="framework.description"
                :link="framework.link"
                :tags="framework.tags"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-spacer />
            <v-btn
              color="primary"
              class="my-8"
              to="/tool/framework"
            >
              {{ $t('tool.seeMore') }}
            </v-btn>
            <v-spacer />
          </v-row>

          <h3>{{ $t('tool.external.asset') }}</h3>
          <v-row>
            <v-col
              v-for="asset in assets"
              :key="asset.name"
              cols="12"
              sm="4"
            >
              <ToolMiniCard
                :name="asset.name"
                :image="asset.image"
                :sub="asset.description"
                :link="asset.link"
                :tags="asset.tags"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-spacer />
            <v-btn
              color="primary"
              class="my-8"
              to="/tool/asset"
            >
              {{ $t('tool.seeMore') }}
            </v-btn>
            <v-spacer />
          </v-row>
        </v-container>
      </div>
    </section>
  </div>
</template>
