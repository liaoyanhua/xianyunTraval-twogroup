<template>
    <div class="container">
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
        </el-row>-->
        <el-table :data="tableData.products" style="width: 100% " class="content">
            <el-table-column prop="name" label="价格来源" width="400"></el-table-column>
            <el-table-column prop="bestType" label="低价房型" width="420"></el-table-column>
            <el-table-column label="最低房价/每晚" width="180">
                <template slot-scope="scope">
                    <span style="margin-left: 10px" class="height-light yuan">{{ scope.row.price}}</span>
                    <i >起</i>
                    <i class="el-icon-arrow-right height-light"></i>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    props: {
        tableData: {
            // 声明item的类型
            type: Object,
            // 如果用户不传，采取默认值!!!!
            default: () => {
                return {};
            }
        }
    },
    mounted() {
        setTimeout(() => {
            // console.log(this.tableData, 213165);
        }, 1000);
    }
};
</script>

<style scoped lang="less">
.container {
    line-height: 23px;
    margin: 40px 0 !important;
}
.height-light{
    color:#f90;
}
.yuan{
    text-align: left;
}
</style>