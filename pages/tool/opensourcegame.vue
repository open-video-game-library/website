<script setup>
const { data: opensourcegameData } = await useFetch('https://script.google.com/macros/s/AKfycbxc714YcsKPB0pP9K-o6JHhli4BjNjP6aGu17Bplr-H4j2vKhgoXYJT4Wr3HZWjLVGaLQ/exec', {
    method: "GET",
    query: { sheetName: "opensourcegame" }
})
const sports = (opensourcegameData.value).filter(data => data.genre == "sports" && data.isPublic)
const shootings = (opensourcegameData.value).filter(data => data.genre == "shooting" && data.isPublic)
const platforms = (opensourcegameData.value).filter(data => data.genre == "platform" && data.isPublic)
const fightings = (opensourcegameData.value).filter(data => data.genre == "fighting" && data.isPublic)
const puzzles = (opensourcegameData.value).filter(data => data.genre == "puzzle" && data.isPublic)
const drivings = (opensourcegameData.value).filter(data => data.genre == "driving" && data.isPublic)
const others = (opensourcegameData.value).filter(data => data.genre == "other" && data.isPublic)
</script>

<template>
    <div>
        <section class="content-wrapper">
            <v-container class="content-container">
                <h2>オープンソースゲーム</h2>
                
                <h3>スポーツ</h3>
                <v-row>
                    <v-col v-for="game in sports" cols="4" :key="game.name">
                        <ToolMiniCard
                            :name="game.name"
                            :image="game.image"
                            :description="game.description"
                            :link="game.link"
                        />
                    </v-col>
                </v-row>

                <h3>シューティング</h3>
                <v-row>
                    <v-col v-for="game in shootings" cols="4" :key="game.name">
                        <ToolMiniCard
                            :name="game.name"
                            :image="game.image"
                            :description="game.description"
                            :link="game.link"
                        />
                    </v-col>
                </v-row>

                <h3>プラットフォーム</h3>
                <v-row>
                    <v-col v-for="game in platforms" cols="4" :key="game.name">
                        <ToolMiniCard
                            :name="game.name"
                            :image="game.image"
                            :description="game.description"
                            :link="game.link"
                        />
                    </v-col>
                </v-row>

                <h3>レーシング / ドライビング</h3>
                <v-row>
                    <v-col v-for="game in drivings" cols="4" :key="game.name">
                        <ToolMiniCard
                            :name="game.name"
                            :image="game.image"
                            :description="game.description"
                            :link="game.link"
                        />
                    </v-col>
                </v-row>

                <h3>格闘</h3>
                <v-row>
                    <v-col v-for="game in fightings" cols="4" :key="game.name">
                        <ToolMiniCard
                            :name="game.name"
                            :image="game.image"
                            :description="game.description"
                            :link="game.link"
                        />
                    </v-col>
                </v-row>

                <h3>パズル / ボードゲーム</h3>
                <v-row>
                    <v-col v-for="game in puzzles" cols="4" :key="game.name">
                        <ToolMiniCard
                            :name="game.name"
                            :image="game.image"
                            :description="game.description"
                            :link="game.link"
                        />
                    </v-col>
                </v-row>

                <h3>その他</h3>
                <v-row>
                    <v-col v-for="game in others" cols="4" :key="game.name">
                        <ToolMiniCard
                            :name="game.name"
                            :image="game.image"
                            :description="game.description"
                            :link="game.link"
                        />
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>
