<script setup>
const { data: browsergameData } = await useFetch('https://script.google.com/macros/s/AKfycbxc714YcsKPB0pP9K-o6JHhli4BjNjP6aGu17Bplr-H4j2vKhgoXYJT4Wr3HZWjLVGaLQ/exec', {
    method: "GET",
    query: { sheetName: "browsergame" }
})
const browsergames = (browsergameData.value).filter(data => data.isPublic)
</script>

<template>
    <div>
        <section class="content-wrapper">
            <v-container class="content-container">
                <h2>ブラウザで遊べるゲーム</h2>
                <v-row>
                    <v-col v-for="game in browsergames" cols="4" :key="game.name">
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
