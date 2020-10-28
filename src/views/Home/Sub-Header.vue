<template>
  <div class="main-content">
    <div class="main-content-inner">
      <div class="title-box">
        <span class="home" id="home">
          <a @click="clickHeader('home')">首页</a>
        </span>
        <span class="singer">
          <a @click="clickHeader('singer')">歌手</a>
        </span>
        <span class="songs">
          <a @click="clickHeader('songs')">新歌速递</a>
        </span>
        <span class="rank">
          <a @click="clickHeader('rank')">排行榜</a>
        </span>
        <span class="singers">
          <a @click="clickHeader('singers')">歌手分类</a>
        </span>
        <span class="cds">
          <a @click="clickHeader('cds')">数字专辑</a>
        </span>
      </div>
      <div class="home-box" v-if="activeName === 'home'">
        <div>
          <Home-Page></Home-Page>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomePage from '@/views/Home/Home-Page'

export default {
  components: {
    // Slider,
    HomePage,
  },
  data() {
    return {
      activeName: 'home',
      options: {},
    }
  },
  computed: {},
  methods: {
    clickHeader(val) {
      this.activeName = val
    },
  },
}
</script>

<style lang="scss" scoped>
.main-content {
  width: 100%;
  /* height: 700px; */
  background-color: #ddd;
}
.main-content-inner {
  margin: auto;
  padding: 0 325px;
}
.home-box {
  padding: 60px 0;
  background-color: #ddd;
}
.title-box {
  margin-top: 11px;
  padding-top: 10px;
}
.home {
  font-size: 14px;
  margin: 0 20px;
}
.songs {
  font-size: 14px;
  margin: 0 20px;
}
.rank {
  font-size: 14px;
  margin: 0 20px;
}
.singer {
  font-size: 14px;
  margin: 0 20px;
}
.cds {
  font-size: 14px;
  margin: 0 20px;
}
.singers {
  font-size: 14px;
  margin: 0 20px;
}
a:hover {
  color: #409eff;
  cursor: pointer;
}
</style>
