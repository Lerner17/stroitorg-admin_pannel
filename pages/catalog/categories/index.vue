<template>
  <v-data-table
    :headers="headers"
    :items="categories"
    sort-by="id"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Каталог категорий</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        />
        <v-spacer />
        <v-btn to="add" append color="primary" dark class="mb-2">
          Новый продукт
        </v-btn>
      </v-toolbar>
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
        small
        color="error"
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
    headers: [
      {
        text: 'ID',
        align: 'start',
        value: 'id'
      },
      { text: 'Название', value: 'name' },
      { text: 'Родительская категория', value: 'parent' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    categories: []
  }),
  created () {
    this.initialize()
  },
  methods: {
    initialize () {
      this.$axios.get('/categories/').then((data) => {
        this.categories = data.results
      })
    },

    editItem (item) {
      this.$router.push(`/catalog/edit/${item.id}`)
    },

    deleteItem (item) {
      const index = this.categoryies.indexOf(item)
      if (confirm('Are you sure you want to delete this item?')) {
        this.$axios.delete(`/categoryies/${item.id}/`)
          .then(({ status }) => {
            if (status === 204) {
              this.categoryies.splice(index, 1)
            }
          })
          .catch(err => alert(err.message))
      }
    }
  }
}
</script>
