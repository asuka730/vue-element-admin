<template>
  <div>
    <dv-full-screen-container class="full-screen">
      <dv-loading v-if="fetching">Loading...</dv-loading>
      <dv-border-box-13 v-else>
        <Association />
      </dv-border-box-13>
    </dv-full-screen-container>
  </div>
</template>

<script>
import Association from '@/components/association/index.vue'
export default {
  name: 'Dash',
  components: { Association },
  data() {
    return {
      fetching: false
    }
  },
  created() {
    // this.get1()
    // this.post1()
  },
  methods: {
    get1: function() {
      $.ajax({
        url: '/api/api/get_predict_list', // 看vue.config.js 里面有代理转发，上下两种方式的url都可以使用
        type: 'GET',
        data: {
          scenic_id: 1
        },
        async: true,
        success: function(data) {
          console.log(data)
        }
      })
    },
    post1: function() {
      var param = new FormData()
      param.append('username', 1)
      param.append('password', 1)// 这个地方可以传递多个参数
      $.ajax({
        url: 'http://47.100.89.102:8888/do_login', // 可以通过直接请求的方式
        type: 'POST',
        // data: param,
        data: {
          'username': 1,
          'password': 1
        },
        dataType: 'json',
        async: true,
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
