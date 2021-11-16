<template>
  <div>
    <a-card class="card" title="总计" style="width: 300px">
      <a slot="extra" href="#">更多</a>
      <p>
        景区入园人数<span>{{ current }}</span>人
      </p>
      <p>
        景区占比人数<span>{{ Math.floor(percent * 100) }}%</span>
      </p>
      <p>
        拥挤程度评级<span><icon-font :type="`${levelMap[level]}`" /></span>
      </p>
      <p>
        高危险景点数<icon-font :type="`${levelMap[2]}`" /><span>{{
          dangerous
        }}</span>
      </p>
      <p>
        中危险景点数<icon-font :type="`${levelMap[1]}`" /><span>{{
          average
        }}</span>
      </p>
    </a-card>
  </div>
</template>
<script>
import { Icon } from 'ant-design-vue'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2941458_y1u0z78ve4o.js'
})
export default {
  name: 'DashboardAdmin',
  components: { IconFont },
  data() {
    return {
      levelMap: ['icon-anquan', 'icon-tixingshixin', 'icon-weixian'],
      current: 10000,
      max: 1000,
      level: 1,
      dangerous: 0,
      average: 1
    }
  },
  computed: {
    percent: {
      get() {
        return this.max / this.current
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin: 20px auto;
}
</style>
