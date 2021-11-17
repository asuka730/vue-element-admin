<template>
  <div id="map-wrapper">
    <div id="map-gaode" />
  </div>
</template>

<script>
import fetchJsonp from 'fetch-jsonp'
import { Scene, Marker } from '@antv/l7'
import { GaodeMap } from '@antv/l7-maps'
import G6 from '@antv/g6'

export default {
  name: 'MapGaode',
  data() {
    return {
      scene: null,
      pointsData: {
        nodes: [
          { id: 'node0', size: 50 },
          { id: 'node1', size: 30 },
          { id: 'node2', size: 30 },
          { id: 'node3', size: 30 },
          { id: 'node4', size: 80, isLeaf: true },
          { id: 'node5', size: 30, isLeaf: true },
          { id: 'node6', size: 15, isLeaf: true },
          { id: 'node7', size: 15, isLeaf: true },
          { id: 'node8', size: 15, isLeaf: true },
          { id: 'node9', size: 15, isLeaf: true },
          { id: 'node10', size: 15, isLeaf: true },
          { id: 'node11', size: 15, isLeaf: true },
          { id: 'node12', size: 15, isLeaf: true },
          { id: 'node13', size: 15, isLeaf: true },
          { id: 'node14', size: 15, isLeaf: true },
          { id: 'node15', size: 15, isLeaf: true },
          { id: 'node16', size: 15, isLeaf: true }
        ],
        edges: [
          { source: 'node0', target: 'node1' },
          { source: 'node0', target: 'node2' },
          { source: 'node0', target: 'node3' },
          { source: 'node0', target: 'node4' },
          { source: 'node0', target: 'node5' },
          { source: 'node1', target: 'node6' },
          { source: 'node1', target: 'node7' },
          { source: 'node2', target: 'node8' },
          { source: 'node2', target: 'node9' },
          { source: 'node2', target: 'node10' },
          { source: 'node2', target: 'node11' },
          { source: 'node2', target: 'node12' },
          { source: 'node2', target: 'node13' },
          { source: 'node3', target: 'node14' },
          { source: 'node3', target: 'node15' },
          { source: 'node3', target: 'node16' }
        ]
      }
    }
  },
  mounted() {
    const ak = 'ZsOvbi1cUjPTNwsfgpqh0a9wsNMVsdWO'
    const where = '上海市外滩'
    fetchJsonp(
      `https://api.map.baidu.com/geocoding/v3/?address=${where}&output=json&ak=${ak}`
    )
      .then((res) => res.json())
      .then((res) => {
        this.scene = new Scene({
          id: 'map-gaode',
          map: new GaodeMap({
            pitch: 0,
            center: [
              Number(res.result.location.lng),
              Number(res.result.location.lat)
            ],
            zoom: 12.5,
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
    addChart() {
      const _this = this
      const data = this.pointsData
      const scene = this.scene
      data.nodes.forEach(function(item) {
        const el = document.createElement('div')
        const total = item.people.max
        const size = Math.min(parseInt(total / 10000, 10), 150)
        if (size < 30) {
          return
        }
        const itemData = _this.getItemData(item)
        const chart = new G6.Chart({
          container: el,
          autoFit: true,
          width: size,
          height: size,
          layout: {
            type: 'force',
            preventOverlap: true,
            linkDistance: (d) => {
              if (d.source.id === 'node0') {
                return 100
              }
              return 30
            },
            nodeStrength: (d) => {
              if (d.isLeaf) {
                return -50
              }
              return -10
            },
            edgeStrength: (d) => {
              if (d.source.id === 'node1' || d.source.id === 'node2' || d.source.id === 'node3') {
                return 0.7
              }
              return 0.1
            }
          },
          defaultNode: {
            color: '#5B8FF9'
          },
          modes: {
            default: ['drag-canvas']
          }
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
            _this.showDetail(element.data.pId)
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
