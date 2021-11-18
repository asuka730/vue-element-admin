<template>
  <div id="right-container">
    <dv-active-ring-chart
      :config="config"
      style="width: 300px; height: 300px"
    />
  </div>
</template>

<script>

export default {
  name: 'RightChart',
  data() {
    return {
      config: {
        data: [
          {
            name: '自驾出行',
            value: 55
          },
          {
            name: '单位组织',
            value: 20
          },
          {
            name: '旅行社',
            value: 78
          },
          {
            name: '个人',
            value: 26
          }
        ]
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.render()
    }, 1000)
  },
  methods: {
    render() {}
  }
}
</script>

<style>
</style>
