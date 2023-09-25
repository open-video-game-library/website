<template>
  <div>
    <section class="content-wrapper">
      <div class="content-container">
        <v-container>
          <article>
            <ContentDoc v-slot="{ doc }">
              <h1>{{ doc.title }}</h1>
              <hr />
              <!-- <p class="text-caption text-right mb-8">
                作成日：{{ doc.created_at }}
                <span v-if="doc.updated_at"
                  >| 更新日：{{ doc.updated_at }}</span
                >
              </p> -->
              <p class="text-caption text-right mb-8">
                {{ doc.created_at }}
                <span v-if="doc.updated_at">| update:{{ doc.updated_at }}</span>
              </p>
              <aside class="text-caption">
                {{ doc.description }}
              </aside>
              <v-img :src="doc.thumbnail"></v-img>
              <ContentRenderer :value="doc" />
            </ContentDoc>
          </article>

          <v-row class="mt-16" justify="center">
            <v-btn to="/article" color="primary"
              >Back to the article list</v-btn
            >
          </v-row>
        </v-container>
      </div>
    </section>
  </div>
</template>
