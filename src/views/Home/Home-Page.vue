<template>
  <div class="main-content">
    <div class="main-content-inner">
      <div>Welcome to Home Page</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'singer',
    }
  },
}
</script>

<style lang="scss" scoped>
.main-content {
  width: 1200px;
  height: 50px;
  margin: 0 auto;
  background-color: #ddd;
  .main-content-inner {
    padding: 0 365px;
  }
}
</style>
