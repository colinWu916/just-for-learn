<template>
  <div class="main">
    <el-container>
      <el-aside width="auto">
        <CommonAside></CommonAside>
      </el-aside>
      <el-container>
        <el-header>
          <CommonHeader></CommonHeader>
        </el-header>
        <CommonTag></CommonTag>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>

export default {
  data() {
    return {}
  },
  components: {
    CommonAside: () => import('../components/CommonAside.vue'),
    CommonHeader : () => import('../components/CommonHeader.vue'),
    CommonTag: () => import('../components/CommonTag.vue')
  }
}
</script>
<style lang="less" scoped>
  .main {
    height: 100%;
    .el-container {
      height: 100%;
      .el-aside {
        height: 100%;
      }
      .el-header {
        padding: 0;
      }
    }
  }

</style>