<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="true"
      fixed
      app
    >
      <BaseMenu />
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="false"
      fixed
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Панель администратора</v-toolbar-title>
    </v-app-bar>
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
