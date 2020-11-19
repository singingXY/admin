<template>
  <div class="modify-user">
    <el-row :gutter="26"
            type="flex"
            justify="center"
            class="row1">
      <el-col :span="6">
        <el-card shadow="always"
                 class="user-msg">
          <el-avatar :size="60"
                     icon="el-icon-user-solid"></el-avatar>
          <h5>昂华</h5>
          <span class="user-type">工业 自动化工程</span>
          <p>昂华(上海)自动化工程股份有限公司是一家专注于提供装配自动化解决方案的高新技术企业，2011年成立于上海浦东。</p>
          <div class="user-i">
            <el-button type="text"><i class="el-icon-location-information"></i></el-button>
            <el-button type="text"><i class="el-icon-chat-line-round"></i></el-button>
            <el-button type="text"><i class="el-icon-message"></i></el-button>
          </div>
          <el-button type="primary"
                     size="medium">点击查看</el-button>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="always">
          <div slot="header"
               class="card_header">
            <span>设备运行频率</span>
            <el-button type="text"><i class="el-icon-more"></i></el-button>
          </div>
          <div id="myChart"
               class="operation-frequency"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="26"
            type="flex"
            justify="center"
            class="row2">
      <el-col :span="12">
        <el-card shadow="always">
          <div slot="header"
               class="card_header">
            <span>产品周期</span>
            <el-button type="text"><i class="el-icon-more"></i></el-button>
          </div>

          <div id="myChartPie"
               class="product-cycle"></div>
          <!-- <el-row :gutter="20"
                  type="flex"
                  justify="space-around"
                  class="product-cycle">
            <el-progress type="circle"
                         :percentage="50"
                         stroke-width="8"
                         width="90"
                         color="#e43"></el-progress>
            <el-progress type="circle"
                         :percentage="75"
                         stroke-width="8"
                         width="90"
                         color="#e43"></el-progress>
            <el-progress type="circle"
                         :percentage="45"
                         stroke-width="8"
                         width="90"
                         color="#e43"></el-progress>
          </el-row> -->
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="always">
          <h4>通信波特率</h4>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  mounted() {
    this.drawLine();
    this.drawPie();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("myChart"),
        "dark"
      );
      //窗口改变后重绘
      window.onresize = function () {
        myChart.resize();
      };
      // 绘制图表
      myChart.setOption({
        xAxis: {
          type: "category",
          splitLine: { show: false },
          axisTick: { show: false },
          boundaryGap: false,
          data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
        },
        yAxis: {
          type: "value",
          axisLine: { show: false },
          axisTick: { show: false },
        },
        grid: {
          left: "6%",
          top: "3%",
          height: "75%",
          width: "100%",
        },

        legend: {
          textStyle: {
            color: "#9090a2",
          },
          bottom: "0",
          icon: "rect",
          itemWidth: 10,
          itemHeight: 10,
        },
        series: [
          {
            name: "PLC",
            type: "line",
            data: [380, 310, 405, 305, 360, 310, 390, 320, 370],
            areaStyle: {},
            itemStyle: { opacity: 0 },
            lineStyle: { opacity: 0 },
          },
          {
            name: "伺服",
            type: "line",
            data: [300, 380, 300, 380, 300, 390, 280, 390, 375],
            areaStyle: {},
            itemStyle: { opacity: 0 },
            lineStyle: { opacity: 0 },
          },
        ],
      });
    },
    drawPie() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("myChartPie"),
        "dark"
      );
      //窗口改变后重绘
      window.onresize = function () {
        myChart.resize();
      };
      var data = [
        { name: "HMI", value: 50 },
        { name: "PLC", value: 75 },
        { name: "伺服", value: 45 },
      ];
      var polar = [];
      var angleAxis = [];
      var radiusAxis = [];
      var series = [];
      var titles = [];
      for (var i = 0; i < data.length; i++) {
        polar.push({
          center: [15 + 33 * (i % 3) + "%", "30%"],
          radius: "100%",
        });
        angleAxis.push({
          polarIndex: i,
          max: 100,
          clockwise: true, // 逆时针
          show: false, // 隐藏刻度线,
        });
        radiusAxis.push({
          type: "category",
          polarIndex: i,
          axisLine: { show: false },
        });
        series.push({
          type: "bar",
          showBackground: true,
          backgroundStyle: { color: "rgba(159,159,204,.2)" },
          coordinateSystem: "polar",
          roundCap: true,
          barWidth: 9,
          polarIndex: i,
          name: data[i].name,
          data: [data[i].value],
          itemStyle: { shadowBlur: 2 },
        });
        titles.push({
          text: data[i].name,
          textStyle: {
            fontSize: 14,
            fontWeight: "normal",
          },
        });
      }
      series[0].itemStyle = {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: "#ef4b4c" },
            { offset: 1, color: "#fda963" },
          ],
        },
        shadowColor: "#ef6251",
      };
      series[1].itemStyle = {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: "#6d5cff" },
            { offset: 1, color: "#ac8aff" },
          ],
        },
        shadowColor: "#7f6df7",
      };
      series[2].itemStyle = {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: "#61a92b" },
            { offset: 1, color: "#a5da4a" },
          ],
        },
        shadowColor: "#80ca37",
      };
      // 绘制图表
      myChart.setOption({
        title: titles,
        polar: polar,
        tooltip: {
          formatter: "{c}%",
        },
        labelLine: { show: false },
        angleAxis: angleAxis,
        radiusAxis: radiusAxis,
        series: series,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.modify-user {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  .el-card {
    border: none;
    color: #ddd;
    @include backgroundColor("background_color-2");
    @include fontColor("font_color");

    .el-button--text {
      @include fontColor("font_color-2");
      padding: 0;
    }
    /deep/ .el-card__header {
      border-bottom: 0;
    }
    .card_header {
      display: flex;
      justify-content: space-between;
    }
  }
  .row1 {
    margin-bottom: 28px;
    justify-content: stretch;
    .el-card {
      min-height: 300px;
      height: 100%;
    }
    .user-msg {
      text-align: center;
      .el-avatar {
        background: #9b9b9b;
        font-size: 36px;
      }
      h5 {
        font-size: 14px;
        margin: 18px 0 3px;
      }
      .user-type {
        font-size: 12px;
        @include fontColor("font_color-2");
      }
      p {
        color: #9090a2;
        margin-top: 20px;
        text-align: justify;
        line-height: 1.3;
        font-size: 12px;
      }
      .user-i {
        display: flex;
        justify-content: space-around;
        margin: 18px 0;
      }
    }
  }
  .row2 {
    .el-card {
      height: 210px;
    }
  }
}
.operation-frequency {
  width: 100%;
  height: 240px;
}
.product-cycle {
  width: 100%;
  height: 150px;
}
.product-cycle {
  /deep/ .el-progress__text {
    font-size: 16px !important;
    @include fontColor("font_color");
  }
  /deep/.el-progress-circle__track {
    stroke: rgba(145, 145, 197, 0.2);
  }
}
</style>