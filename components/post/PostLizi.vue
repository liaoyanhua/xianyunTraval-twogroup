<template>
  <div class="post-detail">
    <div class="three-pic"  v-if="item.images.length>=3">
      <a :href="`/post/detail?id=${item.city.id}`">
        <div class="title">{{item.title}}</div>
        <p>{{item.summary}}</p>
        <div class="imgs clearfix">
          <img :src="item.images[0]" />
          <img :src="item.images[1]" alt srcset />
          <img :src="item.images[2]" alt srcset />
        </div>
      </a>
      <div class="foots">
        <span>
          <i class="el-icon-location-outline"></i>{{item.cityName}} by
        </span>
        <a href="/user/personal" class>
          <img :src="$axios.defaults.baseURL+item.account.defaultAvatar" alt /> {{item.account.nickname}}
        </a>
        <span>
          <i class="el-icon-view"></i> {{item.watch}}
        </span>
        <span>{{item.like?item.like:0}} 赞</span>
      </div>
    </div>

    <div class="one-pic clearfix" v-if="item.images.length<3">
      <a href="#" class="picture fl">
        <img :src="item.images[0]" alt />
      </a>
      <div class="content fr">
        <a href="#">
          <div class="title">{{item.title}}</div>
          <p>{{item.summary}}</p>
        </a>
        <div class="foots">
          <span>
            <i class="el-icon-location-outline"></i>{{item.cityName}} by
          </span>
          <a href="/user/personal">
            <img :src="$axios.defaults.baseURL+item.account.defaultAvatar" alt /> {{item.account.nickname}}
          </a>
          <span>
            <i class="el-icon-view"></i> {{item.watch}}
          </span>
          <span>{{item.like?item.like:0}} 赞</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style scoped lang="less">
.post-detail {
  .three-pic {
    & > a {
      display: block;
      font-size: 18px;
      padding-top: 15px;
    }
    .title:hover {
      color: #ffa500;
    }
    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      color: #666;
      font-size: 14px;
      margin-top: 10px;
    }
    .imgs {
      margin-top: 15px;
      height:150px;
      img {
        width: 200px;
        height:150px;
        float:left;
        object-fit: cover;
        margin-right: 6px;
      }
    }
    .foots {
      margin-top: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      color: #666;
      a {
        color: #ffa500;
        margin: 0 10px;
        img {
          display: inline-block;
          width: 3%;
          border-radius: 50%;
          vertical-align: middle;
        }
      }
      span:nth-last-of-type(1) {
        float: right;
        color: #ffa500;
        font-size: 18px;
      }
    }
  }
  .one-pic {
    padding-top:10px;
    height:180px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    .picture {
      display: block;
      width: 30%;
      margin-right: 10px;
      img {
        width: 200px;
        height:150px;
        object-fit: cover;
      }
    }
    .content {
      width: 67%;
      a {
        .title {
          font-size: 18px;
          &:hover {
            color: #ffa500;
          }
        }
        p {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          color: #666;
          font-size: 14px;
          margin: 15px 0;
        }
      }
      .foots {
        padding-bottom: 20px;
        font-size: 14px;
        color: #666;
        a {
          color: #ffa500;
          margin: 0 10px;
          img {
            display: inline-block;
            width: 3%;
            border-radius: 50%;
            vertical-align: middle;
          }
        }
        span:nth-last-of-type(1) {
          float: right;
          color: #ffa500;
          font-size: 18px;
        }
      }
    }
  }
}
</style>