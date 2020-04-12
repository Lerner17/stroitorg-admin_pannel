<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="false"
      fixed
      app
      color="primary"
      dark
    >
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
export default {
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
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false
    }
  }
}
</script>
