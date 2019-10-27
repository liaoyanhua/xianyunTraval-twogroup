<template>
  <div class="comment-floor">
    <floor v-if="parent.parent" :parent="parent.parent" @getParent="getParent" />
    <!-- <div class="comment-floor" v-for="(item,index) in parent" :key="index"> -->
    <div class="comment-content">
      <div class="comment-info">
        <div class="left">
          <span>{{parent.account.nickname}}</span>
          <i>发表于 {{parent.created_at|time}}</i>
        </div>
        <em>{{parent.level}}</em>
      </div>
      <p>{{parent.content}}</p>
      <div class="img-list">
        <div class="comment-img" v-show="parent.pics" v-for="(v,index) in parent.pics" :key="index">
          <img :src="`${$axios.defaults.baseURL}${v.url}`" alt />
        </div>
      </div>
      <div class="comment-ctrl">
        <a href="javascript:;" @click="getParent(parent.id,parent.account.nickname)">回复</a>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: ["parent"],
  name: "floor",
  methods: {
    // 楼层里回复别人的评论
    getParent(id, nickname) {
      console.log(id, nickname);

      this.$emit("getParent", id, nickname);
    }
  },
  // 过滤器实现时间转换
  filters: {
    time: function(value) {
      if (!value) return "";
      return moment(value).format("YYYY-MM-DD h:mm");
    }
  }
};
</script>

<style lang="less">
// .comment-floor{
// &:hover>.comment-ctrl a{
//           display: block;
//         }
// }
</style>