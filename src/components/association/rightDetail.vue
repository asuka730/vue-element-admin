<template>
  <div id="data-detail-right">
    <div class="info">
      <h1>节点编号：{{ rightDetailData ? rightDetailData.data.data.scenic_id : "" }}</h1>
      <dv-decoration-1 style="width: 60%; height: 50px" />
    </div>
    <dv-border-box-1>
      <div class="info">
        <dv-active-ring-chart
          :config="config"
          style="width: 300px; height: 300px"
        />
        <div class="info-content">
          <h2>{{ rightDetailData ? rightDetailData.data.data.scenic_name : "" }}</h2>
        </div>
      </div></dv-border-box-1>
  </div>
</template>

<script>
export default {
  name: 'RightDetail',
  props: {
    // TODO: 右边组件数据
    rightDetailData: {
      default: undefined
    },
    config: {
      data: [
        {
          name: {
            type: String,
            default: '容纳量'
          },
          value: {
            type: Number,
            default: 100
          }
        },
        {
          name: {
            type: String,
            default: '目前人数'
          },
          value: {
            type: Number,
            default: 80
          }
        }
      ]
    }
  },
  data() {
    return {

    }
  },
  methods: {
    myFetch() {}
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
