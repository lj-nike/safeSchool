<template>
  <el-container style="height: 100%">
    <el-header style="text-align: right">
      <h2 style="float: left" @click="getSuccess">校园巡检系统</h2>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>廖先生</span>
    </el-header>
    <el-container style="height: 100%">
      <div class="aside">
        <el-aside width="200px">
          <el-menu default-active="1" router>
            <el-menu-item v-for="(item, index) in tableData" :key="index" :index="item.url">
              <i class="el-icon-menu"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
      </div>
      <el-main class="el-main-contaner">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import axios from 'axios'
import menuitem from '../assets/menuitem.js'
export default {
  data() {
    const item = menuitem
    return {
      tableData: item
    }
  },
  methods: {
    async getSuccess() {
      const res = await axios.get('/user')
      console.log(res)
    }
  }
}
</script>
<style>
.aside {
  height: 100%;
}
.el-header {
  background-color: #0f0c29;
  color: #fff;
  line-height: 60px;
}

.el-aside {
  background-color: #292c33;
  height: 100%;
  text-align: left;
  color: white;
}
.el-menu {
  background-color: #292c33;
  color: #fff;
}
.el-menu-item {
  color: #fff;
  transition: none;
}
.el-menu-item:hover {
  color: #292c33;
}
.el-main-contaner {
  padding: 0;
}
</style>
