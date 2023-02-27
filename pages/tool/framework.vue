<script setup>
const { data: frameworkData } = await useFetch('https://script.google.com/macros/s/AKfycbxc714YcsKPB0pP9K-o6JHhli4BjNjP6aGu17Bplr-H4j2vKhgoXYJT4Wr3HZWjLVGaLQ/exec', {
    method: "GET",
    query: { sheetName: "framework" }
})
const frameworks = (frameworkData.value).filter(data => data.isPublic)
</script>

<template>
    <div>
        <section class="content-wrapper">
            <v-container class="content-container">
                <h2>開発フレームワーク</h2>
                <v-row>
                    <v-col v-for="framework in frameworks" cols="4" :key="framework.name">
                        <ToolMiniCard
                            :name="framework.name"
                            :image="framework.image"
                            :description="framework.description"
                            :link="framework.link"
                        />
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>
