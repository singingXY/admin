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
      <el-col :span="6"
              class="col3">
        <el-card shadow="always">
          <h6>PLC-120系列</h6>
          <p>当前以太网通讯功能，通信速达率达到</p>
          <div id="kbps1"
               class="kbps"></div>
          <p>CPU126-2Q DC/DC/DC</p>
        </el-card>
        <el-card shadow="always">
          <h6>HMI-120系列</h6>
          <p>当前以太网通讯功能，通信速达率达到</p>
          <div id="kbps2"
               class="kbps"></div>
          <p>CPU126-2Q DC/DC/DC</p>
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
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="always">
          <h4>通信波特率</h4>

          <div id="myChartBar"
               class="product-cycle"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { EleResize } from "../plugins/esresize";
export default {
  mounted() {
    this.setChart1();
    this.setChart2();
    this.setChart3();
    this.setChart4();
    this.setChart5();
  },
  methods: {
    drawChart(dom, option) {
      //let mytheme = localStorage.getItem("theme");
      let mytheme = "dark";
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById(dom), mytheme);
      let resizeDiv = document.getElementById(dom);
      // 绘制图表
      myChart.setOption(option);
      let listener = function () {
        //console.log("resize");
        myChart.resize();
      };
      EleResize.on(resizeDiv, listener);
    },
    setChart1() {
      let dom = "myChart";
      let option = {
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
        tooltip: { show: true, trigger: "axis" },
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
      };
      this.drawChart(dom, option);
    },
    setChart2() {
      let dom = "myChartPie";
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
      var barLinear = [
        ["#ef4b4c", "#fda963", "#ef6251"],
        ["#6d5cff", "#ac8aff", "#7f6df7"],
        ["#61a92b", "#a5da4a", "#80ca37"],
      ];
      for (var i = 0; i < data.length; i++) {
        polar.push({
          center: [17 + 33 * (i % 3) + "%", "30%"],
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
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: barLinear[i][0] },
                { offset: 1, color: barLinear[i][1] },
              ],
            },
            shadowColor: barLinear[i][2],
            shadowBlur: 2,
          },
        });
        titles.push({
          text: data[i].value + "%",
          top: "25%",
          left: 13.5 + 33.3 * (i % 3) + "%",
          textStyle: { fontSize: 14, fontWeight: "normal" },
          subtext: data[i].name,
          subtextStyle: {},
          itemGap: 45,
        });
      }
      let option = {
        title: titles,
        polar: polar,
        tooltip: { formatter: "{c}%" },
        labelLine: { show: false },
        angleAxis: angleAxis,
        radiusAxis: radiusAxis,
        series: series,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      };
      this.drawChart(dom, option);
    },
    setChart3() {
      let dom = "myChartBar";
      let aData = [];
      for (var i = 0; i < 9; i++) {
        aData.push(Math.floor(Math.random() * 400));
      }
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
            lineStyle: {
              opacity: 0,
            },
          },
          formatter: function (params) {
            return params[0].name + ": " + params[0].value;
          },
        },
        grid: {
          left: "30",
          right: "0",
          bottom: "20",
          top: "30",
        },
        xAxis: {
          type: "category",
          //show: false,
          data: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
          splitLine: { show: false },
          axisLabel: { show: true },
          axisTick: { show: false },
          axisLine: { show: false },
        },
        yAxis: [
          {
            type: "value",
            splitLine: { show: false },
            axisLine: { show: false },
            axisTick: { show: false },
            interval: 100,
            max: 400,
          },
          {
            type: "value",
            splitLine: { show: false },
            axisLine: { show: false },
            axisTick: { show: false },
            interval: 100,
          },
        ],
        series: [
          {
            name: "值",
            type: "bar",
            data: aData,
            itemStyle: {
              barBorderRadius: [15, 15, 0, 0],
              color: "rgba(84, 164, 253, 1)",
            },
            zlevel: 9,
            yAxisIndex: 0,
            barWidth: 10,
          },
          {
            name: "背景",
            type: "bar",
            data: [400, 400, 400, 400, 400, 400, 400, 400, 400],
            itemStyle: {
              barBorderRadius: [15, 15, 0, 0],
              color: "rgba(159,159,204,.2)",
            },
            zlevel: 11,
            yAxisIndex: 1,
            barWidth: 10,
            barGap: "-100%",
          },
        ],
      };
      this.drawChart(dom, option);
    },
    setChart4() {
      let dom = "kbps1";
      let option = {
        xAxis: { show: false },
        yAxis: {
          type: "category",
          axisLine: { show: false },
          axisTick: { show: false },
        },
        grid: {
          left: 0,
          right: 0,
          bottom: 25,
        },
        series: [
          {
            // For shadow
            type: "bar",
            barWidth: 3,
            itemStyle: {
              color: "rgba(0,0,0,0.5)",
              barBorderRadius: 30,
            },
            barGap: "-100%",
            data: [200],
            animation: false,
          },
          {
            type: "bar",
            barWidth: 3,
            label: {
              show: true,
              position: [0, -30],
              formatter: "{c}Mb/s",
              fontSize: 18,
            },
            itemStyle: {
              barBorderRadius: 30,
            },
            data: [{ value: Math.floor(Math.random() * 200) }],
          },
        ],
      };
      this.drawChart(dom, option);
    },
    setChart5() {
      let dom = "kbps2";
      let option = {
        xAxis: { show: false },
        yAxis: {
          type: "category",
          axisLine: { show: false },
          axisTick: { show: false },
        },
        grid: {
          left: 0,
          right: 0,
          bottom: 25,
        },
        series: [
          {
            // For shadow
            type: "bar",
            barWidth: 3,
            itemStyle: {
              color: "rgba(0,0,0,0.5)",
              barBorderRadius: 10,
            },
            barGap: "-100%",
            data: [200],
            animation: false,
          },
          {
            type: "bar",
            barWidth: 3,
            label: {
              show: true,
              position: [0, -30],
              formatter: "{c}Mb/s",
              fontSize: 18,
            },
            itemStyle: {
              barBorderRadius: 10,
            },
            data: [{ value: Math.floor(Math.random() * 200) }],
          },
        ],
      };
      this.drawChart(dom, option);
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
    .col3 {
      position: relative;
      .el-card {
        position: absolute;
        &:last-child {
          bottom: 0;
        }
        height: 45%;
        min-height: 140px;
      }
      h6 {
        font-size: 14px;
        margin-bottom: 8px;
      }
      p {
        font-size: 10px;
      }
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
  .operation-frequency {
    width: 100%;
    height: 240px;
  }
  .product-cycle {
    width: 100%;
    height: 150px;
  }
  .kbps {
    width: 100%;
    height: 60px;
  }
}
</style>