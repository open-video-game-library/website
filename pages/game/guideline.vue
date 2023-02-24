<template>
    <div>
        <section class="content-wrapper">
            <v-container class="content-container">
                <h2>ガイドライン</h2>
                <p>このガイドラインでは、オープンビデオゲームを研究にご活用いただく際のルールと推奨事項についてご説明いたします。</p>
                <p></p>
                <h3 class="my-4 py-4">ご利用OK/NG例</h3>
                <v-row>
                    <v-col>
                        <h4 class="my-4 py-4">OK</h4>
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
                        <h4 class="my-4 py-4">NG</h4>
                        <v-card>
                            <v-card-text>営利を目的とする利用</v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <h3 class="my-4 py-4">研究利用時の推奨事項</h3>
                <v-row :gutter="30">
                    <v-col :span="24">
                        <v-card>
                            <v-row :gutter="30">
                                <v-col :span="24">
                                    <v-card class="mb-10">
                                        <h5 class="text-center mb-10">引用</h5>
                                        <p>
                                            本ライブラリのゲームまたは、機能を研究利用する場合、各ゲームページで指定された論文を引用し、本ゲームライブラリを利用した旨を明記してください。
                                        </p>
                                    </v-card>
                                </v-col>
                                <v-col :span="24">
                                    <v-card>
                                        <h5 class="text-center mb-10">設定パラメータの明示</h5>
                                        <p>
                                            本ゲームは、利用条件に合わせてゲーム内パラメータを変更できることができます。それに伴い、同一のゲームで難易度や体験が変化します。研究の公平性、再現性を保つために、設定したパラメータの値を明示するようにしてください。
                                        </p>
                                    </v-card>
                                    </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>