<template>
    <div class="container">
        <el-row class="breadcrunbs">
            <el-breadcrumb separator-class="el-icon-arrow-right ">
                <el-breadcrumb-item :to="{ path: '/' }">酒店</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/hotel' }">南京酒店预订</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/' }">好来阁商务宾馆</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>

        <div class="title">
            <h4>
                好来阁商务宾馆
                <span><i class="iconfont iconhuangguan"></i></span>
                <span><i class="iconfont iconhuangguan"></i></span>
                <span><i class="iconfont iconhuangguan"></i></span>
                <span><i class="iconfont iconhuangguan"></i></span>
                <span><i class="iconfont iconhuangguan"></i></span>
            </h4>
            <span>de yue lou hotel</span>
            <div>
                <i class="el-icon-location"></i>
                <span>柘宁东路9号</span>
            </div>
        </div>
        
        <!-- 图片展示部分 -->
        <pictureShow/>
        <priceShow/>
        <!-- 地图展示部分 -->
        <navMap/>

        <!-- 信息展示 -->
        <baseDesc/>

        <!-- 用户评论信息 -->
        <comment/>
    </div>
</template>

<script>
import pictureShow from '@/components/hotel/pictureShow'
import priceShow from '@/components/hotel/priceShow'
import navMap from '@/components/hotel/navMap'
import baseDesc from '@/components/hotel/baseDesc'
import comment from '@/components/hotel/comment'
export default {
    components:{
        pictureShow,
        priceShow,
        navMap,
        baseDesc,
        comment
    }
};
</script>

<style scoped lang="less">
.container {
    width: 1000px;
    margin: 0 auto;
    .breadcrunbs{
        padding: 20px 0;
    }
    .title {
        margin-bottom: 20px;
        color: #666;
        font-size: 14px;
        h4{
            font-weight: 400;
            color: #333;
            font-size: x-large;
        }
        .iconfont{
            font-size: 16px;
            font-style: normal;
        }
        .iconhuangguan {
            color: #f90;
        }
    }
}
</style>