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
          <div v-for="(item,index) in typeSeen" @click="handleCitySelect(item.city)" :key="index">
            <em>{{index+1}}</em>
            <span>{{item.city}}</span>
            <span class="desc">{{item.desc}}</span>
          </div>
        </div>
      </div>
      <!-- <a :href="`/post?city=${item.city}`"> -->
      <div class="city-common">
        <div class="title">推荐城市</div>
        <a href="#">
          <img src="@/static/img/pic_sea.jpeg" alt />
        </a>
      </div>
    </div>
    <div class="post-right">
      <div class="search">
        <input type="text" 
        :placeholder="`${city?'':'请输入想去的地方，比如:`广州`'}`" 
        v-model="city" 
        @input="getCity"/>
        <span class="icon el-icon-search"  @click="getCity"></span>
        <div>
          推荐：
          <span :key="index" v-for="(item,index) in suggestCity" @click="handleCitySelect(item)" >
            {{item}}</span>&nbsp;
        </div>
      </div>
      <div class="post-contents">
        <div class="title clearfix">
          <div class="title-left fl">推荐攻略</div>
          <div class="title-right fr">
            <el-button type="primary" icon="el-icon-edit" @click="$router.push('/post/addpost')">写游记</el-button>
          </div>
        </div>
        <div class="hot-post">
          <PostLizi v-for="(item,index) in postList" :item="item" :key="index" />
          <el-pagination
            style="padding:10px 0;"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageIndex"
            :page-sizes="[2, 4, 6, 8]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostLizi from "@/components/post/PostLizi";
export default {
  components: {
    PostLizi
  },
  data() {
    return {
      total: 0, //定义一个总条数
      pageSize: 2, //定义一个每页多少条
      pageIndex: 1, //声明一个当前页
      isShow: false,
      cityType: [], //定义一个城市主体类型
      typeSeen: [], //定义一个城市类型景点列表数据
      postList: [], //获取所有文章列表
      city: "", //定义一个城市
      suggestCity:['广州','上海','北京']
    };
  },
  // computed: {
  //   dataList() {
  //     //重新定义一个变量监听分页后数据的变化
  //     let arr = this.postList.slice(
  //       (this.pageIndex - 1) * this.pageSize,
  //       this.pageIndex * this.pageSize
  //     );
  //     console.log(this.postList,this.pageIndex,this.pageSize,arr)
  //     return arr;
  //   }
  // },
  mounted() {
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      this.cityType = res.data.data;
    });
    this.getPostList();
  },
  methods: {
    getPostList() {//获取文章列表
      this.$axios({
        url: `/posts?_start=${(this.pageIndex - 1) * this.pageSize}&_limit=${
          this.pageSize
        }${this.city?"&city="+this.city+"":''}`
      }).then(res => {
        this.postList = [...res.data.data];
        this.total = res.data.total;
      });
    },
    getCity(){//输入框获取对应的城市文章搜索事件
      this.getPostList();
      this.$router.push({
          path: `/post`,
          query: { city:this.city }
        });
    },
    handleCitySelect(city) {
      //城市选择请求对应的城市信息列表
      this.city=city;
      this.getPostList();
      this.$router.push({
          path: `/post`,
          query: { city }
        });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getPostList();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.getPostList();
    },
    handleCityType(type) {
      //展示城市列表类型
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
          &:hover {
            text-decoration: underline;
          }
        }
        span {
          color: #ffa500;
          margin-right: 15px;
          cursor: pointer;
        }
        .desc {
          color: #999;
          &:hover {
            text-decoration: underline;
          }
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
        padding-bottom: 0;
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
