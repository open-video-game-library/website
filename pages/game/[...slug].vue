<script setup>
import { marked } from "marked";

// DBの情報を一旦全部取得
const { data: gamedatas } = await useFetch(
  "https://script.google.com/macros/s/AKfycbxcxVKsmiwo3Pip-D_l29-XGgJiraYgVCMOLkJ2SWxEyFYS0paBbmTYAxZDm6zmsX-v8g/exec",
  {
    method: "GET",
    query: { sheetName: "openvideogame" },
  }
);
// DBからアクセスされたURLのゲーム情報だけを抜き出す
// name, kana, catchphrase, description, repository, webgl, standalone
const route = useRoute();
const gamedata = gamedatas.value.filter(
  (e) => e.repository === route.params.slug[0]
)[0];

// GithubからREADME.JP.mdの情報を取得する
const { data: readme } = await useFetch(
  `https://api.github.com/repos/open-video-game-library/${gamedata.repository}/contents/README.JP.md`,
  {
    method: "GET",
  }
);
const atob = Buffer.from(readme.value.content, "base64").toString("utf-8");
// マークダウンをHTML要素に変換する
const markdown = marked(atob).replace(/<h1+.*<\/h1>+/g, "");
</script>

<template>
  <v-container>
    <article>
      <p class="catchphrase">{{ gamedata.catchphrase }}</p>
      <h1 class="title">{{ gamedata.name }}</h1>
      <p class="kana">{{ gamedata.kana }}</p>
      <div>
        <iframe
          v-if="gamedata.webgl"
          :src="gamedata.webgl"
          width="960"
          height="650"
          scrolling="no"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <v-btn
        v-if="gamedata.repository"
        color="grey darken-3"
        elevation="2"
        :href="`https://github.com/open-video-game-library/${gamedata.repository}`"
        >Github</v-btn
      >
      <v-btn
        v-if="gamedata.standalone"
        color="grey darken-3"
        :href="gamedata.standalone"
        >Standalone</v-btn
      >
      <div class="readme">
        <h2 class="readme-title">README</h2>
        <div class="marked" v-html="markdown"></div>
      </div>
    </article>
  </v-container>
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
.kana {
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
