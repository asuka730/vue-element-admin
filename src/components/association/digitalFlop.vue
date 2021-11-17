<template>
  <div id="digital-flop">
    <div
      v-for="item in digitalFlopData"
      :key="item.title"
      class="digital-flop-item"
    >
      <div class="digital-flop-title">{{ item.title }}</div>
      <div class="digital-flop">
        <dv-digital-flop
          :config="item.number"
          style="width: 100px; height: 50px"
        />
        <div class="unit">{{ item.unit }}</div>
      </div>
    </div>

    <dv-decoration-10 />
  </div>
</template>

<script>
export default {
  name: 'DigitalFlop',
  data() {
    return {
      digitalFlopData: []
    }
  },
  mounted() {
    const { createData } = this
    createData()
    setInterval(createData, 30000)
  },
  methods: {
    createData() {
      const { randomExtend } = this
      this.digitalFlopData = [
        {
          title: '上海A级景区总数',
          number: {
            number: [98],
            content: '{nt}',
            textAlign: 'center',
            style: {
              fill: '#4d99fc',
              fontWeight: 'bold'
            }
          }
        },
        {
          title: '景区容纳占比',
          number: {
            number: [randomExtend(20, 30)],
            content: '{nt}',
            textAlign: 'left',
            style: {
              fill: '#f46827',
              fontWeight: 'bold'
            }
          },
          unit: '%'
        },
        {
          title: '拥挤程度评级',
          number: {
            // number: [randomExtend(20, 30)],
            content: '高',
            textAlign: 'left',
            style: {
              fill: '#f46827',
              fontWeight: 'bold'
            }
          },
          unit: ''
        }
      ]
    },
    randomExtend(minNum, maxNum) {
      if (arguments.length === 1) {
        return parseInt(Math.random() * minNum + 1, 10)
      } else {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#digital-flop {
  position: relative;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  width: 100%;
  align-items: center;
  background-color: rgba(6, 30, 93, 0.5);
  .dv-decoration-10 {
    position: absolute;
    width: 95%;
    left: 2.5%;
    height: 5px;
    bottom: 0px;
  }
  .digital-flop-item {
    /* TODO: */
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: 3px solid rgb(6, 30, 93);
    border-right: 3px solid rgb(6, 30, 93);
  }
  .digital-flop-title {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .digital-flop {
    display: flex;
  }
  .unit {
    margin-left: 10px;
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
    padding-bottom: 13px;
  }
}
</style>
