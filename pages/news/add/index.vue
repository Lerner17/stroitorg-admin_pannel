<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm12 md8>
        <v-card>
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Добавить товар</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-container grid-list-md>
              <v-form v-model="valid">
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field
                      v-model="item.title"
                      label="Заголовок"
                      :rules="[v => !!v || 'Поле не может быть пустым']"
                    />
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field v-model="item.slug" label="ЧПУ" />
                  </v-flex>
                  <v-flex xs12>
                    <v-textarea
                      v-model="item.description"
                      label="Описание"
                      :rules="[v => !!v || 'Поле не может быть пустым']"
                    />
                  </v-flex>
                  <no-ssr>
                    <froala v-model="item.content" :tag="'textarea'" :config="config" />
                  </no-ssr>
                  <v-flex xs12>
                    <v-file-input v-model="item.image" label="Превью" />
                  </v-flex>
                </v-layout>
                <v-flex>
                  <v-checkbox v-model="item.is_active" label="Опубликовано?" />
                </v-flex>
                <v-btn color="success" :disabled="!valid" @click="postModel()">
                  Сохранить
                </v-btn>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      valid: true,
      item: {
        title: '',
        slug: '',
        description: '',
        content: '',
        is_active: true,
        image: null
      },
      config: {
        placeholderText: 'Контент',
        charCounterCount: false,
        width: 800,
        height: 200
      }
    }
  },
  methods: {
    postModel () {
      const news = {
        title: this.item.title,
        description: this.item.description,
        content: this.item.content,
        slug: this.item.slug,
        is_active: this.item.is_active
      }
      this.$axios.post('/news/', news).then(({ status }) => {
        console.log(status)
        if (status === 201) {
          this.$router.push('/news')
          alert('Новость успшно создана')
        }
      })
        .catch((err) => {
          alert(err.message)
        })
    }
  }
}
</script>
