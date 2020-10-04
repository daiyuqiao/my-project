<template>
  <div>
    <el-scrollbar style="height:calc(100vh - 64px)">
      <transition :duration="{ enter: 800, leave: 100 }" mode="out-in" name="el-fade-in-linear">
        <el-menu
          :collapse="isCollapse"
          :collapse-transition="true"
          :default-active="active"
          @select="selectMenuItem"
          active-text-color="#fff"
          class="el-menu-vertical"
          text-color="rgb(191, 203, 217)"
          unique-opened
        >
          <template v-for="(item, index) in menuList">
            <el-menu-item v-if="!item.meta.hasLeaf" :index="item.name" :key="index">
              <i :class="`el-icon-${item.meta.iconClass}`"></i>
              <span slot="title">{{item.meta.title}}</span>
            </el-menu-item>
            <el-submenu
              v-else-if="item.meta.hasLeaf && item.children.length"
              ref="subMenu"
              :index="item.path"
              :key="index"
            >
              <template slot="title">
                <i :class="`el-icon-${item.meta.iconClass}`"></i>
                <span slot="title">{{item.meta.title}}</span>
              </template>
              <el-menu-item v-for="(term) in item.children" :index="term.name" :key="term.path">
                <i :class="`el-icon-${term.meta.iconClass}`"></i>
                <span slot="title">{{term.meta.title}}</span>
              </el-menu-item>
            </el-submenu>
          </template>
          <!-- <el-menu-item index="/superAdmin">
            <i class="el-icon-user-solid"></i>
            <span slot="title">超级管理员</span>
          </el-menu-item>
          <el-submenu ref="subMenu" index="systemTools">
            <template slot="title">
              <i class="el-icon-s-cooperation"></i>
              <span slot="title">cube</span>
            </template>
            <el-menu-item index="/cube/listQuery">
              <i class="el-icon-tickets"></i>
              <span slot="title">列表查询</span>
            </el-menu-item>
            <el-menu-item index="/cube/cubeStatement">
              <i class="el-icon-magic-stick"></i>
              <span slot="title">cube报表</span>
            </el-menu-item>
            <el-menu-item index="/cube/operationLog">
              <i class="el-icon-magic-stick"></i>
              <span slot="title">操作日志</span>
            </el-menu-item>
          </el-submenu>-->
        </el-menu>
      </transition>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      active: "",
      isCollapse: false,
      menuList: this.$router.options.routes[0].children
    };
  },
  // created() {
  //   // console.log('路由信息========',this.$router.options.routes)
  // },
  methods: {
    selectMenuItem(index) {
      if (index === this.$route.name) return;
      this.$router.push({ name: index });
      // console.log(this.$route,index,'route');
    }
  },
  created() {
    this.active = this.$route.name;
    let screenWidth = document.body.clientWidth;
    if (screenWidth < 1000) {
      this.isCollapse = !this.isCollapse;
    }

    this.$bus.on("collapse", item => {
      this.isCollapse = item;
    });
  },
  watch: {
    $route() {
      this.active = this.$route.name;
      // console.log('active========',this.active);
    }
  }
};
</script>

<style lang="scss">
.el-scrollbar {
  .el-scrollbar__view {
    height: 100%;
  }
}
.menu-info {
  .menu-contorl {
    line-height: 52px;
    font-size: 20px;
    display: table-cell;
    vertical-align: middle;
  }
}
</style>