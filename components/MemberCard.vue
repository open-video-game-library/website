<script setup lang="ts">
type Props = {
  /** 名前（日本語） */
  name: string;
  /** 名前（英語） */
  engname: string;
  /** アイコン画像 */
  icon: string;
  /** 詳細 */
  description?: string;
  /** 所属 */
  affiliation: string;
  /** ホームページのリンク */
  hp: string;
  /** X（旧Twitter）のユーザ名 */
  twitter: string;
};

const { name, engname, icon, affiliation, hp, twitter } = defineProps<Props>();
</script>

<template>
  <div class="member-card">
    <NuxtImg
      :src="icon"
      fit="cover"
      loading="lazy"
      class="image"
    />
    <div class="detail">
      <p class="title">{{ name }}</p>
      <p class="subtitle">{{ engname }} / {{ affiliation }}</p>
      <div class="buttons">
        <GlobalLink v-if="hp" :to="hp">
          <div class="sns-icon">
            <IconHome class="home" fill="#0e0c0d" />
          </div>
        </GlobalLink>
        <GlobalLink v-if="twitter" :to="`https://x.com/${twitter}`">
          <div class="sns-icon">
            <IconX class="x" fill="#0e0c0d" />
          </div>
        </GlobalLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.member-card {
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  > .image {
    width: 100%;
    height: 240px;
    object-fit: cover;

    @media screen and (min-width: 960px) {
      height: 320px;
    }
  }

  > .detail {
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 8px 0;

    > .title {
      font-size: 20px;
    }

    > .subtitle {
      font-size: 14px;
      opacity: 0.5;
    }

    > .buttons {
      display: flex;
      justify-content: end;
      gap: 0 16px;
    }
  }
}

.sns-icon {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  transition: background-color 0.4s 0s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  > .home {
    width: 24px;
    height: 24px;
  }

  > .x {
    width: 16px;
    height: 16px;
  }
}
</style>
