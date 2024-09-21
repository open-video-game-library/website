<template>
  <div>
    <section class="content-wrapper">
      <div class="content-container">
        <VContainer>
          <h2>{{ $t('contact.title') }}</h2>
          <aside>{{ $t('contact.description') }}</aside>
          <VRow
            justify="center"
            height="880"
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScpDBuQV0ca-PTrxrzm4QniH_u5_wF-3SGEHx1FT3SVJGbpqg/viewform?embedded=true"
              width="640"
              height="880"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >読み込んでいます…</iframe>
          </VRow>
        </VContainer>
      </div>
    </section>
  </div>
</template>
