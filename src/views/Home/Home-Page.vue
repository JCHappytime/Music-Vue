<template>
  <div class="main-content">
    <div class="main-content-inner">
      <div class="title">歌曲推荐</div>
      <div class="tab-box">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="为你推荐" name="recommend"></el-tab-pane>
          <el-tab-pane label="网络歌曲" name="netMusic"></el-tab-pane>
          <el-tab-pane label="背景音乐" name="background"></el-tab-pane>
          <el-tab-pane label="伤感" name="sad"></el-tab-pane>
          <el-tab-pane label="官方歌单" name="official"></el-tab-pane>
          <el-tab-pane label="情歌" name="loveSongs"></el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'recommend',
    }
  },
  methods: {
    handleClick() {},
  },
}
</script>

<style lang="scss" scoped>
.main-content {
  width: 1200px;
  background-color: #ddd;
  .main-content-inner {
    margin: 0 auto;
    .title {
      padding: 0 505px;
      text-align: center;
      letter-spacing: 8px;
      font-weight: bold;
      font-size: 32px;
      width: 196px;
      height: 40px;
    }
    .tab-box {
      padding: 0 360px;
    }
  }
}
</style>
