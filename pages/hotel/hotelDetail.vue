<template>
    <div class="container">
        <el-row class="breadcrunbs">
            <el-breadcrumb separator-class="el-icon-arrow-right ">
                <el-breadcrumb-item :to="{ path: '/' }">酒店</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/hotel' }" >{{`${data.city.name}酒店预订`}}</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/' }">{{data.name}}</el-breadcrumb-item>
            </el-breadcrumb>
            <!-- {{ data.breadcrumb }} -->
        </el-row>
        <!-- ${$axios.defaults.baseURL + item.url} -->
        <div class="title">
            <h4>
                {{ data.name }}
                <span>
                    <i class="iconfont iconhuangguan"></i>
                </span>
                <span>
                    <i class="iconfont iconhuangguan"></i>
                </span>
                <span>
                    <i class="iconfont iconhuangguan"></i>
                </span>
                <span>
                    <i class="iconfont iconhuangguan"></i>
                </span>
                <span>
                    <i class="iconfont iconhuangguan"></i>
                </span>
            </h4>
            <span>{{ data.alias }}</span>
            <div>
                <i class="iconfont iconlocation"></i>
                <span>{{ data.address}}</span>
            </div>
        </div>

        <!-- 图片展示部分 -->
        <pictureShow :picture="data" />
        <priceShow :tableData="data" />
        <!-- 地图展示部分 -->
        <navMap />

        <!-- 信息展示 -->
        <baseDesc />

        <!-- 用户评论信息 -->
        <comment />
    </div>
</template>

<script>
import pictureShow from "@/components/hotel/pictureShow";
import priceShow from "@/components/hotel/priceShow";
import navMap from "@/components/hotel/navMap";
import baseDesc from "@/components/hotel/baseDesc";
import comment from "@/components/hotel/comment";
export default {
    components: {
        pictureShow,
        priceShow,
        navMap,
        baseDesc,
        comment,
    },
    data() {
        return {
            data: {
                pics: [],
                city:[]
            },
            // 文章评论页数据
            post: [],
            // 输入框的内容
            textarea: "",
        };
    },
    mounted() {
        this.$axios({
            url: "/hotels?id="+this.$route.query.id
        }).then(res => {
            const { data } = res.data;
            this.data = data[0];
            this.data.products.map(v => {
                v.price = "￥" + v.price;
                return v;
            });
            console.log(res)
        });
    }
};
</script>

<style scoped lang="less">
.container {
    width: 1000px;
    margin: 0 auto;
    .breadcrunbs {
        padding: 20px 0;
    }
    .title {
        margin-bottom: 20px;
        color: #666;
        font-size: 14px;
        h4 {
            font-weight: 400;
            color: #333;
            font-size: x-large;
        }
        .iconfont {
            font-size: 16px;
            font-style: normal;
        }
        .iconhuangguan {
            color: #f90;
        }
        .el-icon-location {
            font-size: 16px;
            color: #666;
        }
    }
}
</style>