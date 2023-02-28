<script setup>
import {
    mdiTwitter,
    mdiGithub,
    mdiFileCode,
} from "@mdi/js"

const logoImg = new URL('../assets/image/logo_black.png', import.meta.url).href
const thisyear = (new Date()).getFullYear()
</script>

<template>
    <v-footer class="py-16" color="grey-lighten-3">
        <v-container>
            <v-img
                :src="logoImg"
                height="125"
            ></v-img>
            <v-row justify="space-around" class="mt-4 pt-4">
                <v-col cols="3">
                    <ul>
                        <li>この取り組みを知る</li>
                        <v-divider></v-divider>
                        <li><NuxtLink to="/#abstract">概要</NuxtLink></li>
                        <li><NuxtLink to="/#member">メンバー</NuxtLink></li>
                        <li><NuxtLink to="/#publication">出版</NuxtLink></li>
                    </ul>
                </v-col>

                <v-col cols="3">
                    <ul>
                        <li>ゲームを見つける</li>
                        <v-divider></v-divider>
                        <li><NuxtLink to="/game">オープンビデオゲーム</NuxtLink></li>
                        <li><NuxtLink to="/tool/opensoursegame">オープンソースゲーム</NuxtLink></li>
                        <li><NuxtLink to="/tool/browsegame">ブラウザ遊べるゲーム</NuxtLink></li>
                        <li><NuxtLink to="/tool/asset">アセット</NuxtLink></li>
                    </ul>
                </v-col>

                <v-col cols="3">
                    <ul>
                        <li>実験ツールを見つける</li>
                        <v-divider></v-divider>
                        <li><a href="https://open-video-game-library.github.io/MultiViewRecorder/">Multi View Recorder</a></li>
                        <li><a href="https://youtu.be/xpkJ13SegK4">あアラウド法</a></li>
                        <li><NuxtLink to="/tool#extool">その他外部ツール</NuxtLink></li>
                    </ul>
                </v-col>

                <v-col cols="2">
                    <ul>
                        <li>リンク</li>
                        <v-divider></v-divider>
                        <li><a href="https://github.com/open-video-game-library" class="d-flex align-center"><v-icon :icon="mdiGithub"/> <span>GitHub</span></a></li>
                        <li><a href="" class="d-flex align-center"><v-icon :icon="mdiTwitter"/> <span>Twitter</span></a></li>
                        <li><a href="" class="d-flex align-center"><v-icon :icon="mdiFileCode"/> <span>Qiita</span></a></li>
                        
                    </ul>
                </v-col>
            </v-row>

            <v-row justify="center" class="mt-4 pt-4">
                <address>OVGL Project from <a href="https://keita-lab.jp/" target="_blank" rel="noopener noreferrer">WATANABE LABORATORY</a> &copy; 2021 - {{ thisyear }}</address>
            </v-row>
        </v-container>
    </v-footer>
</template>

<style lang="scss" scoped>
ul {
    list-style-type: none;
    padding: 0;
    li {
        margin: 4px 0;
    }
}

a {
    color: gray;
    text-decoration:none;
}
</style>