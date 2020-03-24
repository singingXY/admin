<template>
  <div class="home">
    <el-row :gutter="26" type="flex" justify="center">
      <el-col :span="8">
        <el-card shadow="always">
          <i></i>
          <span>解决方案</span>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="always">
          <span>销售排名</span>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="always">
          <span>产品中心</span>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="always">
          <span>服务与支持</span>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="26" type="flex" justify="center">
      <el-col :span="4">
        <el-card shadow="always">
          <span>用户地图</span>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="always">
          <span>用户日志</span>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="always">
          <span>用户反馈</span>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="always">
          <span>个人中心</span>
        </el-card>
      </el-col>
      <el-col :span="4" class="last">
        <el-card shadow="always">
          <span>设置</span>
        </el-card>
        <el-card shadow="always">
          <span>APP下载</span>
        </el-card>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
</script>

<style lang="scss" >
  .home{
    padding: 60px 0;
  .el-row {
    margin-bottom: 26px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col.last {
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    .el-card{
      height: 96px;
    }
  }
  .el-card{
    height: 220px;
    border: none;
    border-radius:6px;
    color: #c0c4cc;
    text-align: center;
    font-size: 20px;
  }
  }
</style>