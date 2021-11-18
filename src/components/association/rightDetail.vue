<template>
  <div id="data-detail-right">
    <div class="info">
      <h1>
        节点编号：{{
          rightDetailData ? rightDetailData.data.data.scenic_id : ""
        }}
      </h1>
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
          <h2>{{ rightDetailData ? rightDetailData.data.data.address : "" }}</h2>
        </div>
      </div></dv-border-box-1>
    <div id="ranking-board">
      <div class="ranking-board-title">关联度最高top5</div>
      <dv-scroll-ranking-board :config="rank" />
    </div>
    <!--    <ranking-board :ranking="rank" />-->
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
      default: {
        data: [
          {
            name: '目前人数',
            value: 80
          },
          {
            name: '容纳量',
            value: 1000
          }
        ]
      }
    }
  },
  data() {
    return {
      rank: {
        data: [
          {
            name: '景点1',
            value: 55
          },
          {
            name: '景点2',
            value: 90
          },
          {
            name: '景点3',
            value: 78
          },
          {
            name: '景点4',
            value: 66
          },
          {
            name: '景点5',
            value: 80
          }
        ],
        rowNum: 6,
        waitTime: 3000,
        unit: '%'
      }
    }
  },
  watch: {
    rightDetailData(val) {
      this.associationList()
    }

  },

  methods: {

    associationList() {
      const that = this
      $.ajax({
        url: 'http://127.0.0.1:8000/api/get_association_one', // 看vue.config.js 里面有代理转发，上下两种方式的url都可以使用
        type: 'GET',
        data: {
          scenic_id: this.rightDetailData.data.data.scenic_id
        },
        async: false,
        success: function(data) {
          // that.rank['data'] = data.data
          that.rank = {
            ...this.rank,
            data: [...data.data]
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#ranking-board{
  height: 40vh;
}
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
