<script setup lang="ts">
import { animalsPapers, fpsPapers, tennisPapers, cesPapers } from '@/assets/json/survey.json';
import GlobalLink from '@/components/global/GlobalLink.vue';
import { ID_NAME, INTERNAL_URL } from '@/constants';

/** IDの要素にスクロールする */
const scrollToId = (id: string) => {
  const target = document.getElementById(id);
  target?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <main>
    <section class="content-wrapper">
      <div class="content-container">
        <h2>{{ $t('survey.title') }}</h2>
        <p>{{ $t('survey.description') }}</p>
        <h3 class="contents-title">
          {{ $t('survey.contents.title') }}
        </h3>
        <ul class="pl-8">
          <li>
            <GlobalLink :to="`${INTERNAL_URL.GAME_SURVEY}#${ID_NAME.ANIMAL}`" @click="scrollToId(ID_NAME.ANIMAL)">
              {{ $t('survey.contents.animal') }}
            </GlobalLink>
          </li>
          <li>
            <GlobalLink :to="`${INTERNAL_URL.GAME_SURVEY}#${ID_NAME.FPS}`" @click="scrollToId(ID_NAME.FPS)">
              {{ $t('survey.contents.fps') }}
            </GlobalLink>
          </li>
          <li>
            <GlobalLink :to="`${INTERNAL_URL.GAME_SURVEY}#${ID_NAME.TENNIS}`" @click="scrollToId(ID_NAME.TENNIS)">
              {{ $t('survey.contents.tennis') }}
            </GlobalLink>
          </li>
          <li>
            <GlobalLink :to="`${INTERNAL_URL.GAME_SURVEY}#${ID_NAME.CES}`" @click="scrollToId(ID_NAME.CES)">
              {{ $t('survey.contents.ces') }}
            </GlobalLink>
          </li>
        </ul>
      </div>
    </section>

    <!-- 動物ゲーム -->
    <section :id="ID_NAME.ANIMAL" class="content-wrapper background-gray">
      <div class="content-container">
        <h3>{{ $t("survey.animal.title") }}</h3>
        <I18nT
          keypath="survey.animal.description"
          tag="p"
          for="tos"
          scope="global"
        >
          <template #query>
            <p class="query">
              <i>{{ $t("survey.animal.query") }}</i>
            </p>
          </template>
          <template #length>
            <b>{{ animalsPapers.length - 1 }}</b>
          </template>
          <template #reference>
            <GlobalLink
              to="https://www.academia.edu/download/1979904/9h2wevyakguizku.pdf"
              target="blank"
            >
              {{ $t("survey.animal.reference") }}
            </GlobalLink>
          </template>
        </I18nT>
        <div class="papers-table">
          <table>
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
                  <GlobalLink
                    v-if="value.match(/http+s*:\/\/+/)"
                    :to="value"
                    target="blank"
                  >
                    {{ value }}
                  </GlobalLink>
                  <span v-else>{{ value }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Open FPS -->
    <section :id="ID_NAME.FPS" class="content-wrapper">
      <div class="content-container">
        <h3>{{ $t("survey.fps.title") }}</h3>
        <I18nT
          keypath="survey.fps.description"
          tag="p"
          for="tos"
          scope="global"
        >
          <template #length>
            <b>{{ fpsPapers.length - 1 }}</b>
          </template>
        </I18nT>

        <div class="papers-table">
          <table>
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
                  <GlobalLink
                    v-if="value.match(/http+s*:\/\/+/)"
                    :to="value"
                    target="blank"
                  >
                    {{ value }}
                  </GlobalLink>
                  <span v-else>{{ value }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Minimum Tennis -->
    <section :id="ID_NAME.TENNIS" class="content-wrapper background-gray">
      <div class="content-container">
        <h3>{{ $t("survey.tennis.title") }}</h3>
        <I18nT
          keypath="survey.tennis.description"
          tag="p"
          for="tos"
          scope="global"
        >
          <template #length>
            <b>{{ tennisPapers.length - 1 }}</b>
          </template>
        </I18nT>

        <div class="papers-table">
          <table>
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
                  <GlobalLink
                    v-if="value.match(/http+s*:\/\/+/)"
                    :to="value"
                    target="blank"
                  >
                    {{ value }}
                  </GlobalLink>
                  <span v-else>{{ value }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 共通体験サンプル（CES） -->
    <section :id="ID_NAME.CES" class="content-wrapper">
      <div class="content-container">
        <h3>{{ $t("survey.ces.title") }}</h3>
        <I18nT
          keypath="survey.ces.description"
          tag="p"
          for="tos"
          scope="global"
        >
          <template #length>
            <b>{{ cesPapers.length - 1 }}</b>
          </template>
          <template #reference>
            <GlobalLink
              to="https://doi.org/10.1016/0010-0285(87)90008-9"
              target="blank"
            >
              {{ $t("survey.ces.reference") }}
            </GlobalLink>
          </template>
        </I18nT>
        <div class="papers-table">
          <table>
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
                  <GlobalLink
                    v-if="value.match(/http+s*:\/\/+/)"
                    :to="value"
                    target="blank"
                  >
                    {{ value }}
                  </GlobalLink>
                  <span v-else>{{ value }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.contents-title {
  margin-top: 32px;
}

.papers-table {
  overflow-x: auto;
  margin-top: 32px;

  > table {
    background-color: white;
    border-radius: 4px;
  }

  > table > thead > tr > th {
    padding: 16px;
    border-bottom: 1px lightgray solid;
  }

  > table > tbody > tr  > td {
    padding: 8px 16px;
    border-bottom: 1px lightgray solid;
  }
}

th,
td {
  text-align: left;
  min-width: 240px;
}
</style>
