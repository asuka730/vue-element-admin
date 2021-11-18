<template>
  <div id="data-detail-right">
    <div class="info">
      <h1>{{ rightDetailData ? rightDetailData.name : "" }}</h1>
      <dv-decoration-1 style="width: 60%; height: 50px" />
    </div>
    <dv-border-box-1>
      <div class="info">
        <dv-active-ring-chart
          :config="config"
          style="width: 300px; height: 300px"
        />
        <div class="info-content">
          <!--          <h2>{{ rightDetailData ? rightDetailData.coordinates : "" }}</h2>-->
          <dv-decoration-7
            style="width: 150px; height: 30px"
          >当前人数
            {{
              rightDetailData ? rightDetailData.current : ""
            }}</dv-decoration-7>
          <dv-decoration-7
            style="width: 150px; height: 30px"
          >容纳比
            {{
              rightDetailData
                ? `${Math.floor(
                  (rightDetailData.people.current /
                    rightDetailData.people.max) *
                    100
                )}%`
                : ""
            }}</dv-decoration-7>
          <dv-decoration-7
            style="width: 150px; height: 30px"
          >最大容纳人数
            {{
              rightDetailData ? rightDetailData.people.max : ""
            }}</dv-decoration-7>
        </div>
      </div></dv-border-box-1>

    <Carousel :right-detail-data="rightDetailData" />
  </div>
</template>

<script>
import Carousel from '../Carousel'

export default {
  name: 'RightDetail',
  components: { Carousel },
  props: {
    // TODO: 右边组件数据
    rightDetailData: {
      default: undefined
    },
    config: {
      default: {
        data: [
          {
            name: '目前人数',
            value: 80
          },
          {
            name: '容纳量',
            value: 100
          }
        ]
      }
    }
  },
  data() {
    return {}
  },
  watch: {
    config() {
      this.updateHandler()
    }
  },

  methods: {
    updateHandler() {
      // const { config } = this
      // this.config = { ...this.config }
      // console.log(this.config)
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: row;
  h1 {
    color: #fff;
  }
  .info-content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h2 {
      color: #fff;
    }
  }
}
</style>
