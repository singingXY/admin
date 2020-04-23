<template>
  <div class="modify-user">
    <el-row :gutter="26"
            type="flex"
            justify="center"
            class="row1">
      <el-col :span="6">
        <el-card shadow="always"
                 class="user-msg">
          <el-avatar :size="60"
                     icon="el-icon-user-solid"></el-avatar>
          <h5>昂华</h5>
          <span class="user-type">工业 自动化工程</span>
          <p>昂华(上海)自动化工程股份有限公司是一家专注于提供装配自动化解决方案的高新技术企业，2011年成立于上海浦东。</p>
          <div class="user-i">
            <el-button type="text"><i class="el-icon-location-information"></i></el-button>
            <el-button type="text"><i class="el-icon-chat-line-round"></i></el-button>
            <el-button type="text"><i class="el-icon-message"></i></el-button>
          </div>
          <el-button type="primary"
                     size="medium">点击查看</el-button>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="always">
          <div slot="header">
            <span>卡片名称</span>
            <el-button type="text"><i class="el-icon-more"></i></el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="26"
            type="flex"
            justify="center"
            class="row2">
      <el-col :span="12">
        <el-card shadow="always">
          <h4>产品周期</h4>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="always">
          <h4>通信波特率</h4>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
.modify-user {
  .el-card {
    border: none;
    color: #ddd;
    @include backgroundColor("background_color-2");
    @include fontColor("font_color");

    .el-button--text {
      @include fontColor("font_color-2");
      padding: 0;
    }
  }
  .row1 {
    margin-bottom: 28px;
    justify-content: stretch;
    .el-card {
      min-height: 300px;
    }
    .user-msg {
      text-align: center;
      .el-avatar {
        background: #9b9b9b;
        font-size: 36px;
      }
      h5 {
        font-size: 14px;
        margin: 18px 0 3px;
      }
      .user-type {
        font-size: 12px;
        @include fontColor("font_color-2");
      }
      p {
        color: #9090a2;
        margin-top: 20px;
        text-align: justify;
        line-height: 1.3;
        font-size: 12px;
      }
      .user-i {
        display: flex;
        justify-content: space-around;
        margin: 18px 0;
      }
    }
  }
  .row2 {
    .el-card {
      height: 210px;
    }
  }
}
</style>