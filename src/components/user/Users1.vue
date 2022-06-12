<template>
  <div>
    <h3>用户组件1</h3>
    <el-button @click="getUserList"></el-button>
    <template>
      <el-row>
        <el-col :span="12">
          <el-table
            stripe
            :data="tableData"
            style="width: 60%">
            <el-table-column
              prop="part"
              label="课程名"
              width="600">
            </el-table-column>
            <el-table-column
              prop="duration"
              label="时长"
              width="180">
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="12">
          <el-table
            stripe
            :data="tableData"
            style="width: 60%">
            <el-table-column
              prop="part"
              label="课程名"
              width="600">
            </el-table-column>
            <el-table-column
              prop="duration"
              label="时长"
              width="180">
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>

    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: {}
      // 获取用户列表的参数
    }
  },
  created: {},
  methods: {
    getUserList () {
      // this.$http.get('/bilibili/getList/BV1434y1o73n').then(response => {
      //   console.log(response)
      //   this.tableData = response.data.data
      // })
      this.$http.post('/bilibili/getList/BV1434y1o73n', '{\n' +
        '    "current": 1,\n' +
        '    "size": 10\n' +
        '}').then(response => {
        console.log(response)
        this.tableData = response.data.data
      })
      // 经过 vue.config.js 配置文件的代理设置，会自动转为 https://www.baidu.com/，从而解决跨域问题
      // this.$http.get('/').then(response => {
      //   if (response.data) {
      //     console.log(response.data)
      //   }
      // })
    }
  }
}
</script>

<style>

</style>
