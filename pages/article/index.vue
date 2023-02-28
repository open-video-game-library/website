<script lang="ts" setup>
import {
    mdiTwitter,
    mdiFileCode
} from "@mdi/js"
</script>

<template>
    <div>
        <section class="content-wrapper">
            <v-container class="content-container">
                <h2>記事一覧</h2>
                <aside class="d-flex justify-end align-center">
                    <p>各SNSでもゲーム研究・開発に関する情報を発信しています！</p>
                    <v-btn :prependIcon="mdiFileCode" color="#55c500" class="ml-4 text-white">Qiita</v-btn>
                    <v-btn :prependIcon="mdiTwitter" color="#1DA1F2" class="ml-4 text-white">Twitter</v-btn>
                </aside>
                <ContentList path="/article" v-slot="{ list }">
                    <div v-for="article in list" :key="article._path">
                        <ArticleCard
                            :path="article._path"
                            :title="article.title"
                            :description="article.description"
                            :thumbnail="article.thumbnail"
                            :created_at="article.created_at"
                            :updated_at="article.updated_at"
                            class="my-8"
                        />
                    </div>
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