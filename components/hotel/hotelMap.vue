<template>
  <div id="hotelMap">
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    window.onLoad = function() {
      var map = new AMap.Map("hotelMap", {
        zoom: 11, //级别
        center: [118.796623, 32.059352], //中心点坐标
        viewMode: "3D" //使用3D视图
      });
      // 构造点标记
      var marker = new AMap.Marker({
        icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
        position: [118.796623, 32.059352]
      });
      map.add(marker);
    };
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=e3c936027dd8c0a7d48d60c4db2e827e&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
};
</script>
<style lang="less" scoped>
#hotelMap {
  width: 420px;
  height: 260px;
}
</style> 