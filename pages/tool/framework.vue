<script setup>
/** 環境変数を扱うRuntimeConfigの使用 */
const config = useRuntimeConfig()

/** @type {Object[]} opengame外部ツールDBのスプレッドシートから読み込んだフレームワークのデータ */
const { data: frameworkData } = await useFetch(config.public.externalDbApi, {
    method: "GET",
    query: { sheetName: "framework" }
})

/** @type {Object[]} isPublicがtrueのものだけ抽出したフレームワークのデータ */
const frameworks = (frameworkData.value).filter(data => data.isPublic)
</script>

<template>
    <div>
        <section class="content-wrapper">
            <v-container class="content-container">
                <h2>開発フレームワーク</h2>
                <v-row>
                    <v-col v-for="framework in frameworks" cols="12" sm="4" xl="3" :key="framework.name">
                        <ToolMiniCard
                            :name="framework.name"
                            :image="framework.image"
                            :description="framework.description"
                            :link="framework.link"
                            style="height: 100%;"
                        />
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>
