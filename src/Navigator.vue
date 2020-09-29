<template>
  <v-row>
    <v-divider vertical></v-divider>
    <v-col cols="2">
      <v-btn text @click="toFindMusic">发现音乐</v-btn>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col cols="2">
      <v-btn text>我的音乐</v-btn>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col cols="2">
      <v-btn text>我的朋友</v-btn>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col cols="2">
      <v-btn text>歌手&音乐</v-btn>
    </v-col>
    <v-divider vertical></v-divider>
  </v-row>
</template>

<style lang="scss" scoped>
.main-content {
  width: 1000px;
  height: 380px;
  .main-content-inner {
    padding: 60px;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Navigator extends Vue {
  toFindMusic() {
    this.$router.push('/About')
  }
}
</script>
