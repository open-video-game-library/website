<script setup>
import {
    mdiGithub,
    mdiController,
    mdiFilePdfBox
} from "@mdi/js"

// name, engname, icon, affiliation, hp, twitter, isPubicLink
const { data: memberdatas } = await useFetch('https://script.google.com/macros/s/AKfycbxcxVKsmiwo3Pip-D_l29-XGgJiraYgVCMOLkJ2SWxEyFYS0paBbmTYAxZDm6zmsX-v8g/exec', {
    method: "GET",
    query: { sheetName: "member" }
})
// title, author, journal, vol, no, pp, date, doi, , filename, isPublic
const { data: publicationData } = await useFetch('https://script.google.com/macros/s/AKfycbxcxVKsmiwo3Pip-D_l29-XGgJiraYgVCMOLkJ2SWxEyFYS0paBbmTYAxZDm6zmsX-v8g/exec', {
    method: "GET",
    query: { sheetName: "publication" }
})
const publications = (publicationData.value).filter(data => data.isPublic)

const logoImg = new URL('../assets/image/logo_white.png', import.meta.url).href
const bgVideo = new URL('../assets/image/background.mp4', import.meta.url).href
const canImg = [
    new URL('../assets/image/can1.png', import.meta.url).href,
    new URL('../assets/image/can2.png', import.meta.url).href,
    new URL('../assets/image/can3.png', import.meta.url).href
]

const download = (id, title) => {
    const a = document.createElement("a")
    a.href = new URL(`../assets/pdf/${id}.pdf`, import.meta.url).href
    a.target = "_blank"
    a.rel = "noreferrer"
    a.click()
    a.remove()
}
</script>

<template>
    <div>
        <div class="video-wrapper">
            <video autoplay muted loop playsinline>
                <source :src="bgVideo" />
            </video>
            <v-container class="top-msg">
                <v-row justify="center" align="center" style="height: calc(100vh - 61px);">
                    <div>
                        <v-img :src="logoImg" class="my-4 py-4" height="125"></v-img>
                        <p>「ゲーム研究を行いやすくし、ゲーム研究の発展に貢献すること」を目的とした、ゲーム研究者のためのライブラリ</p>
                        <v-row justify="center" class="my-4 py-4">
                            <v-btn
                                color="primary"
                                class="mx-8"
                                :prepend-icon="mdiGithub"
                                href="https://github.com/open-video-game-library"
                            >Download</v-btn>
                            <v-btn
                                color="primary"
                                class="mx-8"
                                :prepend-icon="mdiController"
                                to="/game"
                            >Play</v-btn>
                        </v-row>
                    </div>
                </v-row>
            </v-container>
        </div>

        <section class="content-wrapper">
            <v-container class="content-container">
                <h2>Open Video Game Library で できること</h2>
                <v-row>
                    <v-col>
                        <v-img
                            :src="canImg[0]"
                            height="120"
                        ></v-img>
                    </v-col>
                    <v-col>
                        <v-img
                            :src="canImg[1]"
                            height="120"
                        ></v-img>
                    </v-col>
                    <v-col>
                        <v-img
                            :src="canImg[2]"
                            height="120"
                        ></v-img>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col><h4>研究で使えるゲームを見つける</h4></v-col>
                    <v-col><h4>研究で使えるツールを見つける</h4></v-col>
                    <v-col><h4>ゲーム研究の知見を深める</h4></v-col>
                </v-row>

                <v-row>
                    <v-col>研究で利用されることを前提に我々が作成したオープンビデオゲームや、研究に合わせて編集できる外部のオープンソースゲームを見つけ、利用することができます。</v-col>
                    <v-col>ゲームを用いた体験やデバイスの評価実験を行う際に有益な録画機能や、アンケートを見つけ、利用することができます。</v-col>
                    <v-col>ゲーム開発をする上でためになる情報や、ゲーム研究をする上で抑えておくべきポイントを知ることができます。</v-col>
                </v-row>

                <v-row>
                    <v-col class="text-center">
                        <v-btn color="primary">ゲームを見つける</v-btn>
                    </v-col>
                    <v-col class="text-center">
                        <v-btn color="primary">ツールを見つける</v-btn>
                    </v-col>
                    <v-col class="text-center">
                        <v-btn color="primary">記事を読む</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section class="content-wrapper bg-gray">
            <v-container class="content-container">
                <h2>Member</h2>
                <v-row>
                    <v-col cols="4" justify="space-around" v-for="memberdata in memberdatas" :key="memberdata.name">
                        <MemberCard
                            :name="memberdata.name"
                            :engname="memberdata.engname"
                            :icon="memberdata.icon"
                            :description="memberdata.description"
                            :affiliation="memberdata.affiliation"
                            :hp="memberdata.hp"
                            :twitter="memberdata.twitter"
                        />
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section class="content-wrapper">
            <v-container class="content-container">
                <h2>Publications</h2>
                <p v-for="publication in publications" :key="publication.title" class="my-2 py-2">
                    <v-row v-if="publication.isPublic">
                        <v-col>
                            {{ publication.author }}.
                            "{{ publication.title }}".
                            {{ publication.journal }},
                            <span v-if="publication.vol">Vol. {{ publication.vol }}, </span>
                            <span v-if="publication.no">No. {{ publication.no }}, </span>
                            <span v-if="publication.pp">pp. {{ publication.pp }}, </span>
                            {{ publication.date }}.
                            <span v-if="publication.doi"><a :href="publication.doi">{{ publication.doi }}</a>.</span>
                        </v-col>
                        <v-col cols="1">
                            <v-btn color="primary" :icon="mdiFilePdfBox" variant="plain" @click="download(publication.ID, publication.title)"></v-btn>
                        </v-col>
                    </v-row>
                </p>
            </v-container>
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
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: calc(100vh - 61px);
        background-color: rgba(0, 0, 0, 0.3);
        background-image: radial-gradient(#111 30%, transparent 31%), radial-gradient(#111 30%, transparent 31%);
        background-size: 4px 4px;
        background-position: 0 0, 2px 2px;
        background-repeat: repeat;
    }
}
</style>