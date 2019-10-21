<template>
    <div class="container">
        <!-- 面包屑部分 -->
        <el-row class="breadcrunbs">
            <el-breadcrumb separator-class="el-icon-arrow-right ">
                <el-breadcrumb-item :to="{ path: '/' }">酒店</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/' }">南京酒店预订</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>

        <el-row :gutter="10">
            <el-col :span="5" class="destinput">
                <el-input v-model="input" placeholder="目的地"></el-input>
            </el-col>
            <el-col :span="9" class="datainput">
                <el-date-picker
                    v-model="value2"
                    type="daterange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                ></el-date-picker>
            </el-col>
            <div @click="isShow = !isShow">
                <el-col :span="5" class="numinput">
                    <el-input
                        placeholder="人数未定"
                        suffix-icon="el-input__icon iconfont iconuser"
                        v-model="input2"
                    ></el-input>
                </el-col>
            </div>
            <el-col :span="2">
                <el-button type="primary">查看价格</el-button>
            </el-col>
        </el-row>

        <!-- 酒店房间人数选择 -->
        <div class="selecthotel" v-if="isShow">
            <div class="selectone">
                <span>每间</span>
                <div>
                    <el-select v-model="value6" placeholder="请选择" class="input">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                    <el-select v-model="value7" placeholder="请选择" class="input">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </div>
            </div>
            <div class="btn">
                <el-button type="primary">
                    <span>确定</span>
                </el-button>
            </div>
        </div>
        <!-- 介绍内容 -->
        <div class="description">
            <hotelDesc />
            <div>
                <!-- 地图 -->
            </div>
        </div>
    </div>
</template>

<script>
import hotelDesc from "@/components/hotel/hotelDesc";
export default {
    components: {
        hotelDesc
    },
    data() {
        return {
            pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                }
                // shortcuts: [
                //     {
                //         text: "今天",
                //         onClick(picker) {
                //             picker.$emit("pick", new Date());
                //         }
                //     },
                //     {
                //         text: "昨天",
                //         onClick(picker) {
                //             const date = new Date();
                //             date.setTime(date.getTime() - 3600 * 1000 * 24);
                //             picker.$emit("pick", date);
                //         }
                //     },
                //     {
                //         text: "一周前",
                //         onClick(picker) {
                //             const date = new Date();
                //             date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                //             picker.$emit("pick", date);
                //         }
                //     }
                // ]
            },
            isShow: false,
            value2: "",
            options: [
                {
                    value: "选项1",
                    label: "黄金糕"
                }
            ],
            value6: "",
            value7: ""
        };
    }
};
</script>

<style scoped lang="less">
.container {
    width: 1000px;
    margin: 0 auto;
    position: relative;
}
.breadcrunbs {
    margin: 20px 0;
}

.datainput {
    margin-right: 10px;
    margin-left: 2px;
    width: 34.5%;
}
.selecthotel {
    width: 300px;
    height: 123px;
    box-sizing: border-box;
    background: #fff;
    position: absolute;
    right: 125px;
    top: 80px;
    .selectone {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 28px;
        line-height: 28px;
        margin-bottom: 20px;
        padding-bottom: 30px;
        border-bottom: 1px solid gray;
    }
    .input {
        height: 28px;
        width: 90px;
    }
    .btn {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 28px;
        line-height: 28px;

        span {
            font-size: 12px;
        }
    }
}
</style>