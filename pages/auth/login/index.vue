<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card>
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field v-model="username" label="Username" prepend-icon="mdi-account" name="username" type="text" />
              <v-text-field v-model="password" label="Пароль" prepend-icon="mdi-lock" name="password" type="password" />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn text>
              Забыли пароль
            </v-btn>
            <v-btn color="primary" @click="login">
              Войти
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'no-login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('user/loginUser', { username: this.username, password: this.password })
    }
  }
}
</script>
