<template>
  <el-table :data="innerList" stripe style="width: 100%" max-height="500">
    <el-table-column prop="CompanyName" label="公司名称"></el-table-column>
    <el-table-column sortable prop="Count" label="容器个数"></el-table-column>
    <el-table-column sortable prop="Cpu" label="CPU总量(C)"></el-table-column>
    <el-table-column sortable prop="CreateTime" label="创建时间"></el-table-column>
    <el-table-column prop="Manager" label="客户经理"></el-table-column>
    <el-table-column sortable prop="Mem" label="MEM总量(G)"></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "innerStatement",
  props: {
    innerList: Array
  },
  data() {
    return {};
  },
  created() {
    // console.log(this.innerList);
  }
};
</script>

<style lang="scss">
</style>