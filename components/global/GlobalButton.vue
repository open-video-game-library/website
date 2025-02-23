<script setup lang="ts">
import { type VNode } from '#imports';
import GlobalLink from '@/components/global/GlobalLink.vue';

type Props = {
  link: InstanceType<typeof GlobalLink>;
  color?: 'purple' | 'black';
  icon?: VNode;
};

const { link, color = 'purple', icon } = defineProps<Props>();
</script>

<template>
  <GlobalLink v-bind="link" :is-underlined-on-hover="false">
    <div class="global-link-button" :class="color === 'purple' ? '-purple' : '-black'">
      <Component
        :is="icon"
        v-if="icon"
        class="icon"
        fill="white"
      />
      <span class="text"><slot /></span>
    </div>
  </GlobalLink>
</template>

<style scoped lang="scss">
.global-link-button {
  display: flex;
  position: relative;
  align-items: center;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  justify-content: center;

  &.-purple {
    background-color: #5e1ce2;
  }

  &.-black {
    background-color: #0e0c0d;
  }

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    transition: background-color 0.4s 0s ease;
    border-radius: 4px;
  }

  &:hover:after {
    background-color: rgba(255, 255, 255, 0.2);
  }

  > .icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  > .text {
    color: white;
  }
}
</style>
