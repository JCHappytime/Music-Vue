<template>
  <div id="app">
    <Header id="header"></Header>
    <router-view id="view" />
    <Footer id="footer"></Footer>
  </div>
</template>
<script>
import Header from '@/views/Header';
import Footer from '@/views/Footer';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    Header,
    Footer,
  },
  directives: {},
  filters: {},
})
export default class App extends Vue {
  user = {};
  beforeCreate() {
    if (this.$route.path === '/') {
      this.$router.push({ path: '/home' });
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  min-height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
}

#header {
  text-align: center;
  line-height: 50px;
}

#view {
  padding-bottom: 270px;
  text-align: center;
  background-color: #ffffff;
}

#footer {
  height: 270px;
  position: absolute;
  width: 100%;
  background-color: #333;
  bottom: 0;
}

.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 60px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
