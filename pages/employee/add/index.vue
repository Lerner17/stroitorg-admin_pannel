<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm12 md8>
        <v-card>
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Добавить сотрудника</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-container grid-list-md>
              <v-form ref="form" v-model="valid">
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field
                      label="Имя"
                      :rules="[v => !!v || 'Поле не может быть пустым']"
                      name="first_name"
                    />
                  </v-flex>

                  <v-flex xs12>
                    <v-text-field
                      label="Фамилия"
                      :rules="[v => !!v || 'Поле не может быть пустым']"
                      name="last_name"
                    />
                  </v-flex>

                  <v-flex xs12>
                    <v-text-field
                      label="Должность"
                      :rules="[v => !!v || 'Поле не может быть пустым']"
                      name="position"
                    />
                  </v-flex>

                  <v-flex xs12>
                    <v-text-field
                      label="Email"
                      :rules="[v => !!v || 'Поле не может быть пустым']"
                      name="email"
                    />
                  </v-flex>

                  <v-flex xs12>
                    <v-textarea
                      label="О себе"
                      name="bio"
                    />
                  </v-flex>
                  <v-flex xs12>
                    <v-file-input name="avatar" label="Превью" :rules="[v => !!v || 'Поле не может быть пустым']" />
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
      this.$axios.$post('/employee/', formData).then(() => {
        alert('Сотрудник успешно добавлен')
        this.$router.push('/')
      })
        .catch(err => alert(err))
    }
  }
}
</script>
