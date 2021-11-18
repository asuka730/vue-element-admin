<template>
  <div id="ranking-board">
    <div class="ranking-board-title">景区容纳比&nbsp;Top5</div>
    <dv-scroll-ranking-board :config="config" />
  </div>
</template>

<script>
export default {
  name: 'RankingBoard',
  data() {
    return {
      config: {
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
        waitTime: 3000
      }
    }
  },
  created() {
    this.getRankList()
  },
  methods: {
    getRankList: function() {
      var that = this
      $.ajax({
        url: 'http://47.100.89.102:8888/api/get_scenic_rank', // 看vue.config.js 里面有代理转发，上下两种方式的url都可以使用
        data: {
          'time': 1636609435
        },
        type: 'POST',
        async: false,
        success: function(data) {
          that.config['data'] = data.data
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#ranking-board {
  height: 80%;
  margin-top: 20%;
  width: 100%;
  box-shadow: 0 0 3px blue;
  display: flex;
  flex-direction: column;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, 0.5);
  box-sizing: border-box;
  padding: 0px 30px;

  .ranking-board-title {
    font-weight: bold;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  .dv-scroll-ranking-board {
    flex: 1;
  }
}
</style>
