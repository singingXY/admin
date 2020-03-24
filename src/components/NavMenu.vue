<template>
  <el-menu 
    class="el-menu"
    background-color="#242635"
    text-color="#c0c4cc"
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
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    msg: String
  },
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
}
</script>

<style lang="scss" scoped>

.el-menu--collapse{
  width: 77px;
}
.el-menu {
    height: 100%;
    border-right:none;
    &:not(.el-menu--collapse) {
      width: 220px;
    }
    .logo {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      height: 70px;
      padding: 1rem 0;
      color: #e0620d;
      font-weight: bold;
      font-size: 26px;
      text-align: center;
      img {
        width: 34px;
        margin-right: 5px;
        margin-left: 1rem;
      }
    }
}
.el-menu-item [class^=el-icon-]{
  margin-right: 10px;
  font-size: 22px;
  color: #c0c4cc;
}
/* 收起侧栏按钮 */
.menu-collapse{
  background: #43435d;
  color: #c0c4cc;
  position: absolute;
  right: -1rem;top: 50%;
  margin-top: -1.5rem;
  height: 3rem;
  line-height: 3rem;
  border-radius: 0 1rem 1rem 0;
  cursor: pointer;
  z-index: 1;
}
li.el-menu-item.is-active{
  &::before{
    content: '';
    display: block;
    position: absolute;
    left: 0;
    width: 5px;
    height: 100%;
    background: #ea5906;
  }
  background-color: #313447 !important;
}
</style>
