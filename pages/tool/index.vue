<script setup>
// name, description, image, link
const { data: tools } = await useFetch('https://script.google.com/macros/s/AKfycbxcxVKsmiwo3Pip-D_l29-XGgJiraYgVCMOLkJ2SWxEyFYS0paBbmTYAxZDm6zmsX-v8g/exec', {
    method: "GET",
    query: { sheetName: "tool" }
})

const { data: extools } = await useFetch('https://script.google.com/macros/s/AKfycbxc714YcsKPB0pP9K-o6JHhli4BjNjP6aGu17Bplr-H4j2vKhgoXYJT4Wr3HZWjLVGaLQ/exec', {
    method: "GET",
    query: { sheetName: "tool" }
})

const { data: pickups } = await useFetch('https://script.google.com/macros/s/AKfycbxc714YcsKPB0pP9K-o6JHhli4BjNjP6aGu17Bplr-H4j2vKhgoXYJT4Wr3HZWjLVGaLQ/exec', {
    method: "GET",
    query: { sheetName: "pickup" }
})

const opensourcegames = pickups.value.filter(pickup => pickup.category == "opensourcegame")
const browsergames = pickups.value.filter(pickup => pickup.category == "browsergame")
const frameworks = pickups.value.filter(pickup => pickup.category == "framework")
const assets = pickups.value.filter(pickup => pickup.category == "asset")
</script>



<template>
    <div>
        <section class="content-wrapper">
            <v-container class="content-container">
                <h2>ツール</h2>
                <aside>ゲーム研究の実験や評価に利用できるツールを開発し、提供しています。</aside>
                <v-row>
                    <v-col v-for="tool in tools" cols="12" :key="tool.name">
                        <ToolCard
                            :name="tool.name"
                            :image="tool.image"
                            :description="tool.description"
                            :link="tool.link"
                        />
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section class="content-wrapper bg-gray" id="extool">
            <v-container class="content-container">
                <h2>外部ツール</h2>
                <aside>他の研究者やゲーム開発者が提供している、評価・実験・開発に役立つツールやゲームも紹介します。</aside>
                <v-row>
                    <v-col v-for="tool in extools" cols="12" :key="tool.name">
                        <ToolCard
                            :name="tool.name"
                            :image="tool.image"
                            :description="tool.description"
                            :link="tool.link"
                        />
                    </v-col>
                </v-row>

                <h3>オープンソースゲーム</h3>
                <v-row>
                    <v-col v-for="game in opensourcegames" cols="12" sm="4" xl="3" :key="game.name">
                        <ToolMiniCard
                            :name="game.name"
                            :image="game.image"
                            :sub="game.description"
                            :link="game.link"
                            :tags="game.tags"
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" class="my-8" to="/tool/opensourcegame">もっと見る→</v-btn>
                    <v-spacer></v-spacer>
                </v-row>

                <h3>ブラウザで遊べるゲーム</h3>
                <v-row>
                    <v-col v-for="game in browsergames" cols="12" sm="4" xl="3" :key="game.name">
                        <ToolMiniCard
                            :name="game.name"
                            :image="game.image"
                            :sub="game.description"
                            :link="game.link"
                            :tags="game.tags"
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" class="my-8" to="/tool/browsergame">もっと見る→</v-btn>
                    <v-spacer></v-spacer>
                </v-row>

                <h3>開発フレームワーク</h3>
                <v-row>
                    <v-col v-for="framework in frameworks" cols="12" sm="4" xl="3" :key="framework.name">
                        <ToolMiniCard
                            :name="framework.name"
                            :image="framework.image"
                            :sub="framework.description"
                            :link="framework.link"
                            :tags="framework.tags"
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" class="my-8" to="/tool/framework">もっと見る→</v-btn>
                    <v-spacer></v-spacer>
                </v-row>

                <h3>アセット</h3>
                <v-row>
                    <v-col v-for="asset in assets" cols="12" sm="4" xl="3" :key="asset.name">
                        <ToolMiniCard
                            :name="asset.name"
                            :image="asset.image"
                            :sub="asset.description"
                            :link="asset.link"
                            :tags="asset.tags"
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" class="my-8" to="/tool/asset">もっと見る→</v-btn>
                    <v-spacer></v-spacer>
                </v-row>

            </v-container>
        </section>
    </div>
</template>