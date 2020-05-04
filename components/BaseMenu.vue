<template>
  <v-list>
    <v-list-item link to="/">
      <v-list-item-icon>
        <v-icon>mdi-home</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Главная</v-list-item-title>
    </v-list-item>
    <v-list-item link to="/news">
      <v-list-item-icon>
        <v-icon>mdi-home</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Новости</v-list-item-title>
    </v-list-item>
    <v-list-item link to="/users">
      <v-list-item-icon>
        <v-icon>mdi-account</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Пользователи</v-list-item-title>
    </v-list-item>
    <v-list-group prepend-icon="mdi-cart" sub-group>
      <template v-slot:activator>
        <v-list-item-title>Каталог</v-list-item-title>
      </template>
      <v-list-item link to="/catalog">
        <v-list-item-title>Товары</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Категории</v-list-item-title>
      </v-list-item>
    </v-list-group>
    <v-list-item link to="/orders">
      <v-list-item-icon>
        <v-icon>mdi-playlist-edit</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Заказы</v-list-item-title>
    </v-list-item>
  </v-list>
</template>
