<template>
  <div class="container">
    <dv-border-box-11 title="校园巡检大盘" class="rows">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <dv-border-box-1 class="border-box">
              <dv-capsule-chart
                :config="config7"
                class="charts"
                style="height: 300px"
              />
            </dv-border-box-1>

            <dv-border-box-8 class="border-box">
              <dv-scroll-board
                :config="config2"
                class="charts"
                style="height: 380px"
              />
            </dv-border-box-8>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <dv-active-ring-chart
              :config="config"
              style="width: 200px; height: 200px"
              class="charts"
            />
            <dv-active-ring-chart
              :config="config"
              style="width: 200px; height: 200px"
              class="charts"
            />
            <dv-active-ring-chart
              :config="config"
              style="width: 200px; height: 200px"
              class="charts"
            />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <dv-border-box-1 class="border-box">
              <dv-scroll-ranking-board
                :config="config3"
                class="charts"
                style="height: 300px"
              />
            </dv-border-box-1>
            <dv-border-box-8 :reverse="true" class="border-box">
              <dv-conical-column-chart
                :config="config6"
                class="charts"
                style="height: 350px"
              />
            </dv-border-box-8>
          </div>
        </el-col>
      </el-row>
    </dv-border-box-11>
  </div>
</template>

<script>
import { config7, config3, config6, config2 } from "./config";
export default {
  data() {
    return {
      config7,
      config3,
      config6,
      config2,
      config: {
        data: [
          {
            name: "周口",
            value: 55,
          },
          {
            name: "南阳",
            value: 120,
          },
          {
            name: "西峡",
            value: 78,
          },
          {
            name: "驻马店",
            value: 66,
          },
          {
            name: "新乡",
            value: 80,
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background: #292c33;
  text-align: center;
  vertical-align: middle;
}
.el-row {
  width: 100%;
  height: 100%;
  padding: 50px;
}
.grid-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.box {
  display: flex;
  flex-direction: column;
}
.charts {
  width: 90%;
  margin: 5%;
}
</style>
