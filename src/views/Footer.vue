<template>
  <div>
    <div class="footer">
      <div class="content">
        <el-row>
          <el-col span="8">
            <span class="title">开放平台</span>
          </el-col>
          <el-col span="8">
            <span class="footer-text"> 222 </span>
          </el-col>
          <el-col span="8">
            <span class="footer-text"> 333 </span>
          </el-col>
        </el-row>
        <el-row>
          <el-col span="8">
            <span class="footer-text"> 111 </span>
          </el-col>
          <el-col span="8">
            <span class="footer-text"> 222 </span>
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
  font-size: 14px;
  color: #ddd;
  /* padding: 20px 30px; */
}
</style>
