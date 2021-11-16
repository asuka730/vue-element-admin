<template>
  <div>
    <dv-full-screen-container class="full-screen">
      <dv-loading v-if="fetching">Loading...</dv-loading>
      <dv-border-box-13 v-else>
        <Datav />
      </dv-border-box-13>
    </dv-full-screen-container>
  </div>
</template>

<script>
import Datav from '@/components/datav/index.vue'
export default {
  name: 'Dash',
  components: { Datav },
  data() {
    return {
      fetching: false
    }
  }
}
</script>

<style lang="scss" scoped>
.full-screen {
  /* background-color: #0c0c0c; */
}
</style>
