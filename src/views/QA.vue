<template>
  <div class="qa">
    <el-col :span="8">
      <div class="title">
        <h3>PLC (6)</h3>
      </div>
      <ul>
        <li>
          <div class="tag">Bug</div>
          <div class="content">
            <h5>UN 104-2DB23-0XB8</h5>
            <p>FLASH技术的超长时间掉电，数据丢失</p>
          </div>
          <i class="el-icon-more"></i>
        </li>
        <li>
          <div class="tag">Bug</div>
          <div class="content">
            <h5>UN 104-2DB23-0XB8</h5>
            <p>FLASH技术的超长时间掉电，数据丢失</p>
          </div>
          <i class="el-icon-more"></i>
        </li>
      </ul>
    </el-col>
    <el-col :span="8">
      <div class="title">
        <h3>HMI (2)</h3>
      </div>
      <ul>
        <li>
          <div class="tag">Bug</div>
          <div class="content">
            <h5>UN 104-2DB23-0XB8</h5>
            <p>FLASH技术的超长时间掉电，数据丢失</p>
          </div>
          <i class="el-icon-more"></i>
        </li>
        <li>
          <div class="tag">Bug</div>
          <div class="content">
            <h5>UN 104-2DB23-0XB8</h5>
            <p>FLASH技术的超长时间掉电，数据丢失</p>
          </div>
          <i class="el-icon-more"></i>
        </li>
      </ul>
    </el-col>
    <el-col :span="8">
      <div class="title">
        <h3>伺服 (6)</h3>
      </div>
      <ul>
        <li>
          <div class="tag">Bug</div>
          <div class="content">
            <h5>UN 104-2DB23-0XB8</h5>
            <p>FLASH技术的超长时间掉电，数据丢失</p>
          </div>
          <i class="el-icon-more"></i>
        </li>
        <li>
          <div class="tag">Bug</div>
          <div class="content">
            <h5>UN 104-2DB23-0XB8</h5>
            <p>FLASH技术的超长时间掉电，数据丢失</p>
          </div>
          <i class="el-icon-more"></i>
        </li>
      </ul>
    </el-col>

  </div>
</template>

<script>
export default {};
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
    .content {
      flex: 1 1 auto;
      h5 {
        font-size: 15px;
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
}
</style>