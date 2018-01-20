<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div id="my"></div>
    <router-view/>
  </div>
</template>

<script>
// import $ from 'jquery'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  methods: {
  },
  mounted () {
    this.$http.login().then(res => {
      console.log('登陆接口', res)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
