<template>
    <div class="hotel">
        <el-row type="flex" class="hotel_content">
            <!-- 面包屑 -->
            <el-row class="Hotel_crumbs">
                <el-breadcrumb separator>
                    <el-breadcrumb-item style="width:54px">
                        酒店
                        <i class="el-icon-arrow-right" style="margin-left:5px"></i>
                    </el-breadcrumb-item>
                    <el-breadcrumb-item>南京市酒店预定</el-breadcrumb-item>
                </el-breadcrumb>
            </el-row>
            <!-- 筛选查询酒店 -->
            <HotelFiltrate @searchHotelList="searchHotelList" />
            <el-col :span="14" class="Hotel_strategy">
                <!-- 区域详情 -->
                <HotelStrategy />
            </el-col>
            <!-- 地图 -->
            <el-col :span="10" class="Hotel_map">
                <hotelMap />
            </el-col>
            <!-- 酒店分类筛选 -->
            <Hotelclassify @getselectForm="getselectForm"/>
            <!-- 酒店列表页面 -->
            <HotelList :data="HotelList"/>
            <!-- 分页器 -->
        </el-row>
    </div>
</template>
<script>
//引入插件
import HotelFiltrate from "@/components/hotel/HotelFiltrate";
import HotelStrategy from "@/components/hotel/HotelStrategy";
import hotelMap from "@/components/hotel/hotelMap";
import Hotelclassify from "@/components/hotel/Hotelclassify";
import HotelList from "@/components/hotel/HotelList";
export default {
    data() {
        return {
            HotelList: [], //默认酒店列表
            hotel: {
                id: 1,
                price_in: 99,
                scenic: 1,
                name_contains: "",
                hotellevel: 1,
                hoteltype: 1,
                hotelbrand: 1,
                hotelasset: 1,
                person: 2
            },
            form: {
                city: "", // 查询城市
                enterTime: "", //进店时间
                leftTime: "", //离店时间
                number: "", // 住房人数
                adult: "2", //成人
                children: "0", //儿童
                time: []
            },
            newForm: {
                newlevels: [],
                newassets: [],
                newbrands: [],
                newtypes: []
            }
        };
    },
    components: {
        HotelFiltrate,
        HotelStrategy,
        hotelMap,
        Hotelclassify,
        HotelList
    },
    mounted() {
        this.getHotelList();
    },
    methods: {
        //获取酒店列表数据
        getHotelList() {
            const { id, city, enterTime, leftTime, limit, start } = this.hotel;
            this.$axios({
                url: "/hotels",
                params: {
                    city,
                    enterTime,
                    leftTime,
                    _limit: limit,
                    _start: start
                }
            }).then(res => {
                this.HotelList = res.data.data;
            });
        },
        searchHotelList(data) {
            this.form = data;
            console.log(this.form, "1315");
            this.$axios({
                url: "/hotels",
                params: {
                    city: this.form.city,
                    enterTime: this.form.enterTime,
                    leftTime: this.form.leftTime
                }
            }).then(res => {
                // console.log(res);
                const {data} = res.data;
                this.HotelList = data;
            });
        },
        getselectForm(data){
            console.log(data,"13219999")
            this.newForm.push(data)
            console.log(this.newForm)
        }
    }
};
</script>
<style lang="less" scoped>
.hotel {
    width: 1000px;
    margin: 0 auto;
    .hotel_content {
        flex-wrap: wrap;
    }
    .Hotel_crumbs {
        padding: 20px 0;
    }
}
</style>