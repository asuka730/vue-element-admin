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
        <div id="left-container" class="left">
          <leftChart />
          <leftPeople />
        </div>
        <div class="center">
          <div class="">
            <flyLine />
          </div>
        </div>
        <div class="right">
          <rightChart />
          <div class="right-map"><rightMap /></div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import topHeader from './topHeader'
import leftChart from './leftChart.vue'
import flyLine from './flyline.vue'
import leftPeople from './leftPeople.vue'
import rightChart from './rightChart.vue'
import rightMap from './rightMap.vue'
import Tab from '../Tabs/index.vue'

export default {
  name: 'Gov',
  components: {
    topHeader,
    leftChart,
    flyLine,
    leftPeople,
    rightChart,
    rightMap,
    Tab
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
    .main-content {
      height: calc(100% - 100px);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .left,
      .right {
        width: 24%;
      }
      .right {
        display: flex;
        flex-direction: column;
      }
      .center {
        width: 50%;
        display: flex;
        flex-direction: column;
        .center-top {
        }
      }
      .left {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
