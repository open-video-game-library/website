<script setup lang="ts">
import { useError } from '#imports';
import GlobalButton from '@/components/global/GlobalButton.vue';
import { INTERNAL_URL } from '@/constants';

const error = useError();
console.error(error);

const ERROR_CODE = {
  NOT_FOUND: 404,
};
</script>

<template>
  <NuxtLayout>
    <section class="content-wrapper">
      <div class="content-container">
        <h1>
          <span v-if="error.statusCode === ERROR_CODE.NOT_FOUND">{{ $t('error.notFound') }}</span>
          <span v-else>{{ $t('error.common') }}</span>
        </h1>
        <div class="back-button">
          <GlobalButton :link="{ to: INTERNAL_URL.ABOUT }">
            {{ $t('error.back') }}
          </GlobalButton>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.back-button {
  display: flex;
  place-content: center;
  margin-top: 32px;
}
</style>
