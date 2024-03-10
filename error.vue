<script setup>
const error = useError();

const ERROR_CODE = {
    NOT_FOUND: "404",
};
</script>

<template>
    <NuxtLayout>
        <NuxtLoadingIndicator color="white" :height="3" :duration="5000" :throttle="200" />
        <section class="content-wrapper">
            <div class="content-container">
                <v-container>
                    <h2>
                        <span v-if="error.statusCode === ERROR_CODE.NOT_FOUND">お探しのページは存在しません。</span>
                        <span v-else>エラーが発生しました。リロードするか、トップページに戻ってやり直してください。</span>
                    </h2>
                    <p class="my-4">Status code: {{ error.statusCode }}</p>
                    <p class="my-4">Message: {{ error.statusMessage }}</p>
                    <v-btn href="/" color="primary" class="my-4">トップページに戻る</v-btn>
                </v-container>
            </div>
        </section>
    </NuxtLayout>
</template>