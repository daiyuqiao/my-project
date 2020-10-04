<template>
  <el-table :data="summaryList" stripe style="width: 100%" max-height="500">
    <el-table-column prop="AllOuterUserNum" label="用户数"></el-table-column>
    <el-table-column prop="AllOuterCubeNum" label="cube数"></el-table-column>
    <el-table-column prop="AllOuterCpuNum" label="CPU总量(C)"></el-table-column>
    <el-table-column prop="AllOuterMemNum" label="MEM总量(G)"></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "summaryStatement",
  props: {
    summaryList: Array
  },
  data() {
    return {};
  },
  created() {
    // console.log(this.summaryList);
  }
};
</script>

<style lang="scss">
</style>