<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="main-head">
        <top-header />
      </div>
      <div class="main-content">
        <div class="left">
          <!-- <ranking-board /> -->
        </div>
        <div class="center">
          <div class="center-top">
            <div class="container">
              <dv-flyline-chart
                :dev="true"
                :config="config"
                style="width: 100%; height: 100vh"
              />
            </div>
          </div>
          <div class="">
            <!-- <mapGaode /> -->
            <!-- <rose-chart /> -->
            <!-- <water-level-chart /> -->
            <!-- <scroll-board /> -->
            <!-- <cards /> -->
          </div>
        </div>
        <div class="right" />
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import topHeader from './topHeader'
// import digitalFlop from "./digitalFlop";
// import rankingBoard from "./rankingBoard";
// import mapGaode from "./mapGaode";
// import fetchJsonp from "fetch-jsonp";
// import rightDetail from "./rightDetail.vue";

export default {
  name: 'Gov',
  components: {
    topHeader
  },
  data() {
    return {
      config: {
        centerPoint: [0.48, 0.35],
        points: [
          [0.52, 0.23],
          [0.43, 0.29],
          [0.59, 0.35],
          [0.53, 0.47],
          [0.45, 0.54],
          [0.36, 0.38],
          [0.62, 0.55],
          [0.56, 0.56],
          [0.37, 0.66],
          [0.55, 0.81],
          [0.55, 0.67],
          [0.37, 0.29],
          [0.2, 0.36],
          [0.76, 0.41],
          [0.59, 0.18],
          [0.68, 0.17],
          [0.59, 0.1]
        ],
        bgImgUrl: '/static/bg.png'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
        .center-top {
          .container {
          }
        }
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
