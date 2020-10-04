<template>
  <el-table :data="deleteList" stripe style="width: 100%" max-height="500">
    <el-table-column prop="CompanyName" label="公司名称"></el-table-column>
    <el-table-column prop="TopOrgId" label="公司ID"></el-table-column>
    <el-table-column prop="Manager" label="客户经理"></el-table-column>
    <el-table-column sortable prop="DeleteTime" label="删除时间"></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "deleteStatement",
  props: {
    deleteList: Array
  },
  data() {
    return {};
  },
  created() {
    // console.log(this.deleteList);
  }
};
</script>

<style lang="scss">
</style>