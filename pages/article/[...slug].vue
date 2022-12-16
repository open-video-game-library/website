<template>
    <v-container class="py-16">
        <article>
            <ContentDoc v-slot="{ doc }">
                <h1>{{ doc.title }}</h1>
                <hr>
                <p class="text-caption text-right mb-8">
                    作成日：{{ doc.created_at }}
                    <span v-if="doc.updated_at">| 更新日：{{ doc.updated_at }}</span>
                </p>
                <p class="text-caption">
                    {{ doc.description }}
                </p>
                <v-img :src="doc.thumbnail"></v-img>
                <ContentRenderer :value="doc" />
            </ContentDoc>
        </article>
    </v-container>
</template>
