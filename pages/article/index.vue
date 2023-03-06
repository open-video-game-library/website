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
                <v-row align="center" justify="end" class="my-8 mr-0">
                    <p>各SNSでもゲーム研究・開発に関する情報を発信しています！</p>
                    <v-btn href="https://zenn.dev/openvideogame" :prependIcon="mdiFileCode" color="#3ea8ff" class="ml-4 text-white">Zenn</v-btn>
                    <v-btn href="https://twitter.com/openvideogame" :prependIcon="mdiTwitter" color="#1DA1F2" class="ml-4 text-white">Twitter</v-btn>
                </v-row>

                <ContentList path="/article" v-slot="{ list }">
                    <div v-for="article in list" :key="article._path">
                        <ArticleCard
                            :path="article._path"
                            :title="article.title"
                            :description="article.description"
                            :thumbnail="article.thumbnail"
                            :link="article.link"
                            :created_at="article.created_at"
                            :updated_at="article.updated_at"
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