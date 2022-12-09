<script setup>
const { data } = await useFetch('https://script.google.com/macros/s/AKfycbxc714YcsKPB0pP9K-o6JHhli4BjNjP6aGu17Bplr-H4j2vKhgoXYJT4Wr3HZWjLVGaLQ/exec', {
    method: "GET",
    query: { sheetName: "asset_framework" }
})
const frameworks = (data.value).filter(e => e.isPublic)
</script>

<template>
    <v-container>
        <v-row>
            <v-col
                v-for="(value, index) in frameworks"
                :key=index>
                <v-card width="320" style="margin: 0 auto;">
                    <v-img
                        :src="value.imageLink"
                        height="200px"
                        style="max-width: 80%; max-height: 80%;"
                    ></v-img>
                    <v-card-title>{{ value.name }}</v-card-title>
                    <v-card-text>{{ value.description }}</v-card-text>
                    <v-card-actions v-if="value.link">
                        <v-btn :href="value.link">リンク</v-btn>
                        <v-btn :href="value.articleLink">サイト内記事</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
