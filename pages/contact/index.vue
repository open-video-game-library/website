<template>
  <div>
    <section class="content-wrapper">
      <div class="content-container contact-wrapper">
        <h1 class="title">
          {{ $t('contact.title') }}
        </h1>
        <p class="description">
          {{ $t('contact.description') }}
        </p>
        <div class="form">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScpDBuQV0ca-PTrxrzm4QniH_u5_wF-3SGEHx1FT3SVJGbpqg/viewform?embedded=true"
            width="640"
            height="920"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            class="iframe"
          >読み込んでいます…</iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.contact-wrapper {
  > .title {
    margin-bottom: 32px;
  }

  > .description {
    margin-bottom: 32px;
  }

  > .form {
    display: flex;
    place-content: center;
  }

  > .form > .iframe {
    height: 920px;

    @media screen and (min-width: 640px) {
      height: 660px;
    }
  }
}
</style>
