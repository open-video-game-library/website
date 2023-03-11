<script setup>
/** 環境変数を扱うRuntimeConfigの使用 */
const config = useRuntimeConfig()

/** @type {Object[]} opengame外部ツールDBのスプレッドシートから読み込んだブラウザゲームのデータ */
const { data: browsergameData } = await useFetch(config.public.externalDbApi, {
    method: "GET",
    query: { sheetName: "browsergame" }
})

/** @type {Object[]} isPublicがtrueのものだけ抽出したブラウザゲームのデータ */
const browsergames = (browsergameData.value).filter(data => data.isPublic)
</script>

<template>
    <div>
        <section class="content-wrapper">
            <div class="content-container">
                <v-container>
                    <h2>ブラウザで遊べるゲーム</h2>
                    <v-row>
                        <v-col v-for="game in browsergames" cols="12" sm="4" xl="3" :key="game.name">
                            <ToolMiniCard
                                :name="game.name"
                                :image="game.image"
                                :description="game.description"
                                :link="game.link"
                                style="height: 100%;"
                            />
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </section>
    </div>
</template>
