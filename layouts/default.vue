<template>
  <div>
    <!-- 头部组件 -->
    <Header/>

    <!-- 内容占位组件,类似于router-view -->
    <nuxt />
    
    <!-- 页脚组件 -->
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/header"
import Footer from "@/components/footer"

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
html,body{
  height:100%;
}
*{
  margin:0; 
  padding:0;
}
ul, li, ol{
  list-style:none;
}
a{
  text-decoration:none;
  color:inherit;
}
em,i{
  font-style: normal;
}
  .clearfix:after {
    content:'.';
    display:block;
    height: 0;
    line-height: 0;
    visibility:hidden;
    clear:both;
  }
  .clearfix {
    *Zoom: 1;
  }
  .fl{
    float:left;
  }
  .fr{
    float:right;
  }
</style>
