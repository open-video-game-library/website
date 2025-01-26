<script setup lang="ts">
import GlobalLink from '@/components/global/GlobalLink.vue';
</script>

<template>
  <footer class="global-footer content-wrapper">
    <div class="content-container footer-navigation">
      <NuxtImg
        src="/logos/black.png"
        sizes="320 md:640"
        class="logo"
      />

      <nav class="navigation-list">
        <p class="title">
          {{ $t('footer.about.title') }}
        </p>
        <ul class="list">
          <li>
            <GlobalLink to="/#feature">
              <span class="footer-link">{{ $t('footer.about.summary') }}</span>
            </GlobalLink>
          </li>
          <li>
            <GlobalLink to="/#member">
              <span class="footer-link">{{ $t('footer.about.member') }}</span>
            </GlobalLink>
          </li>
          <li>
            <GlobalLink to="/#publication">
              <span class="footer-link">{{ $t('footer.about.publication') }}</span>
            </GlobalLink>
          </li>
        </ul>
      </nav>

      <nav class="navigation-list">
        <p class="title">
          {{ $t('footer.game.title') }}
        </p>
        <ul class="list">
          <li>
            <GlobalLink to="/game">
              <span class="footer-link">{{ $t('footer.game.ovgl') }}</span>
            </GlobalLink>
          </li>
          <li>
            <GlobalLink to="/tool/opensourcegame">
              <span class="footer-link">{{ $t('footer.game.source') }}</span>
            </GlobalLink>
          </li>
          <li>
            <GlobalLink to="/tool/browsergame">
              <span class="footer-link">{{ $t('footer.game.browser') }}</span>
            </GlobalLink>
          </li>
          <li>
            <GlobalLink to="/tool/asset">
              <span class="footer-link">{{ $t('footer.game.asset') }}</span>
            </GlobalLink>
          </li>
        </ul>
      </nav>

      <nav class="navigation-list">
        <p class="title">
          {{ $t('footer.tool.title') }}
        </p>
        <ul class="list">
          <li>
            <GlobalLink
              to="https://open-video-game-library.github.io/MultiViewRecorder/"
            >
              <span class="footer-link">{{ $t('footer.tool.recorder') }}</span>
            </GlobalLink>
          </li>
          <li>
            <GlobalLink to="https://youtu.be/xpkJ13SegK4">
              <span class="footer-link">{{ $t('footer.tool.aloud') }}</span>
            </GlobalLink>
          </li>
          <li>
            <GlobalLink to="/tool#extool">
              <span class="footer-link">{{ $t('footer.tool.others') }}</span>
            </GlobalLink>
          </li>
        </ul>
      </nav>

      <nav class="navigation-list">
        <p class="title">
          {{ $t('footer.others.title') }}
        </p>
        <ul class="list">
          <li>
            <GlobalLink to="/contact">
              <span class="footer-link">{{ $t('footer.others.contact') }}</span>
            </GlobalLink>
          </li>
          <li>
            <GlobalLink
              to="https://keita-lab.jp/"
              target="blank"
            >
              <span class="footer-link">{{ $t('footer.others.organization') }}</span>
            </GlobalLink>
          </li>
        </ul>
      </nav>

      <nav class="navigation-list">
        <p class="title">
          {{ $t('footer.links.title') }}
        </p>
        <ul class="list">
          <li>
            <GlobalLink
              to="https://github.com/open-video-game-library"
              class="footer-link"
            >
              <span class="footer-link">{{ $t('footer.links.github') }}</span>
            </GlobalLink>
          </li>
          <li>
            <GlobalLink
              to="https://twitter.com/openvideogame"
            >
              <span class="footer-link">{{ $t('footer.links.x') }}</span>
            </GlobalLink>
          </li>
          <li>
            <GlobalLink
              to="https://zenn.dev/openvideogame"
            >
              <span class="footer-link">{{ $t('footer.links.zenn') }}</span>
            </GlobalLink>
          </li>
        </ul>
      </nav>

      <nav class="navigation-list">
        <p class="title">
          {{ $t('footer.webgl.title') }}
        </p>
        <ul class="list favicons">
          <li class="favicon">
            <GlobalLink to="https://play.unity.com/u/openvideogame">
              <NuxtImg
                src="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://play.unity.com/&size=32"
                width="24"
                height="24"
                :alt="$t('footer.webgl.unity')"
              />
            </GlobalLink>
          </li>
          <li class="favicon">
            <GlobalLink to="https://unityroom.com/users/i1tdqfmc0g2wa7y9hje5">
              <NuxtImg
                src="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://unityroom.com/&size=32"
                width="24"
                height="24"
                :alt="$t('footer.webgl.unityroom')"
              />
            </GlobalLink>
          </li>
          <li class="favicon">
            <GlobalLink to="https://open-video-game.itch.io/">
              <NuxtImg
                src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://itch.io/&size=32"
                width="24"
                height="24"
                :alt="$t('footer.webgl.itch')"
              />
            </GlobalLink>
          </li>
        </ul>
      </nav>

      <address class="copyright">
        Open Video Game Project &copy; 2021 - {{ new Date().getFullYear() }}
      </address>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.global-footer {
  background-color: #eeeeee;
}

.footer-navigation {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media screen and (min-width: 640px) {
    gap: 32px;
  }

  > .logo {
    object-fit: cover;
    grid-column: span 4;
    margin: 0 auto 16px;
  }

  > .copyright {
    grid-column: span 4;
    margin-top: 16px;
    text-align: center;
  }
}

.navigation-list {
  grid-column: span 2;

  @media screen and (min-width: 640px) {
    grid-column: span 1;
  }

  > .title {
    border-bottom: 1px solid lightgray;
  }

  > .list {
    margin: 8px 0 0;
    display: flex;
    flex-direction: column;
    gap: 4px 8px;
    font-size: 14px;
  }

  > .favicons {
    flex-direction: row;

    > .favicon {
      border-radius: 4px;
      overflow: hidden;
    }
  }
}

.footer-link {
  color: gray;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.4s 0s ease;

  &:hover {
    border-color: gray;
  }
}
</style>
