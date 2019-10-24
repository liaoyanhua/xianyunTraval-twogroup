<template>
  <div class="container">
    <div class="main">
    <!-- 左侧内容部分 -->
    <div class="content">
    <post/>
    <!-- 评论部分 -->
    <PostComment
    :comments="commentsData"
    :id="id"
    @getCommentData="getCommentData"
    />
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageIndex"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="commentsData.total">
    </el-pagination>
    </div>
    </div>
    <!-- 右侧推荐部分 -->
    <div class="aside">
    <recommend/>
    </div>
    
  </div>
</template>

<script>
import moment from "moment";
import post from '@/components/post/post'
import recommend from '@/components/post/recommend'
import PostComment from '@/components/post/postComment'
export default {
  data(){
    return{
      pageIndex:1,
      pageSize:4,
      commentsData:{},
      id:''
    }
  },
  components:{
    post,recommend,PostComment
  },
  methods:{
    handleCurrentChange(val){
      this.pageIndex=val;
      this.getCommentData()
    },
    handleSizeChange(val){
      this.pageSize=val;
      this.pageIndex=1;
      this.getCommentData();
    },
    getCommentData(){
     this.id = this.$route.query.id;
      // 获取评论数据
      this.$axios({
          url:`/posts/comments?post=${this.id}&_start=${(this.pageIndex-1)*this.pageSize}&_limit=${this.pageSize}`,
      }).then(res=>{
          res.data.data.map(v => {
            v.created_at=moment(v.created_at).format("YYYY-MM-DD h:mm");
            v.updated_at=moment(v.updated_at).format("YYYY-MM-DD h:mm");
          });
          this.commentsData=res.data;
          console.log(this.commentsData);
          
      })
    }
  },
    mounted(){
      this.getCommentData()
  }
};
</script>

<style lang="less" scoped>

.container{
  width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  .content{
    width: 700px;
    
  }
  .aside{
    width: 280px;
    margin-left: 20px;
  }
}
/deep/ .el-pagination{
  text-align: center;
}
/deep/ .content img{
  
      max-width: 700px;
    
}
</style>