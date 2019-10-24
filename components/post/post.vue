<template>
  <div class="detail">
    <script src="//at.alicdn.com/t/font_1468724_hcn3o33exh.js"></script>
    <!-- 左边内容部分 -->
    <div class="main">
      <!-- 面包屑 -->
      <div class="bread">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/post' }">旅游攻略</el-breadcrumb-item>
          <el-breadcrumb-item :to="`/post/detail?id=${this.detail.id}`">攻略详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <!-- 文章部分 -->
      <div class="article">
        <h1>{{this.detail.title}}</h1>
        <!-- 文章数据部分 -->
        <div class="post-info">
          <span>发表于：{{this.detail.created_at}}</span>
          <em>阅读：{{this.detail.watch}}</em>
        </div>
        <!-- 文章内容部分 -->
        <div class="post-content" v-html="detail.content">
          <!-- <span>想象一下一个距离 北京 只有2.5小时飞行距离的城市：身处 亚洲 却能感受到十足的欧陆风情——欧式建筑和街道，金发碧眼的路人，正宗的西餐外加只有国内一半售价的帝王蟹可以敞开吃——更难能可贵的是，这里对国人（实质）免签，有直飞航班，低廉的物价，且尚未有太多的游客涉足还保留着原汁原味的传统风情！</span>
          <img
            src="https://p3-q.mafengwo.net/s13/M00/41/C4/wKgEaVyaOs2AA9IKAAj8Lg2YzaU64.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90"
            alt
          />-->
        </div>
        <!-- 文章操作部分 -->
        <div class="post-ctrl">
          <div class="ctrl-item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-pinglun" />
            </svg>
            <p>评论({{this.detail.comments.length}})</p>
          </div>
          <div class="ctrl-item" @click="handleStar">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shoucang" />
            </svg>
            <p>收藏</p>
          </div>
          <div class="ctrl-item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fenxiang" />
            </svg>
            <p>分享</p>
          </div>
          <div class="ctrl-item" @click="handleLike">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon-test" />
            </svg>
            <p>点赞({{this.detail.like||0}})</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      detail: {
        comments: []
      },
      id:'',
    };
  },
  methods: {
    getData() {
      let id = this.$route.query.id;
      this.id=id
      // 获取文章详情
      this.$axios({
        url: "/posts/" + id
      }).then(res => {
        this.detail = res.data;
        this.detail.created_at=moment(this.detail.created_at).format("YYYY-MM-DD h:mm");
      });
    },
    handleStar(){
      // 文章收藏
      this.$axios({
        url:'/posts/star',
        params:{
          id:this.id
        },
         headers: {
          Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
        }
      }).then(res=>{
        const {message}=res.data;
        if(message==='收藏成功'){
          this.$message.success(message)
        }else{
          this.$message.error(message)
        }
      })
    },
     handleLike(){
      // 文章收藏
      this.$axios({
        url:'/posts/like',
        params:{
          id:this.id
        },
         headers: {
          Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
        }
      }).then(res=>{
        const {message}=res.data;
        if(message==='点赞成功'){
          this.$message.success('点赞成功,辣是真滴牛批')
        }else{
          this.$message.error(message)
        }
        
      })
    }
  },
  mounted() {
    this.getData();
  },
  watch: {
    $route() {
      this.getData();
    }
  }
};
</script>

<style lang="less" scoped>
.detail {
  .main {
    width: 700px;
    .bread {
    }
    .article {
      h1 {
        border-bottom: 1px solid #ddd;
        padding: 20px 0;
      }
      .post-info {
        color: #999;
        text-align: right;
        padding: 20px;
        em {
          margin-left: 20px;
        }
      }
      .post-content {
        img {
          width: 700px;
          margin: 10px 0;
        }
      }
      .post-ctrl {
        display: flex;
        justify-content: center;
        margin: 30px 0;
        .ctrl-item {
          margin: 0 20px;
          cursor: pointer;
          color: #666;
          text-align: center;
        }
      }
    }
  }
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: 35px;
}
</style>>