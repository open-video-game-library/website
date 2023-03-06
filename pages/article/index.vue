<script lang="ts" setup>
import {
    mdiTwitter,
    mdiFileCode
} from "@mdi/js"
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const query: QueryBuilderParams = {
    path: '/articles',
    sort: [{ created_at: -1 }]
}
</script>

<template>
    <div>
        <section class="content-wrapper">
            <v-container class="content-container">
                <h2>記事一覧</h2>
                <v-row align="center" justify="end" class="my-4">
                    <v-col cols="12" sm="auto">
                        <p>各SNSでもゲーム研究・開発に関する情報を発信しています！</p>
                    </v-col>
                    <v-col cols="6" sm="auto">
                        <v-btn href="https://zenn.dev/openvideogame" :prependIcon="mdiFileCode" color="#3ea8ff" class="ml-4 text-white">Zenn</v-btn>
                    </v-col>
                    <v-col cols="6" sm="auto">
                        <v-btn href="https://twitter.com/openvideogame" :prependIcon="mdiTwitter" color="#1DA1F2" class="ml-4 text-white">Twitter</v-btn>
                    </v-col>
                </v-row>

                <ContentList :query="query" path="/article" v-slot="{ list }">
                    <v-row>
                        <v-col v-for="article in list" :key="article._path" cols="12">
                            <ArticleCard
                                :path="article._path"
                                :title="article.title"
                                :description="article.description"
                                :thumbnail="article.thumbnail"
                                :exlink="article.exlink"
                                :created_at="article.created_at"
                                :updated_at="article.updated_at"
                            />
                        </v-col>
                    </v-row>
                </ContentList>
            </v-container>
        </section>
    </div>
</template>

<style scoped>
.text-white {
    color: white;
}
</style>