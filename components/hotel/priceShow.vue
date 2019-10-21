<template>
    <div class="container" >
        <!-- <el-row class="title">
            <el-col :span="8">价格来源</el-col>
            <el-col :span="8">低价房型</el-col>
            <el-col :span="8">最低价格/每晚</el-col>
        </el-row>
        <el-row class="content" v-for="(item,index) in priceList" :key="index">
            <nuxt-link to="#">
                <el-col :span="8">{{item.priceSource}}</el-col>
            </nuxt-link>
            <nuxt-link to="#">
                <el-col :span="8">{{item.hotelType}}</el-col>
            </nuxt-link>
            <nuxt-link to="#">
                <el-col :span="8">
                    <span>￥{{item.pricePerNight}}</span>起>
                </el-col>
            </nuxt-link>
        </el-row> -->

        <el-table :data="tableData" style="width: 100% " class="content">
            <el-table-column prop="priceSource" label="价格来源" width="400"></el-table-column>
            <el-table-column prop="hotelType" label="低价房型" width="420"></el-table-column>
            <el-table-column prop="pricePerNight" label="最低价格/每晚" width="180"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    priceSource: "携程",
                    hotelType: "高级大床房",
                    pricePerNight: 32
                },
                {
                    priceSource: "艺龙",
                    hotelType: "高级大床房A",
                    pricePerNight: 64
                },
                {
                    priceSource: "携程",
                    hotelType: "高级大床房",
                    pricePerNight: 32
                }
            ]
        };
    }
};
</script>

<style scoped lang="less">
.container {
    line-height: 23px;
    margin: 40px 0 !important;
    
}
</style>