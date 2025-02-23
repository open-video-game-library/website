<script setup lang="ts">
import GlobalButton from '@/components/global/GlobalButton.vue';
import GlobalLink from '@/components/global/GlobalLink.vue';
import AboutFirstView from '@/components/partials/AboutFirstView.vue';
import MemberCard from '@/components/partials/MemberCard.vue';
import { members, publications } from '@/assets/json/about.json';
import { INTERNAL_URL } from '@/constants';

/**
 * 指定されたIDの論文をダウンロード（別タブでPDFファイルを表示）させる
 * @param {number} id 論文のID
 */
const download = (id: number) => {
  const generatedUrl = new URL(`../assets/pdf/${id}.pdf`, import.meta.url).href;
  if (generatedUrl.includes('undefined')) {
    alert('論文がアップロードされていません。\nお手数おかけしますが、左記の学会URLから論文をご覧ください。');
    return;
  }

  const a = document.createElement('a');
  a.href = generatedUrl;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.click();
  a.remove();
};
</script>

<template>
  <main>
    <AboutFirstView />

    <section id="feature" class="content-wrapper">
      <div class="content-container">
        <h2>{{ $t('about.features.title') }}</h2>
        <div class="features-wrapper">
          <div class="feature">
            <div class="image">
              <NuxtImg
                src="/images/feature1.png"
                height="120"
              />
            </div>
            <h4>{{ $t('about.features.feature1.title') }}</h4>
            <p class="description">
              {{ $t('about.features.feature1.description') }}
            </p>
            <div class="button">
              <GlobalButton
                :link="{
                  to: INTERNAL_URL.GAME,
                }"
              >
                {{ $t('about.features.feature1.link') }}
              </GlobalButton>
            </div>
          </div>
          <div class="feature">
            <div class="image">
              <NuxtImg
                src="/images/feature2.png"
                height="120"
              />
            </div>
            <h4>{{ $t('about.features.feature2.title') }}</h4>
            <p class="description">
              {{ $t('about.features.feature2.description') }}
            </p>
            <div class="button">
              <GlobalButton
                :link="{
                  to: INTERNAL_URL.TOOL,
                }"
              >
                {{ $t('about.features.feature2.link') }}
              </GlobalButton>
            </div>
          </div>
          <div class="feature">
            <div class="image">
              <NuxtImg
                src="/images/feature3.png"
                height="120"
              />
            </div>
            <h4>{{ $t('about.features.feature3.title') }}</h4>
            <p class="description">
              {{ $t('about.features.feature3.description') }}
            </p>
            <div class="button">
              <GlobalButton
                :link="{
                  to: INTERNAL_URL.ARTICLE,
                }"
              >
                {{ $t('about.features.feature3.link') }}
              </GlobalButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="member" class="content-wrapper background-gray">
      <div class="content-container">
        <h2>{{ $t('about.member.title') }}</h2>
        <div class="member-wrapper">
          <MemberCard
            v-for="{ name, engname, icon, description, affiliation, hp, twitter } in members"
            :key="name"
            :name="name"
            :engname="engname"
            :icon="icon"
            :description="description"
            :affiliation="affiliation"
            :hp="hp"
            :twitter="twitter"
          />
        </div>
      </div>
    </section>

    <section id="publication" class="content-wrapper">
      <div class="content-container">
        <h2>{{ $t('about.publications.title') }}</h2>
        <div class="publication-wrapper">
          <div
            v-for="{ title, author, journal, vol, no, pp, date, doi, ID } in publications"
            :key="title"
            class="publication"
          >
            <div>
              <span>{{ author }}. "{{ title }}". {{ journal }}, </span>
              <span v-if="vol">Vol. {{ vol }}, </span>
              <span v-if="no">No. {{ no }}, </span>
              <span v-if="pp">pp. {{ pp }}, </span>
              {{ date }}.
              <span v-if="doi">
                <GlobalLink :to="doi" target="blank">
                  {{ doi }}
                </GlobalLink>.
              </span>
            </div>
            <div class="button">
              <button class="download-button" @click="download(ID)">
                <IconPdf class="icon" fill="#5e1ce2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.features-wrapper {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 64px 16px;

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }

  > .feature {
    display: flex;
    flex-direction: column;
    gap: 16px 0;

    > .image {
      display: flex;
      place-content: center;
    }

    > .description {
      flex-grow: 1;
    }

    > .button {
      display: flex;
      place-content: center;
    }
  }
}

.member-wrapper {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.publication-wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px 0;

  > .publication {
    display: flex;
    align-items: center;
    gap: 0 16px;
    word-break: break-all;

    @media screen and (min-width: 640px) {
      gap: 0 32px;
    }

    > .button {
      flex: 0 0 40px;
    }
  }
}

.download-button {
  border: none;
  background-color: white;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;

  > .icon {
    opacity: 0.5;
    transition: opacity 0.4s 0s ease;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
