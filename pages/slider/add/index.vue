<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm12 md8>
        <v-card>
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Добавить слайд</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-container grid-list-md>
              <v-form ref="form" v-model="valid">
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field
                      label="Заголовок"
                      :rules="[v => !!v || 'Поле не может быть пустым']"
                      name="title"
                    />
                  </v-flex>

                  <v-flex xs12>
                    <v-text-field
                      label="Описание"
                      :rules="[v => !!v || 'Поле не может быть пустым']"
                      name="text"
                    />
                  </v-flex>

                  <v-flex xs12>
                    <v-text-field
                      label="URL для ссылки 'Подробнее'"
                      :rules="[v => !!v || 'Поле не может быть пустым']"
                      name="url"
                    />
                  </v-flex>

                  <v-flex xs12>
                    <v-file-input name="image" label="Превью" :rules="[v => !!v || 'Поле не может быть пустым']" />
                  </v-flex>
                </v-layout>
                <v-btn color="success" :disabled="!valid" @click="postModel">
                  Сохранить
                </v-btn>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      valid: true
    }
  },
  methods: {
    postModel () {
      const formData = new FormData(this.$refs.form.$el)
      this.$axios.$post('/main_slider/', formData).then(() => {
        alert('Слайд успешно добавлен')
        this.$router.push('/')
      })
        .catch(err => alert(err))
    }
  }
}
</script>
