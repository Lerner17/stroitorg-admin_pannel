<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm12 md8>
        <v-card>
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Добавить Категорию</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-container grid-list-md>
              <v-form ref="form" v-model="valid">
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field
                      label="Название категории"
                      :rules="[v => !!v || 'Поле не может быть пустым']"
                      name="name"
                    />
                  </v-flex>
                  <v-flex xs12>
                    <v-textarea
                      label="Описание категории"
                      :rules="[v => !!v || 'Поле не может быть пустым']"
                      name="description"
                    />
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      label="ЧПУ"
                      name="slug"
                    />
                  </v-flex>
                  <v-flex xs12>
                    <v-select :items="categoriesList" label="Родительская категория" item-text="name" name="parent" item-value="id" />
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
    </v-form>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      valid: true,
      categoriesList: []
    }
  },
  mounted () {
    this.$axios.$get('/categories/').then((data) => {
      this.categoriesList = data
    })
  },
  methods: {
    postModel () {
      const formData = new FormData(this.$refs.form.$el)
      this.$axios.$post('/categories/', formData).then(() => {
        alert('Категория успшно создана')
        this.$router.push('/categories')
      })
        .catch(err => alert(err))
    }
  }
}
</script>
