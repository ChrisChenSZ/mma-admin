<template>
  <div>
    <el-upload
      action="/zuul/api/file/mma-test-officalsite/image"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      console.log('上传', file.url)
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleSuccess (res, file, filelist) {
      console.log('上传成功', res, file, filelist)
    }
  }
}
</script>

<style scoped>

</style>
