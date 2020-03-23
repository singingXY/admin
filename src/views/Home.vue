<template>
  <div class="home">
    <el-container >
        <el-menu 
          class="el-menu"
          background-color="#242635"
          text-color="#cecece"
          active-text-color="#fff"
          :collapse="isCollapse"
          @mouseenter.native="collapseOpen">
          <div class="menu-collapse" @click="collapseClose" v-if="!isCollapse">
            <i class="el-icon-arrow-left"></i>
          </div>
          <div class="logo">
              <img src="../assets/logo.svg" alt="">
              <span v-if="!isCollapse"> Admin</span>
          </div>
          <el-menu-item index=1>
            <i class="el-icon-ali-addchegnyuan"></i>
            <span slot="title">添加用户</span>
          </el-menu-item>
          <el-menu-item index=2>
            <i class="el-icon-ali-addshebei"></i>
            <span slot="title">添加设备</span></el-menu-item>
          <el-menu-item index=3>
            <i class="el-icon-ali-shebeimap"></i>
            <span slot="title">设备地图</span></el-menu-item>
          <el-menu-item index=4>
            <i class="el-icon-ali-shebeiliebiao"></i>
            <span slot="title">设备列表</span></el-menu-item>
          <el-menu-item index=5>
            <i class="el-icon-ali-xiugai"></i>
            <span slot="title">修改用户信息</span></el-menu-item>
          <el-menu-item index=6>
            <i class="el-icon-ali-mokuaixuanze"></i>
            <span slot="title">Q&A模块</span></el-menu-item>
          <el-menu-item index=7>
            <i class="el-icon-ali-fankui"></i>
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
 width: 220px;
}
.el-menu-item [class^=el-icon-]{
  margin-right: 10px;
  font-size: 22px;
}

.el-menu .logo{
  text-align: center;
  padding: 1rem 0;
  color:#e0560c;
  font-weight: bold;
  font-size: 28px;
  display: flex;
  align-items: center;
}
.el-menu .logo img{
  width: 46px;
  margin-right: 5px;
  margin-left: .6rem;
}
/* 收起侧栏按钮 */
.menu-collapse{
  background: #242635;
  color: #eee;
  position: absolute;
  right: -1rem;top: 50%;
  margin-top: -1.5rem;
  height: 3rem;
  line-height: 3rem;
  border-radius: 0 1rem 1rem 0;
}
.el-menu-item.is-active{
  background-color: #313447 !important;
  border-left: solid 5px #ea5906;
  text-indent: -3px;
}
</style>