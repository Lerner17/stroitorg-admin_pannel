<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm12 md12>
        <v-card>
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Добавить товар</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-container grid-list-md>
              <v-form ref="form">
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field name="name" label="Название" />
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-text-field name="slug" label="ЧПУ" />
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-select
                      v-model="item.category"
                      :items="categoriesList"
                      :rules="[v => !!v || 'Item is required']"
                      label="Категория"
                      required
                    />
                  </v-flex>
                  <v-flex xs12>
                    <v-textarea v-model="item.description" label="Описние" />
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field v-model="item.price" label="Цена" />
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-switch v-model="item.isDiscount" class="ma-2" label="Сделать скидку" />
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-text-field v-model="item.discount" :disabled="!item.isDiscount" label="Цена со скидкой" />
                  </v-flex>
                  <v-flex xs12>
                    <v-file-input v-model="item.preview" label="Превью" />
                  </v-flex>
                  <v-flex xs12>
                    <span>Параметры:</span>
                    <v-chip v-for="(p, index) in parameters" :key="index" class="ma-1" close @click:close="delParam(index)">
                      {{ p.name }}: {{ p.value }}
                    </v-chip>
                    <v-layout wrap>
                      <v-flex xs12 md4>
                        <v-text-field
                          v-model="pName"
                          placeholder="Название"
                        />
                      </v-flex>
                      <v-flex xs12 md4>
                        <v-text-field
                          v-model="pValue"
                          placeholder="Значене"
                        />
                      </v-flex>
                      <v-btn fab small @click="addParameter()">
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </v-layout>
                  </v-flex>
                  <v-flex xs12>
                    <v-file-input
                      v-model="item.images"
                      label="Изображения"
                      multiple
                      filled
                      prepend-icon="mdi-camera"
                    />
                  </v-flex>
                </v-layout>
                <v-btn color="success">
                  Добавить товар
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
      },
      parameters: [],
      pName: '',
      pValue: ''
    }
  },
  methods: {
    addParameter () {
      this.parameters.push({ name: this.pName, value: this.pValue })
    },
    delParam (index) {
      this.parameters.splice(index, 1)
    }
  }
}
</script>
