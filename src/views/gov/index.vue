<template>
  <div>
    <dv-full-screen-container class="full-screen">
      <dv-loading v-if="fetching">Loading...</dv-loading>
      <dv-border-box-13 v-else>
        <Gov />
      </dv-border-box-13>
    </dv-full-screen-container>
  </div>
</template>

<script>
import Gov from '@/components/gov/index.vue'
export default {
  name: 'GovData',
  components: { Gov },
  data() {
    return {
      fetching: false
    }
  },
  created() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.full-screen {
  /* background-color: #0c0c0c; */
}
</style>
