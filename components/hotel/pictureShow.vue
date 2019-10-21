<template>
    <div class="pictureShow">
        <div class="mainPicture">
            <img :src="pictureList[0].src" ref="mainPicture"/>
        </div>
        <div class="supPicture el-row">
            <div class="el-col el-col-12" 
            v-for="(item,index) in pictureList" 
            :key="index"
            @click="togglePic(index)">
                    <img :src="item.src" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pictureList:[
                {src:"http://157.122.54.189:9093/images/hotel-pics/1.jpeg"},
                {src:"http://157.122.54.189:9093/images/hotel-pics/2.jpeg"},
                {src:"http://157.122.54.189:9093/images/hotel-pics/3.jpeg"},
                {src:"http://157.122.54.189:9093/images/hotel-pics/4.jpeg"},
                {src:"http://157.122.54.189:9093/images/hotel-pics/5.jpeg"},
                {src:"http://157.122.54.189:9093/images/hotel-pics/6.jpeg"},
            ]
        }
    },
    methods: {
        togglePic(index){
            // console.log(index)
            this.$refs.mainPicture.src = this.pictureList[index].src
        }
    },
};
</script>

<style scoped lang="less">
.pictureShow {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 40px 0;
    height: 360px;
    .mainPicture {
        img {
            display: block;
            height: 360px;
            width: 640px;
        }
    }
    .supPicture {
        box-sizing: border-box;
        margin-left: 10px;
        margin-right: 10px;
        cursor: pointer;
        img {
            display: block;
            width: 100%;
            height: 120px;
            box-sizing: border-box;
            padding-left: 10px;
            padding-bottom:5px 
        }
    }
}
</style>