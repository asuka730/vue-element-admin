<template>
  <div class="info">
    <div>
      <img src="./man.png">
      <div class="info-text">{{ people.man }}人</div>
    </div>
    <div>
      <img src="./woman.png">
      <div class="info-text">{{ people.woman }}人</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlyLine',
  data() {
    return {
      people: {
        man: 100,
        woman: 200
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .info-text {
    margin: 20px;
    text-align: center;
  }
}
</style>
