<template>
  <div class="main-content">
    <div class="main-content-inner">
      <el-tabs v-model="activeName" @tab-click="handleClickTab">
        <el-tab-pane name="home">
          <span slot="label">首页</span>
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
export default {
  data() {
    return {
      activeName: 'home',
    }
  },
  methods: {
    handleClickTab(tab, event) {
      console.log(tab.name)
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
  .main-content-inner {
    padding: 0 365px;
  }
}
</style>
