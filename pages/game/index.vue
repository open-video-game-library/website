<script setup>
/** Material Design Iconのインポート */
import {
    mdiGithub,
    mdiController,
    mdiFilePdfBox
} from "@mdi/js"

/** 環境変数を扱うRuntimeConfigの使用 */
const config = useRuntimeConfig()

/** @type {Object[]} opengame外部ツールDBのスプレッドシートから読み込んだ3Dモデルのアセットのデータ */
const { data: games } = await useFetch(config.public.internalDbApi, {
    method: "GET",
    query: { sheetName: "openvideogame" }
})

/** @type {String} コンタクトへのリンク画像の参照URL */
const moreImg = new URL('../../assets/image/more.png', import.meta.url).href

/** @type {String} パラメータ入力の説明画像の参照URL */
const inputImg = new URL('../../assets/image/input.png', import.meta.url).href

/** @type {String} パラメータ出力の説明画像の参照URL */
const outputImg = new URL('../../assets/image/output.png', import.meta.url).href
</script>

<template>
    <v-container>
        <section class="content-wrapper">
            <div class="content-container">
                <h2>オープンビデオゲーム一覧</h2>
                <aside>オープンビデオゲームは<strong>MITライセンス</strong>として公開しております。詳しくは各ゲームの<a href="https://github.com/open-video-game-library">GitHub</a>をご覧ください。</aside>
                <v-row>
                    <v-col v-for="game in games" :key="game.name" cols="12" sm="6" xl="4">
                        <GameCard
                            :name="game.name"
                            :image="game.image"
                            :description="game.description"
                            :github="game.github"
                            :webgl="game.webgl"
                            :standalone="game.standalone"
                        />
                    </v-col>
                    <v-col cols="12" sm="6" xl="4">
                        <v-hover v-slot="{ isHovering, props }">
                            <v-card :elevation="isHovering ? 8 : 2" v-bind="props">
                                <NuxtLink to="/contact" class="full-link"></NuxtLink>
                                <v-img :src="moreImg" height="320" cover />
                                <v-row v-if="isHovering" class="details" align="center">
                                    <v-col>
                                        <v-card-text>その他、研究利用したいジャンルのビデオゲームがありましたら、ぜひご連絡ください。</v-card-text>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </div>
        </section>

        <section class="content-wrapper bg-gray">
            <div class="content-container">
                <h2>パラメータの調整・取得</h2>
                <aside>オープンビデオゲームでは、コードを書くことなくパラメータを調整・取得することができます。</aside>
                <h3>パラメータの調整</h3>
                <aside>パラメータ調整によって、実験環境などの都合に合わせてゲームの難易度や仕様を手軽に調整することができます。数値調整だけでなく、画像差し替えによるビジュアルの調整も可能です。</aside>
                <v-img class="mx-auto" :src="inputImg" />
                <h3>パラメータの取得</h3>
                <aside>観察だけでは把握しきれない、ゲームの内部データを取得することができます。ゲーム体験やコントローラデバイスの評価分析に活用できます。</aside>
                <v-img class="mx-auto" :src="outputImg" />
            </div>
        </section>
    </v-container>
</template>

<style scoped>
.details {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.9);
    transition: all 0.3s;
    margin: auto;
}
</style>
