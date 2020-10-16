<template>
  <div>
    <div class="border-card">
      <img alt="Music Logo" src="../assets/logo.jpg" class="image" />
      <span class="logo-text">T&C音乐</span>
      <el-tabs class="tabs-box">
        <el-tab-pane class="tab-size">
          <span slot="label"> <i class="el-icon-coordinate"></i>音乐馆 </span>
        </el-tab-pane>
        <el-tab-pane label="我的音乐">
          <span slot="label"> <i class="el-icon-user"></i>我的音乐 </span>
        </el-tab-pane>
        <el-tab-pane label="歌词翻译">
          <span slot="label"> <i class="el-icon-phone"></i>歌词翻译 </span>
        </el-tab-pane>
      </el-tabs>
      <el-input
        placeholder="请输入查询内容"
        v-model="inputVal"
        class="input-wrap"
      >
        <i slot="suffix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-button
        type="primary"
        icon="el-icon-user-solid"
        class="button-wrap"
        small
        >登录</el-button
      >
      <el-button type="info" icon="el-icon-back" plain small>退出</el-button>
    </div>
    <sub-header></sub-header>
  </div>
</template>

<script>
import SubHeader from '@/views/Home/Sub-Header'

export default {
  components: {
    SubHeader,
  },
  data() {
    return {
      inputVal: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.tabs-box {
  margin-left: 50px;
  vertical-align: middle;
  display: inline-block;
  .tab-size {
    font-size: 22px;
  }
}
.logo-wrapper {
  text-align: center;
}
.image {
  width: 65px;
  display: inline-block;
  vertical-align: middle;
}
.logo-text {
  font-size: 28px;
  font-weight: bold;
  vertical-align: middle;
}
.input-wrap {
  width: 300px;
  margin-left: 100px;
}
.button-wrap {
  margin-left: 100px;
}
.border-card {
  width: 1200px;
  height: 70px;
  padding: 10px 30px;
  border: solid 1px #e5e9f2;
}
</style>
