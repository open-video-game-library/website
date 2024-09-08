<script setup>
import { animalsPapers, fpsPapers, tennisPapers, cesPapers } from '~/assets/json/survey.json';
</script>

<template>
  <div>
    <section class="content-wrapper">
      <div class="content-container">
        <v-container>
          <!-- <h2>サーベイした論文一覧</h2> -->
          <h2>List of surveyed papers</h2>
          <!-- <aside>
            各オープンビデオゲームの設計理由となった、実験やアプリケーション例などでビデオゲームを利用した論文を共有します。
          </aside> -->
          <aside>
            We will share papers that use video games in experiments and
            application examples that were the reason for the design of each
            open video game.
          </aside>

          <!-- <h3>目次</h3> -->
          <h3>Contents</h3>
          <ul class="pl-8">
            <li>
              <!-- <CommonLink to="/game/survey#animals"
                >動物ゲームに関するサーベイ</NuxtLink
              > -->
              <CommonLink to="/game/survey#animals">
                Survey on Animal Games
              </CommonLink>
            </li>
            <li>
              <!-- <CommonLink to="/game/survey#fps">OpenFPSに関するサーベイ</CommonLink> -->
              <CommonLink to="/game/survey#fps">
                Survey on OpenFPS
              </CommonLink>
            </li>
            <li>
              <!-- <CommonLink to="/game/survey#tennis"
                >Minimum Tennisに関するサーベイ</NuxtLink
              > -->
              <CommonLink to="/game/survey#tennis">
                Survey on Minimum Tennis
              </CommonLink>
            </li>
            <li>
              <!-- <CommonLink to="/game/survey#ces"
                >触覚体験サンプル（CES）に関するサーベイ</NuxtLink
              > -->
              <CommonLink to="/game/survey#ces">
                Survey on Common Experience Sample(CES)
              </CommonLink>
            </li>
          </ul>
        </v-container>
      </div>
    </section>

    <section
      id="animals"
      class="content-wrapper bg-gray"
    >
      <div class="content-container">
        <v-container>
          <!-- <h3>動物ゲーム</h3> -->
          <h3>Animal Games</h3>
          <!-- <aside>
            このプロジェクトで最初に開発した、Hunter Chameleon・Escape
            Fish・Sliding Penguinに関してサーベイした論文です。
            開発するジャンルを決定するため、ACM Digital
            Libraryと情報処理学会の電子図書館で以下のクエリで検索しました。
            <p class="my-4">
              <i
                >"Title:((game AND device) OR (game AND controller) OR (game AND
                experience)) AND Abstract:((game AND device) OR (game AND
                controller) OR (game AND experience))"</i
              >
            </p>
            そこからさらにスクリーニングをおこない、最終的に<b>{{
              animalsPapers.length + 1
            }}</b
            >本の論文を抽出しました。 ジャンル分けは<a
              href="https://www.academia.edu/download/1979904/9h2wevyakguizku.pdf"
              target="_blank"
              rel="noopener noreferrer"
              >Wolfらの論文</a
            >を参考にしました。
          </aside> -->
          <aside>
            This is a survey of papers on the Hunter Chameleon, Escape Fish, and
            Sliding Penguin, the first three developed in this project. To
            determine the genres to be developed, we searched the ACM Digital
            Library and the IPSJ electronic library using the following queries.
            <p class="my-4">
              <i>"Title:((game AND device) OR (game AND controller) OR (game AND
                experience)) AND Abstract:((game AND device) OR (game AND
                controller) OR (game AND experience))"</i>
            </p>
            From there, we conducted further screening and finally extracted
            <b>{{ animalsPapers.length + 1 }}</b> papers. The genre classification
            was based on
            <a
              href="https://www.academia.edu/download/1979904/9h2wevyakguizku.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >Wolf et al</a>.
          </aside>

          <v-table>
            <thead>
              <tr>
                <th
                  v-for="(value, key) in animalsPapers[0]"
                  :key="value"
                  class="text-left"
                >
                  {{ key }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="paper in animalsPapers"
                :key="paper.title"
              >
                <td
                  v-for="value in paper"
                  :key="value"
                  class="text-left"
                >
                  <a
                    v-if="value.match(/http+s*:\/\/+/)"
                    :href="value"
                    target="_blank"
                    rel="noopener noreferrer"
                  >{{ value }}</a>
                  <span v-else>{{ value }}</span>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-container>
      </div>
    </section>

    <section
      id="fps"
      class="content-wrapper"
    >
      <div class="content-container">
        <v-container>
          <h3>Open FPS</h3>
          <!-- <aside>
            FPSゲームが利用されている論文を調査しました。 全部で<b>{{
              fpsPapers.length + 1
            }}</b
            >本の論文が見つかりました。
          </aside> -->
          <aside>
            We researched papers in which FPS games are used. In total, we found
            <b>{{ fpsPapers.length + 1 }}</b> papers.
          </aside>

          <v-table>
            <thead>
              <tr>
                <th
                  v-for="(value, key) in fpsPapers[0]"
                  :key="value"
                  class="text-left"
                >
                  {{ key }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="paper in fpsPapers"
                :key="paper.title"
              >
                <td
                  v-for="value in paper"
                  :key="value"
                  class="text-left"
                >
                  <a
                    v-if="value.match(/http+s*:\/\/+/)"
                    :href="value"
                    target="_blank"
                    rel="noopener noreferrer"
                  >{{ value }}</a>
                  <span v-else>{{ value }}</span>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-container>
      </div>
    </section>

    <section
      id="tennis"
      class="content-wrapper bg-gray"
    >
      <div class="content-container">
        <v-container>
          <h3>Minimum Tennis</h3>
          <!-- <aside>
            テニスゲームが利用されている論文を調査しました。 全部で<b>{{
              tennisPapers.length + 1
            }}</b
            >本の論文が見つかりました。
          </aside> -->
          <aside>
            We surveyed the papers in which tennis games are used. In total, we
            found <b>{{ tennisPapers.length + 1 }}</b> papers.
          </aside>

          <v-table>
            <thead>
              <tr>
                <th
                  v-for="(value, key) in tennisPapers[0]"
                  :key="value"
                  class="text-left"
                >
                  {{ key }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="paper in tennisPapers"
                :key="paper.title"
              >
                <td
                  v-for="value in paper"
                  :key="value"
                  class="text-left"
                >
                  <a
                    v-if="value.match(/http+s*:\/\/+/)"
                    :href="value"
                    target="_blank"
                    rel="noopener noreferrer"
                  >{{ value }}</a>
                  <span v-else>{{ value }}</span>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-container>
      </div>
    </section>

    <section
      id="ces"
      class="content-wrapper"
    >
      <div class="content-container">
        <v-container>
          <!-- <h3>触覚体験サンプル（CES）</h3> -->
          <h3>Common Experience Sample（CES）</h3>
          <!-- <aside>
            研究者の触覚ディスプレイ体験アプリケーションに対するニーズを把握するため、触覚ディスプレイの論文を調査しました。
            全部で<b>{{ cesPapers.length + 1 }}</b
            >本の論文が見つかりました。
            触覚フィードバックするのものの特性を調査し、CESの開発では<a
              href="https://doi.org/10.1016/0010-0285(87)90008-9"
              target="_blank"
              rel="noopener noreferrer"
              >Ledermanらの論文</a
            >を参考に6次元（質感・硬さ・温度・重さ・形状・動き）に分類しました。
          </aside> -->
          <aside>
            To understand researchers' needs for tactile display experience
            applications, we surveyed papers on tactile displays. In total, we
            found <b>{{ cesPapers.length + 1 }}</b> papers. We investigated the
            characteristics of objects that provide tactile feedback and
            classified them into six dimensions (texture, hardness, temperature,
            weight, shape, and motion) with reference to the paper by
            <a
              href="https://doi.org/10.1016/0010-0285(87)90008-9"
              target="_blank"
              rel="noopener noreferrer"
            >Lederman et al</a>. in the development of CES.
          </aside>

          <v-table>
            <thead>
              <tr>
                <th
                  v-for="(value, key) in cesPapers[0]"
                  :key="value"
                  class="text-left"
                >
                  {{ key }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="paper in cesPapers"
                :key="paper.title"
              >
                <td
                  v-for="value in paper"
                  :key="value"
                  class="text-left"
                >
                  <a
                    v-if="value.match(/http+s*:\/\/+/)"
                    :href="value"
                    target="_blank"
                    rel="noopener noreferrer"
                  >{{ value }}</a>
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
th,
td {
  min-width: 240px;
}
</style>
