<template>
  <div>
    <el-form :inline="true" :model="req.finance" class="demo-form-inline">
      <el-form-item label="账户流水号">
        <el-input v-model="req.finance.id" placeholder="账户流水号"></el-input>
      </el-form-item>
      <el-form-item label="流水变动类型">
        <el-input v-model="req.finance.category" placeholder="流水变动类型"></el-input>
      </el-form-item>
      <el-form-item label="变动名称">
        <el-input v-model="req.finance.name" placeholder="变动名称"></el-input>
      </el-form-item>
      <el-form-item label="用户">
        <el-select v-model="req.finance.userId" placeholder="用户">
          <el-option v-for="item in users" :key="item.userId" :label="item.userName" :value="item.userId"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="流水查询时间">
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="dialogFormVisible = true">记账</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData.records"
      style="width: 100%">
      <el-table-column v-for="item in columnData" :key="item.id" :label="item.label"
                       :prop="item.prop"
                       :width="item.width">
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        background
        @size-change="onSubmit"
        @current-change="onSubmit"
        :current-page.sync="req.current"
        :page-sizes="[10, 20, 50,100]"
        :page-size.sync="req.size"
        layout="sizes, prev, pager, next"
        :total="tableData.total">
      </el-pagination>
    </div>
    <el-dialog title="记它一笔!!!" :visible.sync="dialogFormVisible">
      <el-form :inline="true" :model="createBillReq">
        <el-form-item label="变动类型" :label-width="formLabelWidth">
          <el-select v-model="createBillReq.category" placeholder="请选择变动类型">
            <el-option label="饮食" value="饮食"></el-option>
            <el-option label="房租" value="房租"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户">
          <el-select v-model="req.finance.userId" placeholder="用户">
            <el-option v-for="item in users" :key="item.userId" :label="item.userName"
                       :value="item.userId"></el-option>
          </el-select>
        </el-form-item>
        <br>
        <el-form-item label="变动名称" :label-width="formLabelWidth">
          <el-input v-model="createBillReq.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="变动金额" :label-width="formLabelWidth">
          <el-input v-model="createBillReq.value" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitCreate">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data () {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      createBillReq: {},
      users: [{
        userName: '戴倚凡',
        userId: '99'
      }, {
        userName: '王妍',
        userId: '66'
      }],
      formInline: {
        user: '',
        region: ''
      },
      tableData: [],
      columnData: [{
        id: 0,
        label: '流水号',
        prop: 'id',
        width: 150
      }, {
        id: 1,
        label: '花销类型',
        prop: 'category',
        width: 150
      }, {
        id: 2,
        label: '一级标签',
        prop: 'firstTag',
        width: 150
      }, {
        id: 3,
        label: '二级标签',
        prop: 'secondTag',
        width: 150
      }, {
        id: 4,
        label: '变动名称',
        prop: 'name',
        width: 150
      }, {
        id: 5,
        label: '变动描述',
        prop: 'description',
        width: 100
      }, {
        id: 6,
        label: '变动金额',
        prop: 'value',
        width: 100
      }, {
        id: 7,
        label: '用户',
        prop: 'userName',
        width: 100
      }, {
        id: 8,
        label: '流水时间',
        prop: 'gmtCreate',
        width: 200
      }, {
        id: 9,
        label: '修改时间',
        prop: 'gmtModify',
        width: 200
      }],
      req: {
        finance: {
          category: ''
        },
        current: 1,
        size: 10
      },
      value1: ''
    }
  },
  methods: {
    onSubmit () {
      this.$http.post('/history/listPage', this.req).then(response => {
        this.tableData = response.data.data
      })
    },
    submitCreate () {
      this.$http.post('history/save', this.createBillReq)
      this.$message.success('添加成功')
      this.dialogFormVisible = false
      this.reload()
    }
  },
  created () {
    this.$http.post('/history/listPage', this.req).then(response => {
      this.tableData = response.data.data
    })
  }
}
</script>
