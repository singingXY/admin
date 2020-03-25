<template>
  <el-container id="app" >
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
     searchText:'',
     theme: 1
    }
  },
  methods: {
    toggleTheme(index) {
      window.document.documentElement.setAttribute(
        "data-theme",
        index ? "light" : "dark"
      );
    }
  },
  components: {
    NavMenu
  }
}
</script>

<style lang="scss">

// @import "@/assets/css/_handle.scss";
 
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #c0c4cc;
  height: 100%;
  @include backgroundColor("background_color");
  transition: all .3s;
}
.right-container{
  width: 100%;
}
.el-container{
  .el-header{
    display: flex;
    justify-content: space-between;
    padding: 1rem 30px;
    @include backgroundColor("background_color-2");
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
        background-color: transparent;
        &:focus{
          border-bottom: 1px solid #C0C4CC;
        }
      }
    }
    .el-icon-menu{
      font-size: 28px;
      line-height: 40px;
      color: $logocolor;
    }
  }
}
</style>