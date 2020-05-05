<template>
  <v-data-table
    :headers="headers"
    :items="users"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Каталог пользователей</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        />
        <v-spacer />
        <v-btn color="primary" dark class="mb-2" nuxt to="/users/add">
          Добавть пользователя
        </v-btn>
      </v-toolbar>
    </template>
    <template v-slot:item.is_active="{ item }">
      <span v-if="item.is_active">Да</span>
      <span v-else>Нет</span>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">
        Повторить
      </v-btn>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        color="error"
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">
        Повторить
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: 'ID',
        align: 'start',
        value: 'id'
      },
      { text: 'Username', value: 'username' },
      { text: 'Имя', value: 'first_name' },
      { text: 'Фамилия', value: 'last_name' },
      { text: 'Email', value: 'Почта' },
      { text: 'Супер пользователь', value: 'is_superuser' },
      { text: 'Действия', value: 'actions', sortable: false }
    ],
    users: []
  }),

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.$axios.$get('/users/').then((data) => {
        this.users = data
      })
    },

    editItem (item) {
      this.$router.push(`/users/edit/${item.id}`)
    },

    deleteItem (item) {
      const index = this.users.indexOf(item)
      if (confirm('Вы уверены, что хотите удалить новость?')) {
        this.$axios.delete(`/users/${item.id}/`).then(({ status }) => {
          if (status === 204) {
            this.users.splice(index, 1)
          } else {
            alert('Произошла ошибка при удалении')
          }
        })
      }
      //  &&
    }
  }
}
</script>
