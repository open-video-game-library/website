<script lang="ts" setup>
const datas = defineProps({
  name: { type: String },
  image: { type: String },
  sub: { type: String },
  description: { type: String },
  link: { type: String },
  tags: { type: String },
  articleLink: { type: String },
});
</script>

<template>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        color="secondary"
        :elevation="isHovering ? 8 : 2"
        v-bind="props"
        style="height: 100%;"
      >
        <a
          :href="datas.link"
          target="_blank"
          rel="noopener noreferrer"
          class="full-link"
        />
        <NuxtImg
          :src="datas.image"
          height="200"
          fit="cover"
        />
        <v-card-title>{{ datas.name }}</v-card-title>
        <v-card-subtitle v-if="datas.sub">
          {{ datas.sub }}
        </v-card-subtitle>
        <v-card-text v-if="datas.description">
          {{ datas.description }}
        </v-card-text>
        <v-card-actions v-if="datas.tags || datas.articleLink">
          <v-spacer />
          <NuxtIcon name="icons:document" />
          <v-btn
            v-if="!datas.tags && datas.articleLink"
            :href="datas.articleLink"
            style="z-index: 100;"
          />
          <v-btn
            v-for="tag in datas.tags?.split(',')"
            :key="tag"
            variant="plain"
            color="primary"
          >
            #{{ tag }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </div>
</template>

<style scoped>
</style>
