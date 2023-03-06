<script setup>
const error = useError()
</script>

<template>
    <section class="content-wrapper">
        <v-container class="content-container">
            <h2>お探しのページは存在しません。</h2>
            <p class="my-4">Status code: {{ error.statusCode }}</p>
            <p class="my-4">Message: {{ error.statusMessage }}</p>
            <v-btn href="https://openvideogame.cc" color="primary" class="my-4">トップページに戻る</v-btn>
        </v-container>
    </section>
</template>