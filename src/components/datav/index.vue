<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="main-head">
        <top-header />
        <div class="head-tabs">
          <Tab />
        </div>
      </div>
      <div class="main-content">
        <div class="left">
          <ranking-board />
        </div>
        <div class="center">
          <div class="center-top">
            <digital-flop />
          </div>
          <div class="">
            <mapGaode @fatherEvent="emitEvent" />
          </div>
        </div>
        <div class="right">
          <rightDetail :right-detail-data="rightDetailData" />
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import topHeader from './topHeader'
import digitalFlop from './digitalFlop'
import rankingBoard from './rankingBoard'
import mapGaode from './mapGaode'
import rightDetail from './rightDetail.vue'
import Tab from '../Tabs/index.vue'

export default {
  name: 'DataView',
  components: {
    topHeader,
    digitalFlop,
    rankingBoard,
    mapGaode,
    rightDetail,
    Tab
  },
  data() {
    return {
      rightDetailData: null
    }
  },
  mounted() {},
  methods: {
    emitEvent(data) {
      console.log('datav 父亲组件数据')
      this.rightDetailData = data
      console.log(this.rightDetailData)
    }
  }
}
</script>

<style lang="scss" scoped>
.head-tabs {
  position: fixed;
  top: 20px;
  left: 20px;
}
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;
  #dv-full-screen-container {
    background-image: url("../img/bg.png");
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
    .main-head {
    }
    .main-content {
      height: calc(100% - 100px);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .left,
      .right {
        width: 24%;
      }
      .center {
        width: 50%;
        display: flex;
        flex-direction: column;
      }
      .left {
        /* flex: 1; */
        display: flex;
        /* flex-direction: column; */
      }
    }
  }
}
</style>
