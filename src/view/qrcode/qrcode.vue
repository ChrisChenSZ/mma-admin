<template>
  <div class="qart">
    <qriously v-if="myCode" :value="myCode" :size="100" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      myCode: ''
    }
  },
  created () {
    setTimeout(() => {
      this.myCode = 'http://www.cwmmma.com'
    }, 500)
  },
  mounted () {
    this._getQart()
  },

  methods: {
  }

}

</script>

<style>
  #qrcode{
    height: 100px;
    width: 200px;
    margin: auto;
  }
</style>
