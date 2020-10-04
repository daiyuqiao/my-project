<template>
  <el-container>
    <el-header>
      <!-- <el-row :gutter="20">
                <el-col :span="6">
                    <el-select v-model="value" placeholder="请选择(公司id/项目id/Cube id)">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="12">
                    <div class="input-box">
                        <span>公司id/项目id: </span>
                        <el-input v-model="inputID" placeholder="请输入id"></el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <el-button type="primary" @click="queryList(value,inputID)">查询</el-button>
                </el-col>
      </el-row>-->
      <el-form :inline="true" :model="formInline">
        <el-form-item label="分类">
          <el-select v-model="formInline.sort" placeholder="请选择(公司id/项目id/Cube id)">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="ID">
          <el-input v-model="formInline.inputID" placeholder="请输入id"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="queryList(formInline.sort, formInline.inputID)">查询</el-button>
        </el-form-item>
      </el-form>
    </el-header>
    <el-main>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="ID" type="index" :index="indexMethod"></el-table-column>
        <el-table-column
          v-for="item in tableColumn"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        ></el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 30, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        :style="{float: 'right', padding: '20px'}"
      ></el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
import { getCubeListByProjectID, getCubeListByCompanyID } from "@/api/cube.js";
export default {
  name: "listQuery",
  data() {
    return {
      formInline: {
        sort: "",
        inputID: ""
      },
      tableData: [],
      options: [
        {
          value: "companyID",
          label: "公司id"
        },
        {
          value: "projectID",
          label: "项目id"
        },
        {
          value: "cubeID",
          label: "Cube id"
        }
      ],
      tableColumn: [
        {
          prop: "CubeName",
          label: "Cube名称"
        },
        {
          prop: "ResourceID",
          label: "资源ID"
        },
        {
          prop: "CubeVPC",
          label: "VPC"
        },
        {
          prop: "Subnet",
          label: "子网"
        },
        {
          prop: "IpAddress",
          label: "IP地址"
        },
        {
          prop: "Count",
          label: "容器数量"
        },
        {
          prop: "Cpu",
          label: "Cpu"
        },
        {
          prop: "Mem",
          label: "Mem"
        },
        {
          prop: "CreateTime",
          label: "创建时间"
        },
        {
          prop: "Status",
          label: "状态"
        }
      ],
      pageSize: null,
      currentPage: null
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    indexMethod(index) {
      return index++;
    },
    queryList(sort, inputID) {
      if (!sort) {
        this.$message({
          message: "请选择分类",
          type: "warning"
        });
      } else if (!inputID) {
        this.$message({
          message: "请填写ID",
          type: "warning"
        });
      } else {
        this.currentPage = 1;
        this.pageSize = 10;
        this.getTableData(sort, inputID);
      }
    },
    getTableData(sort, inputID) {
      if (sort === "companyID") {
        getCubeListByCompanyID({
          Action: "GetCubeCompanyIDOneInfo",
          TopOrgId: inputID,
          request_uuid: "123456789"
        }).then(res => {
          console.log(res);
          this.tableData = res.CubeList;
        });
      } else if (sort === "projectID") {
        getCubeListByProjectID({
          Action: "GetCubeProjectIDOneInfo",
          ProjectId: inputID,
          request_uuid: "123456789"
        }).then(res => {
          console.log(res);
          this.tableData = res.CubeList;
        });
      } else {
        getCubeListByProjectID({
          Action: "GetCubeIDOneInfo",
          CubeId: inputID,
          request_uuid: "123456789"
        }).then(res => {
          console.log(res);
          this.tableData = res.CubeList;
        });
      }
    }
  }
};
</script>

<style lang="scss">
</style>