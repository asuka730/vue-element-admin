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
        rowNum: 5
      }
    }
  }
}
</script>

<style lang="scss">
#ranking-board {
  width: 25%;
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
