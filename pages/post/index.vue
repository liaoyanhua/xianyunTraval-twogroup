<template>
  <div class="container clearfix">
    <div class="post-left">
      <div class="city" @mouseleave="isShow=false">
        <div class="city-item">
          <div
            class="item"
            @mouseover="handleCityType(item.type)"
            :key="index"
            v-for="(item,index) in cityType"
          >
            {{item.type}}
            <span class="icon el-icon-arrow-right"></span>
          </div>
        </div>
        <div class="city-introduction" v-if="isShow">
          <div v-for="(item,index) in typeSeen" :key="index">
            <em>{{index+1}}</em>
            <a :href="`/post?city=${item.city}`">
              <span>{{item.city}}</span>
              {{item.desc}}
            </a>
          </div>
        </div>
      </div>
      <div class="city-common">
        <div class="title">推荐城市</div>
        <a href="#">
          <img src="@/static/img/pic_sea.jpeg" alt />
        </a>
      </div>
    </div>
    <div class="post-right">
      <div class="search">
        <input type="text" placeholder="请输入想去的地方，比如:'广州'" />
        <span class="icon el-icon-search"></span>
        <div>
          推荐：
          <span>广州</span>
          <span>上海</span>
          <span>北京</span>
        </div>
      </div>
      <div class="post-contents">
        <div class="title clearfix">
          <div class="title-left fl">推荐攻略</div>
          <div class="title-right fr">
            <el-button type="primary" icon="el-icon-edit">写游记</el-button>
          </div>
        </div>
        <div class="hot-post">
          <PostLizi :posts="postList"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostLizi from '@/components/post/PostLizi'
export default {
  components:{
    PostLizi
  },
  data() {
    return {
      isShow: false,
      cityType: [], //定义一个城市主体类型
      typeSeen: [], //定义一个城市类型景点列表数据
      postList:[]   //获取所有文章列表
    };
  },
  mounted() {
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      this.cityType = res.data.data;
    });
    this.$axios({
      url:'/posts'
    }).then(res=>{
      this.postList=res.data.data;
      console.log(res);
    })
  },
  methods: {
    handleCityType(type) {
      this.isShow = true;
      this.cityType.forEach((v, i) => {
        if (v.type === type) {
          this.typeSeen = this.cityType[i].children;
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.container {
  width: 1000px;
  height: 100% !important;
  margin: 0 auto;
  margin-top: 20px;
  .post-left {
    float: left;
    width: 300px;
    position: relative;
    .city-item {
      position: relative;
      z-index: 10;
      .item {
        cursor: pointer;
        line-height: 40px;
        padding: 0 20px;
        border: 1px solid #ddd;
        border-top: none;
        &:nth-of-type(1) {
          border-top: 1px solid #ddd;
        }
        .icon {
          float: right;
          line-height: 40px;
        }
      }
      .item:hover {
        color: #ffa500;
        border-right: none;
      }
    }
    .city-introduction {
      background: #fff;
      position: absolute;
      top: 0;
      left: 299px;
      z-index: 9;
      border: 1px solid #ddd;
      border-left: none;
      width: 350px;
      font-size: 14px;
      & > div {
        padding: 0 20px;
        line-height: 38px;
        border-left: 1px solid #ddd;
        color: #999;
        a:hover {
          text-decoration: underline;
        }
        &:nth-of-type(-n + 4) {
          border-left: none;
        }
        em {
          color: #ffa500;
          font-style: italic;
          font-size: 20px;
          margin-right: 15px;
        }
        span {
          color: #ffa500;
          margin-right: 15px;
          cursor: pointer;
        }
      }
    }
    .city-common {
      margin-top: 20px;
      .title {
        line-height: 30px;
        border-bottom: 1px solid #ddd;
      }
      img {
        // display: block;
        width: 100%;
        margin-top: 10px;
        object-fit: cover;
      }
    }
  }
  .post-right {
    margin-left: 340px;
    .search {
      width: 100%;
      position: relative;
      input {
        display: block;
        outline: none;
        border: 3px solid #ffa500;
        width: 100%;
        padding: 10px 20px;
        box-sizing: border-box; 
      }
      .icon {
        position: absolute;
        top: 9px;
        right: 12px;
        color: #ffa500;
        font-size: 22px;
      }
      & > div {
        font-size: 12px;
        margin-top: 10px;
        color: #666;
        span {
          cursor: pointer;
        }
        span:hover {
          text-decoration: underline;
        }
      }
    }
    .post-contents {
      & > .title {
        height: 45px;
        padding: 10px 0;
        padding-bottom:0;
        border-bottom: 1px solid #ddd;
        .title-left {
          height: 100%;
          text-align: center;
          font-size: 18px;
          color: #ffa500;
          border-bottom: 2px solid #ffa500;
        }
      // .titlt-right{
      //   width:100%;
      // }
      }
    }
  }
}
</style>
