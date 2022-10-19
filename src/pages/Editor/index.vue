<!--
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-19 17:47:07
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-19 20:56:53
 * @FilePath: \myblog_admin\src\pages\editor\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
-->
<template>
  <div id="Editor">
    <div>
      <el-form>
        <el-form-item>
          <quillEditor
            ref="myLQuillEditor"
            v-model="content"
            :options="editorOption"
            class="editor"
            @blur="onEditorBlur"
            @focus="onEditorFocus"
            @change="onEditorChange"
          >
          </quillEditor>
        </el-form-item>
        <el-form-item>
          <el-button>上传文章</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 引入样式和quillEditor
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";

// 工具栏配置项
const toolbarOptions = [
  // 加粗 斜体 下划线 删除线 -----['bold', 'italic', 'underline', 'strike']
  ["bold", "italic", "underline", "strike"],
  // 引用  代码块-----['blockquote', 'code-block']
  ["blockquote", "code-block"],
  // 1、2 级标题-----[{ header: 1 }, { header: 2 }]
  [{ header: 1 }, { header: 2 }],
  // 有序、无序列表-----[{ list: 'ordered' }, { list: 'bullet' }]
  [{ list: "ordered" }, { list: "bullet" }],
  // 上标/下标-----[{ script: 'sub' }, { script: 'super' }]
  [{ script: "sub" }, { script: "super" }],
  // 缩进-----[{ indent: '-1' }, { indent: '+1' }]
  [{ indent: "-1" }, { indent: "+1" }],
  // 文本方向-----[{'direction': 'rtl'}]
  [{ direction: "rtl" }],
  // 字体大小-----[{ size: ['small', false, 'large', 'huge'] }]
  [{ size: ["small", false, "large", "huge"] }],
  // 标题-----[{ header: [1, 2, 3, 4, 5, 6, false] }]
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  // 字体颜色、字体背景颜色-----[{ color: [] }, { background: [] }]
  [{ color: [] }, { background: [] }],
  // 字体种类-----[{ font: [] }]
  [{ font: [] }],
  // 对齐方式-----[{ align: [] }]
  [{ align: [] }],
  // 清除文本格式-----['clean']
  ["clean"],
  // 链接、图片、视频-----['link', 'image', 'video']
  ["image", "video"],
];

// var details= quill.getContents();

export default {
  name: "Editor",
  props: {
    /* 编辑器的内容 */
    value: {
      type: String,
    },
  },
  // 注册 quillEditor
  components: {
    quillEditor,
  },
  data() {
    return {
      content: "",
      editorOption: {
        modules: {
          toolbar: toolbarOptions,
        },
        theme: "snow",
        placeholder: "请输入正文",
        // Some Quill optiosn...
      },
    };
  },
  methods: {
    // 失去焦点事件
    onEditorBlur(e) {
      console.log("onEditorBlur: ", e);
    },
    // 获得焦点事件
    onEditorFocus(e) {
      console.log("onEditorFocus: ", e);
    },
    // 内容改变事件
    onEditorChange(e) {
      console.log("onEditorChange: ", e);
    },
  },
};
</script>

<style scoped>
#Editor{
  position: absolute;
  width: 100%;
}
.editor {
  position:relative;
  left:2%;
  width: 95%;
  height: 400px;
}
.el-form-item{
  position:relative;
  margin-bottom: 125px;
}
.el-button{
  position: relative;
  left:45%;
  
}
</style>