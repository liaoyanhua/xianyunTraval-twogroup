<template>
    <div class="HotelList">
        <nuxt-link
            :to="`/hotel/hotelDetail?id=${item.id}`"
            v-for="(item,index) in data"
            :key="index"
        >
            <el-row type="flex" @click="$router.push({path:'/hotel/hotelDetail',query:{id:item.id}})" justify="space-between" class="List_content">
                <el-col :span="8" style="padding-left: 10px; padding-right: 10px;">
                    <img
                        data-v-0a769ebc
                        :src="item.photos"
                        :alt="item.name"
                        width="320"
                        height="210"
                    />
                </el-col>
                <el-col :span="10" style="padding:0 15px;">
                    <h4>
                        <nuxt-link  :to="`/hotel/hotelDetail?id=${item.id}`">{{item.name}}</nuxt-link>
                    </h4>
                    <el-col style="padding:5px 0;">
                        <span>{{item.alias}}</span>
                        <i class="iconfont iconhuangguan" style="color:#f90"></i>
                        <i class="iconfont iconhuangguan" style="color:#f90"></i>
                        <i class="iconfont iconhuangguan" style="color:#f90"></i>
                        <span>经济型</span>
                        <el-row type="flex" justify="space-between" style="padding:5px 0;">
                            <el-col :span="10">
                                <div class="levels">
                                    <span class="el-rate__item" style="cursor: auto;">
                                        <i
                                            class="el-rate__icon el-icon-star-on"
                                            style="color: rgb(247, 186, 42);"
                                        ></i>
                                    </span>
                                    <span
                                        class="el-rate__text"
                                        style="color: rgb(255, 153, 0);"
                                    >3.5分</span>
                                </div>
                            </el-col>
                            <el-col :span="7">
                                <span style="color:#f90">{{item.common_remarks}}</span>
                                条评价
                            </el-col>
                            <el-col :span="7">
                                <span style="color:#f90">{{item.good_remarks}}</span>
                                篇游记
                            </el-col>
                        </el-row>
                        <el-row>
                            <i class="iconfont iconlocation"></i>
                            <span>位于: {{item.address}}</span>
                        </el-row>
                    </el-col>
                </el-col>
                <el-col :span="6" class="hotel_reservation">
                    <el-row
                        type="flex"
                        justify="space-between"
                        class="hotel_navigation"
                        v-for="(value,index) in item.products"
                        :key="index"
                    >
                        <el-col :span="12">{{value.name}}</el-col>
                        <el-col :span="12">
                            <span>￥{{value.price}}</span>起
                            <i class="el-icon-arrow-right"></i>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </nuxt-link>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    props: {
        data: {
            type: Array,
            default: []
        }
    },

    methods: {}
};
</script>
<style lang="less" scoped>
.HotelList {
    width: 1000px;
    margin: 0 auto;
    .List_content {
        padding: 20px 0;
        border-bottom: 1px solid #ccc;
        margin-bottom: 15px;
        h4 {
            font-weight: 400;
            font-size: x-large;
        }
        .hotel_reservation {
            .hotel_navigation {
                font-size: 14px;
                color: #666;
                padding: 20px 10px;
                margin: 0 20px;
                border-bottom: 1px solid #ddd;
                &:hover {
                    background: #eee;
                }
            }
            span {
                color: #f90;
                padding-right: 5px;
            }
        }
    }
}
</style> 