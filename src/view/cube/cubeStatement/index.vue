<template>
  <el-container>
    <el-tabs type="border-card">
      <el-tab-pane label="已删除外部Cube资源报表">
        <delete-statement :deleteList="deleteList"></delete-statement>
      </el-tab-pane>
      <el-tab-pane label="内部Cube资源报表">
        <inner-statement :innerList="innerList"></inner-statement>
      </el-tab-pane>
      <el-tab-pane label="外部Cube资源报表">
        <outer-statement :outerList="outerList"></outer-statement>
      </el-tab-pane>
      <el-tab-pane label="外部Cube信息汇总报表">
        <summary-statement :summaryList="summaryList"></summary-statement>
      </el-tab-pane>
    </el-tabs>
  </el-container>
</template>

<script>
import { getCubeStatement } from "@/api/cube.js";
import deleteStatement from "./components/deleteStatement";
import innerStatement from "./components/innerStatement";
import outerStatement from "./components/outerStatement";
import summaryStatement from "./components/summaryStatement";
export default {
  name: "cubeStatement",
  data() {
    return {
      deleteList: [],
      innerList: [],
      outerList: [],
      summaryList: []
    };
  },
  created() {
    let that = this;
    getCubeStatement({
      Action: "GetOuterInnerCubeInfo",
      EndTime: "20200722",
      request_uuid: "123456789"
    }).then(res => {
      console.log(res);
      that.deleteList = res.CubeDeleteLis;
      that.innerList = res.CubeInnerList;
      that.outerList = res.CubeOuterList;
      that.summaryList = res.CubeOuterNumList;
      //   console.log(that.deleteList);
    });
  },
  components: {
    "delete-statement": deleteStatement,
    "inner-statement": innerStatement,
    "outer-statement": outerStatement,
    "summary-statement": summaryStatement
  }
};
</script>

<style scoped lang="scss">
.el-tabs {
  width: 100%;
}
</style>