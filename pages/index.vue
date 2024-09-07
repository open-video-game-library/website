<script setup lang="ts">
import { mdiGithub, mdiController, mdiFilePdfBox } from '@mdi/js';
import { members, publications } from '@/assets/json/about.json';
import logoImg from '@/assets/image/logo_white.png';
import bgVideo from '@/assets/image/background.mp4';
import bgPoster from '@/assets/image/background.png';
import canImg1 from '@/assets/image/can1.png';
import canImg2 from '@/assets/image/can2.png';
import canImg3 from '@/assets/image/can3.png';

const canImg = [canImg1, canImg2, canImg3];

/**
 * 論文のPDFファイルが存在するか
 * @param {number} id 論文のID
 */
const hasPdfFile = (id: number): boolean => {
  const generatedUrl = new URL(`../assets/pdf/${id}.pdf`, import.meta.url).href;
  return !generatedUrl.includes('undefined');
};

/**
 * 指定されたIDの論文をダウンロード（別タブでPDFファイルを表示）させる
 * @param {number} id 論文のID
 */
const download = (id: number) => {
  const a = document.createElement('a');
  a.href = new URL(`../assets/pdf/${id}.pdf`, import.meta.url).href;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.click();
  a.remove();
};
</script>

<template>
  <div>
    <div class="video-wrapper">
      <v-img
        :src="bgPoster"
        cover
        height="100%"
      />
      <video
        autoplay
        muted
        loop
        playsinline
      >
        <source
          :src="bgVideo"
          type="video/mp4"
        >
      </video>
      <v-container class="top-msg">
        <v-row
          justify="center"
          align="center"
          style="height: calc(100vh - 61px)"
        >
          <div>
            <v-img
              :src="logoImg"
              class="my-4 py-4"
              height="125"
            />
            <p>{{ $t('about.firstView.catchCopy') }}</p>
            <v-row
              justify="center"
              class="my-4 py-4"
            >
              <v-btn
                color="info"
                class="mx-8"
                :prepend-icon="mdiGithub"
                href="https://github.com/open-video-game-library"
              >
                {{ $t('about.firstView.links.gitHub') }}
              </v-btn>
              <v-btn
                color="primary"
                class="mx-8"
                :prepend-icon="mdiController"
                to="/game"
              >
                {{ $t('about.firstView.links.game') }}
              </v-btn>
            </v-row>
          </div>
        </v-row>
      </v-container>
    </div>

    <section
      id="abstract"
      class="content-wrapper"
    >
      <div class="content-container">
        <v-container>
          <h2>{{ $t('about.features.title') }}</h2>
          <v-row>
            <v-col
              cols="12"
              sm="4"
              class="abstract-part"
            >
              <v-img
                :src="canImg[0]"
                max-height="120"
              />
              <h4>{{ $t('about.features.feature1.title') }}</h4>
              <p>{{ $t('about.features.feature1.description') }}</p>
              <div class="d-flex justify-center">
                <v-btn
                  color="primary"
                  to="/game"
                >
                  {{ $t('about.features.feature1.link') }}
                </v-btn>
              </div>
            </v-col>
            <v-col
              cols="12"
              sm="4"
              class="abstract-part"
            >
              <v-img
                :src="canImg[1]"
                max-height="120"
              />
              <h4>{{ $t('about.features.feature2.title') }}</h4>
              <p>{{ $t('about.features.feature2.description') }}</p>
              <div class="d-flex justify-center">
                <v-btn
                  color="primary"
                  to="/tool"
                >
                  {{ $t('about.features.feature2.link') }}
                </v-btn>
              </div>
            </v-col>
            <v-col
              cols="12"
              sm="4"
              class="abstract-part"
            >
              <v-img
                :src="canImg[2]"
                max-height="120"
              />
              <h4>{{ $t('about.features.feature3.title') }}</h4>
              <p>{{ $t('about.features.feature3.description') }}</p>
              <div class="d-flex justify-center">
                <!-- <v-btn color="primary" to="/article">記事を読む</v-btn> -->
                <v-btn
                  color="primary"
                  to="/article"
                >
                  {{ $t('about.features.feature3.link') }}
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <section
      id="member"
      class="content-wrapper bg-gray"
    >
      <div class="content-container">
        <v-container>
          <h2>{{ $t('about.member.title') }}</h2>
          <v-row>
            <v-col
              v-for="member in members"
              :key="member.name"
              cols="12"
              sm="4"
              justify="space-around"
            >
              <MemberCard
                :name="member.name"
                :engname="member.engname"
                :icon="member.icon"
                :description="member.description"
                :affiliation="member.affiliation"
                :hp="member.hp"
                :twitter="member.twitter"
              />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <section
      id="publication"
      class="content-wrapper"
    >
      <div class="content-container">
        <v-container>
          <h2>{{ $t('about.publications.title') }}</h2>
          <v-row
            v-for="publication in publications"
            :key="publication.title"
            cols="12"
            sm="4"
            class="my-2 py-2"
          >
            <v-col
              cols="10"
              sm="11"
              style="word-wrap: break-word"
            >
              {{ publication.author }}. "{{ publication.title }}".
              {{ publication.journal }},
              <span v-if="publication.vol">Vol. {{ publication.vol }}, </span>
              <span v-if="publication.no">No. {{ publication.no }}, </span>
              <span v-if="publication.pp">pp. {{ publication.pp }}, </span>
              {{ publication.date }}.
              <span v-if="publication.doi"><a :href="publication.doi">{{ publication.doi }}</a>.</span>
            </v-col>
            <v-col
              v-if="hasPdfFile(publication.ID)"
              cols="2"
              sm="1"
              align-self="center"
            >
              <v-btn
                color="primary"
                :icon="mdiFilePdfBox"
                variant="plain"
                @click="download(publication.ID)"
              />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.top-msg {
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
  font-weight: bold;
}

.video-wrapper {
  position: relative;
  width: 100%;
  height: calc(100vh - 61px);
  overflow: hidden;

  video {
    object-fit: cover;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 61px);
    background-color: rgba(0, 0, 0, 0.3);
    background-image: radial-gradient(#111 30%, transparent 31%),
      radial-gradient(#111 30%, transparent 31%);
    background-size: 4px 4px;
    background-position: 0 0, 2px 2px;
    background-repeat: repeat;
  }
}

.abstract-part {
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  margin: 20px 0;

  h4 {
    margin: 0;
    flex-grow: 0;
  }

  p {
    flex-grow: 1;
  }
}
</style>
