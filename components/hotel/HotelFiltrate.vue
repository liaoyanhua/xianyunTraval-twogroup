<template>
    <div class="filtrate">
        <!-- 筛选城市 -->
        <el-row class="Hotel_filtrate">
            <el-form :model="form">
                <!-- 选择城市 -->
                <el-form-item class="hotel_inquire">
<<<<<<< HEAD
                    <el-autocomplete
                        class="inline-input"
                        v-model="state1"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入内容"
                        @select="handleSelect"
                    ></el-autocomplete>
=======
                    <el-input v-model="form.hotelCity"></el-input>
>>>>>>> 7264020282a687606e4b349622f1ed29c53d1a78
                </el-form-item>
                <!-- 入住时间 -->
                <el-form-item class="hotel_Date">
                    <el-date-picker
<<<<<<< HEAD
                        v-model="form.time"
=======
                        v-model="form.hoteldate"
>>>>>>> 7264020282a687606e4b349622f1ed29c53d1a78
                        type="daterange"
                        range-separator="-"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                    ></el-date-picker>
                    <!-- 入住人数 -->
                </el-form-item>
                <el-form-item class="hotel_number">
                    <el-input
                        placeholder="人数未定"
                        suffix-icon="el-icon-s-custom"
                        v-model="form.number"
<<<<<<< HEAD
                        @focus="isShow = true"
=======
                        @focus="isShow = !isShow"
                        @blur="isShow = !isShow"
>>>>>>> 7264020282a687606e4b349622f1ed29c53d1a78
                        readonly
                    ></el-input>
                </el-form-item>
                <!-- 入住人数选择 -->
                <el-row class="hotel_adult" v-if="isShow">
                    <el-col :span="8">
                        <span>每间</span>
                    </el-col>
                    <el-col :span="16">
                        <el-select
                            size="mini"
                            v-model="form.adult"
                            placeholder
                            class="hotel_select hotel_select_adult"
                        >
                            <el-option
                                v-for="item in housingData"
                                :key="item.adult"
                                :label="item.adult"
                                :value="item.adult"
                            ></el-option>
                        </el-select>
                        <el-select
                            size="mini"
                            v-model="form.children"
                            class="hotel_select hotel_select_children"
                        >
                            <el-option
                                v-for="item in housingData"
                                :key="item.children"
                                :label="item.children"
                                :value="item.children"
                            ></el-option>
                        </el-select>
                    </el-col>
                    <el-row class="hotel_number_sure">
                        <el-button type="primary" class="sure_number" @click="chooseHousing">确定</el-button>
                    </el-row>
                </el-row>
                <!-- 查看酒店按钮 -->
<<<<<<< HEAD
                <el-button type="primary" @click="searchHotel">查看价格</el-button>
=======
                <el-button type="primary" round>查看价格</el-button>
>>>>>>> 7264020282a687606e4b349622f1ed29c53d1a78
            </el-form>
        </el-row>
    </div>
</template>
<script>
import moment from "moment";
export default {
    data() {
        return {
            // 住房选择数据
            housingData: [
                { adult: 1, children: 1 },
                { adult: 2, children: 2 },
                { adult: 3, children: 3 },
                { adult: 4, children: 4 },
                { adult: 5, children: 5 },
                { adult: 6, children: 6 }
            ],
            form: {
<<<<<<< HEAD
                city : "", // 查询城市
                enterTime: "", //进店时间
                leftTime: "", //离店时间
                number: "", // 住房人数
                adult: "2", //成人
                children: "0", //儿童
                time: []
            },
            isShow: false, //选择人数的菜单是否显示
            state1: "",
            hotelList:[],
=======
                hotelCity: "南京", // 查询城市
                hoteldate: "", //住房时间
                number: "", // 住房人数
                adult: "2", //成人
                children: "0" //儿童
            },
            isShow: false //选择人数的菜单是否显示
>>>>>>> 7264020282a687606e4b349622f1ed29c53d1a78
        };
    },
    mounted() {},
    methods: {
        // 住房选择时触发
<<<<<<< HEAD
        handleSelect(item) {
            this.form.city = item.id;
            // console.log(item.id,"312")
            this.$store.commit("hotel/getCityID",item.id)
        },
=======
        handleSelect() {},
>>>>>>> 7264020282a687606e4b349622f1ed29c53d1a78
        // 下拉菜单返回的数据
        // 显示选择框
        chooseHousing() {
            //判断人数
            if (this.form.adult > 0 && this.form.children > 0) {
                this.form.number = `${this.form.adult} 位成人 ${this.form.children} 位儿童`;
            } else if (this.form.adult > 0 && this.form.children == 0) {
                this.form.number = `${this.form.adult} 位成人`;
            } else if (this.form.adult == 0 && this.form.children > 0) {
                this.form.number = `${this.form.children} 位儿童`;
            } else if (this.form.adult == 0 && this.form.children == 0) {
                this.form.number = "";
            }
            this.isShow = false;
<<<<<<< HEAD
        },
        querySearch(value, cb) {
            this.$axios({
                url: "/cities?name=" + value,
            }).then(res => {
                const { data } = res.data;
                // console.log(res)
                const arr = data.map(v => {
                    v.value = v.name;
                    return v
                });
            // 调用 callback 返回建议列表的数据
                cb(arr);
            });
        },
        searchHotel() {
            this.form.enterTime = moment(this.form.time[0]).format(
                "YYYY-MM-DD"
            );
            this.form.leftTime = moment(this.form.time[1]).format("YYYY-MM-DD");
            // console.log(this.form)
            if(!this.form.city) return;
            var str = `?&city=${this.form.city}&enterTime=${this.form.enterTime}&leftTime=${this.form.leftTime}`
            // console.log(str,"0321")
            this.$store.commit("hotel/getenterTime",this.form.enterTime)
            this.$store.commit("hotel/getleftTime",this.form.leftTime)
            this.$emit("searchHotelList",str)
        },
=======
        }
>>>>>>> 7264020282a687606e4b349622f1ed29c53d1a78
    }
};
</script>
<style lang="less" scoped>
.Hotel_filtrate {
    width: 1000px;
    display: inline-block;
    position: relative;
    .hotel_inquire {
        width: 200px;
        display: inline-block;
    }
    .hotel_Date {
        display: inline-block;
    }
    .hotel_number {
        display: inline-block;
    }
    .hotel_adult {
        width: 325px;
        z-index: 999;
        height: 115px;
        position: absolute;
        top: 50px;
        right: 110px;
        box-shadow: 0px 0px 5px #ccc;
        padding: 15px 10px 0;
        background: #fff;
    }
    .hotel_number_sure {
        width: 100%;
        margin-top: 50px;
        border-top: 1px solid #ccc;
        .sure_number {
            width: 56px;
            height: 28px;
            font-size: 12px;
            line-height: 12px;
            padding: 1px;
            margin: 10px 0 0 230px;
            text-align: center;
        }
    }
    .hotel_select {
        width: 90px;
        height: 20px;
        position: relative;
    }
    .hotel_select_adult {
        &::after {
            position: absolute;
            top: 5px;
            left: 30px;
            font-size: 12px;
            content: "成人";
        }
    }
    .hotel_select_children {
        &::after {
            position: absolute;
            top: 5px;
            left: 30px;
            font-size: 12px;
            content: "儿童";
        }
    }
}
</style>