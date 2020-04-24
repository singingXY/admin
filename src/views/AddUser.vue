<template>
  <div>
    <el-row class="add-btn">
      <el-button size="medium"
                 @click="dialogFormVisible = true">添加用户</el-button>
      <el-button size="medium">用户设备</el-button>
    </el-row>
    <el-form :model="data"
             ref="formData"
             size="small">
      <el-table :data="data.userList"
                style="width: 100%"
                row-class-name="table-row"
                :row-key="data.userList.id">
        <el-table-column prop="order"
                         label="序列"
                         width="50"
                         align="center">
        </el-table-column>
        <el-table-column label="用户名"
                         min-width="5%"
                         align="center">
          <template slot-scope="scope">
            <el-form-item :prop="'userList.' + scope.$index + '.username'"
                          :rules='data.rules.username'
                          v-if="scope.row.isSet">
              <el-input v-model="scope.row.username"></el-input>
            </el-form-item>
            <span v-else>{{scope.row.username}}</span>
          </template>
        </el-table-column>
        <el-table-column label="手机号码"
                         min-width="8%"
                         align="center"
                         :formatter="formatter">
          <template slot-scope="scope">
            <el-form-item :prop="'userList.' + scope.$index + '.phone'"
                          :rules='data.rules.phone'
                          v-if="scope.row.isSet">
              <el-input v-model="scope.row.phone"></el-input>
            </el-form-item>
            <span v-else>{{scope.row.phone}}</span>
          </template>
        </el-table-column>
        <el-table-column label="邮箱"
                         min-width="12%"
                         align="center">
          <template slot-scope="scope">
            <el-form-item :prop="'userList.' + scope.$index + '.email'"
                          :rules='data.rules.email'
                          v-if="scope.row.isSet">
              <el-input v-model="scope.row.email"></el-input>
            </el-form-item>
            <span v-else>{{scope.row.email}}</span>
          </template>
        </el-table-column>
        <el-table-column label="公司"
                         min-width="12%"
                         align="center">
          <template slot-scope="scope">
            <el-form-item :prop="'userList.' + scope.$index + '.company'"
                          :rules='data.rules.company'
                          v-if="scope.row.isSet">
              <el-input v-model="scope.row.company"></el-input>
            </el-form-item>
            <span v-else>{{scope.row.company}}</span>
          </template>
        </el-table-column>
        <el-table-column label="行业类型"
                         min-width="5%"
                         align="center">
          <template slot-scope="scope">
            <el-form-item :prop="'userList.' + scope.$index + '.industry'"
                          v-if="scope.row.isSet">
              <el-input v-model="scope.row.industry"></el-input>
            </el-form-item>
            <span v-else>{{scope.row.industry}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作"
                         min-width="8%"
                         align="center">
          <template slot-scope="scope">
            <el-button class="operation-btn"
                       @click="saveDate(scope.row)"
                       type="text"
                       size="small"
                       v-if="scope.row.isSet">保存</el-button>
            <el-button class="operation-btn"
                       @click="updateData(scope.row)"
                       type="text"
                       size="small"
                       v-else>修改</el-button>
            <span class="operation-btn-span"> | </span>
            <el-button class="operation-btn"
                       @click="cancel(scope.row)"
                       type="text"
                       size="small"
                       v-if="scope.row.isSet">取消</el-button>
            <el-button class="operation-btn"
                       @click="deleteData(scope.row)"
                       type="text"
                       size="small"
                       v-else>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
    <el-pagination background
                   layout="prev, pager, next, jumper"
                   :total="userData.totalCount"
                   @size-change="currentChange"
                   @current-change="currentChange"
                   :current-page="currentPage">
    </el-pagination>

    <el-dialog title="添加用户"
               :visible.sync="dialogFormVisible">
      <el-form :model="newUser"
               inline
               label-width="100px"
               :rules="data.rules"
               ref="ruleForm">
        <el-form-item label="用户名"
                      prop="username">
          <el-input v-model="newUser.username"></el-input>
        </el-form-item>
        <el-form-item label="手机号"
                      prop="phone">
          <el-input v-model.number="newUser.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱"
                      prop="email">
          <el-input v-model="newUser.email"></el-input>
        </el-form-item>
        <el-form-item label="公司名"
                      prop="company">
          <el-input v-model="newUser.company"></el-input>
        </el-form-item>
        <el-form-item label="行业类型"
                      prop="industry">
          <el-input v-model="newUser.industry"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="addUser('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { apiUserList, apiAddUser } from "@/plugins/api";
export default {
  data() {
    return {
      userData: [], //本页数据
      currentPage: 1,
      dialogFormVisible: false, // 添加用户对话框
      newUser: {}, //新添用户
      data: {
        userList: [], //用户列表
        rules: {
          username: [
            {
              required: true,
              message: "请填写用户名",
              trigger: ["blur", "change"]
            }
          ],
          phone: [
            {
              required: true,
              message: "请填写手机号",
              trigger: ["blur", "change"]
            },
            {
              validator: function(rule, value, callback) {
                if (/^1[34578]\d{9}$/.test(value) == false) {
                  callback(new Error("请输入正确的手机号"));
                } else {
                  //此处callback必须有
                  callback();
                }
              },
              message: "请输入正确的手机号码",
              trigger: ["blur", "change"]
            }
          ],
          email: [
            {
              required: true,
              message: "请填写邮箱",
              trigger: ["blur", "change"]
            },
            {
              type: "email",
              message: "请输入正确的邮箱地址",
              trigger: ["blur", "change"]
            }
          ],
          company: [
            {
              required: true,
              message: "请填写公司名",
              trigger: ["blur", "change"]
            }
          ]
        }
      },
      currentRow: [] //当前编辑行
    };
  },
  created() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      apiUserList({ page: 1 }).then(res => {
        this.userData = res;
        this.currentPage = parseInt(this.userData.pagination.pageIndex);
        this.data.userList = res.data.list;
      });
    },
    // 当前页改变时触发请求
    currentChange(current) {
      apiUserList({ page: current }).then(res => {
        this.userData = res;
        this.currentPage = parseInt(this.userData.pagination.pageIndex);
        this.data.userList = res.data.list;
      });
    },
    // 编辑数据
    updateData(row) {
      // 判断是否已经保存所有操作
      for (let i of this.data.userList) {
        // console.log("i.isSet", i.isSet, i.id, row.id);
        if (i.isSet && i.id != row.id) {
          this.$message("请先保存当前编辑项");
          return false;
        }
      }
      this.$set(row, "isSet", "true");
    },
    // 保存
    saveDate(row) {
      this.$refs["formData"].validate(valid => {
        if (valid) {
          apiAddUser(row).then(res => {
            if (res.status === 200) {
              this.userData = res;
              this.currentPage = parseInt(this.userData.pagination.pageIndex);
              this.data.userList = res.data.list;
              this.$message("保存成功");
              this.$set(row, "isSet", "false");
              this.currentRow = [];
            } else {
              this.$message.error("保存失败");
              return false;
            }
          });
        } else {
          this.$message.error("请正确填写信息");
          return false;
        }
      });
    },
    cancel(row) {
      //取消修改
      row.isSet = false;
      apiUserList({ page: this.currentPage }).then(res => {
        this.data.userList = res.data.list;
      });
    },
    deleteData(row) {
      this.$confirm("确认删除此条数据吗?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        //删除用户
        apiAddUser(row).then(res => {
          if (res.status === 200) {
            this.userData = res;
            this.currentPage = parseInt(this.userData.pagination.pageIndex);
            this.data.userList = res.data.list;
            this.$message("删除成功");
          }
        });
      });
    },
    formatter(row) {
      //手机号显示星号
      return row.phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    },
    addUser(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //添加用户
          apiAddUser(this.newUser).then(res => {
            if (res.status === 200) {
              this.userData = res;
              this.currentPage = parseInt(this.userData.pagination.pageIndex);
              this.data.userList = res.data.list;
              this.dialogFormVisible = false;
              this.$message("添加成功");
              this.newUser = [];
            } else {
              this.$message("添加失败");
            }
          });
        } else {
          this.$message.error("请正确填写信息");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-main {
  margin: 0 auto;
}
.add-btn {
  margin: 10px 0 20px;
  .el-button {
    border-color: $logocolor;
    color: $logocolor;
    border-radius: 8px;
    @include backgroundColor("background_color");
    &:focus,
    &:hover {
      background-color: $logocolor;
      color: #fff;
    }
  }
}

.el-table {
  overflow: inherit;
  background: none;
  border-collapse: separate;
  @include fontColor("font_color-2");
  &::before {
    background: none;
  }
  /deep/th {
    @include fontColor("font_color");
    font-weight: bold;
  }
  /deep/th,
  /deep/tr {
    border-bottom: 0;
    background: none;
  }
  /deep/.el-table__body {
    border-spacing: 0px 10px;
    td {
      padding: 8px 0;
      border-bottom: 0;
      &:first-child {
        border-radius: 8px 0 0 8px;
      }
      &:last-child {
        border-radius: 0 8px 8px 0;
      }
    }
    tr {
      @include backgroundColor("background_color-2");
    }
  }
  //行内表单
  .el-form-item {
    &::before,
    &::after {
      display: inherit;
    }
    margin-bottom: 0;
    /deep/.el-form-item__content {
      &::before,
      &::after {
        display: inherit;
      }
    }
    // 错误提示
    /deep/.el-form-item__error {
      position: absolute;
      top: inherit;
      bottom: 115%;
      border: solid 1px #f56c6c;
      padding: 5px 8px;
      border-radius: 5px;
      text-align: left;
      line-height: 1.2;
      @include backgroundColor("background_color-2");
      &:before {
        content: "";
        display: block;
        position: absolute;
        bottom: -4px;
        left: 10%;
        width: 5px;
        height: 5px;
        transform: rotate(45deg);
        @include backgroundColor("background_color-2");
        border-right: solid 1px #f56c6c;
        border-bottom: solid 1px #f56c6c;
      }
    }
    // input
    /deep/.el-input__inner {
      @include backgroundColor("background_color-2");
      @include fontColor("font_color-2");
    }
  }
  /deep/.el-table__body-wrapper,
  /deep/.cell {
    overflow: inherit;
  }
  //分页
  .operation-btn {
    color: $logocolor;
  }
  .operation-btn-span {
    color: #ccc;
  }
}
// 弹窗
.el-dialog__wrapper {
  /deep/ .el-dialog__title {
    @include fontColor("font_color");
  }
  /deep/ .el-dialog,
  /deep/ .el-pager li {
    @include backgroundColor("background_color-2");
  }
  /deep/ .el-input__inner {
    @include backgroundColor("background_color-2");
    @include fontColor("font_color-2");
  }
  /deep/ .el-form-item__label {
    @include fontColor("font_color-2");
  }
}
</style>
<style lang="scss">
[data-theme="dark"] .el-table__body tr:hover > td {
  background-color: #606088;
}

.el-pagination.is-background {
  margin-top: 20px;
  .btn-next,
  .btn-prev,
  .el-pager li {
    @include fontColor("font_color-2");
    @include backgroundColor("background_color-2");
  }
  .el-pagination__jump {
    @include fontColor("font_color-2");
  }
  .el-input__inner {
    border: none;
    @include fontColor("font_color-2");
    @include backgroundColor("background_color-2");
  }
}
</style>