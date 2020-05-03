<template>
  <v-data-table
    :headers="headers"
    :items="products"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Каталог продуктов</v-toolbar-title>
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
    dialog: false,
    headers: [
      {
        text: 'ID',
        align: 'start',
        value: 'id'
      },
      { text: 'Название', value: 'name' },
      { text: 'Категория', value: 'category.name' },
      { text: 'Цена', value: 'price' },
      { text: 'Есть ли скидка?', value: 'is_discount' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    products: [],
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
  created () {
    this.initialize()
  },
  methods: {
    initialize () {
      this.$axios.$get('/products/').then((data) => {
        this.products = data.results
      })
    },

    editItem (item) {
      this.$router.push(`/catalog/edit/${item.id}`)
    },

    deleteItem (item) {
      const index = this.products.indexOf(item)
      if (confirm('Are you sure you want to delete this item?')) {
        this.$axios.delete(`/products/${item.id}/`)
          .then(({ status }) => {
            if (status === 204) {
              this.products.splice(index, 1)
            }
          })
          .catch(err => alert(err.message))
      }
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>
