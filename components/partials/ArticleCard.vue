<script setup lang="ts">
type Props = {
  to?: string;
  title?: string;
  description: string;
  thumbnail: string;
  exlink?: string;
  createdAt?: string;
  updatedAt?: string;
};
const datas = defineProps<Props>();
</script>

<template>
  <div>
    <VHover v-slot="{ isHovering, props }">
      <VCard
        color="secondary"
        :elevation="isHovering ? 8 : 2"
        v-bind="props"
      >
        <GlobalLink
          v-if="datas.to || datas.exlink"
          :to="datas.to || datas.exlink || 'div'"
          :tag="datas.exlink ? 'a' : 'NuxtLink'"
          class="full-link"
        />
        <VContainer>
          <VRow>
            <VCol
              cols="12"
              sm="4"
            >
              <VImg
                :src="datas.thumbnail"
                height="160px"
              />
            </VCol>
            <VCol
              cols="12"
              sm="8"
            >
              <VCardTitle>{{ title }}</VCardTitle>
              <VCardSubtitle v-if="datas.updatedAt">
                {{
                  datas.updatedAt
                }}
              </VCardSubtitle>
              <VCardSubtitle v-else>
                {{ datas.createdAt }}
              </VCardSubtitle>
              <VCardText>{{ datas.description }}</VCardText>
              <VCardActions v-if="datas.exlink">
                <VSpacer />
                <p>{{ datas.exlink.split("/")[2] }}</p>
                <NuxtIcon name="icons:tab" />
              </VCardActions>
            </VCol>
          </VRow>
        </VContainer>
      </VCard>
    </VHover>
  </div>
</template>
