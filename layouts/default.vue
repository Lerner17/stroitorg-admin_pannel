<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Панель администратора</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar color="indigo">
             <span class="white--text headline">{{ $store.getters['user/getUser'].user.username[0].toUpperCase() }}</span>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ $store.getters['user/getUser'].user.username }}</v-list-item-title>
            <v-list-item-subtitle>Выход</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider />
      <BaseMenu />
    </v-navigation-drawer>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import BaseMenu from '@/components/BaseMenu'
export default {
  components: { BaseMenu },
  middleware: 'loggedIn',
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-apps',
          title: 'Продукты',
          to: '/catalog'
        },
        {
          icon: 'mdi-apps',
          title: 'Новости',
          to: '/news'
        },
        {
          title: 'Категории',
          to: '/categories'
        },
        {
          icon: 'mdi-apps',
          title: 'main page',
          to: '/main_page'
        },
        {
          icon: 'mdi-apps',
          title: 'advantages',
          to: '/main_page/advantages'
        },
        {
          icon: 'mdi-apps',
          title: 'employee_cards',
          to: '/main_page/employee_cards'
        },
        {
          icon: 'mdi-apps',
          title: 'main_sliders',
          to: '/main_page/main_sliders'
        },
        {
          icon: 'mdi-apps',
          title: 'partners',
          to: '/main_page/partners'
        },
        {
          icon: 'mdi-apps',
          title: 'projects',
          to: '/main_page/projects'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false
    }
  }
}
</script>
