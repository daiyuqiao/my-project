<template>
  <el-table :data="outerList" stripe style="width: 100%" max-height="450">
    <el-table-column fixed prop="CompanyName" label="公司名称" width="100"></el-table-column>
    <el-table-column prop="TopOrgId" label="公司ID" width="100"></el-table-column>
    <el-table-column prop="Manager" label="客户经理" width="158"></el-table-column>
    <el-table-column sortable prop="Count" label="容器个数" width="100"></el-table-column>
    <el-table-column sortable prop="CountIncrease" label="容器增量" width="100"></el-table-column>
    <el-table-column sortable prop="Cpu" label="CPU总量(C)" width="121"></el-table-column>
    <el-table-column sortable prop="CpuIncrease" label="CPU增量(C)" width="121"></el-table-column>
    <el-table-column sortable prop="Mem" label="MEM总量(G)" width="126"></el-table-column>
    <el-table-column sortable prop="MemIncrease" label="MEM增量(G)" width="126"></el-table-column>
    <el-table-column sortable prop="CreateTime" label="创建时间" width="120"></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "outerStatement",
  props: {
    outerList: Array
  },
  data() {
    return {};
  },
  created() {
    // console.log(this.outerList);
  }
};
</script>

<style lang="scss">
</style>