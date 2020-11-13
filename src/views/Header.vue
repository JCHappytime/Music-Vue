<template>
  <div>
    <div class="border-card">
      <span @click="gotoPage('home')">
        <img alt="Music Logo" src="../assets/logo.jpg" class="image" />
        <span class="logo-text">{{ $t('header.title') }}</span>
      </span>
      <span class="tabs-box">
        <span class="text-box">
          <i class="el-icon-coordinate"></i>
          <a @click="gotoPage('home')">{{ $t('header.musicHall') }}</a>
        </span>
        <span class="text-box">
          <i class="el-icon-user"></i>
          <a @click="gotoPage('myMusic')">{{ $t('header.myMusic') }}</a>
        </span>
        <span class="text-box">
          <i class="el-icon-monitor"></i>
          <a @click="gotoPage('translation')">{{ $t('header.translation') }}</a>
        </span>
        <span class="text-box">
          <i class="el-icon-user"></i>
          <a @click="gotoPage('vip')">VIP</a>
        </span>
      </span>
      <el-input
        :placeholder="$t('header.placeholder')"
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
        {{ $t('header.login') }}
      </el-button>
      <el-button type="info" icon="el-icon-back" plain small>
        {{ $t('header.back') }}
      </el-button>
    </div>
    <el-dialog
      :title="$t('header.userLogin')"
      :visible.sync="isShowLogin"
      class="dialog-width"
    >
      <el-form :model="form">
        <el-form-item
          :label="$t('header.username')"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.name"
            class="input-width"
            autocomplete="off"
            :placeholder="$t('header.phoneNum')"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('header.pwd')" :label-width="formLabelWidth">
          <el-input
            v-model="form.password"
            class="input-width"
            autocomplete="off"
            :placeholder="$t('header.pwdPlaceholder')"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isShowLogin = false">
          {{ $t('header.cancel') }}
        </el-button>
        <el-button type="primary" @click="dialogVisible = false">
          {{ $t('header.confirm') }}
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
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

    gotoPage(type) {
      this.$router.push(`/${type}`)
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
  margin-left: 80px;
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
  margin: 0 5px 0 20px;
}
.dialog-width {
  width: 900px;
}
.input-width {
  width: 300px;
}
</style>
