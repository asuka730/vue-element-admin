<template>
  <div class="icon-wrapper">
    <a-icon type="left" />
    <a-slider :min="min" :max="max" :value="value" @change="handleChange" />
    <a-icon type="right" />
  </div>
</template>
<script>
export default {
  props: {
    max: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      value: 0,
      min: 0
    }
  },
  methods: {
    handleChange(value) {
      this.value = value
      this.$emit('onChangeIdx', value)
    }
  }
}
</script>
<style scoped>
.icon-wrapper {
  position: relative;
  padding: 0px 30px;
}

.icon-wrapper .anticon {
  position: absolute;
  top: -2px;
  width: 16px;
  height: 16px;
  line-height: 1;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.25);
}

.icon-wrapper .anticon:first-child {
  left: 0;
}

.icon-wrapper .anticon:last-child {
  right: 0;
}
</style>
