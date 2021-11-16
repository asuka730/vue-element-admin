<template>
  <div class="Echart">
    <div class="weather">
      <iframe
        width="800"
        scrolling="no"
        height="150"
        frameborder="0"
        allowtransparency="true"
        src="https://i.tianqi.com?c=code&id=48&color=%23FFFFFF&icon=1&num=6&site=12"
      />
    </div>

    <div class="predict">
      <div id="main" />
    </div>
  </div>
</template>

<script>
// import axios;
import axios from 'axios'
export default {
  name: 'FlowPredict',
  data() {
    return {
      id: 1,
      xLabel: [
        '2018-07-01',
        '2018-07-02',
        '2018-07-03',
        '2018-07-04',
        '2018-07-05',
        '2018-07-06',
        '2018-07-07',
        '2018-07-07',
        '2018-07-08',
        '2018-07-09',
        '2018-07-10',
        '2018-07-11',
        '2018-07-12',
        '2018-07-13',
        '2018-07-14',
        '2018-07-15',
        '2018-07-16',
        '2018-07-17',
        '2018-07-18',
        '2018-07-19',
        '2018-07-20',
        '2018-07-21',
        '2018-07-22',
        '2018-07-23',
        '2018-07-24',
        '2018-07-25',
        '2018-07-26',
        '2018-07-27',
        '2018-07-28',
        '2018-07-29',
        '2018-07-30',
        '2018-07-31',
        '2018-08-01',
        '2018-08-02',
        '2018-08-03',
        '2018-08-04',
        '2018-08-05',
        '2018-08-06',
        '2018-08-07',
        '2018-08-08',
        '2018-08-09',
        '2018-08-10',
        '2018-08-11',
        '2018-08-12',
        '2018-08-13',
        '2018-08-14',
        '2018-08-15',
        '2018-08-16',
        '2018-08-17',
        '2018-08-18',
        '2018-08-19',
        '2018-08-20',
        '2018-08-21',
        '2018-08-22',
        '2018-08-23',
        '2018-08-24',
        '2018-08-25',
        '2018-08-26',
        '2018-08-27',
        '2018-08-28',
        '2018-08-29',
        '2018-08-30',
        '2018-08-31',
        '2018-09-01',
        '2018-09-02',
        '2018-09-03',
        '2018-09-04',
        '2018-09-05',
        '2018-09-06',
        '2018-09-07',
        '2018-09-08',
        '2018-09-09',
        '2018-09-10',
        '2018-09-11',
        '2018-09-12',
        '2018-09-13',
        '2018-09-14',
        '2018-09-15',
        '2018-09-16',
        '2018-09-17',
        '2018-09-18',
        '2018-09-19',
        '2018-09-20',
        '2018-09-21',
        '2018-09-22',
        '2018-09-23',
        '2018-09-24',
        '2018-09-25',
        '2018-09-26',
        '2018-09-27',
        '2018-09-28',
        '2018-09-29',
        '2018-09-30',
        '2018-10-01',
        '2018-10-02',
        '2018-10-03',
        '2018-10-04',
        '2018-10-05',
        '2018-10-06',
        '2018-10-07',
        '2018-10-08',
        '2018-10-09',
        '2018-10-10',
        '2018-10-11',
        '2018-10-12',
        '2018-10-13',
        '2018-10-14',
        '2018-10-15',
        '2018-10-16',
        '2018-10-17',
        '2018-10-18',
        '2018-10-19',
        '2018-10-20',
        '2018-10-21',
        '2018-10-22',
        '2018-10-23',
        '2018-10-24',
        '2018-10-25',
        '2018-10-26',
        '2018-10-27',
        '2018-10-28',
        '2018-10-29',
        '2018-10-30',
        '2018-10-31'
      ],
      predict: [
        '23905.849609375',
        '25201.419921875',
        '0',
        '25660.541015625',
        '23905.849609375',
        '25148.287109375',
        '23836.1171875',
        '23836.1171875',
        '26530.189453125',
        '0',
        '26530.189453125',
        '26087.666015625',
        '26530.189453125',
        '27788.021484375',
        '26918.369140625',
        '26972.7109375',
        '0',
        '26972.7109375',
        '27415.232421875',
        '26972.7109375',
        '27788.021484375',
        '26033.330078125',
        '24332.9765625',
        '0',
        '26957.31640625',
        '28284.880859375',
        '28727.400390625',
        '27788.021484375',
        '28657.666015625',
        '28284.880859375',
        '0',
        '27842.361328125',
        '26972.7109375',
        '26530.189453125',
        '25132.892578125',
        '28215.146484375',
        '27842.359375',
        '0',
        '28284.880859375',
        '27415.232421875',
        '28284.880859375',
        '28657.666015625',
        '28215.146484375',
        '24332.9765625',
        '0',
        '27399.837890625',
        '26957.31640625',
        '25660.541015625',
        '24705.763671875',
        '26460.455078125',
        '26957.31640625',
        '0',
        '24760.103515625',
        '26530.189453125',
        '25675.935546875',
        '26033.330078125',
        '24705.763671875',
        '24760.103515625',
        '0',
        '26530.189453125',
        '26087.666015625',
        '26530.189453125',
        '27345.498046875',
        '26460.455078125',
        '26530.189453125',
        '0',
        '24806.283203125',
        '25660.541015625',
        '24806.283203125',
        '21227.169921875',
        '21669.69140625',
        '22624.466796875',
        '0',
        '22593.681640625',
        '23463.328125',
        '23478.72265625',
        '25163.6796875',
        '25606.197265625',
        '25233.412109375',
        '0',
        '24775.498046875',
        '26530.189453125',
        '25675.935546875',
        '22539.341796875',
        '22554.732421875',
        '21312.296875',
        '0',
        '20869.775390625',
        '21739.423828125',
        '21327.689453125',
        '21685.0859375',
        '21685.0859375',
        '20900.560546875',
        '0',
        '19145.87109375',
        '20000.126953125',
        '20442.646484375',
        '18618.22265625',
        '20388.30078125',
        '20015.521484375',
        '0',
        '18703.3515625',
        '16521.533203125',
        '16094.4052734375',
        '16467.033203125',
        '17763.96875',
        '17818.306640625',
        '0',
        '15209.3623046875',
        '16964.052734375',
        '15239.7080078125',
        '16894.3203125',
        '16451.798828125',
        '17391.181640625',
        '0',
        '17391.181640625',
        '17833.703125',
        '17833.703125',
        '15627.16015625',
        '14742.544921875',
        '16109.482421875',
        '0',
        '16551.736328125',
        '14355.107421875'
      ],
      real: [
        '27258.0',
        '0.0',
        '20126.0',
        '18201.0',
        '18835.0',
        '21569.0',
        '23320.0',
        '23320.0',
        '24698.0',
        '0.0',
        '24190.0',
        '21830.0',
        '23518.0',
        '23614.0',
        '26973.0',
        '25257.0',
        '916.0',
        '14102.0',
        '28812.0',
        '27137.0',
        '28479.0',
        '32215.0',
        '22222.0',
        '0.0',
        '28451.0',
        '31442.0',
        '31389.0',
        '30646.0',
        '34976.0',
        '36807.0',
        '0.0',
        '3524.0',
        '39776.0',
        '39900.0',
        '33194.0',
        '37964.0',
        '41226.0',
        '0.0',
        '20459.0',
        '18630.0',
        '22246.0',
        '21029.0',
        '22737.0',
        '16322.0',
        '0.0',
        '17988.0',
        '19601.0',
        '15743.0',
        '16998.0',
        '16669.0',
        '17875.0',
        '0.0',
        '18266.0',
        '20040.0',
        '15656.0',
        '31538.0',
        '32761.0',
        '34035.0',
        '0.0',
        '28272.0',
        '21088.0',
        '20506.0',
        '13579.0',
        '18672.0',
        '18040.0',
        '0.0',
        '6359.0',
        '6525.0',
        '8479.0',
        '11125.0',
        '17642.0',
        '20002.0',
        '0.0',
        '10000.0',
        '7608.0',
        '9122.0',
        '9407.0',
        '21344.0',
        '22472.0',
        '0.0',
        '11014.0',
        '6613.0',
        '7749.0',
        '7418.0',
        '23649.0',
        '26807.0',
        '21891.0',
        '4173.0',
        '8650.0',
        '6805.0',
        '7810.0',
        '11535.0',
        '19354.0'
      ],
      url: ''
    }
  },
  mounted() {
    this.drawChart1()
  },
  methods: {
    drawChart1() {
      const myEchart = this.$echarts.init(document.getElementById('main'))
      console.log('test')
      const api =
        '121.37.92.93:8000' +
        '/api/get_map?camera_id=1&time=2021-11-11 13:43:55' // ??
      axios.get(api).then((response) => {
        console.log('input')
        console.log(response)
        // that.xLabel=response.data.data;
      })

      const xLabel = this.xLabel
      const predict = this.predict
      const real = this.real

      const option = {
        backgroundColor: 'rgb(14,28,71)',
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'transparent',
          axisPointer: {
            lineStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(126,199,255,0)' // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(126,199,255,1)' // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(126,199,255,0)' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            }
          },
          formatter: (p) => {
            const dom = `<div style="width: 79px;
	height: 50px;;color:#fff;position: relative;">
        <svg style="position: absolute;top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);" class="svg" xmlns="http://www.w3.org/2000/svg" width="100" height="71" viewBox="0 0 84 55">
      <defs>
        <style>
          .cls-1 {
            fill: #07172c;
            fill-opacity: 0.8;
            stroke: #a7d8ff;
            stroke-linejoin: round;
            stroke-opacity: 0.2;
            stroke-width: 1px;
            fill-rule: evenodd;
          }

        </style>
      </defs>
      <path id="矩形_419" data-name="矩形 419" class="cls-1" d="M266,595h74v50H266V624.046L261,620l5-3.984V595Z"
        transform="translate(-258.5 -592.5)" />
    </svg>
        <div style="padding: 4px 8px 4px 14px;display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;position: relative;z-index: 1;">
            <div style="margin-bottom: 4px;width:100%;display:${
  p[0] ? 'flex' : 'none'
};justify-content:space-between;align-items:center;">
                <span style="font-size:14px;color:#7ec7ff;">${
  p[0] ? p[0].seriesName : ''
}</span>
                <span style="font-size:14px;color:#fff;">${
  p[0] ? p[0].data : ''
}</span>
            </div>
            <div style="width:100%;height:100%;display:${
  p[1] ? 'flex' : 'none'
};justify-content:space-between;align-items:center;">
                <span style="font-size:14px;color:#7ec7ff;">${
  p[1] ? p[1].seriesName : ''
}</span>
                <span style="font-size:14px;color:#fff;">${
  p[1] ? p[1].data : ''
}</span>
            </div>
        </div>
    </div>`
            return dom
          }
        },
        legend: {
          align: 'left',
          right: '10%',
          top: '10%',
          type: 'plain',
          textStyle: {
            color: '#7ec7ff',
            fontSize: 12
          },
          // icon:'rect',
          itemGap: 25,
          itemWidth: 18,
          icon: 'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',

          data: [
            {
              name: '预测人数'
            },
            {
              name: '实际人数'
            }
          ]
        },
        grid: {
          top: '15%',
          left: '10%',
          right: '10%',
          bottom: '15%'
          // containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLine: {
              // 坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#233653'
              }
            },
            axisLabel: {
              // 坐标轴刻度标签的相关设置
              textStyle: {
                color: '#7ec7ff',
                padding: 16,
                fontSize: 8
              },
              formatter: function(data) {
                return data
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#192a44'
              }
            },
            axisTick: {
              show: false
            },
            data: xLabel
          }
        ],
        yAxis: [
          {
            name: '人数',
            nameTextStyle: {
              color: '#7ec7ff',
              fontSize: 10,
              padding: 0
            },
            min: 0,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#192a44'
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#233653'
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#7ec7ff',
                padding: 1
              },
              formatter: function(value) {
                if (value === 0) {
                  return value
                }
                return value
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '预测人数',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
              normal: {
                width: 2,
                color: 'rgba(25,163,223,1)' // 线条颜色
              },
              borderColor: 'rgba(0,0,0,.4)'
            },
            itemStyle: {
              color: 'rgba(25,163,223,1)',
              borderColor: '#646ace',
              borderWidth: 2
            },
            tooltip: {
              show: true
            },
            areaStyle: {
              // 区域填充样式
              normal: {
                // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(25,163,223,.3)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(25,163,223, 0)'
                    }
                  ],
                  false
                ),
                shadowColor: 'rgba(25,163,223, 0.5)', // 阴影颜色
                shadowBlur: 20 // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: predict
          },
          {
            name: '实际人数',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
              normal: {
                width: 2,
                color: 'rgba(10,219,250,1)' // 线条颜色
              },
              borderColor: 'rgba(0,0,0,.4)'
            },
            itemStyle: {
              color: 'rgba(10,219,250,1)',
              borderColor: '#646ace',
              borderWidth: 2
            },
            tooltip: {
              show: true
            },
            areaStyle: {
              // 区域填充样式
              normal: {
                // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(10,219,250,.3)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(10,219,250, 0)'
                    }
                  ],
                  false
                ),
                shadowColor: 'rgba(10,219,250, 0.5)', // 阴影颜色
                shadowBlur: 20 // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: real
          }
        ]
      }

      myEchart.setOption(option)
    }
  }
}
</script>

<style scoped>
.Echart {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #0e1c47;
  text-align: center;
  border: 0px solid #fc0303;
  border-radius: 5px;
}

.weather {
  position: fixed;
  right: 0;
  top: 100px;
  width: 51%;
  height: 250px;
  margin: auto;
  color: #cccccc;
}
.predict {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 250px;
  margin: 0 auto;
  text-align: center;
  border: 0px solid #716c6c;
  border-radius: 5px;
}

#main {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  border: 0px solid #fc0303;
  border-radius: 5px;
}
</style>

