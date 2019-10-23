<template>
  <div class="container">
    <div class="main">
      <p>发表新攻略</p>
      <span>分享你的个人游记，让更多人看到哦！</span>
      <!-- 标题输入框 -->
      <div class="title">
        <el-input v-model="form.title" placeholder="请输入标题"></el-input>
      </div>
      <!-- 富文编辑框 -->
      <VueEditor :config="config" ref="vueEditor" />

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
        <el-button type="primary" @click="onSubmit">发布</el-button>
        <span class="submit-slide">
          或者
          <a href="javascript:;" @click="storePost">保存到草稿</a>
        </span>
      </div>
      <!-- 草稿箱 -->
    </div>
    <div class="aside">
      <h4>草稿箱（1）</h4>
      <div class="content">
        <div 
          class="item1"
          :key="index"
          v-for="(item,index) in $store.state.post.postContent"
          style="position:relative;"
        >
          <div>
            <span>
              {{item.title}}
              <i class="el-icon-edit"></i>
            </span>
            <el-button
              type="danger"
              @click="deletePostContent(index)"
              style="position:absolute;right:10px;top:10px;width:57px;height:28px"
              plain
            >删除</el-button>
          </div>
          <div class="times">{{item.time}}</div>
        </div>
      </div>
    </div> 
  </div>
</template>
<script>
import "quill/dist/quill.snow.css";
let VueEditor;
if (process.browser) {
  VueEditor = require("vue-word-editor").default;
}
export default {
  name: "container",
  data() {
    return {
      asideData: [],
      form: {
        content: "",
        title: "",
        city: ""
      },
      //   存放arr城市的数组
      cities: [],
      input: "",
      config: {
        // 上传图片的配置
        uploadImage: {
          url: `${this.$axios.defaults.baseURL}/upload`,
          name: "files",
          Authorization: `Bearer ${this.$store.state.user.userInfo.token}`,

          // res是结果，insert方法会把内容注入到编辑器中，res.data.url是资源地址
          uploadSuccess: (res, insert) => {
            insert(this.$axios.defaults.baseURL + res.data[0].url);
          }
        },

        // 上传视频的配置
        uploadVideo: {
          url: `${this.$axios.defaults.baseURL}+/uploads`,
          name: "file",
          uploadSuccess: (res, insert) => {
            insert(this.$axios.defaults.baseURL + res.data.url);
          }
        }
      }
    };
  },
  components: {
    VueEditor
  },
  methods: {
    onSubmit() {
      //发布游记事件
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
          //   window.location.reload();
          this.$router.push("/post");
        }
      });
    },
    // 城市获得焦点时触发
    // value是选中的值，cb是回调函数，接收要展示的列表
    querySearch(value, cb) {
      if (!value) {
        cb([]);
        return false;
      } else {
        this.$axios({
          url: "/airs/city?name=" + value
        }).then(res => {
          const { data } = res.data;
          const arr = data.map((item, index) => {
            item.value = item.name;
            return item;
          });
          this.cities = arr;
          cb(arr);
        });
      }
    },
    // 输入框失去焦点时
    handleBlur() {
      if (this.cities.length > 0) {
        this.form.city = this.cities[0].value;
      }
    },
    //保存到草稿箱事件
    storePost() {
      this.form.content = this.$refs.vueEditor.editor.root.innerHTML; //拿到富文本框中的内容
      //获取当前时间
      var date = new Date();
      let month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      let time = date.getFullYear() + "-" + month + "-" + date.getDate(); //获取完整的年月日(4位)
      this.form.time = time;
      this.$store.commit("post/storePostContent", this.form); //在vuex里面存值
       this.$refs.vueEditor.editor.clipboard.dangerouslyPasteHTML(0,`<p><br></p>`);
      // setTimeout(() => {
      //   window.location.reload();
      // }, 100);
    },
    deletePostContent(index){//注册一个草稿箱内容删除事件
        this.$store.commit("post/deletePostContent", index);
    }

    // // 城市下拉选择时触发
    // handleSelect() {

    // }
  }
};
</script>

<style scoped lang="less">
/deep/ .el-button--danger.is-plain {
  text-align: center;
  line-height: 10px;
}
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
  .content {
    overflow-y: auto;
    overflow-x:hidden;
    max-height: 320px;
    span {
      cursor: pointer;
      font-size: 18px;
    }
    span:hover {
      color: orange;
      text-decoration: underline;
    }
    .times {
      font-size: 14px;
      color: #b399a6;
      padding-left: 10px;
      margin-top: -10px;
    }
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