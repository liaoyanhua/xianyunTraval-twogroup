<template>
    <div class="Hotelclassify">
        <el-row type="flex" justify="space-between">
            <el-col :span="8" class="hotel_price">
                <el-row>
                    <!-- <div class="block">
                        <el-slider v-model="form.price" show-input></el-slider>
                    </div> -->
                    <el-col :span="12">价格</el-col>
                    <el-col :span="12" class="price_right">0-{{form.price}}</el-col>
                </el-row>
                <el-row>
                    <el-slider v-model="form.price" :max="4000"></el-slider>
                </el-row>
            </el-col>
            <el-col :span="6" class="HotelSeT">
                <el-col :span="24">住宿等级</el-col>
                <el-col :span="24">
                    <el-select
                        size="mini"
                        v-model="form.levels"
                        multiple
                        class="select"
                        border="false"
                    >
                        <el-option
                            v-for="(item,index) in Hotel.levels"
                            :key="index"
                            :label="item.name"
                            :value="item.id"
                        ></el-option>
                    </el-select>
                </el-col>
            </el-col>
            <el-col :span="6" class="HotelSeT">
                <el-col :span="24">住宿类型</el-col>
                <el-col :span="24">
                    <el-select
                        size="mini"
                        v-model="form.types"
                        multiple
                        class="select"
                        border="false"
                    >
                        <el-option
                            v-for="(item,index) in Hotel.types"
                            :key="index"
                            :label="item.name"
                            :value="item.id"
                        ></el-option>
                    </el-select>
                </el-col>
            </el-col>
            <el-col :span="6" class="HotelSeT">
                <el-col :span="24">酒店设施</el-col>
                <el-col :span="24">
                    <el-select
                        size="mini"
                        v-model="form.assets"
                        multiple
                        class="select"
                        border="false"
                    >
                        <el-option
                            v-for="(item,index) in Hotel.assets"
                            :key="index"
                            :label="item.name"
                            :value="item.id"
                        ></el-option>
                    </el-select>
                </el-col>
            </el-col>
            <el-col :span="6" class="HotelSeT">
                <el-col :span="24">酒店品牌</el-col>
                <el-col :span="24">
                    <el-select
                        size="mini"
                        v-model="form.brands"
                        multiple
                        class="select"
                        border="false"
                    >
                        <el-option
                            v-for="(item,index) in Hotel.brands"
                            :key="index"
                            :label="item.name"
                            :value="item.id"
                        ></el-option>
                    </el-select>
                </el-col>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // 绑定
            form: {
                price: 4000,
                levels: [],
                assets: [],
                brands: [],
                types: []
            },
            // 渲染
            Hotel: {
                levels: [],
                assets: [],
                brands: [],
                types: []
            }
        };
    },

    watch: {
        form: {
            deep: true,
            handler() {
                // console.log(this.$store.state.hotel.city)
                const city = this.$store.state.hotel.city;
                console.log(this.$store.state,"dasdasdasdasd")
                const enterTime = this.$store.state.hotel.enterTime;
                const leftTime = this.$store.state.hotel.leftTime;
                if(!city) return ;
                // var str = `&city=${city}$price_lt=${this.form.price}&`;
                var str = `?&city=${city}&price_lt=${this.form.price}&enterTime=${enterTime}&leftTime=${leftTime}&`;
                // Hotel
                this.form.levels.forEach(v => {
                    str += `hotellevel_in=${v}&`
                    // console.log(v)
                }); 

                this.form.assets.forEach(v => {
                    str += `hotelasset_in=${v}&`
                    // console.log(v)
                }); 

                this.form.brands.forEach(v => {
                    str += `hotelbrand_in=${v}&`
                    // console.log(v)
                }); 

                this.form.types.forEach(v => {
                    str += `hoteltype_in=${v}&`
                    // console.log(v)
                }); 

                var str1 = str.slice(0,-1)
                this.$emit("filterList",str1)
            }
        }
    },
    methods: {
        formatTooltip(val) {
            return val * 40;
        }
    },
    mounted() {
        this.$axios({
            url: "/hotels/options"
        }).then(res => {
            const { data } = res.data;
            this.Hotel = data;
            // console.log(data, "1024");
        });
    }
};
</script>
<style lang="less" scoped>
.Hotelclassify {
    width: 1000px;
    border: 1px solid #ccc;
    font-size: 14px;
    color: #666;
    margin: 15px;
    .hotel_price {
        padding: 5px 20px;
    }
    .price_right {
        text-align: right;
    }
    .HotelSeT {
        padding: 5px 20px;
        .select {
            width: 150px;
            height: 18px;
            padding: 10px 0;
            /deep/.el-input__inner {
                height: 18px;
                border: none;
            }
            /deep/.el-input__icon {
                line-height: 0;
            }
        }
    }
    .HotelLevel_drop {
        width: 145px;
        height: 20px;
        display: inline-block;
        .hotel_select_text {
            width: 65px;
            margin-right: 100px;
        }
        /deep/.el-icon-arrow-down {
            margin-left: 50px;
        }
    }
}
</style> 