<template>
    <v-container>
        <h2>記事一覧</h2>
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
</template>