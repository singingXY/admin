<template>
  <div class="qa">
    <el-col :span="8"
            v-for="(data, name) in qaData"
            :key="name">
      <div class="title"
           v-if="data">
        <h3>{{name}} ({{data.length}})</h3>
      </div>
      <ul>
        <li v-for="datas in data"
            :key="datas.id">
          <div class="tag"
               :class="'tagtype'+datas.type">{{ datas.type | qaType}}</div>
          <div class="content">
            <h5>{{datas.equipment}}</h5>
            <p>{{datas.content}}</p>
          </div>
          <el-dropdown>

            <i class="el-icon-more"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>处理</el-dropdown-item>
              <el-dropdown-item>完成</el-dropdown-item>
              <el-dropdown-item>忽略</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>

        <li v-if="data.length==0">
          暂无反馈消息
        </li>
      </ul>
    </el-col>
  </div>
</template>

<script>
import { apiQA } from "@/plugins/api";
export default {
  data() {
    return {
      qaData: []
    };
  },
  created() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      apiQA().then(res => {
        this.qaData = res;
      });
    }
  },
  filters: {
    qaType: function(value) {
      if (value == 1) {
        return "bug";
      } else if (value == 2) {
        return "反馈";
      } else if (value == 3) {
        return "故障";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: space-between;
  @include fontColor("font_color");
  padding: 20px 3px;
}
.qa {
  .el-col {
    padding: 0 20px;
  }
  li {
    display: flex;
    align-items: center;
    padding: 12px;
    @include fontColor("font_color-2");
    @include backgroundColor("background_color-2");
    border-radius: 4px;
    margin-bottom: 12px;
    min-height: 45px;
    .tag {
      flex: 0 0 46px;
      width: 46px;
      height: 46px;
      background: #fa0;
      color: #fff;
      text-align: center;
      border-radius: 50%;
      margin-right: 12px;
      padding: 14px 0;
      box-sizing: border-box;
    }
    .tagtype2 {
      background: #10bda9;
    }
    .tagtype3 {
      background: #d34;
    }
    .content {
      flex: 1 1 auto;
      width: 50%;
      h5 {
        font-size: 15px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      p {
        margin-top: 8px;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .el-icon-more {
      flex: 0 0 34px;
      text-align: right;
    }
  }
  .el-dropdown {
    @include fontColor("font_color-2");
  }
}
</style>