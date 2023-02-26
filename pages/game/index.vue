<script setup>
import {
    mdiGithub,
    mdiController,
    mdiFilePdfBox
} from "@mdi/js"

// name, kana, catchphrase, description, repository, webgl, standalone
const { data: games } = await useFetch('https://script.google.com/macros/s/AKfycbxcxVKsmiwo3Pip-D_l29-XGgJiraYgVCMOLkJ2SWxEyFYS0paBbmTYAxZDm6zmsX-v8g/exec', {
    method: "GET",
    query: { sheetName: "openvideogame" }
})

const moreImg = new URL('../../assets/image/more.png', import.meta.url).href
const inputImg = new URL('../../assets/image/input.png', import.meta.url).href
const outputImg = new URL('../../assets/image/output.png', import.meta.url).href
</script>

<template>
    <section class="content-wrapper">
        <v-container class="content-container">
            <h2>オープンビデオゲーム一覧</h2>
<<<<<<< HEAD
            <p>営利目的以外であれば、ご自由にお使いいただけます。詳しいガイドラインは<NuxtLink to="/game/guideline">こちら</NuxtLink>。</p>
        </v-container>
    </section>
</template>
=======
            <aside>営利目的以外であれば、ご自由にお使いいただけます。詳しいガイドラインは<NuxtLink to="/game/guideline">こちら</NuxtLink>をご覧ください。</aside>
            <v-row>
                <v-col v-for="game in games" :key="game.repository" cols="6">
                    <GameCard
                        :name="game.name"
                        :image="game.image"
                        :description="game.description"
                        :repository="game.repository"
                    />
                </v-col>
                <v-col cols="6">
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
        </v-container>
    </section>

    <section class="content-wrapper bg-gray">
        <v-container class="content-container">
            <h2>パラメータの調整・取得</h2>
            <aside>オープンビデオゲームでは、コードを書くことなくパラメータを調整・取得することができます。</aside>
            <h3>パラメータの調整</h3>
            <aside>パラメータ調整によって、実験環境などの都合に合わせてゲームの難易度や仕様を手軽に調整することができます。数値調整だけでなく、画像差し替えによるビジュアルの調整も可能です。</aside>
            <v-img class="mx-auto" :src="inputImg" width="80%" />
            <h3>パラメータの取得</h3>
            <aside>観察だけでは把握しきれない、ゲームの内部データを取得することができます。ゲーム体験やコントローラデバイスの評価分析に活用できます。</aside>
            <v-img class="mx-auto" :src="outputImg" width="80%" />
        </v-container>
    </section>
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
>>>>>>> main
