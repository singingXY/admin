<template>
  <div>
    <el-row class="add-btn">
      <el-button size="medium">添加用户</el-button>
      <el-button size="medium">用户设备</el-button>
    </el-row>
    <el-table :data="userList"
              style="width: 100%"
              row-class-name="table-row"
              :row-key="userList.id">
      <el-table-column prop="order"
                       label="序列"
                       width="50"
                       align="center">
      </el-table-column>
      <el-table-column prop="username"
                       label="用户名"
                       min-width="6%"
                       align="center">
      </el-table-column>
      <el-table-column prop="phone"
                       label="手机号码"
                       min-width="10%"
                       align="center"
                       :formatter="formatter">
      </el-table-column>
      <el-table-column prop="email"
                       label="邮箱"
                       min-width="12%"
                       align="center">
      </el-table-column>
      <el-table-column prop="company"
                       label="公司"
                       min-width="12%"
                       align="center">
      </el-table-column>
      <el-table-column prop="industry"
                       label="行业类型"
                       min-width="6%"
                       align="center">
      </el-table-column>
      <el-table-column label="操作"
                       min-width="8%"
                       align="center">
        <template slot-scope="scope">
          <el-button class="operation-btn"
                     @click="handleClick(scope.row)"
                     type="text"
                     size="small">修改</el-button>
          <span class="operation-btn-span"> | </span>
          <el-button class="operation-btn"
                     type="text"
                     size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background
                   layout="prev, pager, next, jumper"
                   :total="userData.totalCount"
                   @size-change="currentChange"
                   @current-change="currentChange"
                   :current-page="currentPage">
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
      console.log(row);
    },

    formatter(row) {
      return row.phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
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
  .operation-btn {
    color: $logocolor;
  }
  .operation-btn-span {
    color: #ccc;
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
  .el-pager li:not(.disabled) {
    &:hover {
      color: $logocolor;
    }
    &.active {
      background-color: $logocolor;
      color: #fff;
    }
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