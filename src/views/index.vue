<template>
  <el-container style="height: 100%">
    <el-header style="text-align: right">
      <h2 style="float: left">校园巡检系统</h2>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    <el-container style="height: 100%">
      <div class="aside">
        <el-aside
          width="200px"
          style="
            background-color: rgb(238, 241, 246);
            height: 100%;
            text-align: left;
          "
        >
          <el-menu default-active="1" router>
            <el-menu-item
              v-for="(item, index) in tableData"
              :key="index"
              :index="item.url"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
      </div>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import menuitem from "../assets/menuitem.js"
export default {
  data() {
    const item = menuitem
    return {
      tableData: item,
    }
  },
}
</script>
<style>
.aside {
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
