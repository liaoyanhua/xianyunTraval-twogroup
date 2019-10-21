<template>
    <div id="container"></div>
</template>

<script>
export default {
    mounted() {
        window.onLoad = function() {
            var map = new AMap.Map("container", {
                zoom: 11, //级别
                center: [113.324463, 23.10647] //中心点坐标
            });
            var marker1 = new AMap.Marker({
                content: `<div style="width:20px;height:20px;border-radius: 50px;background:red;color:#fff;text-align:center;line-height:20px;">99</div>`,
                position: [113.324463, 23.10647] //位置
            });
            var marker2 = new AMap.Marker({
                // content:`<div style="width:20px;height:20px;border-radius: 50px;background:red;color:#fff;text-align:center;line-height:20px;">77</div>`,
                // content: "1",
                position: [113.334463, 23.11647] //位置
            });
            var markerList = [marker1, marker2];

            map.add(markerList);

            var icon = new AMap.Icon({
                size: new AMap.Size(40, 50), // 图标尺寸
                image: "//webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png", // Icon的图像
                imageOffset: new AMap.Pixel(0, -60), // 图像相对展示区域的偏移量，适于雪碧图等
                imageSize: new AMap.Size(40, 50) // 根据所设置的大小拉伸或压缩图片
            });

            // 将 Icon 实例添加到 marker 上:
            var marker = new AMap.Marker({
                position: new AMap.LngLat(116.405467, 39.907761),
                offset: new AMap.Pixel(-10, -10),
                icon: icon, // 添加 Icon 实例
                title: "北京",
                zoom: 13
            });

            map.add(marker);
        };

        var url =
            "https://webapi.amap.com/maps?v=1.4.15&key=98da0115fffdc452c2141b38c1925adf&callback=onLoad";
        var jsapi = document.createElement("script");
        jsapi.charset = "utf-8";
        jsapi.src = url;
        document.head.appendChild(jsapi);
    }
};
</script>

<style>
#container {
    width: 100%;
    height: 260px;
}
</style>