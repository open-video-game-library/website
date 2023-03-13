<script setup>
/** 環境変数を扱うRuntimeConfigの使用 */
const config = useRuntimeConfig()

/** @type {Object[]} opengame外部ツールDBのスプレッドシートから読み込んだオープンソースゲームのデータ */
const { data: opensourcegameData } = await useFetch(config.public.externalDbApi, {
    method: "GET",
    query: { sheetName: "opensourcegame" }
})

/** @type {Object[]} オープンソースゲームのデータからスポーツのジャンルを抽出したデータ */
const sports = (opensourcegameData.value).filter(data => data.genre == "sports" && data.isPublic)

/** @type {Object[]} オープンソースゲームのデータからシューティングのジャンルを抽出したデータ */
const shootings = (opensourcegameData.value).filter(data => data.genre == "shooting" && data.isPublic)

/** @type {Object[]} オープンソースゲームのデータからプラットフォームのジャンルを抽出したデータ */
const platforms = (opensourcegameData.value).filter(data => data.genre == "platform" && data.isPublic)

/** @type {Object[]} オープンソースゲームのデータから格闘のジャンルを抽出したデータ */
const fightings = (opensourcegameData.value).filter(data => data.genre == "fighting" && data.isPublic)

/** @type {Object[]} オープンソースゲームのデータからパズルとボードゲームのジャンルを抽出したデータ */
const puzzles = (opensourcegameData.value).filter(data => data.genre == "puzzle" && data.isPublic)

/** @type {Object[]} オープンソースゲームのデータからドライビングのジャンルを抽出したデータ */
const drivings = (opensourcegameData.value).filter(data => data.genre == "driving" && data.isPublic)

/** @type {Object[]} オープンソースゲームのデータからその他のジャンルを抽出したデータ */
const others = (opensourcegameData.value).filter(data => data.genre == "other" && data.isPublic)
</script>

<template>
    <div>
        <section class="content-wrapper">
            <div class="content-container">
                <v-container>
                    <h2>オープンソースゲーム</h2>
                    
                    <h3>スポーツ</h3>
                    <v-row>
                        <v-col v-for="game in sports" cols="12" sm="4" :key="game.name">
                            <ToolMiniCard
                                :name="game.name"
                                :image="game.image"
                                :description="game.description"
                                :link="game.link"
                                :articleLink="game.articleLink"
                                style="height: 100%;"
                            />
                        </v-col>
                    </v-row>

                    <h3>シューティング</h3>
                    <v-row>
                        <v-col v-for="game in shootings" cols="12" sm="4" :key="game.name">
                            <ToolMiniCard
                                :name="game.name"
                                :image="game.image"
                                :description="game.description"
                                :link="game.link"
                                :articleLink="game.articleLink"
                                style="height: 100%;"
                            />
                        </v-col>
                    </v-row>

                    <h3>プラットフォーム</h3>
                    <v-row>
                        <v-col v-for="game in platforms" cols="12" sm="4" :key="game.name">
                            <ToolMiniCard
                                :name="game.name"
                                :image="game.image"
                                :description="game.description"
                                :link="game.link"
                                :articleLink="game.articleLink"
                                style="height: 100%;"
                            />
                        </v-col>
                    </v-row>

                    <h3>レーシング / ドライビング</h3>
                    <v-row>
                        <v-col v-for="game in drivings" cols="12" sm="4" :key="game.name">
                            <ToolMiniCard
                                :name="game.name"
                                :image="game.image"
                                :description="game.description"
                                :link="game.link"
                                :articleLink="game.articleLink"
                                style="height: 100%;"
                            />
                        </v-col>
                    </v-row>

                    <h3>格闘</h3>
                    <v-row>
                        <v-col v-for="game in fightings" cols="12" sm="4" :key="game.name">
                            <ToolMiniCard
                                :name="game.name"
                                :image="game.image"
                                :description="game.description"
                                :link="game.link"
                                :articleLink="game.articleLink"
                                style="height: 100%;"
                            />
                        </v-col>
                    </v-row>

                    <h3>パズル / ボードゲーム</h3>
                    <v-row>
                        <v-col v-for="game in puzzles" cols="12" sm="4" :key="game.name">
                            <ToolMiniCard
                                :name="game.name"
                                :image="game.image"
                                :description="game.description"
                                :link="game.link"
                                :articleLink="game.articleLink"
                                style="height: 100%;"
                            />
                        </v-col>
                    </v-row>

                    <h3>その他</h3>
                    <v-row>
                        <v-col v-for="game in others" cols="12" sm="4" :key="game.name">
                            <ToolMiniCard
                                :name="game.name"
                                :image="game.image"
                                :description="game.description"
                                :link="game.link"
                                :articleLink="game.articleLink"
                                style="height: 100%;"
                            />
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </section>
    </div>
</template>
