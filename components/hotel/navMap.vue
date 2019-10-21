<template>
    <div id="navMap">
        <!-- <h3>高德地图</h3>

    <el-row style="margin-bottom:20px;">
      <el-col :span="5">
        <el-input placeholder="出发地点" v-model="start"></el-input>
      </el-col>
      <el-col :span="5">
        <el-input placeholder="到达地点" v-model="end"></el-input>
      </el-col>
      <el-button :span="2" @click="handleSearch">搜索</el-button>
        </el-row>-->

        <!-- 地图的容器 -->
        <div id="container"></div>
        <div id="panel">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="风景" name="first">风景</el-tab-pane>
                <el-tab-pane label="交通" name="second">交通</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            start: "",
            end: ""
        };
    },
    methods: {
        // handleSearch(){
        //   this.map();
        // },
        map() {
            // 地图对象
            var map = new AMap.Map("container", {
                zoom: 11 //级别
                //center: [113.3245904, 23.1066805]//中心点坐标
            });
            // 异步加载插件
            AMap.plugin(["AMap.ToolBar", "AMap.Driving"], () => {
                //异步加载插件
                var toolbar = new AMap.ToolBar();
                map.addControl(toolbar);

                // 驾车路线的插件
                var driving = new AMap.Driving({
                    map: map,
                    // panel: "panel",
                    policy: AMap.DrivingPolicy.LEAST_TIME
                }); //驾车路线规划

                var points = [{ keyword: this.start }, { keyword: this.end }];

                driving.search(points, function(status, result) {});
            });
        }
    },

    mounted() {
        // 整个页面加载完毕之后执行
        window.onLoad = () => {
            this.map();
        };

        // 地图的连接
        var url =
            "https://webapi.amap.com/maps?v=1.4.15&key=e3c936027dd8c0a7d48d60c4db2e827e&callback=onLoad";
        var jsapi = document.createElement("script");
        jsapi.charset = "utf-8";
        jsapi.src = url;
        document.head.appendChild(jsapi);
    }
};
</script>

<style scoped lang="less">
#navMap {
    display: flex;
    justify-content: space-between;
    height: 360px;
    margin: 40px 0;
}
#container {
    width: 65%;
}
#panel {
    background-color: white;
    overflow-y: auto;
    width: 35%;
    padding-left: 20px;
    .el-menu-demo {
        height: 40px;
        line-height: 40px;
    }
}
</style>