<script setup>
const { data: modelData } = await useFetch('https://script.google.com/macros/s/AKfycbxc714YcsKPB0pP9K-o6JHhli4BjNjP6aGu17Bplr-H4j2vKhgoXYJT4Wr3HZWjLVGaLQ/exec', {
    method: "GET",
    query: { sheetName: "asset_3Dmodel" }
})
const models = (modelData.value).filter(data => data.isPublic)
const { data: soundData } = await useFetch('https://script.google.com/macros/s/AKfycbxc714YcsKPB0pP9K-o6JHhli4BjNjP6aGu17Bplr-H4j2vKhgoXYJT4Wr3HZWjLVGaLQ/exec', {
    method: "GET",
    query: { sheetName: "asset_sound" }
})
const sounds = (soundData.value).filter(data => data.isPublic)
const { data: graphicData } = await useFetch('https://script.google.com/macros/s/AKfycbxc714YcsKPB0pP9K-o6JHhli4BjNjP6aGu17Bplr-H4j2vKhgoXYJT4Wr3HZWjLVGaLQ/exec', {
    method: "GET",
    query: { sheetName: "asset_graphic" }
})
const graphics = (graphicData.value).filter(data => data.isPublic)
</script>

<template>
    <div>
        <section class="content-wrapper">
            <v-container class="content-container">
                <h2>3Dモデル</h2>
                <v-row>
                    <v-col v-for="model in models" cols="4" :key="model.name">
                        <ToolMiniCard
                            :name="model.name"
                            :image="model.image"
                            :description="model.description"
                            :link="model.link"
                        />
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section class="content-wrapper bg-gray">
            <v-container class="content-container">
                <h2>BGM / SE</h2>
                <v-row>
                    <v-col v-for="sound in sounds" cols="4" :key="sound.name">
                        <ToolMiniCard
                            :name="sound.name"
                            :image="sound.image"
                            :description="sound.description"
                            :link="sound.link"
                        />
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section class="content-wrapper">
            <v-container class="content-container">
                <h2>グラフィック / UI</h2>
                <v-row>
                    <v-col v-for="graphic in graphics" cols="4" :key="graphic.name">
                        <ToolMiniCard
                            :name="graphic.name"
                            :image="graphic.image"
                            :description="graphic.description"
                            :link="graphic.link"
                        />
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>
