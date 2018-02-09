<template>
<div id="sample">
<!--accept定义接收的文件类型,这里只接受图片-->
  <input id="fileinput" @change="uploading($event)"  type="file" accept="image/*">
    <button @click="submit($event)">保存</button>
<!--图片展示-->
    <img :src="src" v-for="(src,index) in srcArr" :key = "index"/>
    <button @click="upload">点击上传</button>
    <button @click="myTest">测试按钮</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'sample',
  data () {
    return {
      file: '',
      srcArr: [null]
    }
  },
  methods: {
    upload () {
      let input = document.createElement('input')
      input.setAttribute('type', 'file')
      input.addEventListener('click', function () {
        alert(22)
      })
    },
    uploading (event) {
      this.file = event.target.files[0] // 获取文件
      console.log('全部文件', event.target.files)
      console.log('上传点击的文件', this.file)
      var windowURL = window.URL || window.webkitURL
      // this.file = event.target.files[0]
      // 创建图片文件的url
      const srcUrl = windowURL.createObjectURL(event.target.files[0])
      this.srcArr.push(srcUrl)
      this.submit()
      console.log('转成文件', this.srcArr)
    },
    submit () {
      event.preventDefault() // 取消默认行为
      let formdata = new FormData()
      formdata.append('file', this.file)
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'// 之前说的以表单传数据的格式来传递fromdata
        }
      }
      axios.post('/zuul/api/file/mma-test-officalsite/image', formdata, config).then((res) => {
        // 做处理
        console.log('上传成功', res)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}

</script>

<style lang="css" scoped>

</style>
