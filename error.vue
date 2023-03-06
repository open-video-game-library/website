<script setup>
const error = useError()
</script>

<template>
    <NuxtLayout>
        <NuxtLoadingIndicator color="white" :height="2" :duration="5000" :throttle="200" />
        <section class="content-wrapper">
            <v-container class="content-container">
                <h2>エラーが発生しました。リロードするか、トップページに戻ってやり直してください。</h2>
                <p class="my-4">Status code: {{ error.statusCode }}</p>
                <p class="my-4">Message: {{ error.statusMessage }}</p>
                <v-btn href="https://openvideogame.cc" color="primary" class="my-4">トップページに戻る</v-btn>
            </v-container>
        </section>
    </NuxtLayout>
</template>