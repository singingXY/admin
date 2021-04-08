<template>
  <div class="Equipment-map">
    <el-row :gutter="26"
            type="flex"
            justify="center"
            class="row1">
      <el-col :span="6">
        <el-card shadow="always">
          <div slot="header"
               class="card_header">
            <h6>设备波纹噪声</h6>
            <el-button type="text"><i class="el-icon-more"></i></el-button>
          </div>
          <div id="equipment-ripple-noise"
               class="equipment-ripple-noise"></div>
          <p>CPU126-2Q DC/DC/DC</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
          <div slot="header"
               class="card_header">
            <h6>计数器比例</h6>
            <el-button type="text"><i class="el-icon-more"></i></el-button>
          </div>
          <div id="scaler"
               class="scaler"></div>
          <p>CPU126-2Q DC/DC/DC</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
          <div slot="header"
               class="card_header">
            <h6>通信速率</h6>
            <el-button type="text"><i class="el-icon-more"></i></el-button>
          </div>
          <div id="kbps"
               class="kbps"></div>
          <p>CPU126-2Q DC/DC/DC</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
          <div slot="header"
               class="card_header">
            <h6>上位机通信</h6>
            <el-button type="text"><i class="el-icon-more"></i></el-button>
          </div>
          <div id="upper-computer"
               class="upper-computer"></div>
          <p>CPU126-2Q DC/DC/DC</p>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="26"
            type="flex"
            justify="center"
            class="row2">
      <el-col :span="13">
        <el-card shadow="always">
          <div slot="header"
               class="card_header">
            <h6>设备统计</h6>
            <el-button type="text"><i class="el-icon-more"></i></el-button>
          </div>
          <div class="es">
            <div class="Equipment-Statistics-left">
              <p class="p1">2019年昂华自动化设备统计</p>
              <h2>42100</h2>
              <p class="p2">昂华自动化</p>
              <p class="p3">昂华自动化已在20多个主要城市设有办事处，建成通达 全国的服务网络:同时，国际业务拓展至海外30多个国 家和地区，能够为全球用户提供优质、快捷的服务。
              </p>
              <el-button type="primary"
                         size="medium">查看更多</el-button>
            </div>
            <div id="Equipment-Statistics"
                 class="Equipment-Statistics"></div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="11">
        <el-card shadow="always">
          <div slot="header"
               class="card_header">
            <h6>设备地图</h6>
            <el-button type="text"><i class="el-icon-more"></i></el-button>
          </div>
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
      let mytheme = "dark";
      let myChart = this.$echarts.init(document.getElementById(dom), mytheme);
      let resizeDiv = document.getElementById(dom);
      // 绘制图表
      myChart.setOption(option);
      let listener = function () {
        myChart.resize();
      };
      EleResize.on(resizeDiv, listener);
    },
    setChart1() {
      let dom = "equipment-ripple-noise";
      let option = {
        title: {
          text: "100Mb/s",
          top: "0",
          textStyle: {
            fontWeight: "lighter",
            fontFamily: "Arial",
          },
        },
        grid: {
          top: "40%",
          left: "3%",
          right: "4%",
          bottom: "0",
          width: "100%",
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            splitLine: { show: false },
            axisTick: { show: false },
            axisLine: { show: false },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
          },
        ],
        series: [
          {
            name: "Line 1",
            type: "line",
            smooth: true,
            lineStyle: { width: 0 },
            showSymbol: false,
            label: {
              show: true,
              position: [0, 0],
              formatter: "{c}Mb/s",
              fontSize: 16,
            },
            areaStyle: {
              opacity: 0.8,
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(24, 162, 147,.7)",
                  },
                  {
                    offset: 1,
                    color: "rgba(24, 162, 147)",
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            emphasis: { focus: "series" },
            data: [140, 95, 190, 93, 150, 70, 130, 100],
          },
        ],
      };
      this.drawChart(dom, option);
    },
    setChart2() {
      let dom = "scaler";
      let option = {
        title: {
          text: "78%",
          top: "0",
          textStyle: {
            fontWeight: "lighter",
            fontFamily: "Arial",
          },
        },
        xAxis: { show: false },
        yAxis: {
          type: "category",
          axisLine: { show: false },
          axisTick: { show: false },
        },
        grid: {
          left: 0,
          right: 0,
          bottom: 0,
        },
        series: [
          {
            type: "bar",
            barWidth: 6,
            itemStyle: {
              color: "rgba(0,0,0,0.2)",
              barBorderRadius: 30,
            },
            barGap: "-100%",
            data: [100],
            animation: false,
          },
          {
            type: "bar",
            barWidth: 6,
            // label: {
            //   show: true,
            //   position: [0, -30],
            //   formatter: "{c}%",
            //   fontSize: 18,
            // },
            itemStyle: {
              barBorderRadius: 30,
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "#816FFF", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#CBB6FF", // 100% 处的颜色
                  },
                ],
              },
            },
            data: [78],
          },
        ],
      };
      this.drawChart(dom, option);
    },
    setChart3() {
      let dom = "kbps";
      let aData = [];
      for (var i = 0; i < 15; i++) {
        aData.push(Math.floor(Math.random() * 150));
      }
      let option = {
        title: {
          text: "100Mb/s",
          top: "0",
          textStyle: {
            fontWeight: "lighter",
            fontFamily: "Arial",
          },
        },
        grid: {
          left: "0",
          right: "0",
          bottom: "0",
          top: "40",
        },
        xAxis: {
          type: "category",
          splitLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          axisLine: { show: false },
        },
        yAxis: [
          {
            type: "value",
            splitLine: { show: false },
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { show: false },
            interval: 100,
            max: 150,
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
              color: "rgba(87, 162, 255, 1)",
            },
            zlevel: 10,
            yAxisIndex: 0,
            barWidth: 6,
          },
        ],
      };
      this.drawChart(dom, option);
    },
    setChart4() {
      let dom = "upper-computer";
      let option = {
        title: {
          text: "64%",
          top: "0",
          textStyle: {
            fontWeight: "lighter",
            fontFamily: "Arial",
          },
        },
        xAxis: { show: false },
        yAxis: {
          type: "category",
          axisLine: { show: false },
          axisTick: { show: false },
        },
        grid: {
          left: 0,
          right: 0,
          bottom: 0,
        },
        series: [
          {
            type: "bar",
            barWidth: 6,
            itemStyle: {
              color: "rgba(0,0,0,0.2)",
              barBorderRadius: 30,
            },
            barGap: "-100%",
            data: [100],
            animation: false,
          },
          {
            type: "bar",
            barWidth: 6,
            // label: {
            //   show: true,
            //   position: [0, -30],
            //   formatter: "{c}%",
            //   fontSize: 18,
            // },
            itemStyle: {
              barBorderRadius: 30,
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "#D83838", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#FF6B6B", // 100% 处的颜色
                  },
                ],
              },
            },
            data: [64],
          },
        ],
      };
      this.drawChart(dom, option);
    },
    setChart5() {
      let dom = "Equipment-Statistics";
      let option = {
        tooltip: {
          trigger: "item",
          backgroundColor: "#EDEDED",
          textStyle: {
            color: "rgba(44, 44, 72, 1)",
          },
          formatter: "{b}地区<br />{d}%: {c}台",
        },
        legend: {
          bottom: "10%",
          left: "center",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: { fontSize: 10 },
        },
        series: [
          {
            name: "设备统计",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1643, name: "华南" },
              { value: 512, name: "东北" },
              { value: 450, name: "华北" },
            ],
            itemStyle: {
              color: function (params) {
                var colorList = [
                  { c1: "#685AF5", c2: "#9781D6" },
                  { c1: "#DA825C", c2: "#D36B50" },
                  { c1: "#65A1DF", c2: "#5297FC" },
                ];
                return {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: colorList[params.dataIndex].c1 },
                    { offset: 1, color: colorList[params.dataIndex].c2 },
                  ],
                };
              },
            },
          },
        ],
      };
      this.drawChart(dom, option);
    },
  },
};
</script>

<style lang="scss" scoped>
.Equipment-map {
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
    /deep/ .el-card__body {
      padding: 0 20px 5px;
    }
    .card_header {
      display: flex;
      justify-content: space-between;
      h6 {
        font-size: 14px;
        // color: #cbcbd1;
      }
    }
    p {
      margin-top: 20px;
      padding: 14px 0 10px;
      border-top: 1px solid #616477;
      font-size: 10px;
    }
  }
  .row1 {
    margin-bottom: 28px;
    justify-content: stretch;
    .el-card {
      min-height: 170px;
      height: 100%;
    }
  }
  .row2 {
    .es {
      display: flex;
      .Equipment-Statistics-left {
        width: 45%;
        p {
          border: 0;
          padding: 0;
          margin: 0;
        }

        p.p1,
        p.p2 {
          padding: 20px 0 10px;
          font-size: 14px;
        }
        h2 {
          font-size: 40px;
          font-weight: bold;
        }
        p.p3 {
          font-size: 11px;
          line-height: 1.5;
          text-align: justify;
          margin-bottom: 30px;
          color: #979aab;
        }
      }
    }
  }
  .equipment-ripple-noise,
  .scaler,
  .kbps,
  .upper-computer {
    width: 100%;
    height: 70px;
  }
  .Equipment-Statistics {
    width: 53%;
    height: 300px;
  }
}
</style>