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

    <div id="chart" ref="heatmap"></div>
  </div>
</template>
<script type="text/javascript" src="./echarts-master/dist/extension/bmap.min.js"></script>
<script>
import axios from 'axios';
require('echarts/extension/bmap/bmap');
import BaiduMap from 'vue-baidu-map/components/map/Map.vue';
import { loadBMap } from '../../map.js'
export default {
  name: 'FlowPredict',
  data() {
    return {
      id: 1,
      xLabel: [],
      predict: [],
      real: [],
      url: '',
      points: []
    }
  },
  mounted() {
    const api='http://121.37.92.93:8000/api/get_predict_list?scenic_id=1';
    axios.get(api).then((response)=>{
      var array=[].concat(response.data.time);
      var array2=[];
      for (var i=1;i<125;i++){
        if (!!array[i]){
          array2.push(array[i].substring(0,10));
        }
      }
      this.xLabel = array2;
      this.predict= [].concat(response.data.forecast);
      this.real= [].concat(response.data.actual);
      this.drawChart1();
    })
    this.$nextTick(() => {
      loadBMap("0fAFiU3jZlGqwPwpc19z0ul1KZG5bQ61").then(() => {
        const api='http://121.37.92.93:8000/api/heat_map?scenic_id=1';
        axios.get(api).then((response)=>{
          var data = response.data.data;
          data = [].concat.apply(
            [].concat.apply(
              data.map(function (track) {
                return track[1].concat(track[2]);
              })
            )
          )
          this.points = data;
          this.drawChart2();
        })
      })
    })
  },
  methods: {
    drawChart1() {
      let myEchart = this.$echarts.init(document.getElementById("main"));
      let xLabel = this.xLabel;
      let predict = this.predict;
      let real = this.real;

      let option = {
        backgroundColor: 'rgb(14,28,71)',
        tooltip: {
          trigger: 'axis',
          backgroundColor:'transparent',
          axisPointer: {
            lineStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(126,199,255,0)' // 0% 处的颜色
                }, {
                  offset: 0.5,
                  color: 'rgba(126,199,255,1)' // 100% 处的颜色
                }, {
                  offset: 1,
                  color: 'rgba(126,199,255,0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            },
          },
          formatter: (p) => {
            let dom = `<div style="width: 79px;
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
            <div style="margin-bottom: 4px;width:100%;display:${p[0]?'flex':'none'};justify-content:space-between;align-items:center;">
                <span style="font-size:14px;color:#7ec7ff;">${p[0]?p[0].seriesName:''}</span>
                <span style="font-size:14px;color:#fff;">${p[0]?p[0].data:''}</span>
            </div>
            <div style="width:100%;height:100%;display:${p[1]?'flex':'none'};justify-content:space-between;align-items:center;">
                <span style="font-size:14px;color:#7ec7ff;">${p[1]?p[1].seriesName:''}</span>
                <span style="font-size:14px;color:#fff;">${p[1]?p[1].data:''}</span>
            </div>
        </div>
    </div>`
            return dom
          }
        },
        legend: {
          align: "left",
          right: '10%',
          top:'10%',
          type:'plain',
          textStyle:{
            color:'#7ec7ff',
            fontSize:12
          },
          // icon:'rect',
          itemGap:25,
          itemWidth:18,
          icon:'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',

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
          bottom: '15%',
          // containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
              color: '#233653'
            },
          },
          axisLabel: { //坐标轴刻度标签的相关设置
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
            },
          },
          axisTick: {
            show: false,
          },
          data: xLabel
        }],
        yAxis: [{
          name: '人数',
          nameTextStyle: {
            color: "#7ec7ff",
            fontSize: 10,
            padding: 0
          },
          min: 0,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#192a44'
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#233653"
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
            show: false,
          },
        }],
        series: [{
          name: '预测人数',
          type: 'line',
          symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
          showAllSymbol: true,
          symbolSize: 0,
          smooth: true,
          lineStyle: {
            normal: {
              width: 2,
              color: "rgba(25,163,223,1)", // 线条颜色
            },
            borderColor: 'rgba(0,0,0,.4)',
          },
          itemStyle: {
            color: "rgba(25,163,223,1)",
            borderColor: "#646ace",
            borderWidth: 2

          },
          tooltip: {
            show: true
          },
          areaStyle: { //区域填充样式
            normal: {
              //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: "rgba(25,163,223,.3)"


              },
                {
                  offset: 1,
                  color: "rgba(25,163,223, 0)"
                }
              ], false),
              shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
              shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
          },
          data: predict
        }, {
          name: '实际人数',
          type: 'line',
          symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
          showAllSymbol: true,
          symbolSize: 0,
          smooth: true,
          lineStyle: {
            normal: {
              width: 2,
              color: "rgba(10,219,250,1)", // 线条颜色
            },
            borderColor: 'rgba(0,0,0,.4)',
          },
          itemStyle: {
            color: "rgba(10,219,250,1)",
            borderColor: "#646ace",
            borderWidth: 2

          },
          tooltip: {
            show: true
          },
          areaStyle: { //区域填充样式
            normal: {
              //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: "rgba(10,219,250,.3)"
              },
                {
                  offset: 1,
                  color: "rgba(10,219,250, 0)"
                }
              ], false),
              shadowColor: 'rgba(10,219,250, 0.5)', //阴影颜色
              shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
          },
          data: real
        }]
      };
      myEchart.setOption(option);
    },
    drawChart2() {
      var heatmap = this.$refs.heatmap;
      let points = this.points;
      if (heatmap) {
        var myChart = this.$echarts.init(heatmap);
        var option = {
          animation: false,
          bmap: {
            center: [121.671964, 31.148267],
            zoom: 15,
            roam: true,
            mapStyle: {
              styleJson:
                [{
                  "featureType": "background",
                  "elementType": "geometry",
                  "stylers": {
                    "color": "#324e69ff"
                  }
                }, {
                  "featureType": "scenicspots",
                  "elementType": "geometry",
                  "stylers": {
                    "color": "#ffffffff"
                  }
                }, {
                  "featureType": "road",
                  "elementType": "geometry.fill",
                  "stylers": {
                    "color": "#4c817d36"
                  }
                }, {
                  "featureType": "road",
                  "elementType": "geometry",
                  "stylers": {
                    "visibility": "on",
                    "weight": 1.8
                  }
                }, {
                  "featureType": "road",
                  "elementType": "geometry.stroke",
                  "stylers": {
                    "color": "#364e4bb0"
                  }
                }, {
                  "featureType": "road",
                  "elementType": "labels.text.fill",
                  "stylers": {
                    "color": "#3b2d64b0"
                  }
                }, {
                  "featureType": "road",
                  "elementType": "labels.text.stroke",
                  "stylers": {
                    "weight": 1.4,
                    "color": "#ffffffad"
                  }
                }, {
                  "featureType": "scenicspotslabel",
                  "elementType": "labels.icon",
                  "stylers": {
                    "visibility": "on"
                  }
                }, {
                  "featureType": "scenicspotslabel",
                  "elementType": "labels.text.fill",
                  "stylers": {
                    "color": "#35503591"
                  }
                }
                ]
            },
          },
          visualMap: {
            show: true,
            top: 'top',
            seriesIndex: 0,
            calculable: true,
            inRange: {
              color: ['light blue', 'steel blue', 'blue', 'dark blue', 'midnight blue']
            }
          },
          series: [
            {
              type: 'heatmap',
              coordinateSystem: 'bmap',
              data: points,
              pointSize: 7,
              blurSize: 6,
            }
          ]
        };
        myChart.setOption(option);
        var bmap = myChart.getModel().getComponent('bmap').getBMap();
        bmap.addControl(new BMap.MapTypeControl());
      }
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
  width: 54%;
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
#chart{
  position: fixed;
  left: 0;
  top: 0;
  width: 600px;
  height: 300px;
  margin: 0 auto;
  text-align: center;
  border: 0px solid rgba(255,255,255,0.2);
  border-radius: 5px;
  opacity: 0.5
}
#main {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  border: 0px solid #fc0303;
  border-radius: 5px;
}
#chart .anchorBL{
  display:none
}
#chart .BMap_noprint.anchorTR{
  display:none
}
</style>

