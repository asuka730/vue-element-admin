<template>
  <div id="container" />
</template>

<script>
import G6 from '@antv/g6'

export default {
  name: 'MapGaode',
  data() {
    return {
      MapData: {
        nodes: [
          { id: 'node0', label: 'asas', size: 50 },
          { id: 'node1', size: 30 },
          { id: 'node2', size: 30 },
          { id: 'node3', size: 30 },
          { id: 'node4', size: 30 },
          { id: 'node5', size: 30 },
          { id: 'node6', size: 15 },
          { id: 'node7', size: 15 },
          { id: 'node8', size: 15 },
          { id: 'node9', size: 15 },
          { id: 'node10', size: 15 },
          { id: 'node11', size: 15 },
          { id: 'node12', size: 15 },
          { id: 'node13', size: 15 },
          { id: 'node14', size: 15 },
          { id: 'node15', size: 15 },
          { id: 'node16', size: 15 }
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
  created() {
    this.getnodeList()
  },
  mounted() {
    setTimeout(() => {
      this.render()
    }, 300)
  },
  methods: {
    getnodeList() {
      var that = this
      $.ajax({
        url: 'http://47.100.89.102:8888/api/get_association_list', // 看vue.config.js 里面有代理转发，上下两种方式的url都可以使用
        type: 'GET',
        async: true,
        success: function(data) {
          that.MapData = data
        }
      })
    },

    render() {
      const container = document.getElementById('container')
      const width = container.scrollWidth
      const height = container.scrollHeight || 500
      const graph = new G6.Graph({
        container: 'container',
        width,
        height,
        layout: {
          type: 'force',
          preventOverlap: true,
          linkDistance: (d) => {
            if (d.source.id === '1') {
              return 300
            }
            return 200
          },
          nodeStrength: (d) => {
            if (d.isLeaf) {
              return -5
            }
            return -10
          },
          edgeStrength: (d) => {
            if (
              d.source.id === 'node1' ||
              d.source.id === 'node2' ||
              d.source.id === 'node3'
            ) {
              return 0.7
            }
            return 0.1
          }
        },
        defaultNode: {
          style: {
            // TODO: 节点颜色
            fill: 'r(0.5, 0.5, 0.1) 0:#ffffff 1:#1890ff'
          },
          color: '#eeddff'
        },
        modes: {
          default: ['drag-canvas']
        }
      })

      const data = this.MapData
      const nodes = data.nodes
      graph.data({
        nodes,
        edges: data.edges.map(function(edge, i) {
          edge.id = 'edge' + i
          return Object.assign({}, edge)
        })
      })
      graph.render()

      graph.on('node:dragstart', function(e) {
        graph.layout()
        refreshDragedNodePosition(e)
      })
      graph.on('node:drag', function(e) {
        refreshDragedNodePosition(e)
      })
      graph.on('node:dragend', function(e) {
        e.item.get('model').fx = null
        e.item.get('model').fy = null
      })

      graph.on('node:click', (e) => {
        // e.item.get("model").style.fill = 'red
        this.rightDetailevent(e.item.get('model').id)
        // console.log(e.item.get('model'),"??")
        graph.layout()
      })

      if (typeof window !== 'undefined') {
        window.onresize = () => {
          if (!graph || graph.get('destroyed')) return
          if (!container || !container.scrollWidth || !container.scrollHeight) { return }
          graph.changeSize(container.scrollWidth, container.scrollHeight)
        }
      }

      function refreshDragedNodePosition(e) {
        const model = e.item.get('model')
        model.fx = e.x
        model.fy = e.y
      }
    },
    rightDetailevent(id) {
      // TODO: 中间组件数据
      var that = this
      var scenic_id = parseInt(id)
      $.ajax({
        url: 'http://47.100.89.102:8888/api/get_scenic', // 看vue.config.js 里面有代理转发，上下两种方式的url都可以使用
        type: 'GET',
        data: {
          scenic_id: scenic_id
        },
        async: true,
        success: function(data) {
          that.$emit('fatherEvent', data)
        }
      })
    }
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
