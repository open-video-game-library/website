<template>
    <div>
        <section class="content-wrapper">
            <v-container class="content-container">
                <h2>ガイドライン</h2>
                <p>このガイドラインでは、オープンビデオゲームを研究にご活用いただく際のルールと推奨事項についてご説明いたします。</p>
                <p>オープンビデオゲームは基本的に<strong>MITライセンス</strong>として公開しております。各ゲームの<a href="https://github.com/open-video-game-library">GitHub</a>も併せてご覧ください。</p>

                <h3 class="mt-8 pt-8 text-center">ご利用OK/NG例</h3>
                <v-row>
                    <v-col>
                        <h4 class="my-4 py-4 text-center">OK</h4>
                        <v-card>
                            <v-card-text>営利を目的としない以下のような利用</v-card-text>
                            <v-card-text>
                                <h5>研究や創作活動での利用</h5>
                                <ul class="px-4 py-2">
                                    <li>オープンビデオゲームで取得した体験データを用いて評価実験を行い、その内容を論文に掲載する</li>
                                    <li>学術会議や展示会にてオープンビデオゲームをデモンストレーション発表に使用する</li>
                                    <li>オンライン会議や配信サービスにて、プレイしている様子を共有する</li>
                                </ul>
                            </v-card-text>
                            <v-card-text>
                                <h5>個人利用</h5>
                                <ul class="px-4 py-2">
                                    <li>友人や家族と本ゲームをプレイする。また、その様子をSNSなどでシェアをする</li>
                                    <li>本ゲームのソースコードを改変し、ゲームを自作する</li>
                                </ul>
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col>
                        <h4 class="my-4 py-4 text-center">NG</h4>
                        <v-card>
                            <v-card-text>営利を目的とする利用</v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <h3 class="mt-12 pt-12 my-4 py-4 text-center">研究利用時の推奨事項</h3>
                <v-row>
                    <v-col cols="12">
                        <v-card>
                            <v-card-text>
                                <h5>引用</h5>
                                <ul class="px-4 py-2">
                                    <li>本ライブラリのゲームまたは、機能を研究利用する場合、各ゲームページで指定された論文を引用し、本ゲームライブラリを利用した旨を明記してください。</li>
                                </ul>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col :span="24">
                        <v-card>
                            <v-card-text>
                                <h5>設定パラメータの明示</h5>
                                <ul class="px-4 py-2">
                                    <li>本ゲームは、利用条件に合わせてゲーム内パラメータを変更できることができます。それに伴い、同一のゲームで難易度や体験が変化します。研究の公平性、再現性を保つために、設定したパラメータの値を明示するようにしてください。</li>
                                </ul>
                            </v-card-text>
                        </v-card>
                        </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>