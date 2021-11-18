<template>
  <div class="tab-container">
    <dv-border-box-5
      style="
        width: 200px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        margin-left: 20px;
      "
    >
      <a href="#/dash">客流监控</a>
    </dv-border-box-5>
    <dv-border-box-5
      style="
        width: 200px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        margin-left: 20px;
      "
    >
      <a href="#/dash/flow">客流预测</a>
    </dv-border-box-5>
    <dv-border-box-5
      style="
        width: 200px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        margin-left: 20px;
      "
    >
      <a href="#/dash/ass">景区关联</a>
    </dv-border-box-5>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.tab-container {
  width: 300px;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
}
</style>
