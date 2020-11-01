<template>
  <div>
    <div class="border-card">
      <img alt="Music Logo" src="../assets/logo.jpg" class="image" />
      <span class="logo-text">T&C音乐</span>
      <span class="tabs-box">
        <span class="text-box">
          <i class="el-icon-coordinate"></i>
          <a>音乐馆</a>
        </span>
        <span class="text-box">
          <i class="el-icon-user"></i>
          <a>我的音乐</a>
        </span>
        <span class="text-box">
          <i class="el-icon-monitor"></i>
          <a>歌词翻译</a>
        </span>
      </span>
      <el-input
        placeholder="请输入查询内容"
        v-model="inputVal"
        class="input-wrap"
      >
        <i slot="suffix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-button
        type="info"
        icon="el-icon-menu"
        round
        size="mini"
        class="i18n-btn"
      >
      </el-button>
      <el-button
        type="primary"
        icon="el-icon-user-solid"
        class="button-wrap"
        @click="login"
        small
      >
        登录
      </el-button>
      <el-button type="info" icon="el-icon-back" plain small>退出</el-button>
    </div>
    <sub-header></sub-header>
    <!-- <new-songs></new-songs> -->
    <el-dialog
      title="用户登录"
      :visible.sync="isShowLogin"
      class="dialog-width"
    >
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input
            v-model="form.name"
            class="input-width"
            autocomplete="off"
            placeholder="支持手机号/邮箱登录"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input
            v-model="form.password"
            class="input-width"
            autocomplete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isShowLogin = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import SubHeader from '@/views/Home/Sub-Header'
import NewSongs from '@/views/Home/New-Songs'

export default {
  components: {
    SubHeader,
    // NewSongs,
  },
  data() {
    return {
      inputVal: '',
      isShowLogin: false,
      formLabelWidth: '80px',
      form: {
        name: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      this.isShowLogin = true
    },
  },
}
</script>

<style lang="scss" scoped>
.tabs-box {
  margin-left: 50px;
  vertical-align: middle;
  display: inline-block;
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
  width: 220px;
  margin-left: 30px;
}
.button-wrap {
  margin-left: 150px;
}
.border-card {
  width: 1200px;
  height: 70px;
  padding: 10px 30px;
  border: solid 1px #e5e9f2;
}
.text-box {
  padding: 0 10px;
  font-size: 18px;
}
a:hover {
  color: #409eff;
  cursor: pointer;
}
.i18n-btn {
  margin: 0 5px 0 120px;
}
.dialog-width {
  width: 900px;
}
.input-width {
  width: 300px;
}
</style>
