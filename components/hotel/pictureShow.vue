<template>
    <div class="pictureShow">
        <div class="mainPicture">
            <img :src="$axios.defaults.baseURL + picture.pics[0].url" 
            ref="mainPicture" 
            v-if="picture.pics.length>0"/>
        </div>
        <div class="supPicture el-row">
            <div class="el-col el-col-12" 
            v-for="(item,index) in picture.pics" 
            :key="index"
            @click="togglePic(index)">
                    <img :src="$axios.defaults.baseURL + item.url" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        picture:{
            type:Object,
            default: {}
        }
    },
    data(){
        return{
            
        }
    },
    // mounted(){
    //     setTimeout(()=>{
    //        console.log(this.picture.pics[0].url,"wqdedqw")
    //     },1000)
    // },
    methods: {
        togglePic(index){
            this.$refs.mainPicture.src = this.$axios.defaults.baseURL + this.picture.pics[index].url
        },
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