<template>
  <el-container id="app">
    <NavMenu />
    <div class="themes-btn">
      <el-button class="chang-themes"
                 icon="el-icon-sunny"
                 circle
                 v-show="theme=='light'"
                 @click="toggleTheme(0)"></el-button>
      <el-button class="chang-themes"
                 icon="el-icon-moon"
                 circle
                 v-show="theme=='dark'"
                 @click="toggleTheme(1)"></el-button>
    </div>
    <el-container class="right-container">
      <el-header height="70px">
        <div class="search-box">
          <el-input prefix-icon="el-icon-search"
                    placeholder="请输入您要搜索的关键词"
                    v-model="searchText"></el-input>
        </div>
        <router-link to="/"><i class="el-icon-menu"></i></router-link>
      </el-header>
      <el-main>
        <router-view />

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue";

export default {
  data() {
    return {
      searchText: "",
      theme: "dark",
    };
  },
  created() {
    let mytheme = localStorage.getItem("theme");
    if (mytheme) {
      this.theme = mytheme;
    }
    window.document.documentElement.setAttribute("data-theme", this.theme);
    localStorage.setItem("theme", this.theme);
  },
  methods: {
    toggleTheme(index) {
      this.theme = index ? "light" : "dark";
      localStorage.setItem("theme", this.theme);
      window.document.documentElement.setAttribute("data-theme", this.theme);
      location.reload();
    },
  },
  components: {
    NavMenu,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #c0c4cc;
  height: 100%;
  @include backgroundColor("background_color");
  transition: all 0.3s;
}
.right-container {
  width: 100%;
}
.el-container {
  .themes-btn {
    position: absolute;
    bottom: 20px;
    left: 15px;
    .el-button {
      font-size: 20px;
      color: #c0c4cc;
      background: #43435d;
      border: none;
      margin: 0;
    }
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 30px;
    @include backgroundColor("background_color-2");
    color: #c0c4cc;
    .search-box {
      display: flex;
      justify-content: space-between;
      .el-input__prefix {
        left: 0;
      }
      .el-icon-search {
        font-size: 20px;
        text-align: left;
      }
      .el-input__inner {
        outline: none;
        border: none;
        border-radius: 0;
        background-color: transparent;
        &:focus {
          border-bottom: 1px solid #c0c4cc;
        }
      }
    }
    .el-icon-menu {
      font-size: 28px;
      line-height: 40px;
      color: $logocolor;
    }
  }
}
</style>