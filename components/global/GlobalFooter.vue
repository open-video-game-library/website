<script setup>
import { mdiTwitter, mdiGithub, mdiFileCode } from '@mdi/js';
import logoImg from '@/assets/image/logo_black.png';

const thisyear = new Date().getFullYear();

const webglSites = [
  {
    name: 'Unity Play',
    link: 'https://play.unity.com/u/openvideogame',
    image:
      'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://play.unity.com/&size=32',
  },
  {
    name: 'unityroom',
    link: 'https://unityroom.com/users/i1tdqfmc0g2wa7y9hje5',
    image:
      'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://unityroom.com/&size=32',
  },
  {
    name: 'itch.io',
    link: 'https://open-video-game.itch.io/',
    image:
      'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://itch.io/&size=32',
  },
];
</script>

<template>
  <v-footer
    class="py-16"
    color="grey-lighten-3"
  >
    <v-container>
      <v-img
        :src="logoImg"
        height="125"
      />
      <v-row
        justify="space-between"
        class="mt-4 pt-4"
      >
        <v-col
          cols="6"
          sm="3"
        >
          <!-- <ul>
                        <li>この取り組みを知る</li>
                        <v-divider></v-divider>
                        <li><CommonLink to="/#abstract">概要</CommonLink></li>
                        <li><CommonLink to="/#member">メンバー</CommonLink></li>
                        <li><CommonLink to="/#publication">出版</CommonLink></li>
                    </ul> -->
          <ul>
            <li>Learn about OVGL</li>
            <v-divider />
            <li>
              <CommonLink to="/#abstract">
                Summary
              </CommonLink>
            </li>
            <li>
              <CommonLink to="/#member">
                Member
              </CommonLink>
            </li>
            <li>
              <CommonLink to="/#publication">
                Publications
              </CommonLink>
            </li>
          </ul>
        </v-col>

        <v-col
          cols="6"
          sm="3"
        >
          <!-- <ul>
            <li>ゲームを見つける</li>
            <v-divider></v-divider>
            <li><CommonLink to="/game">オープンビデオゲーム</CommonLink></li>
            <li>
              <CommonLink to="/tool/opensourcegame"
                >オープンソースゲーム</NuxtLink
              >
            </li>
            <li>
              <CommonLink to="/tool/browsergame">ブラウザで遊べるゲーム</CommonLink>
            </li>
            <li><CommonLink to="/tool/asset">アセット</CommonLink></li>
          </ul> -->
          <ul>
            <li>Find Games</li>
            <v-divider />
            <li>
              <CommonLink to="/game">
                Open Video Games
              </CommonLink>
            </li>
            <li>
              <CommonLink to="/tool/opensourcegame">
                Open Source Games
              </CommonLink>
            </li>
            <li>
              <CommonLink to="/tool/browsergame">
                Browser Games
              </CommonLink>
            </li>
            <li>
              <CommonLink to="/tool/asset">
                Asset
              </CommonLink>
            </li>
          </ul>
        </v-col>

        <v-col
          cols="6"
          sm="3"
        >
          <!-- <ul>
            <li>実験ツールを見つける</li>
            <v-divider></v-divider>
            <li>
              <a
                href="https://open-video-game-library.github.io/MultiViewRecorder/"
                >Multi View Recorder</a
              >
            </li>
            <li><a href="https://youtu.be/xpkJ13SegK4">あアラウド法</a></li>
            <li><CommonLink to="/tool#extool">その他外部ツール</CommonLink></li>
          </ul> -->
          <ul>
            <li>Finding Experimental Tools</li>
            <v-divider />
            <li>
              <a
                href="https://open-video-game-library.github.io/MultiViewRecorder/"
              >Multi View Recorder</a>
            </li>
            <li><a href="https://youtu.be/xpkJ13SegK4">Ah-Aloud Method</a></li>
            <li>
              <CommonLink to="/tool#extool">
                Other External Tools
              </CommonLink>
            </li>
          </ul>
        </v-col>

        <v-col
          cols="6"
          sm="3"
        >
          <ul>
            <li>Others</li>
            <v-divider />
            <!-- <li><CommonLink to="/contact">お問い合わせ</CommonLink></li>
            <li>
              <a
                href="https://keita-lab.jp/"
                target="_blank"
                rel="noopener noreferrer"
                >運営組織</a
              >
            </li> -->
            <li>
              <CommonLink to="/contact">
                Contact
              </CommonLink>
            </li>
            <li>
              <a
                href="https://keita-lab.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >Organization</a>
            </li>
          </ul>
        </v-col>
      </v-row>

      <v-row class="mt-4 pt-4">
        <v-col
          cols="4"
          sm="3"
        >
          <ul>
            <!-- <li>リンク</li> -->
            <li>Links</li>
            <v-divider />
            <li>
              <a
                href="https://github.com/open-video-game-library"
                class="d-flex align-center"
              ><v-icon :icon="mdiGithub" /> <span>GitHub</span></a>
            </li>
            <li>
              <a
                href="https://twitter.com/openvideogame"
                class="d-flex align-center"
              ><v-icon :icon="mdiTwitter" /> <span>X(Twitter)</span></a>
            </li>
            <li>
              <a
                href="https://zenn.dev/openvideogame"
                class="d-flex align-center"
              ><v-icon :icon="mdiFileCode" /> <span>Zenn</span></a>
            </li>
          </ul>
        </v-col>

        <v-col
          cols="8"
          sm="9"
        >
          <ul>
            <!-- <li>ゲーム掲載サイト</li> -->
            <li>Game Listing Site</li>
            <v-divider />
            <li class="d-inline-flex">
              <v-card
                v-for="site in webglSites"
                :key="site.name"
                width="20"
                height="20"
                class="ma-1 pa-1"
              >
                <a
                  :href="site.link"
                  class="full-link"
                />
                <v-img
                  :src="site.image"
                  cover
                />
              </v-card>
            </li>
          </ul>
        </v-col>
      </v-row>

      <v-row
        justify="center"
        class="mt-4 pt-4"
      >
        <address>Open Video Game Project &copy; 2021 - {{ thisyear }}</address>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
  li {
    margin: 4px 0;
    font-size: 14px;
  }
}

a {
  color: gray;
  text-decoration: none;
}
</style>
