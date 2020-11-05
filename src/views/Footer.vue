<template>
  <div>
    <div class="footer">
      <div class="content">
        <el-row>
          <el-col span="8">
            <span class="title">开放平台</span>
          </el-col>
          <el-col span="8">
            <span class="footer-text">111</span>
          </el-col>
          <el-col span="8">
            <span class="footer-text"> 音乐人111 </span>
          </el-col>
        </el-row>
        <el-row>
          <el-col span="8">
            <span class="footer-text"> T&C音乐开发平台 </span>
            <span>音乐人</span>
          </el-col>
          <el-col span="8">
            <div class="footer-text">222</div>
          </el-col>
          <el-col span="8">
            <span class="footer-text"> 333 </span>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      user: {},
    }
  },
  created() {},
  beforeCreate() {},
}
</script>

<style lang="scss" scoped>
.content {
  height: 270px;
  background-color: black;
}
.title {
  color: #ddd;
  font-size: 16px;
  font-weight: normal;
  padding: 20px 60px;
}
.footer-text {
  display: inline-block;
  font-size: 14px;
  color: #ddd;
  margin: 60px;
}
</style>
