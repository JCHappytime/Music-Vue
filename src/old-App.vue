<template>

  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/logo.jpg')"
          transition="scale-transition"
          width="40"
        />
        <span>TC云音乐</span>
      </div>
      <v-spacer></v-spacer>
      <Navigator />
      <!-- 带图标的按钮 -->
      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>-->
    </v-app-bar>

    <v-main>
      <HelloWorld />
      <MainPage />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import MainPage from './components/Main-Page.vue'
import Navigator from './Navigator.vue'

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
    MainPage,
    Navigator,
  },

  data: () => ({
    //
  }),
})
</script>
