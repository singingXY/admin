<template>
  <div>
    <el-row class="add-btn">
      <el-button size="medium">添加用户</el-button>
      <el-button size="medium">用户设备</el-button>
    </el-row>
    <el-table :data="userList"
              style="width: 100%"
              row-class-name="table-row">
      <el-table-column prop="order"
                       label="序列"
                       width="50">
      </el-table-column>
      <el-table-column prop="username"
                       label="用户名">
      </el-table-column>
      <el-table-column prop="phone"
                       label="手机号码"
                       :formatter="formatter">
      </el-table-column>
      <el-table-column prop="email"
                       label="邮箱">
      </el-table-column>
      <el-table-column prop="company"
                       label="公司">
      </el-table-column>
      <el-table-column prop="industry"
                       label="行业类型">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"
                     type="text"
                     size="small">查看</el-button>
          <el-button type="text"
                     size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background
                   layout="prev, pager, next"
                   :total="userData.totalCount"
                   :current-page="currentPage"
                   @current-change="currentChange">

    </el-pagination>
  </div>
</template>

<script>
import { apiAddUser } from "@/plugins/api";
export default {
  data() {
    return {
      userData: [],
      userList: [],
      currentPage: 1
    };
  },
  created() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      apiAddUser({ page: 1 }).then(res => {
        this.userData = res;
        this.currentPage = parseInt(this.userData.pagination.pageIndex);
        this.userList = res.data.list;
      });
    },
    currentChange(current) {
      //当前页改变时触发请求
      apiAddUser({ page: current }).then(res => {
        this.userData = res;
        this.currentPage = parseInt(this.userData.pagination.pageIndex);
        this.userList = res.data.list;
      });
    },
    handleClick(row) {
      //console.log(row);
    },

    formatter(row) {
      return row.phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    }
  }
};
</script>

<style lang="scss" scoped>
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
  background: none;
  border-collapse: separate;
  @include fontColor("font_color-2");
  /deep/th {
    @include fontColor("font_color");
  }
  /deep/th,
  /deep/tr {
    border-bottom: 0;
    background: none;
  }
  /deep/.el-table__body {
    border-spacing: 0px 10px;
    td {
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
}
</style>