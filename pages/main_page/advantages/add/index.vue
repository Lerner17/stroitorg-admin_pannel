<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm12 md12>
        <v-card>
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Добавить </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-container grid-list-md>
              <v-form>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field v-model="item.name" label="Название" />
                  </v-flex>
                  <v-flex xs12>
                    <v-file-input label="Изображение" />
                  </v-flex>
                </v-layout>
                <v-btn color="success">
                  Добавить
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
      categoriesList: [
        'Плитка', 'Кирпичи'
      ],
      item: {
        name: '',
        slug: '',
        category: null,
        description: '',
        price: 0.00,
        isDiscount: false,
        discount: 0.00,
        preview: null,
        images: []
      }
    }
  }
}
</script>
