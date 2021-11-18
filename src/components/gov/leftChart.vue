<template>
  <div id="chart-container" />
</template>

<script>
import * as G2 from '@antv/g2'

export default {
  name: 'LeftChart',
  data() {
    return {
      chartData: [
        { type: '未知', value: 654, percent: 0.02 },
        { type: '17 岁以下', value: 654, percent: 0.02 },
        { type: '18-24 岁', value: 4400, percent: 0.2 },
        { type: '25-29 岁', value: 5300, percent: 0.24 },
        { type: '30-39 岁', value: 6200, percent: 0.28 },
        { type: '40-49 岁', value: 3300, percent: 0.14 },
        { type: '50 岁以上', value: 1500, percent: 0.06 }
      ]
    }
  },
  mounted() {
    setTimeout(() => {
      this.render()
    }, 300)
  },
  methods: {
    render() {
      const el = document.getElementById('chart-container')
      const ct = document.getElementById('left-container')
      const width = ct.offsetWidth
      const chart = new G2.Chart({
        container: el,
        width: width,
        height: 300,
        padding: [50, 20, 50, 20]
      })
      chart.data(this.chartData)
      chart.scale('value', {
        alias: '人数'
      })

      chart.axis('type', {
        tickLine: {
          alignTick: false
        }
      })
      chart.axis('value', false)

      chart.tooltip({
        showMarkers: false
      })
      chart.interval().position('type*value')
      chart.interaction('element-active')

      // 添加文本标注
      this.chartData.forEach((item) => {
        chart.annotation().text({
          position: [item.type, item.value],
          content: (item.percent * 100).toFixed(0) + '%',
          style: {
            textAlign: 'center'
          },
          offsetY: -12
        })
      })
      chart.render()
    }
  }
}
</script>

<style>
</style>
