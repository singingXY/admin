<template>
  <div>
    <el-row class="add-btn">
      <el-button size="medium">添加用户</el-button>
      <el-button size="medium">用户设备</el-button>
    </el-row>
    <el-table :data="tableData"
              style="width: 100%"
              row-class-name="table-row">
      <el-table-column prop="date"
                       label="序列">
      </el-table-column>
      <el-table-column prop="name"
                       label="用户名">
      </el-table-column>
      <el-table-column prop="address"
                       label="手机号码">
      </el-table-column>
      <el-table-column prop="email"
                       label="邮箱">
      </el-table-column>
      <el-table-column prop="name"
                       label="公司">
      </el-table-column>
      <el-table-column prop="type"
                       label="行业类型">
      </el-table-column>
      <el-table-column prop="name"
                       label="操作">
      </el-table-column>
    </el-table>
    <el-pagination background
                   layout="prev, pager, next"
                   :total="1000">
</template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "1",
          name: "王小虎",
          address: "151****6863"
        },
        {
          date: "1",
          name: "王小虎",
          address: "151****6863"
        },
        {
          date: "1",
          name: "王小虎",
          address: "151****6863"
        },
        {
          date: "3",
          name: "王小虎",
          address: "151****6863"
        }
      ]
    };
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