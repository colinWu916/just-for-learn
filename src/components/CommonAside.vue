<template>
  <div class="common-aside">
    <el-menu
     default-active="home"
     @open="handleOpen"
     @close="handleClose"
     :collapse="isCollapse"
     background-color="#545c64"
     text-color="#fff"
     active-text-color="#ffd04b"
     class="el-menu-vertical-demo"
    >
      <h3>{{ isCollapse ? "后台" : "通用后台管理系统" }}</h3>
      <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
          <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">{{ subItem.label }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data() {
    return {

    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      // 当前路由如果和跳转的路由相同的话是会报错的
      if (this.$route.path !== item.path && !(this.$route.path === '/home' && item.path === '/')) {
        this.$router.push(item.path);
      }
      this.$store.commit("selectMenu", item);
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
    // 没有子菜单
    noChildren() {
      return this.menuData.filter(item => !item.children)
    },
    // 有子菜单
    hasChildren() {
      return this.menuData.filter(item => item.children)
    },
    menuData() {
      return JSON.parse(Cookies.get("menu")) || this.$store.state.tab.menu;
    }
  }
}
</script>

<style lang="less" scoped>
.common-aside {
  height: 100%;

  .el-menu {
    height: 100%;
    border-right: 0px;
    h3 {
      color: #fff;
      text-align: center;
      line-height: 48px;
    }
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>