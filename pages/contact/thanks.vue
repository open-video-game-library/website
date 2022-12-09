<script lang="ts" setup>
const route = useRoute()
</script>


<template>
    <v-container>
        <h3>ご連絡ありがとうございます。以下の内容で承りました。</h3>
        <p>お名前 {{ route.query.name }}</p>
        <p>メールアドレス {{ route.query.email }}</p>
        <p>メッセージ {{ route.query.message }}</p>
    </v-container>
</template>