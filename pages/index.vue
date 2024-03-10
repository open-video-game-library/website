<script setup>
import { mdiGithub, mdiController, mdiFilePdfBox } from "@mdi/js";
import { members, publications } from '@/assets/json/about.json';
import logoImg from '@/assets/image/logo_white.png';
import bgVideo from '@/assets/image/background.mp4';
import bgPoster from '@/assets/image/background.png';
import canImg1 from '@/assets/image/can1.png';
import canImg2 from '@/assets/image/can2.png';
import canImg3 from '@/assets/image/can3.png';

const canImg = [canImg1, canImg2, canImg3];

/**
 * 指定されたIDの論文をダウンロード（別タブでPDFファイルを表示）させる
 * @param {Number} id 論文のID
 */
const download = (id) => {
  const a = document.createElement("a");
  a.href = new URL(`../assets/pdf/${id}.pdf`, import.meta.url).href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.click();
  a.remove();
};
</script>

<template>
  <div>
    <div class="video-wrapper">
      <v-img :src="bgPoster" cover height="100%" />
      <video autoplay muted loop playsinline>
        <source :src="bgVideo" type="video/mp4" />
      </video>
      <v-container class="top-msg">
        <v-row
          justify="center"
          align="center"
          style="height: calc(100vh - 61px)"
        >
          <div>
            <v-img :src="logoImg" class="my-4 py-4" height="125"></v-img>
            <!-- <p>
              「ゲーム研究を行いやすくし、ゲーム研究の発展に貢献すること」を目的とした、ゲーム研究者のためのライブラリ
            </p> -->
            <p>
              A library for game researchers with the aim of "facilitating game
              research and contributing to the development of game research"
            </p>
            <v-row justify="center" class="my-4 py-4">
              <v-btn
                color="info"
                class="mx-8"
                :prepend-icon="mdiGithub"
                href="https://github.com/open-video-game-library"
                >Download</v-btn
              >
              <v-btn
                color="primary"
                class="mx-8"
                :prepend-icon="mdiController"
                to="/game"
                >Play</v-btn
              >
            </v-row>
          </div>
        </v-row>
      </v-container>
    </div>

    <section class="content-wrapper" id="abstract">
      <div class="content-container">
        <v-container>
          <!-- <h2>Open Video Game Library で できること</h2> -->
          <h2>What you can do with OVGL</h2>
          <v-row>
            <v-col cols="12" sm="4" class="abstract-part">
              <v-img :src="canImg[0]" max-height="120"></v-img>
              <!-- <h4>研究で使えるゲームを見つける</h4> -->
              <h4>Finding games to use in your research</h4>
              <!-- <p>
                研究で利用されることを前提に我々が作成したオープンビデオゲームや、研究に合わせて編集できる外部のオープンソースゲームを見つけ、利用することができます。
              </p> -->
              <p>
                You can find and use open video games that we have created to be
                used in your research, or external open source games that you
                can edit to suit your research.
              </p>
              <div class="d-flex justify-center">
                <!-- <v-btn color="primary" to="/game">ゲームを見つける</v-btn> -->
                <v-btn color="primary" to="/game">Find a game</v-btn>
              </div>
            </v-col>
            <v-col cols="12" sm="4" class="abstract-part">
              <v-img :src="canImg[1]" max-height="120"></v-img>
              <!-- <h4>研究で使えるツールを見つける</h4> -->
              <h4>Find tools to use in your research</h4>
              <!-- <p>
                ゲームを用いた体験やデバイスの評価実験を行う際に有益な録画機能や、アンケートを見つけ、利用することができます。
              </p> -->
              <p>
                You can find and use recording functions and questionnaires that
                are useful when conducting experiments to evaluate experiences
                and devices with games.
              </p>
              <div class="d-flex justify-center">
                <!-- <v-btn color="primary" to="/tool">ツールを見つける</v-btn> -->
                <v-btn color="primary" to="/tool">Find Tools</v-btn>
              </div>
            </v-col>
            <v-col cols="12" sm="4" class="abstract-part">
              <v-img :src="canImg[2]" max-height="120"></v-img>
              <!-- <h4>ゲーム研究の知見を深める</h4> -->
              <h4>Deepen your knowledge of game research</h4>
              <!-- <p>
                ゲーム開発をする上でためになる情報や、ゲーム研究をする上で抑えておくべきポイントを知ることができます。
              </p> -->
              <p>
                You will be able to find out information that will be useful for
                game development and points to keep in mind when conducting game
                research.
              </p>
              <div class="d-flex justify-center">
                <!-- <v-btn color="primary" to="/article">記事を読む</v-btn> -->
                <v-btn color="primary" to="/article">Read Article</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <section class="content-wrapper bg-gray" id="member">
      <div class="content-container">
        <v-container>
          <h2>Member</h2>
          <v-row>
            <v-col
              cols="12"
              sm="4"
              justify="space-around"
              v-for="member in members"
              :key="member.name"
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

    <section class="content-wrapper" id="publication">
      <div class="content-container">
        <v-container>
          <h2>Publications</h2>
          <v-row
            cols="12"
            sm="4"
            v-for="publication in publications"
            :key="publication.title"
            class="my-2 py-2"
          >
            <v-col cols="10" sm="11" style="word-wrap: break-word">
              {{ publication.author }}. "{{ publication.title }}".
              {{ publication.journal }},
              <span v-if="publication.vol">Vol. {{ publication.vol }}, </span>
              <span v-if="publication.no">No. {{ publication.no }}, </span>
              <span v-if="publication.pp">pp. {{ publication.pp }}, </span>
              {{ publication.date }}.
              <span v-if="publication.doi"
                ><a :href="publication.doi">{{ publication.doi }}</a
                >.</span
              >
            </v-col>
            <v-col cols="2" sm="1" align-self="center">
              <v-btn
                color="primary"
                :icon="mdiFilePdfBox"
                variant="plain"
                @click="download(publication.ID)"
              ></v-btn>
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
