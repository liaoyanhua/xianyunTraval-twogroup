<template>
  <div class="container">
    <div class="main">
      <p>发表新攻略</p>
      <span>分享你的个人游记，让更多人看到哦！</span>
      <!-- 标题输入框 -->
      <div class="title">
        <el-input
          v-model="form.title"
          placeholder="请输入标题"
        ></el-input>

      </div>
      <!-- 富文编辑框 -->
      <VueEditor
        v-model="form.content"
        :config="config"
      />
      <!-- 城市搜索 -->
      <div class="citys">
        <label class="selected">选择城市</label>
        <el-select
          v-model="form.city"
          filterable
          remote
          reserve-keyword
          placeholder="请搜索游玩城市"
        >
          <el-option
            v-for="(item,index) in list"
            :key="index"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <!-- 发布 -->
      <div class="button">
        <el-button
          type="primary"
          @click="onSubmit"
        >发布</el-button>
        <span class="submit-slide">或者 <a href="javascript:;">保存到草稿</a></span>
      </div>
      <!-- 草稿箱 -->
    </div>
    <div class="aside">
      <h4>草稿箱</h4>
    </div>
  </div>

</template>

<script>
import "quill/dist/quill.snow.css"
let VueEditor;
if (process.browser) {
  VueEditor = require('vue-word-editor').default
}
export default {
  name: 'container',
  data() {
    return {
      list: [],
      form: {
        content: "",
        title: "",
        city: ""
      },
      input: '',
      config: {
        // 上传图片的配置
        uploadImage: {
          url: `${this.$axios.defaults.baseURL}+/uploads`,
          name: "file",
          // res是结果，insert方法会把内容注入到编辑器中，res.data.url是资源地址
          uploadSuccess: (res, insert) => {
            insert(this.$axios.defaults.baseURL + res.data.url)
          }
        },

        // 上传视频的配置
        uploadVideo: {
          url: `${this.$axios.defaults.baseURL}+/uploads`,
          name: "file",
          uploadSuccess: (res, insert) => {
            insert(this.$axios.defaults.baseURL + res.data.url)
          }
        }
      }
    }
  },
  components: {
    VueEditor
  },
  methods: {
    onSubmit() {
      console.log(this.form)
    }
  }
}
</script>

<style scoped lang="less">
.container {
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
  position: relative;
  .main {
    width: 750px;
    p {
      font-size: 22px;
      margin-bottom: 10px;
    }
    span {
      display: block;
      font-size: 12px;
      color: #999;
      margin-bottom: 20px;
    }
  }
}

/deep/ .ql-container.ql-snow {
  height: 400px;
}
/deep/.ql-toolbar.ql-snow {
  padding: 8px 0;
  margin-top: 20px;
}
/deep/ .ql-toolbar {
  line-height: 40px;
}
.selected {
  font-size: 14px;
  color: #606266;
  padding: 0 10px 0 0;
}
.citys {
  margin: 20px 0;
}
/deep/.el-button {
  padding: 9px 15px;
}
.button {
  display: flex;
}
.container span[data-v-9d84ab6a] {
  font-size: 14px;
  color: black;
  margin-bottom: 0;
  line-height: 210%;
  margin: 0 0 0 10px;
}
a {
  color: orange;
}
.aside {
  border: 1px solid #ccc;
  width: 205px;
  position: absolute;
  top: 20px;
  left: 800px;
  padding: 10px;
  h4 {
    font-weight: 400;
    color: #666;
    margin-bottom: 10px;
  }
}
.container .main[data-v-9d84ab6a] span {
  color: #999;
  font-size: 12px;
  margin-bottom: 5px;
}
.container span[data-v-9d84ab6a][data-v-9d84ab6a] {
  margin-bottom: 5px;
}
</style>