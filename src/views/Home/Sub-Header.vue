<template>
  <div class="main-content">
    <div class="main-content-inner">
      <el-tabs v-model="activeName" @tab-click="handleClickTab">
        <el-tab-pane name="home">
          <span slot="label">首页</span>
          <Slider :optons="options" :sliders="sliders"></Slider>
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

export default {
  components: {
    Slider,
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
          name: 'slider1',
          description: '这是第2个slider',
          btnName: '下载',
          url: '',
        },
        {
          name: 'slider2',
          description: '这是第2个slider',
          btnName: '下载',
          url: '',
        },
        {
          name: 'slider3',
          description: '这是第3个slider',
          btnName: '下载',
          url: '',
        },
        {
          name: 'slider4',
          description: '这是第4个slider',
          btnName: '下载',
          url: '',
        },
        {
          name: 'slider5',
          description: '这是第5个slider',
          btnName: '下载',
          url: '',
        },
      ]
      return res
    },
  },
  methods: {
    handleClickTab(tab, event) {
      if (tab.name === 'home') {
        this.$router.push('/subHome')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.main-content {
  width: 1200px;
  height: 50px;
  margin: 0 auto;
}
.main-content-inner {
  padding: 0 365px;
}
</style>
