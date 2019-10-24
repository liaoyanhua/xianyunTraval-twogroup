<template>
    <div id="navMap">
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
            end: "",
            activeName: "first"
        };
    },
    methods: {
        handleClick() {},
        map() {
            // 地图对象
            var position = new AMap.LngLat(116.397428, 39.90923);

            // 创建地图实例
            var map = new AMap.Map("container", {
                zoom: 13,
                center: position,
                resizeEnable: true
            });

            // 点标记显示内容，HTML要素字符串
            var markerContent =
                `<div class="custom-content-marker">
                <img src="//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png">
                <div class="close-btn" onclick="clearMarker()">X</div>
                </div>`;

            var marker = new AMap.Marker({
                position: position,
                // 将 html 传给 content
                content: markerContent,
                // 以 icon 的 [center bottom] 为原点
                offset: new AMap.Pixel(-13, -30)
            });

            // 将 markers 添加到地图
            map.add(marker);
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