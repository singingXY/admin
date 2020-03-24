<template>
  <el-container  class="home">
      <NavMenu/>
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
</template>

<script>
 import NavMenu from '@/components/NavMenu.vue'

export default {
  name: 'home',
  data () {
    return {
    
    }
  },
  methods: {
  },
  components: {
    NavMenu
  }
}
</script>

<style lang="scss">
.home{
  height: 100%;
}
.right-container{
  width: 100%;
}
.el-container{
  .el-header{
    background :#43435d;
    display: flex;
    justify-content: space-between;
  }
}
</style>