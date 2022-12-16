<template>
    <v-container>
        <article>
            <ContentDoc v-slot="{ doc }">
                <ContentRenderer :value="doc" />
            </ContentDoc>
        </article>
    </v-container>
</template>