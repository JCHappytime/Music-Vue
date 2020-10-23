<template>
  <div class="main-content">
    <div class="main-content-inner">
      <el-tabs v-model="activeName" @tab-click="handleClickTab">
        <el-tab-pane name="home">
          <span slot="label">首页</span>
          <div class="home-box">
            <div>
              <Home-Page></Home-Page>
            </div>
            <div>
              <Slider :optons="options" :sliders="sliders"></Slider>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane name="singer">
          <span slot="label">歌手</span>
        </el-tab-pane>
        <el-tab-pane name="songs">
          <span slot="label">新歌速递</span>
        </el-tab-pane>
        <el-tab-pane name="rank">
          <span slot="label">排行榜</span>
        </el-tab-pane>
        <el-tab-pane name="singers">
          <span slot="label">歌手分类</span>
        </el-tab-pane>
        <el-tab-pane name="cds">
          <span slot="label">数字专辑</span>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/Slider'
import HomePage from '@/views/Home/Home-Page'

export default {
  components: {
    Slider,
    HomePage,
  },
  data() {
    return {
      activeName: 'home',
      options: {},
      // sliders: {},
    }
  },
  computed: {
    sliders() {
      const res = [
        {
          name: 'Singer1',
          description: '「潮流音乐」感受时光从耳边划过',
          btnName: '下载',
          imgName: '../assets/swiper1.jpg',
          play: 300.5,
        },
        {
          name: 'Flowers',
          description: '经典华语 | 时光已祛，光辉难褪',
          btnName: '下载',
          imgName: '../assets/swiper2.jpg',
          play: 545.7,
        },
        {
          name: '周杰伦',
          description: '我落泪情绪零碎，周杰伦',
          btnName: '下载',
          imgName: '../assets/swiper3.jpg',
          play: 3095.5,
        },
        {
          name: 'Singer2',
          description: '经典老歌｜那些逝去的青春',
          btnName: '下载',
          imgName: '../assets/swiper4.jpg',
          play: 291.6,
        },
        {
          name: '张国荣',
          description: '岁月留声：80年代经典粤语',
          btnName: '下载',
          imgName: '../assets/swiper5.jpg',
          play: 600.6,
        },
      ]
      return res
    },
  },
  methods: {
    handleClickTab(tab, event) {
      if (tab.name === 'home') {
        // this.$router.push('/subHome')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.main-content {
  /* width: 1200px; */
  height: 50px;
  margin: 0 auto;
}
.home-box {
  /* width: 1200px; */
  padding: 60px 0;
  background-color: #ddd;
}
.main-content-inner {
  /* padding: 0 365px; */
  margin: auto;
}
</style>
