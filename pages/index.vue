<template>
  <v-layout column>
    <v-flex xs12>
      <v-layout>
        <v-flex xs12>
          <v-card class="ma-5 pa-5">
            <v-card-title>Настройки контактов</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field v-model="contacts.instagram_url" prepend-icon="mdi-instagram" label="Ссылка на Instagram" />
                <v-text-field v-model="contacts.fb_url" prepend-icon="mdi-facebook" label="Ссылка на Facebook" />
                <v-text-field v-model="contacts.twitter_url" prepend-icon="mdi-twitter" label="Ссылка на Twitter" />
                <v-text-field v-model="contacts.vk_url" prepend-icon="mdi-vk" label="Ссылка на VK" />
                <v-text-field v-model="contacts.phone" prepend-icon="mdi-phone" label="Номер телефона" />
                <v-text-field v-model="contacts.email" prepend-icon="mdi-at" label="Email адрес" />
                <v-text-field v-model="contacts.address" prepend-icon="mdi-map-marker" label="Адрес" />
              </v-form>
              <v-btn color="success">
                Сохранить
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12>
      <v-card class="ma-4">
        <v-card-title>Слайдер</v-card-title>
        <v-card-text>
          <v-data-table
            :headers="slider.headers"
            :items="slider.items"
            sort-by="id"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-spacer />
                <v-btn to="/slider/add" append color="primary" dark class="mb-2">
                  Добавить слайд
                </v-btn>
              </v-toolbar>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">
                Повторить
              </v-btn>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
      <v-card class="ma-4">
        <v-card-title>Преимущества</v-card-title>
        <v-card-text>
          <v-data-table
            :headers="advantages.headers"
            :items="advantages.items"
            sort-by="id"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-spacer />
                <v-btn to="/advantages/add" append color="primary" dark class="mb-2">
                  Добавить карточку
                </v-btn>
              </v-toolbar>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">
                Повторить
              </v-btn>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
      <v-card class="ma-4">
        <v-card-title>Сотрудники</v-card-title>
        <v-card-text>
          <v-data-table
            :headers="employee.headers"
            :items="employee.items"
            sort-by="id"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-spacer />
                <v-btn to="/employee/add" append color="primary" dark class="mb-2">
                  Новый сотрудник
                </v-btn>
              </v-toolbar>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">
                Повторить
              </v-btn>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
      <v-card class="ma-4">
        <v-card-title>Слайдер партнеры</v-card-title>
        <v-card-text>
          <v-data-table
            :headers="partners.headers"
            :items="partners.items"
            sort-by="id"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-spacer />
                <v-btn to="/partners/add" append color="primary" dark class="mb-2">
                  Новый партнер
                </v-btn>
              </v-toolbar>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">
                Повторить
              </v-btn>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
      <v-card class="ma-4">
        <v-card-title>Проекты</v-card-title>
        <v-card-text>
          <v-data-table
            :headers="projects.headers"
            :items="projects.items"
            sort-by="id"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-spacer />
                <v-btn to="/projects/add" append color="primary" dark class="mb-2">
                  Новый проект
                </v-btn>
              </v-toolbar>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">
                Повторить
              </v-btn>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      contacts: [],
      employee: {
        headers: [
          {
            text: 'ID',
            align: 'start',
            value: 'id'
          },
          {
            text: 'Имя',
            value: 'first_name'
          },
          {
            text: 'Фамилия',
            value: 'last_name'
          },
          {
            text: 'Должность',
            value: 'position'
          }
        ],
        items: []
      },
      partners: {
        headers: [
          {
            text: 'ID',
            align: 'start',
            value: 'id'
          },
          { text: 'Название', value: 'name' }
        ],
        items: []
      },
      advantages: {
        headers: [
          {
            text: 'ID',
            align: 'start',
            value: 'id'
          },
          {
            text: 'Текст',
            value: 'title'
          }
        ],
        items: []
      },
      slider: {
        headers: [
          {
            text: 'ID',
            align: 'start',
            value: 'id'
          },
          { text: 'Заголовок', value: 'title' },
          { text: 'Текст', value: 'text' },
          { text: 'Ссылка', value: 'url' }
        ],
        items: []
      },
      projects: {
        headers: [
          {
            text: 'ID',
            align: 'start',
            value: 'id'
          },
          { text: 'Заголовок', value: 'title' },
          { text: 'Описание', value: 'description' }
        ],
        items: []
      }
    }
  },
  created () {
    this.initialize()
  },
  methods: {
    initialize () {
      this.$axios.$get('/employee/').then((data) => { this.employee.items = data })
      this.$axios.$get('/partners/').then((data) => { this.partners.items = data })
      this.$axios.$get('/advantages/').then((data) => { this.advantages.items = data })
      this.$axios.$get('/main_slider/').then((data) => { this.slider.items = data })
      this.$axios.$get('/projects/').then((data) => { this.projects.items = data })
      this.$axios.$get('/contacts/').then((data) => { this.contacts = data })
    }
  }
}
</script>
