<script setup>
import { marked } from 'marked';

/** 環境変数を扱うRuntimeConfigの使用 */
const config = useRuntimeConfig();

// DBの情報を一旦全部取得
const { data: gamedatas } = await useFetch(config.public.internalDbApi, {
  method: 'GET',
  query: { sheetName: 'openvideogame' },
},
);
// DBからアクセスされたURLのゲーム情報だけを抜き出す
// name, kana, catchphrase, description, repository, webgl, standalone
const route = useRoute();
const gamedata = gamedatas.value.filter(
  e => e.repository === route.params.slug[0],
)[0];

// GithubからREADME.mdの情報を取得する
const { data: readme } = await useFetch(
  `https://api.github.com/repos/open-video-game-library/${gamedata.repository}/contents/README.md`,
  {
    method: 'GET',
  },
);
const atob = Buffer.from(readme.value.content, 'base64').toString('utf-8');
// マークダウンをHTML要素に変換する
const markdown = marked(atob).replace(/<h1+.*<\/h1>+/g, '');
</script>

<template>
  <article class="content-wrapper">
    <v-container class="content-container">
      <p class="catchphrase">
        {{ gamedata.catchphrase }}
      </p>
      <h1 class="title">
        {{ gamedata.name }}
      </h1>
      <p class="kana">
        {{ gamedata.kana }}
      </p>
      <div class="mx-auto">
        <iframe
          v-if="gamedata.webgl"
          :src="gamedata.webgl"
          width="960"
          height="650"
          scrolling="no"
          frameborder="0"
          allowfullscreen
        />
      </div>
      <v-btn
        v-if="gamedata.github"
        color="grey darken-3"
        elevation="2"
        :href="gamedata.github"
      >
        Github
      </v-btn>
      <v-btn
        v-if="gamedata.standalone"
        color="grey darken-3"
        :href="gamedata.standalone"
      >
        Standalone
      </v-btn>
      <div class="readme">
        <h2 class="readme-title">
          README
        </h2>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="marked" v-html="markdown" />
      </div>
    </v-container>
  </article>
</template>

<style scoped>
.catchphrase {
  margin-top: 16px;
  color: gray;
}
.title {
  font-size: 36px;
  font-weight: bold;
  color: #04062d;
}

.readme-title {
  font-size: 28px;
  font-weight: bold;
  color: #04062d;
  margin-bottom: 8px;
}

.readme {
  margin-top: 32px;
  background-color: #eeeeee;
  padding: 2%;
}
</style>
