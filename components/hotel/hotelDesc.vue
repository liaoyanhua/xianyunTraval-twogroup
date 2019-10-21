<template>
    <!-- 这个为酒店首页的介绍信息项 -->
    <div class="container">
        <el-row :gutter="20">
            <el-col :span="14" class="area">
                <div class="areatitle el-col el-col-3">区域：</div>
                <div
                    el-col
                    el-col-24
                    class="areanav"
                    v-for="(item,index) in cityList"
                    :key="index"
                >{{item}}</div>
            </el-col>
            <el-col :span="10">
                <hotelMap />
            </el-col>
        </el-row>
        <navMap />
    </div>
</template>

<script>
import hotelMap from "@/components/hotel/hotelMap";
export default {
    components: {
        hotelMap
    },
    data() {
        return {
            cityList: ["钱江", "新城", "萧山机场", "灵隐"]
        };
    }
};
</script>

<style scoped lang="less">
.container {
    min-height: 260px;
    margin: 20px 0 !important;
    .area {
        display: flex;
        // justify-content: space-between;
        .areatitle {
            font-size: 14px;
            color: #666;
        }
        .areanav {
            // flex:1;
            font-size: 14px;
            color: #666;
            padding-right: 20px;
        }
    }
}
</style>