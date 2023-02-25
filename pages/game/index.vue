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

</script>

<template>
    <section class="content-wrapper">
        <v-container class="content-container">
            <h2>オープンビデオゲーム一覧</h2>
            <p class="mb-4 pb-4">営利目的以外であれば、ご自由にお使いいただけます。詳しいガイドラインは<NuxtLink to="/game/guideline">こちら</NuxtLink>。</p>
            <v-row>
                <v-col v-for="game in games" :key="game.repository" cols="6">
                    <GameCard
                        :name="game.name"
                        :image="game.image"
                        :description="game.description"
                        :repository="game.repository"
                        class="my-8"
                    />
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>