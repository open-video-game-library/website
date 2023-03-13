<script setup>
/** 環境変数を扱うRuntimeConfigの使用 */
const config = useRuntimeConfig()

/** @type {Object[]} opengame外部ツールDBのスプレッドシートから読み込んだ3Dモデルのアセットのデータ */
const { data: modelData } = await useFetch(config.public.externalDbApi, {
    method: "GET",
    query: { sheetName: "asset_3Dmodel" }
})

/** @type {Object[]} isPublicがtrueのものだけ抽出した3Dモデルのアセットのデータ */
const models = (modelData.value).filter(data => data.isPublic)

/** @type {Object[]} opengame外部ツールDBのスプレッドシートから読み込んだサウンドのアセットのデータ */
const { data: soundData } = await useFetch(config.public.externalDbApi, {
    method: "GET",
    query: { sheetName: "asset_sound" }
})

/** @type {Object[]} isPublicがtrueのものだけ抽出したサウンドのアセットのデータ */
const sounds = (soundData.value).filter(data => data.isPublic)

/** @type {Object[]} opengame外部ツールDBのスプレッドシートから読み込んだグラフィック/UIのアセットのデータ */
const { data: graphicData } = await useFetch(config.public.externalDbApi, {
    method: "GET",
    query: { sheetName: "asset_graphic" }
})

/** @type {Object[]} isPublicがtrueのものだけ抽出したグラフィック/UIのデータ */
const graphics = (graphicData.value).filter(data => data.isPublic)
</script>

<template>
    <div>
        <section class="content-wrapper">
            <div class="content-container">
                <v-container>
                    <h2>3Dモデル</h2>
                    <v-row>
                        <v-col v-for="model in models" cols="12" sm="4" xl="3" :key="model.name">
                            <ToolMiniCard
                                :name="model.name"
                                :image="model.image"
                                :description="model.description"
                                :link="model.link"
                                style="height: 100%;"
                            />
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </section>

        <section class="content-wrapper bg-gray">
            <div class="content-container">
                <v-container>
                    <h2>BGM / SE</h2>
                    <v-row>
                        <v-col v-for="sound in sounds" cols="12" sm="4" xl="3" :key="sound.name">
                            <ToolMiniCard
                                :name="sound.name"
                                :image="sound.image"
                                :description="sound.description"
                                :link="sound.link"
                                style="height: 100%;"
                            />
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </section>

        <section class="content-wrapper">
            <div class="content-container">
                <v-container>
                    <h2>グラフィック / UI</h2>
                    <v-row>
                        <v-col v-for="graphic in graphics" cols="12" sm="4" :key="graphic.name">
                            <ToolMiniCard
                                :name="graphic.name"
                                :image="graphic.image"
                                :description="graphic.description"
                                :link="graphic.link"
                                :articleLink="graphic.articleLink"
                                style="height: 100%;"
                            />
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </section>
    </div>
</template>
