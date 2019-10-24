<template>
  <div class="recommend">
    <h4>相关攻略</h4>
    <!-- 推荐列表 -->
    <div class="recommend-list">
      <nuxt-link :to="`/post/detail?id=${item.id}`" v-for="(item,index) in list" :key="index">
        <div class="recommend-item" >
          <img :src="item.images[0]" alt />
          <div class="recommend-content">
            <span>{{item.title}}</span>
            <p>2019-10-21 3:23 阅读:{{item.watch}}</p>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: {}
    };
  },
  mounted() {
    let id = this.$route.query.id;
    this.$axios({
      url: "/posts/recommend"
    }).then(res => {
      const { data } = res.data;
      this.list = data;
    });
  },
  methods:{
  },

};
</script>

<style lang="less" scoped>
.recommend {
  width: 280px;
  h4 {
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    font-size: 18px;
    font-weight: normal;
  }
  .recommend-item {
    display: flex;
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
    img {
      display: block;
      width: 100px;
      height: 80px;
    }
    .recommend-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 10px;
      width: 170px;
      
      span {
        font-size: 18px;
    display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
      }
      p {
        color: #999;
        font-size: 13px;
      }
    }
  }
}
</style>>