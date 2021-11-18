<template>
  <dv-flyline-chart
    :dev="true"
    :config="config"
    style="width: 100%; height: 100vh"
  />
</template>

<script>
export default {
  name: 'FlyLine',
  data() {
    return {
      config: {
        centerPoint: [0.8, 0.45],
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
        bgImgUrl: require('./bg.png'),
        lineWidth: 3,
        pointsImg: {
          url: require('./point.png'),
          width: 6,
          height: 6
        }
      }
    }
  }
}
</script>

<style>
</style>
