<template>
  <div id="map-wrapper">
    <div id="map-gaode" />
  </div>
</template>

<script>
import fetchJsonp from 'fetch-jsonp'
import { Scene, Marker } from '@antv/l7'
import { GaodeMap } from '@antv/l7-maps'
import * as G2 from '@antv/g2'

export default {
  name: 'MapGaode',
  data() {
    return {
      scene: null,
      pointsData: {
        nodes: [
          {
            people: {
              current: 208995,
              max: 3326504
            },
            name: '监控点1',
            coordinates: [121.66531839251513, 31.14333151076735],

            id: 'point 1'
          },
          {
            people: {
              current: 3108995,
              max: 3326504
            },
            name: '监控点2',
            coordinates: [121.5178892450119, 31.265320671055552],
            id: 'point 2'
          }
        ]
      }
    }
  },
  created() {
    this.getCameraList()
  },
  mounted() {
    const ak = 'ZsOvbi1cUjPTNwsfgpqh0a9wsNMVsdWO'
    const where = '上海市浦东新区川沙镇黄赵路310号'
    fetchJsonp(
      `https://api.map.baidu.com/geocoding/v3/?address=${where}&output=json&ak=${ak}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.result.location.lng, res.result.location.lat)
        this.scene = new Scene({
          id: 'map-gaode',
          map: new GaodeMap({
            pitch: 0,
            center: [
              Number(res.result.location.lng - 0.01),
              Number(res.result.location.lat - 0.004)
            ],
            zoom: 16.5,
            style: 'dark' // 样式URL
          })
        })
        this.scene.on('loaded', () => {
          this.addChart()
          this.scene.render()
        })
      })
  },
  methods: {
    getItemData(item) {
      const total = item.people.max
      return [
        {
          item: 'count',
          count: item.people.current,
          percent: item.people.current / total,
          pId: item.id
        },
        {
          item: 'rest',
          count: total - item.people.current,
          percent: (total - item.people.current) / total,
          pId: item.id
        }
      ]
    },

    getCameraList() {
      var that = this
      $.ajax({
        url: 'http://127.0.0.1:8000/api/get_list', // 看vue.config.js 里面有代理转发，上下两种方式的url都可以使用
        data: {
          time: 1636609435
        },
        type: 'POST',
        async: false,
        success: function(data) {
          console.log(that.pointsData)
          that.pointsData.nodes = data.data
          console.log(that.pointsData)
        }
      })
    },
    addChart() {
      const _this = this
      const data = this.pointsData
      const scene = this.scene
      data.nodes.forEach(function(item) {
        const el = document.createElement('div')
        const total = item.people.max
        console.log(total)
        const size = Math.min(parseInt(total / 5, 10), 150)
        if (size < 30) {
          return
        }
        const itemData = _this.getItemData(item)
        const chart = new G2.Chart({
          container: el,
          autoFit: true,
          width: size,
          height: size,
          padding: 30,
          limitInPlot: false
        })
        chart.legend(false)
        chart.data(itemData)
        chart.annotation().text({
          content: '警告⚠️',
          position: 0,
          offsetY: -30,
          offsetX: -20
        })
        chart.coordinate({
          type: 'theta',
          cfg: {
            radius: 0.9,
            innerRadius: 0.75
          }
        })
        chart.tooltip(true)
        chart
          .interval()
          .adjust('stack')
          .position('percent')
          .color('item')
          .label('percent', (percent) => {
            return {
              content: (data) => {
                return `${data.item}:${Math.floor(percent * 100)}%`
              }
            }
          })
          .state({
            active: {
              style: (element) => {
                const shape = element.shape
                return {
                  lineWidth: 5,
                  stroke: shape.attr('fill'),
                  strokeOpacity: shape.attr('fillOpacity')
                }
              }
            }
          })
        const innerView = chart.createView()

        chart.removeInteraction('legend-filter')
        chart.interaction('element-active')
        chart.render()
        const marker = new Marker({
          element: el
        }).setLnglat({
          lng: item.coordinates[0],
          lat: item.coordinates[1]
        })
        scene.addMarker(marker)
        chart.on('element:statechange', (ev) => {
          const { state, stateStatus, element } = ev.gEvent.originalEvent
          if (state && stateStatus) {
            _this.showDetail && _this.showDetail(element.data.pId)
            _this.emitEvent && _this.emitEvent()
          }
          // 本示例只需要监听 active 的状态变化
          if (state === 'active') {
            const data = element.getData()
            if (stateStatus) {
              // 更新 Annotation
              updateAnnotation(data)
            } else {
              // 隐藏 Annotation
              clearAnnotation()
            }
          }
        })

        // 绘制 annotation
        let lastItem
        function updateAnnotation(data) {
          if (data.item !== lastItem) {
            innerView.annotation().clear(true)
            innerView
              .annotation()
              .text({
                position: ['50%', '50%'],
                content: data.item,
                style: {
                  fontSize: 13,
                  fill: '#8c8c8c',
                  textAlign: 'center'
                },
                offsetY: -20
              })
              .text({
                position: ['50%', '50%'],
                content: `${data.count}人`,
                style: {
                  fontSize: 12,
                  fill: '#8c8c8c',
                  textAlign: 'center'
                },
                offsetX: 0,
                offsetY: 0
              })
            innerView.render(true)
            lastItem = data.item
          }
        }

        // 清空 annotation
        function clearAnnotation() {
          innerView.annotation().clear(true)
          innerView.render(true)
          lastItem = null
        }
      })
    },
    emitEvent() {
      console.log('map组件数据')
      this.$emit('fatherEvent', this.pointsData)
    }
    // showDetail(id) {
    //   const _this = this;
    //   let itemData = null;

    //   _this.cemerasData = this.pointsData.nodes.find((e) => e.id === id);

    //   if (this.rightChart) {
    //     this.pointsData.nodes.map((item) => {
    //       if (item.id === id) {
    //         itemData = _this.getItemData(item);
    //       }
    //     });
    //     this.rightChart.changeData(itemData);
    //     return;
    //   }
    //   const chart = new G2.Chart({
    //     container: "ring",
    //     width: 200,
    //     height: 200,
    //   });
    //   chart.legend(true);
    //   // FIXME: 数据哪一条
    //   this.pointsData.nodes.map((item) => {
    //     if (item.id === id) {
    //       itemData = _this.getItemData(item);
    //     }
    //   });
    //   chart.data(itemData);
    //   chart.coordinate({
    //     type: "theta",
    //     cfg: {
    //       radius: 0.9,
    //       innerRadius: 0.75,
    //     },
    //   });
    //   chart
    //     .interval()
    //     .adjust("stack")
    //     .position("percent")
    //     .color("item")
    //     .label("percent", (percent) => {
    //       return {
    //         content: (data) => {
    //           return `${data.item}:${Math.floor(percent * 100)}%`;
    //         },
    //       };
    //     })
    //     .state({
    //       active: {
    //         style: (element) => {
    //           const shape = element.shape;
    //           return {
    //             lineWidth: 5,
    //             stroke: shape.attr("fill"),
    //             strokeOpacity: shape.attr("fillOpacity"),
    //           };
    //         },
    //       },
    //     });
    //   chart.render();
    //   this.rightChart = chart;
    // },
  }
}
</script>

<style lang="scss" scoped>
#map-wrapper {
  position: absolute;
  width: 50%;
  height: 100vh;
  /* left: 40%; */
  /* top: 50%; */
  /* transform: translate(-50%, -50%); */
}
</style>
