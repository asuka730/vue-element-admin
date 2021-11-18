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
  },
  created() {},
  methods: {
    get1: function() {
      $.ajax({
        url: '/api/api/get_predict_list', // 看vue.config.js 里面有代理转发，上下两种方式的url都可以使用
        type: 'GET',
        data: {
          scenic_id: 1
        },
        async: false,
        success: function(data) {
          console.log(data)
        }
      })
    },
    post1: function() {
      var param = new FormData()
      param.append('username', 1)
      param.append('password', 1) // 这个地方可以传递多个参数
      $.ajax({
        url: 'http://127.0.0.1:8000/do_login', // 可以通过直接请求的方式
        type: 'POST',
        // data: param,
        data: {
          username: 1,
          password: 1
        },
        dataType: 'json',
        async: false,
        success: function(data) {
          // debugger
          console.log(data)
          console.log('???')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.full-screen {
  /* background-color: #0c0c0c; */
}
</style>
