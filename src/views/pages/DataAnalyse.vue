<template>
  <div class="container">
    <el-row>
      <el-card class="analyse-card"
        ><el-tabs v-model="activeName1" @tab-click="handleClick">
          <el-tab-pane label="今日统计" name="first">
            <el-row :gutter="20">
              <el-col v-for="(item, index) in countData" :key="index" :span="4">
                <el-card class="count-card" shadow="never">
                  <div>
                    <span class="info-words">{{ item.projectName }}</span>
                  </div>
                  <div>
                    <span class="info-num">{{ item.num }}</span>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="昨日统计" name="second">昨日统计</el-tab-pane>
        </el-tabs></el-card
      >
    </el-row>
    <el-row>
      <el-card class="analyse-card">
        <el-tabs v-model="activeName2" @tab-click="handleClick">
          <el-tab-pane label="人员排行" name="first">
            <tables :tableData="tableData" @click_1="test1" @click_2="test2" @click_3="test3"></tables>
          </el-tab-pane>
          <el-tab-pane label="部门排行" name="second">昨日统计</el-tab-pane>
        </el-tabs>
      </el-card>
    </el-row>
    <el-row>
      <el-card class="analyse-card">
        <el-tabs v-model="activeName3" @tab-click="handleClick">
          <el-tab-pane label="路线到位统计" name="first">
            <tables :tableData="tableData2" @click_1="test1" @click_2="test2" @click_3="test3"></tables>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import tables from '../../components/table.vue'
export default {
  components: {
    tables
  },
  data() {
    return {
      tableData: {
        reqUrl: 'https://mock.presstime.cn/mock/626fa4acf486360026a549d9/example/getUserRank',
        progressData: false,
        operaData: {
          isShow: true,
          data: [
            { label: '删除', type: 'danger' },
            { label: '增加', type: 'primary' },
            { label: '其他', type: 'info' }
          ]
        },
        columnData: [
          { prop: 'per_id', label: '工号', width: 200, align: 'center' },
          { prop: 'cname', label: '姓名', align: 'center' },
          {
            prop: 'ctn',
            label: '巡检数',
            align: 'center'
          }
        ]
      },
      tableData2: {
        reqUrl: 'https://mock.presstime.cn/mock/626fa4acf486360026a549d9/example/getRouteRoad',
        progressData: true,
        operaData: {
          isShow: true,
          data: [
            { label: '删除', type: 'danger' },
            { label: '增加', type: 'primary' },
            { label: '其他', type: 'info' }
          ]
        },
        columnData: [
          { prop: 'per_id', label: '工号', width: 200, align: 'center' },
          { prop: 'cname', label: '姓名', align: 'center' },
          {
            prop: 'ctn',
            label: '巡检数',
            align: 'center'
          }
        ]
      },
      activeName1: 'first',
      activeName2: 'first',
      activeName3: 'first',
      countData: [
        {
          projectName: '巡检人',
          num: 1
        },
        {
          projectName: '巡检设备',
          num: 1
        },
        {
          projectName: '路线',
          num: 1
        },
        {
          projectName: '设备异常总数',
          num: 1
        },
        {
          projectName: '已处理数',
          num: 1
        },
        {
          projectName: '待处理',
          num: 1
        }
      ]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    test1(e) {
      this.$message('删除')
      console.log('删除', e.name)
    },
    test2(e) {
      this.$message('增加')
      console.log('增加', e.name)
    },
    test3(e) {
      this.$message('其他')
      console.log('其他', e.name)
    }
  }
}
</script>

<style scoped>
.container {
  margin: 20px;
}
.analyse-header {
  height: 300px;
}
.analyse-main {
  height: 400px;
}
.analyse-footer {
  height: 300px;
}
.analyse-card {
  margin-bottom: 30px;
}

.info-num {
  font-size: 24px;
  color: #419488;
}
</style>
