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
        :config="config"
        ref="vueEditor"
      />

      <!-- 选择城市输入框 -->
      <el-form>
        <el-form-item label="选择城市">
          <el-autocomplete
            class="inline-input"
            v-model="form.city"
            :fetch-suggestions="querySearch"
            placeholder="请搜索游玩城市"
            @blur="handleBlur"
          ></el-autocomplete>
        </el-form-item>
      </el-form>
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
      form: {
        content: "",
        title: "",
        city: ""
      },
      //   存放arr城市的数组
      cities: [],
      input: '',
      config: {
        // 上传图片的配置
        uploadImage: {
          url: `${this.$axios.defaults.baseURL}/upload`,
          name: "files",
            Authorization: `Bearer ${this.$store.state.user.userInfo.token}`,

          // res是结果，insert方法会把内容注入到编辑器中，res.data.url是资源地址
          uploadSuccess: (res, insert) => {
            insert(this.$axios.defaults.baseURL + res.data[0].url)
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
      this.form.content = this.$refs.vueEditor.editor.root.innerHTML;
      this.$axios({
        url: "/posts",
        data: this.form,
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
        }
      }).then(res => {
        if (res.status === 200) {
          this.$message.success(res.data.message);
          window.location.reload();
        //    this.$refs.vueEditor.editor.clipboard.dangerouslyPasteHTML(0, `<div>123</div>`);
          this.form = {
            content: "",
            title: "",
            city: ""
          }
        }
      })
    },
    // 城市获得焦点时触发
    // value是选中的值，cb是回调函数，接收要展示的列表
    querySearch(value, cb) {
      if (!value) {
        cb([])
        return false;
      } else {
        this.$axios({
          url: '/airs/city?name=' + value
        }).then(res => {
          const { data } = res.data;
          const arr = data.map((item, index) => {
            item.value = item.name
            return item;
          })
          this.cities = arr
          cb(arr);

        })
      }
    },
    // 输入框失去焦点时
    handleBlur() {
      if (this.cities.length > 0) {
        this.form.city = this.cities[0].value
      }
    },

    // // 城市下拉选择时触发
    // handleSelect() {

    // }
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
  font-size: 14px;
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
  margin-bottom: 5px;
  font-size: 12px;
  color: #999;
}
.container span[data-v-9d84ab6a][data-v-9d84ab6a] {
  margin-bottom: 5px;
}
/deep/.el-form-item__content {
  margin-top: 20px;
}
/deep/.el-form-item__label {
  margin-top: 20px;
}
</style>