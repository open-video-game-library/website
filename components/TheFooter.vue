<script setup>
const logoImg = new URL('../assets/image/logo_black.png', import.meta.url).href
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
            </v-row>
        </v-container>
    </v-footer>
</template>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}

a {
    color: gray;
    text-decoration:none;
}
</style>