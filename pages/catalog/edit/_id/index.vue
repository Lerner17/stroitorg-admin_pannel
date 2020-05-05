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
              <v-form>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field v-model="item.name" label="Название" />
                  </v-flex>
                  <v-flex xs12 md12>
                    <v-text-field v-model="item.slug" label="ЧПУ" />
                  </v-flex>
                  <v-flex xs12 md6>
                    {{ categoriesList }}
                    <v-treeview
                      v-model="selection"
                      :items="categoriesList"
                      selection-type="leaf"
                      selectable
                      return-object
                      open-all
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
      selection: [],
      categoriesList: [],
      item: {
        name: '',
        slug: '',
        category: null,
        description: '',
        price: 0.00,
        isDiscount: false,
        discount: 0.00,
        preview: null
      },
      parameters: [],
      images: [],
      pName: '',
      pValue: ''
    }
  },
  mounted () {
    this.$axios.get(`/products/${this.$route.params.id}/`).then(({ data }) => {
      this.item.name = data.name
      this.item.slug = data.slug
      this.item.description = data.description
      this.item.price = data.price
      this.item.new_price = data.new_price
      this.item.is_discount = data.is_discount
      this.item.is_discount = data.is_discount
      this.item.is_new = data.is_new
      this.parameters = data.parameters
      this.images = data.images
    })
    this.$axios.get('/categories/').then(({ data }) => { this.categoriesList = data })
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
