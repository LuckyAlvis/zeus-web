<template>
  <el-container>
    <el-header>
      <el-button type="info" @click="logout">退出登录</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu background-color="#333744" :default-openeds="['1','2','3']" text-color="#fff" router>
          <el-menu-item index="welcome">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>基础财务管理</template>
            <el-menu-item index="bill">账户流水</el-menu-item>
            <el-menu-item index="accountDetail">账户详情</el-menu-item>
            <el-menu-item index="financeHealth">财务健康检查</el-menu-item>
            <el-menu-item index="targetMonitor">目标进度监控</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>资产配置分析</template>
            <el-menu-item index="investmentTracking">投资跟踪</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>管理配置中心</template>

            <el-menu-item index="operationLogging">操作日志</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$message.error('退出登录')
      this.$router.push('/login')
    }

  }
}

</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
}

.el-header {
  background-color: #2b4b6b;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
}

.el-aside {
  background-color: #333744;
}

.el-main {
  background-color: wheat;
}

.el-menu {
  border-right-width: 0;
}
</style>
