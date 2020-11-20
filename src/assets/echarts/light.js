/* eslint-disable */
// cannot read property 'echarts' of undefined
// 把 js文件里的root.echarts 改成echarts；然后在该js文件内 import echarts from 'echarts'

import echarts from 'echarts'
  ; (function (root, factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(['exports', 'echarts'], factory)
    } else if (
      typeof exports === 'object' &&
      typeof exports.nodeName !== 'string'
    ) {
      // CommonJS
      factory(exports, require('echarts'))
    } else {
      // Browser globals
      //factory({}, root.echarts)
      factory({}, echarts)
    }
  })(this, function (exports, echarts) {
    var log = function (msg) {
      if (typeof console !== 'undefined') {
        console && console.error && console.error(msg)
      }
    }
    if (!echarts) {
      log('ECharts is not Loaded')
      return
    }
    echarts.registerTheme('light', {
      color: ['#59b0fd', '#f4353c', '#ff9800', '#7f6bfe', '#5bad2b'],
      backgroundColor: 'rgba(255,255,255,0)',
      textStyle: {},
      title: {
        textStyle: {
          color: '#333',
        },
        subtextStyle: {
          color: '#8d91ab',
        },
      },
      line: {
        itemStyle: {
          normal: {
            borderWidth: 1,
          },
        },
        lineStyle: {
          normal: {
            width: 2,
          },
        },
        symbolSize: 4,
        symbol: 'circle',
        smooth: true,
      },
      radar: {
        itemStyle: {
          normal: {
            borderWidth: 1,
          },
        },
        lineStyle: {
          normal: {
            width: 2,
          },
        },
        symbolSize: 4,
        symbol: 'circle',
        smooth: true,
      },
      bar: {
        itemStyle: {
          normal: {
            barBorderWidth: 0,
            barBorderColor: '#ccc',
          },
          emphasis: {
            barBorderWidth: 0,
            barBorderColor: '#ccc',
          },
        },
      },
      pie: {
        itemStyle: {
          normal: {
            borderWidth: 0,
            borderColor: '#ccc',
          },
          emphasis: {
            borderWidth: 0,
            borderColor: '#ccc',
          },
        },
      },
      scatter: {
        itemStyle: {
          normal: {
            borderWidth: 0,
            borderColor: '#ccc',
          },
          emphasis: {
            borderWidth: 0,
            borderColor: '#ccc',
          },
        },
      },
      boxplot: {
        itemStyle: {
          normal: {
            borderWidth: 0,
            borderColor: '#ccc',
          },
          emphasis: {
            borderWidth: 0,
            borderColor: '#ccc',
          },
        },
      },
      parallel: {
        itemStyle: {
          normal: {
            borderWidth: 0,
            borderColor: '#ccc',
          },
          emphasis: {
            borderWidth: 0,
            borderColor: '#ccc',
          },
        },
      },
      sankey: {
        itemStyle: {
          normal: {
            borderWidth: 0,
            borderColor: '#ccc',
          },
          emphasis: {
            borderWidth: 0,
            borderColor: '#ccc',
          },
        },
      },
      funnel: {
        itemStyle: {
          normal: {
            borderWidth: 0,
            borderColor: '#ccc',
          },
          emphasis: {
            borderWidth: 0,
            borderColor: '#ccc',
          },
        },
      },
      gauge: {
        itemStyle: {
          normal: {
            borderWidth: 0,
            borderColor: '#ccc',
          },
          emphasis: {
            borderWidth: 0,
            borderColor: '#ccc',
          },
        },
      },
      candlestick: {
        itemStyle: {
          normal: {
            color: '#fd1050',
            color0: '#0cf49b',
            borderColor: '#fd1050',
            borderColor0: '#0cf49b',
            borderWidth: 1,
          },
        },
      },
      graph: {
        itemStyle: {
          normal: {
            borderWidth: 0,
            borderColor: '#ccc',
          },
        },
        lineStyle: {
          normal: {
            width: 1,
            color: '#aaaaaa',
          },
        },
        symbolSize: 4,
        symbol: 'circle',
        smooth: true,
        color: ['#59b0fd', '#f4353c', '#ff9800', '#7f6bfe', '#5bad2b'],
        label: {
          normal: {
            textStyle: {
              color: '#eeeeee',
            },
          },
        },
      },
      map: {
        itemStyle: {
          normal: {
            areaColor: '#eee',
            borderColor: '#444',
            borderWidth: 0.5,
          },
          emphasis: {
            areaColor: 'rgba(255,215,0,0.8)',
            borderColor: '#444',
            borderWidth: 1,
          },
        },
        label: {
          normal: {
            textStyle: {
              color: '#000',
            },
          },
          emphasis: {
            textStyle: {
              color: 'rgb(100,0,0)',
            },
          },
        },
      },
      geo: {
        itemStyle: {
          normal: {
            areaColor: '#eee',
            borderColor: '#444',
            borderWidth: 0.5,
          },
          emphasis: {
            areaColor: 'rgba(255,215,0,0.8)',
            borderColor: '#444',
            borderWidth: 1,
          },
        },
        label: {
          normal: {
            textStyle: {
              color: '#000',
            },
          },
          emphasis: {
            textStyle: {
              color: 'rgb(100,0,0)',
            },
          },
        },
      },
      categoryAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#c3c6d4',
          },
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#c3c6d4',
          },
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#c3c6d4',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#c3c6d4'],
          },
        },
        splitArea: {
          show: false,
          areaStyle: {
            color: ['#eeeeee'],
          },
        },
      },
      valueAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#c3c6d4',
          },
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#c3c6d4',
          },
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#c3c6d4',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#c3c6d4'],
          },
        },
        splitArea: {
          show: false,
          areaStyle: {
            color: ['#eeeeee'],
          },
        },
      },
      logAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#c3c6d4',
          },
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#c3c6d4',
          },
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#c3c6d4',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#c3c6d4'],
          },
        },
        splitArea: {
          show: false,
          areaStyle: {
            color: ['#eeeeee'],
          },
        },
      },
      timeAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#c3c6d4',
          },
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#c3c6d4',
          },
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#c3c6d4',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#c3c6d4'],
          },
        },
        splitArea: {
          show: false,
          areaStyle: {
            color: ['#eeeeee'],
          },
        },
      },
      toolbox: {
        iconStyle: {
          normal: {
            borderColor: '#c3c6d4',
          },
          emphasis: {
            borderColor: '#c2c4d6',
          },
        },
      },
      legend: {
        textStyle: {
          color: '#eeeeee',
        },
      },
      tooltip: {
        axisPointer: {
          lineStyle: {
            color: '#eeeeee',
            width: '1',
          },
          crossStyle: {
            color: '#eeeeee',
            width: '1',
          },
        },
      },
      timeline: {
        lineStyle: {
          color: '#eeeeee',
          width: 1,
        },
        itemStyle: {
          normal: {
            color: '#dd6b66',
            borderWidth: 1,
          },
          emphasis: {
            color: '#a9334c',
          },
        },
        controlStyle: {
          normal: {
            color: '#eeeeee',
            borderColor: '#eeeeee',
            borderWidth: 0.5,
          },
          emphasis: {
            color: '#eeeeee',
            borderColor: '#eeeeee',
            borderWidth: 0.5,
          },
        },
        checkpointStyle: {
          color: '#e43c59',
          borderColor: 'rgba(194,53,49,0.5)',
        },
        label: {
          normal: {
            textStyle: {
              color: '#eeeeee',
            },
          },
          emphasis: {
            textStyle: {
              color: '#eeeeee',
            },
          },
        },
      },
      visualMap: {
        color: ['#bf444c', '#d88273', '#f6efa6'],
      },
      dataZoom: {
        backgroundColor: 'rgba(47,69,84,0)',
        dataBackgroundColor: 'rgba(255,255,255,0.3)',
        fillerColor: 'rgba(167,183,204,0.4)',
        handleColor: '#a7b7cc',
        handleSize: '100%',
        textStyle: {
          color: '#eeeeee',
        },
      },
      markPoint: {
        label: {
          normal: {
            textStyle: {
              color: '#eeeeee',
            },
          },
          emphasis: {
            textStyle: {
              color: '#eeeeee',
            },
          },
        },
      },
    })
  })
