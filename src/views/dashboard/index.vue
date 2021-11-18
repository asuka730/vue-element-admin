<template>
  <div>
    <div class="dashboard-editor-container" />
    <div class="container">
      <img class="img-bg" src="./bg.png">
      <div class="right-detail">
        <div class="right-detail-title">
          <img class="icon" src="./icon.png">
          <h2>数据实时监控</h2>
        </div>
        <h1>实时数据分析洞察，辅助快速决策</h1>
        <div class="right-detail-content">
          提供基于物化视图的实时分析解决方案，建立“用数据说话、用数据管理、用数据决策、用数据创新”的大数据中心平台管理机制，并深度应用于公共服务与行业监管，做到即时感知数据变化，快速做出决策。
        </div>
        <a-button class="btn-enter" href="#/dash">立即进入</a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardAdmin',
  components: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
}
.container {
  display: flex;
  flex-direction: row;
  .img-bg {
    width: 600px;
    height: auto;
    max-width: 100%;
  }
  .right-detail {
    margin: 90px 0 0 90px;
    .icon {
      width: 36px;
      height: 36px;
      margin-right: 16px;
    }
    .right-detail-title {
      display: flex;
      flex-direction: row;
    }
    .right-detail-content {
      width: 500px;
      font-size: 18px;
      line-height: 27px;
      color: #343741;
    }
    .btn-enter {
      margin-top: 24px;
      background-image: linear-gradient(317deg, rgb(134, 109, 255), rgb(77, 107, 255));
      color: #fff;
      align-items: center;
      padding: 12px 48px;
      height: 48px;
    }
  }
}
@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
