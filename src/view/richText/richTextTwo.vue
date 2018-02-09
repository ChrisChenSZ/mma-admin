<template>
  <div class="richTextTwo">
    <div id="div1" class="toolbar">
    </div>
    <div style="padding: 5px 0; color: #ccc">中间隔离带</div>
    <div id="div2" class="text" style="text-align:left"> <!--可使用 min-height 实现编辑区域自动增加高度-->
      <p>请输入内容</p>
    </div>
  </div>
</template>
<script>
import E from 'wangeditor'
export default {
  name: 'editor',
  data () {
    return {
      editorContent: ''
    }
  },
  methods: {
    getContent: function () {
      alert(this.editorContent)
    }
  },
  mounted () {
    var editor = new E('#div1', '#div2')
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
    }
    editor.create()
  }
}
</script>

<style lang="scss" scoped>
</style>
