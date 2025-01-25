<script setup lang="ts">
import { members, publications } from '@/assets/json/about.json';

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
  <div>
    <div class="first-view">
      <video
        autoplay
        muted
        loop
        playsinline
        src="/images/background.mp4"
        poster="/images/background.png"
        class="background"
      />
      <div class="message">
        <h1>
          <NuxtImg
            src="/logos/white.png"
            height="125"
            :alt="$t('about.firstView.title')"
          />
        </h1>
        <p class="description">
          {{ $t('about.firstView.catchCopy') }}
        </p>
        <div class="buttons">
          <GlobalLink to="https://github.com/open-video-game-library">
            <div class="icon-button background-black">
              <IconGithub class="icon" fill="white" />
              <span class="text">{{ $t('about.firstView.links.gitHub') }}</span>
            </div>
          </GlobalLink>
          <GlobalLink to="/game">
            <div class="icon-button background-primary">
              <IconController class="icon" fill="white" />
              <span class="text">{{ $t('about.firstView.links.game') }}</span>
            </div>
          </GlobalLink>
        </div>
      </div>
    </div>

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
              <GlobalLink to="/game">
                <div class="icon-button background-primary">
                  <span class="text">{{ $t('about.features.feature1.link') }}</span>
                </div>
              </GlobalLink>
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
              <GlobalLink to="/tool">
                <div class="icon-button background-primary">
                  <span class="text">{{ $t('about.features.feature2.link') }}</span>
                </div>
              </GlobalLink>
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
              <GlobalLink to="/article">
                <div class="icon-button background-primary">
                  <span class="text">{{ $t('about.features.feature3.link') }}</span>
                </div>
              </GlobalLink>
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
                  <span class="publication-doi">{{ doi }}</span>
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
  </div>
</template>

<style scoped lang="scss">
.first-view {
  position: relative;
  width: 100%;
  height: calc(100vh - 61px);
  overflow: hidden;

  > .background {
    object-fit: cover;
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0;
  }

  // テキストを見やすくするための黒ドット
  &::after {
    content: "";
    display: block;
    position: absolute;
    inset: 0;
    height: calc(100vh - 61px);
    background-color: rgba(0, 0, 0, 0.3);
    background-image: radial-gradient(#111 30%, transparent 31%),
      radial-gradient(#111 30%, transparent 31%);
    background-size: 4px 4px;
    background-position: 0 0, 2px 2px;
    background-repeat: repeat;
  }

  > .message {
    margin: 0 16px;
    z-index: 5;
    inset: 0;
    position: absolute;
    display: grid;
    place-content: center;
    place-items: center;
    gap: 32px 0;

    > .description {
      color: white;
      font-weight: bold;
    }

    > .buttons {
      display: flex;
      gap: 0 32px;
    }
  }
}

.icon-button {
  width: 100%;
}

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

.publication-doi {
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.4s 0s ease;

  &:hover {
    border-color: #5e1ce2;
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
