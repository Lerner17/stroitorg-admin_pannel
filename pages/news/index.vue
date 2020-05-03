<template>
  <v-data-table
    :headers="headers"
    :items="news"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Каталог новостей</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        />
        <v-spacer />
        <v-btn color="primary" dark class="mb-2" nuxt to="/news/add">
          Добавть новость
        </v-btn>
      </v-toolbar>
    </template>
    <template v-slot:item.is_active="{ item }">
      <span v-if="item.is_active">Да</span>
      <span v-else>Нет</span>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">
        Reset
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
        Reset
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
      { text: 'Заголовок', value: 'title' },
      { text: 'Опубликовано', value: 'is_active' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    news: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.$axios.$get('/news/?count=5000').then((data) => {
        console.log(data)
        this.news = data
      })
    },

    editItem (item) {
      this.$router.push(`/news/edit/${item.id}`)
    },

    deleteItem (item) {
      const index = this.news.indexOf(item)
      if (confirm('Вы уверены, что хотите удалить новость?')) {
        this.$axios.delete(`/news/${item.id}/`).then(({ status }) => {
          if (status === 204) {
            this.news.splice(index, 1)
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
