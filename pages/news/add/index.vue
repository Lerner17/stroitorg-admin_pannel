<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm12 md8>
        <v-card>
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Добавить товар</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-container grid-list-md>
              <v-form>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field v-model="item.name" label="Заголовок" />
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field v-model="item.slug" label="ЧПУ" />
                  </v-flex>
                  <v-flex xs12>
                    <v-textarea label="Описание" />
                  </v-flex>
                </v-layout>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-btn color="success">
      Добавить новость
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
      item: {
      }
    }
  },
  mounted () {
  }
}
</script>
