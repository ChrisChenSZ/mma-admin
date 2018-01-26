<template>
  <div id="app">
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
<style lang="scss">
@import "./assets/styles/index.scss";
@import "./assets/styles/coverElementUi.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

</style>
