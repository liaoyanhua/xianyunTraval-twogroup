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
            <HotelFiltrate />
            <el-col :span="14" class="Hotel_strategy">
                <!-- 区域详情 -->
                <HotelStrategy />
            </el-col>
            <!-- 地图 -->
            <el-col :span="10" class="Hotel_map">
                <hotelMap />
            </el-col>
            <!-- 酒店分类筛选 -->
            <Hotelclassify />
            <!-- 酒店列表页面 -->
            <HotelList :data="HotelList" />
            <!-- 分页器 -->
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page.sync="pageIndex"
                :page-size="100"
                layout="total, prev, pager, next"
                :total="total"
            ></el-pagination>
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
            HotelList: [],
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
            // 当前页数
            pageIndex: 1,

            // 每页条数
            pageSize: 10,

            // 总条数
            total: 0
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
<<<<<<< HEAD
                url: "/hotels",
=======
                url: `/hotels?_start=${(this.pageIndex - 1) * this.pageSize}`,
>>>>>>> b44b3367ac8ab91adb0dc98541d43a2767a91a01
                params: {
                    city,
                    enterTime,
                    leftTime,
                    _limit: limit,
                    _start: start
                }
            }).then(res => {
                this.HotelList = res.data.data;
<<<<<<< HEAD
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
=======
                this.total = res.data.total;
            });
        },
        // 页数切换时触发，val是当前页数
        handleCurrentChange(val) {
            this.pageIndex = val;
            this.getHotelList();
>>>>>>> b44b3367ac8ab91adb0dc98541d43a2767a91a01
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