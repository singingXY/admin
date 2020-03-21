<template>
  <div class="home">
    <el-container >
        <el-menu 
          class="el-menu"
          background-color="#20202c"
          text-color="#cecece"
          active-text-color="#fff"
          :collapse="isCollapse"
          @mouseenter.native="collapseOpen" 
          @mouseleave.native="collapseClose">
          <el-menu-item index=1>
            <i class="el-icon-menu"></i>
            <span slot="title">添加用户</span>
          </el-menu-item>
          <el-menu-item index=2>
            <i class="el-icon-menu"></i>
            <span slot="title">添加设备</span></el-menu-item>
          <el-menu-item index=3>
            <i class="el-icon-menu"></i>
            <span slot="title">设备地图</span></el-menu-item>
          <el-menu-item index=4>
            <i class="el-icon-menu"></i>
            <span slot="title">设备列表</span></el-menu-item>
          <el-menu-item index=5>
            <i class="el-icon-menu"></i>
            <span slot="title">修改用户信息</span></el-menu-item>
          <el-menu-item index=6>
            <i class="el-icon-menu"></i>
            <span slot="title">Q&A模块</span></el-menu-item>
          <el-menu-item index=7>
            <i class="el-icon-menu"></i>
            <span slot="title">用户信息反馈</span></el-menu-item>
        </el-menu>
      <el-container class="right-container">
        <el-header>
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            >
          </el-input>
          <i class="el-icon-menu"></i>
        </el-header>
        <el-main></el-main>
      </el-container>
    </el-container>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      isCollapse:true
    }
  },
  methods: {
    collapseOpen(){
      this.isCollapse = false
    },
    collapseClose(){
      this.isCollapse = true
    }
  },
  components: {
    // HelloWorld
  }
}
</script>

<style>
.right-container{
  width: 100%;
}
.el-header{
  background :#fff;
    display: flex;
    justify-content: space-between;
}
.el-menu--collapse{
  width: 77px;
}
.el-menu:not(.el-menu--collapse){
 width: 200px;
}
.el-menu-item [class^=el-icon-]{
  margin-right: 10px;
  font-size: 22px;
}
</style>