<template>
  <el-container  class="home" id="app">
      <NavMenu/>
      <el-container class="right-container">
        <el-header height="70px">
          <div class="search-box">
            <el-input
             prefix-icon="el-icon-search"
             placeholder="请输入您要搜索的关键词"
             v-model="searchText"></el-input>
          </div>
          <router-link to="/"><i class="el-icon-menu"></i></router-link>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
  </el-container>
</template>

<script>
 import NavMenu from '@/components/NavMenu.vue'

export default {
  data () {
    return {
     searchText:''
    }
  },
  components: {
    NavMenu
  }
}
</script>

<style lang="scss">

#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #2a2b3d;
}
.home{
  height: 100%;
}
.right-container{
  width: 100%;
}
.el-container{
  .el-header{
    display: flex;
    justify-content: space-between;
    padding: 1rem 30px;
    background :#43435d;
    color: #C0C4CC;
    .search-box{
      display: flex;
      justify-content: space-between;
      .el-input__prefix{
        left: 0;
      }
      .el-icon-search{
        font-size: 20px;
        text-align: left;
      }
      .el-input__inner{
        outline: none;
        border: none;
        border-radius:0;
        &:focus{
          border-bottom: 1px solid #C0C4CC;
        }
      }
    }
    .el-icon-menu{
      font-size: 28px;
      line-height: 40px;
    }
  }
}
</style>