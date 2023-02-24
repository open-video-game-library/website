<script setup>
import { marked } from 'marked'

// DBの情報を一旦全部取得
const { data: gamedatas } = await useFetch('https://script.google.com/macros/s/AKfycbxcxVKsmiwo3Pip-D_l29-XGgJiraYgVCMOLkJ2SWxEyFYS0paBbmTYAxZDm6zmsX-v8g/exec', {
    method: "GET",
    query: { sheetName: "openvideogame" }
})
// DBからアクセスされたURLのゲーム情報だけを抜き出す
// name, kana, catchphrase, description, repository, webgl, standalone																	
const route = useRoute()
const gamedata = (gamedatas.value).filter(e => e.repository === route.params.slug[0])[0]

// GithubからREADME.JP.mdの情報を取得する
const { data: readme } = await useFetch(`https://api.github.com/repos/open-video-game-library/${gamedata.repository}/contents/README.JP.md`, {
    method: "GET"
})
const atob = Buffer.from(readme.value.content, 'base64').toString('utf-8')
// マークダウンをHTML要素に変換する
const markdown = marked(atob).replace(/<h1+.*<\/h1>+/g, '')
</script>

<template>
    <v-container>
        <article>
            <p class="catchphrase">{{ gamedata.catchphrase }}</p>
            <h1 class="title">{{ gamedata.name }}</h1>
            <p class="kana">{{ gamedata.kana }}</p>
            <div>
                <iframe :src="gamedata.webgl" width="960" height="650" scrolling="no" frameborder="0"
                    allowfullscreen></iframe>
            </div>
            <v-btn :href="`https://github.com/open-video-game-library/${gamedata.repository}`">Github</v-btn>
            <v-btn :href="gamedata.standalone">Standalone</v-btn>
            <div class="marked" v-html="markdown"></div>
        </article>
    </v-container>
</template>

<style scoped>
.catchphrase {

}

.title {

}

.kana {

}
</style>