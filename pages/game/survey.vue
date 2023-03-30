<script setup>
/** 環境変数を扱うRuntimeConfigの使用 */
const config = useRuntimeConfig()

/** @type {Object[]} opengame調査論文DBのスプレッドシートから読み込んだ動物ゲームに関するサーベイ論文のデータ */
const { data: animalsData } = await useFetch(config.public.surveyDbApi, {
    method: "GET",
    query: { sheetName: "animals" }
})

/** @type {Object[]} opengame調査論文DBのスプレッドシートから読み込んだFPSゲームのサーベイ論文のデータ */
const { data: fpsData } = await useFetch(config.public.surveyDbApi, {
    method: "GET",
    query: { sheetName: "fps" }
})

/** @type {Object[]} opengame調査論文DBのスプレッドシートから読み込んだテニスゲームのサーベイ論文のデータ */
const { data: tennisData } = await useFetch(config.public.surveyDbApi, {
    method: "GET",
    query: { sheetName: "tennis" }
})

/** @type {Object[]} opengame調査論文DBのスプレッドシートから読み込んだ触覚体験サンプルのサーベイ論文のデータ */
const { data: cesData } = await useFetch(config.public.surveyDbApi, {
    method: "GET",
    query: { sheetName: "ces" }
})
</script>

<template>
    <div>
        <section class="content-wrapper">
            <div class="content-container">
                <v-container>
                    <h2>サーベイした論文一覧</h2>
                    <aside>各オープンビデオゲームの設計理由となった、実験やアプリケーション例などでビデオゲームを利用した論文を共有します。</aside>

                    <h3>目次</h3>
                    <ul class="pl-8">
                        <li><NuxtLink to="/game/survey#animals">動物ゲームに関するサーベイ</NuxtLink></li>
                        <li><NuxtLink to="/game/survey#fps">OpenFPSに関するサーベイ</NuxtLink></li>
                        <li><NuxtLink to="/game/survey#tennis">Minimum Tennisに関するサーベイ</NuxtLink></li>
                        <li><NuxtLink to="/game/survey#ces">触覚体験サンプル（CES）に関するサーベイ</NuxtLink></li>
                    </ul>

                </v-container>
            </div>
        </section>

        <section class="content-wrapper bg-gray" id="animals">
            <div class="content-container">
                <v-container>

                    <h3>動物ゲーム</h3>
                    <aside>
                        このプロジェクトで最初に開発した、Hunter Chameleon・Escape Fish・Sliding Penguinに関してサーベイした論文です。
                        開発するジャンルを決定するため、ACM Digital Libraryと情報処理学会の電子図書館で以下のクエリで検索しました。
                        <p class="my-4"><i>"Title:((game AND device) OR (game AND controller) OR (game AND experience)) AND Abstract:((game AND device) OR (game AND controller) OR (game AND experience))"</i></p>
                        そこからさらにスクリーニングをおこない、最終的に<b>{{ animalsData.length + 1 }}</b>本の論文を抽出しました。
                        ジャンル分けは<a href="https://www.academia.edu/download/1979904/9h2wevyakguizku.pdf" target="_blank" rel="noopener noreferrer">Wolfらの論文</a>を参考にしました。
                    </aside>

                    <v-table>
                        <thead>
                            <tr>
                                <th
                                    v-for="(value, key) in animalsData[0]"
                                    :key="value"
                                    class="text-left"
                                >{{ key }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="paper in animalsData" :key="paper.title">
                                <td
                                    v-for="value in paper"
                                    :key="value"
                                    class="text-left"
                                >
                                    <a v-if="value.match(/http+s*:\/\/+/)" :href="value" target="_blank" rel="noopener noreferrer">{{ value }}</a>
                                    <span v-else>{{ value }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-container>
            </div>
        </section>

        <section class="content-wrapper" id="fps">
            <div class="content-container">
                <v-container>
                    <h3>Open FPS</h3>
                    <aside>
                        FPSゲームが利用されている論文を調査しました。
                        全部で<b>{{ fpsData.length + 1 }}</b>本の論文が見つかりました。
                    </aside>

                    <v-table>
                        <thead>
                            <tr>
                                <th
                                    v-for="(value, key) in fpsData[0]"
                                    :key="value"
                                    class="text-left"
                                >{{ key }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="paper in fpsData" :key="paper.title">
                                <td
                                    v-for="value in paper"
                                    :key="value"
                                    class="text-left"
                                >
                                    <a v-if="value.match(/http+s*:\/\/+/)" :href="value" target="_blank" rel="noopener noreferrer">{{ value }}</a>
                                    <span v-else>{{ value }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-container>
            </div>
        </section>

        <section class="content-wrapper bg-gray" id="tennis">
            <div class="content-container">
                <v-container>
                    <h3>Minimum Tennis</h3>
                    <aside>
                        テニスゲームが利用されている論文を調査しました。
                        全部で<b>{{ tennisData.length + 1 }}</b>本の論文が見つかりました。
                    </aside>

                    <v-table>
                        <thead>
                            <tr>
                                <th
                                    v-for="(value, key) in tennisData[0]"
                                    :key="value"
                                    class="text-left"
                                >{{ key }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="paper in tennisData" :key="paper.title">
                                <td
                                    v-for="value in paper"
                                    :key="value"
                                    class="text-left"
                                >
                                    <a v-if="value.match(/http+s*:\/\/+/)" :href="value" target="_blank" rel="noopener noreferrer">{{ value }}</a>
                                    <span v-else>{{ value }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-container>
            </div>
        </section>

        <section class="content-wrapper" id="ces">
            <div class="content-container">
                <v-container>
                    <h3>触覚体験サンプル（CES）</h3>
                    <aside>
                        研究者の触覚ディスプレイ体験アプリケーションに対するニーズを把握するため、触覚ディスプレイの論文を調査しました。
                        全部で<b>{{ cesData.length + 1 }}</b>本の論文が見つかりました。
                        触覚フィードバックするのものの特性を調査し、CESの開発では<a href="https://doi.org/10.1016/0010-0285(87)90008-9" target="_blank" rel="noopener noreferrer">Ledermanらの論文</a>を参考に6次元（質感・硬さ・温度・重さ・形状・動き）に分類しました。
                    </aside>

                    <v-table>
                        <thead>
                            <tr>
                                <th
                                    v-for="(value, key) in cesData[0]"
                                    :key="value"
                                    class="text-left"
                                >{{ key }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="paper in cesData" :key="paper.title">
                                <td
                                    v-for="value in paper"
                                    :key="value"
                                    class="text-left"
                                >
                                    <a v-if="value.match(/http+s*:\/\/+/)" :href="value" target="_blank" rel="noopener noreferrer">{{ value }}</a>
                                    <span v-else>{{ value }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-container>
            </div>
        </section>
    </div>
</template>

<style scoped>
th, td {
    min-width: 240px;
}
</style>