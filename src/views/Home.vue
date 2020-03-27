<template>
  <div class="home">
    <el-row class="home-row1"
            :gutter="26"
            type="flex"
            justify="center">
      <el-col :span="8">
        <el-card shadow="always">
          <i class="el-icon-alifangan"></i>
          <span>解决方案</span>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="always">
          <i class="el-icon-alishuju"></i>
          <span>销售排名</span>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="always">
          <i class="el-icon-alichanpin"></i>
          <span>产品中心</span>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="always">
          <i class="el-icon-alifuwu-m"></i>
          <span>服务与支持</span>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="home-row2"
            :gutter="26"
            type="flex"
            justify="center">
      <el-col :span="4">
        <el-card shadow="always">
          <i class="el-icon-aliditu"></i>
          <span>用户地图</span>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="always">
          <i class="el-icon-alirizhi"></i>
          <span>用户日志</span>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="always">
          <i class="el-icon-alidrxx66"></i>
          <span>用户反馈</span>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="always">
          <i class="el-icon-ali-geren"></i>
          <span>个人中心</span>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="always">
          <i class="el-icon-ali-set"></i>
          <span>设置</span>
        </el-card>
        <el-card shadow="always">
          <i class="el-icon-ali-down"></i>
          <span>APP下载</span>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
</script>

<style lang="scss" >
.home {
  padding: 60px 0;
  .el-row {
    margin-bottom: 26px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-card {
    height: 240px;
    border: none;
    border-radius: 6px;
    text-align: center;
    font-size: 18px;
    &:hover {
      transform: scale(1.05);
    }
    .el-card__body {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
    }
    [class^="el-icon-ali"],
    [class*="el-icon-ali"] {
      display: block;
      margin-top: 30px;
      font-size: 58px;
    }
  }
  .home-row1 {
    .el-card {
      color: #fff;
    }
    .el-col {
      &:nth-child(1) .el-card {
        background-color: #d1703d;
      }
      &:nth-child(2) .el-card {
        background-color: #1bb2a1;
      }
      &:nth-child(3) .el-card {
        background-color: #4987d2;
      }
      &:nth-child(4) .el-card {
        background-color: #826ee1;
      }
    }
  }
  .home-row2 {
    .el-card {
      color: #ddd;
      @include backgroundColor("background_color-2");
      @include fontColor("font_color");
    }
    .el-col {
      &:nth-child(1) i {
        color: #4886cf;
      }
      &:nth-child(2) i {
        color: #e6a64c;
      }
      &:nth-child(3) i {
        color: #61abda;
      }
      &:nth-child(4) i {
        color: #d1703d;
      }
      &:last-child {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .el-card {
          display: flex;
          height: 105px;
          .el-card__body {
            flex-direction: row;
            align-items: center;
          }
          i {
            margin-top: 0;
            margin-right: 15px;
            font-size: 40px;
          }
          &:nth-child(1) i {
            color: #19b291;
          }
          &:nth-child(2) i {
            color: #8d74f6;
          }
        }
      }
    }
  }
}
</style>