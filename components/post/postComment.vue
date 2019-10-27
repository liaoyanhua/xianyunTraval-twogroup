<template>
  <div class="post-comment">
    <div class="comment-input">
      <h4>评论</h4>
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >回复{{followNickname}}</el-tag>
      <!-- 输入框 -->
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 10}"
        placeholder="说点什么吧..."
        v-model="comment"
        autocomplete="off"
        ref="input"
      ></el-input>
      <el-row type="flex" class="input-ctrl" justify="space-between" align="top">
        <el-upload
          :action="`${$axios.defaults.baseURL}/upload`"
          name="files"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-success="handleSucess"
          ref="imgWall"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-button type="primary" size="mini" @click="handleSubmit">发送</el-button>
      </el-row>
    </div>
    <!-- 评论列表 -->
    <div class="comment-list">
      <div class="comment-item" v-for="(item,index) in comments.data" :key="index">
        <div class="comment-info">
          <div class="left">
            <img :src="`${$axios.defaults.baseURL}${item.account.defaultAvatar}`" alt />
            <span>{{item.account.nickname}}</span>
            <i>发表于 {{item.created_at}}</i>
          </div>
          <em>{{item.level}}</em>
        </div>
        <div class="comment-content">
          <!-- 每一个floor就代表一层父级回复,越里面的回复层级越高,楼层越低 -->
          <CommentFloor v-if="item.parent" :parent="item.parent" @getParent="getParent" />
          <div class="comment-new">
            <p>{{item.content}}</p>
            <div class="img-list">
              <div
                class="comment-img"
                v-show="item.pics"
                v-for="(v,index) in item.pics"
                :key="index"
              >
                <img :src="`${$axios.defaults.baseURL}${v.url}`" alt />
              </div>
            </div>
            <div class="comment-ctrl">
              <a href="javascript:;" @click="handleClick(item.id,item.account.nickname)">回复</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentFloor from "@/components/post/commentFloor";
import { type } from "os";
export default {
  data() {
    return {
      comment: "", //输入框的评论内容
      followId: "", //被回复的评论id
      pics: [], //图片路径
      followNickname: "", //被回复的用户名
      dynamicTags: []
    };
  },
  methods: {
    // 删除图片
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.pics = fileList;
      console.log(this.pics);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 图片上传成功的方法
    handleSucess(response, file, fileList) {
      this.pics = fileList.map(v => {
        return v.response[0];
      });
      console.log(this.pics);
    },
    // 回复别人的评论
    handleClick(id, nickname) {
      this.followId = id;
      this.followNickname = nickname;
      // 回复别人时给标签增加一项,但是又不多于一项
      this.dynamicTags.splice(0, 1, "");
      // 自动获取输入框焦点
      this.$refs.input.focus();
      console.log(nickname);
      console.log(id);
    },
    // 获取要回复的父级id
    getParent(id, nickname) {
      this.handleClick(id, nickname);
      console.log(id, nickname);
    },
    // 发送评论
    handleSubmit() {
      const data = {
        post: this.id,
        follow: this.followId,
        content: this.comment,
        pics: this.pics
      };
      this.$axios({
        url: "/comments",
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.$store.state.user.userInfo.token}`,
          "Content-Type": "application/json"
        },
        data
      }).then(res => {
        console.log(res);
        this.$emit("getCommentData");
        this.$message.success("发送成功");
        this.comment = ""; //发送评论成功后清除输入框
        this.followId = ""; //清除被回复的id
        this.$refs.imgWall.clearFiles(); //清除照片墙
        this.pics = []; //清除图片数组
        this.handleClose(); //发送成功关闭标签
      });
    },
    // 关闭回复标签
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      this.followId = ""; //清除被回复的id
    }
  },
  components: {
    CommentFloor
  },
  props: {
    comments: {
      type: Object,
      default: {}
    },
    id: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less">
.post-comment {
  .comment-list {
    border: 1px solid #ddd;
    margin-bottom: 10px;
    .comment-item {
      padding: 20px;
      border-bottom: 1px dashed #ddd;
      &:last-child {
        border-bottom: none;
      }
      .comment-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 3px;
        color: #3e3e3e;
        font-size: 12px;
        align-items: center;
        .left {
          display: flex;
          align-items: center;
          img {
            width: 36px;
            height: 36px;
          }

          span {
            margin: 0 5px;
            color: #666;
            font-size: 16px;
          }
        }

        em {
          color: #666;
          text-align: right;
        }
      }
      .comment-content {
        padding-left: 30px;

        .comment-img {
          border: 1px dashed #ddd;
          padding: 5px;
          width: 80px;
          height: 80px;
          border-radius: 6px;
          margin: 10px 5px 0 0;
          img {
            display: block;
            width: 80px;
            height: 80px;
          }
        }
        .comment-floor {
          background: #f9f9f9;
          border: 1px solid #ddd;
          padding: 2px;
          .comment-content {
            padding: 5px 10px 0;
            &:hover > .comment-ctrl a {
              display: block;
            }
            span {
              margin-left: 0;
            }
            img {
              display: block;
              width: 80px;
              height: 80px;
            }
          }
        }
        .comment-ctrl {
          text-align: right;
          height: 20px;
          font-size: 14px;
          a {
            display: none;
          }
        }
        .comment-new {
          &:hover > .comment-ctrl a {
            display: block;
          }
        }
      }
    }
  }

  .comment-input {
    h4 {
      font-size: 18px;
      font-weight: normal;
      margin-bottom: 20px;
    }
    .input-ctrl {
      margin: 10px 0 30px 0;
    }
  }
}
.img-list {
  display: flex;
  flex-wrap: wrap;
}
.el-upload--picture-card {
  width: 100px;
  height: 100px;
  line-height: 100px;
}
.el-textarea__inner {
  padding: 5px 15px;
}
.el-button--mini {
  height: 28px;
}
</style>