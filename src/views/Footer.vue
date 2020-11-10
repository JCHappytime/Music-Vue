<template>
  <div>
    <div class="footer">
      <div class="content">
        <el-row class="pt-30">
          <el-col span="8">
            <el-row>
              <div class="title">下载T&C音乐客户端</div>
            </el-row>
            <el-row>
              <el-col span="8" class="selected">
                <img alt="PC" src="../assets/PC.png" class="icon" />
                <div class="footer-text">PC版</div>
              </el-col>
              <el-col span="8" class="selected">
                <img alt="PC" src="../assets/MAC.png" class="icon" />
                <div class="footer-text">Mac版</div>
              </el-col>
              <el-col span="8" class="selected">
                <img alt="PC" src="../assets/Andriod.png" class="icon" />
                <div class="footer-text">Android版</div>
              </el-col>
            </el-row>
          </el-col>
          <el-col span="8">
            <el-row>
              <span class="title">特色产品</span>
            </el-row>
            <el-row>
              <el-col span="8" class="selected">
                <div class="footer-text">尽请期待</div>
              </el-col>
              <el-col span="8" class="selected">
                <div class="footer-text">尽请期待</div>
              </el-col>
              <el-col span="8" class="selected">
                <div class="footer-text">尽请期待</div>
              </el-col>
            </el-row>
          </el-col>
          <el-col span="8">
            <span class="title">合作链接</span>
          </el-col>
        </el-row>
        <!-- <el-row>
          <el-col span="8">
            <div>
              <i class="el-icon-reading"></i>
              <div>PC版下载</div>
            </div>
          </el-col>
          <el-col span="8">
            <div class="">222</div>
          </el-col>
          <el-col span="8">
            <span class=""> 333 </span>
          </el-col>
        </el-row> -->
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
  background-color: #333;
}
.title {
  color: #ddd;
  font-size: 18px;
  font-weight: normal;
  margin-left: 60px;
  /* padding: 20px 60px; */
}
.pt-30 {
  padding-top: 30px;
}
.footer-text {
  font-size: 14px;
  color: #999;
  margin: 0 0 0 60px;
}
.icon {
  width: 50px;
  height: 50px;
  font-size: 14px;
  color: #999;
  display: inline-block;
  margin-left: 60px;
}
.selected {
  margin-top: 30px;
}
.selected :hover {
  color: #409eff;
}
</style>
