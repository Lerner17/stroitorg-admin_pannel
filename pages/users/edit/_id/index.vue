<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm12 md8>
        <v-card>
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Редактировать пользователя</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-container grid-list-md>
              <v-form v-model="valid" :lazy-validation="lazy">
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field v-model="user.username" label="Username" :rules="[v => !!v || 'Поле не может быть пустым']" />
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field v-model="user.email" label="Email" :rules="[v => !!v || 'Поле не может быть пустым']" />
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field v-model="user.first_name" label="Имя" :rules="[v => !!v || 'Поле не может быть пустым']" />
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field v-model="user.last_name" label="Фамилия" :rules="[v => !!v || 'Поле не может быть пустым']" />
                  </v-flex>
                  <v-flex xs12>
                    <v-checkbox v-model="user.is_superuser" label="Супер-пользователь" />
                  </v-flex>
                  <v-flex xs12>
                    <v-checkbox v-model="user.is_staff" label="Статус персонала" />
                  </v-flex>
                </v-layout>
                <v-btn color="success" :disabled="!valid" @click="updateModel()">
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
      user: {
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        is_staff: true,
        is_superuser: true
      },
      valid: true,
      lazy: true
    }
  },
  mounted () {
    this.$axios.get(`/users/${this.$route.params.id}/`).then(({ data }) => {
      this.user = data
    })
  },
  methods: {
    updateModel () {
      this.$axios.put(`/users/${this.$route.params.id}/`, this.user)
        .then(({ status }) => {
          if (status === 204) {
            this.$router.push('/users')
            alert('Пользователь успешно изменен')
          }
        })
        .catch(err => alert(err.message))
    }
  }
}
</script>
