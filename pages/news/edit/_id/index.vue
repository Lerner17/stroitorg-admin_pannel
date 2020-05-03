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
              <v-form v-model="valid" :lazy-validation="lazy">
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field v-model="item.title" label="Заголовок" :rules="[v => !!v || 'Поле не может быть пустым']" />
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field v-model="item.slug" label="ЧПУ" />
                  </v-flex>
                  <v-flex xs12>
                    <v-textarea v-model="item.description" label="Описание" :rules="[v => !!v || 'Поле не может быть пустым']" />
                  </v-flex>
                  <no-ssr>
                    <froala v-model="item.content" :tag="'textarea'" :config="config" />
                  </no-ssr>
                  <v-flex xs12>
                    <span>Картинка:</span>
                    <v-img v-if="item.image" :src="item.image" />
                    <v-file-input label="Превью" />
                  </v-flex>
                  <v-flex>
                    <v-checkbox v-model="item.is_active" label="Опубликовано?" />
                  </v-flex>
                </v-layout>
                <v-btn color="success" :disabled="!valid" @click="updateModel()">
                  Сохранить
                </v-btn>
                <v-btn class="ml-2" color="error" :disabled="!valid" @click="destroyModel()">
                  Удалить
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
      lazy: true,
      item: {
        title: '',
        slug: '',
        description: '',
        content: '',
        image: '',
        is_active: true
      },
      config: {
        placeholderText: 'Контент',
        charCounterCount: false,
        width: 800,
        height: 200
      }
    }
  },
  mounted () {
    this.$axios.get(`/news/${this.$route.params.id}/`).then(({ data }) => {
      this.item.title = data.title
      this.item.slug = data.slug
      this.item.description = data.description
      this.item.content = data.content
      this.item.image = data.image
      this.item.is_active = data.is_active
    })
  },
  methods: {
    updateModel () {
      const data = {
        title: this.item.title,
        description: this.item.description,
        content: this.item.content,
        is_active: this.item.is_active,
        slug: this.item.slug
      }
      this.$axios.put(`/news/${this.$route.params.id}/`, data).then(({ status, data }) => {
        if (status === 200) {
          alert('Успешно!')
        } else { alert('Ошибка') }
      })
    },
    destroyModel () {
      confirm('Вы уверены, что хотите удалить новость?') && this.$axios.delete(`/news/${this.$route.params.id}/`).then(({ status }) => {
        if (status === 204) {
          this.$router.push('/news')
        }
      })
    }
  }
}
</script>
