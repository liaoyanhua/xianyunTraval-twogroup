<template>
    <div class="container">
        <div class="baseInfo">
            <div class="baseInfotitle">基本信息</div>
            <div class="baseInfocontent">
                <span>入住时间：14:00之后</span>
                <span>离店时间：12:00之前</span>
            </div>
        </div>
        <div class="baseInfo">
            <div class="baseInfotitle">基本信息</div>
            <div class="baseInfocontent">
                <span>入住时间：14:00之后</span>
                <span>离店时间：12:00之前</span>
            </div>
        </div>
        <div class="baseInfo">
            <div class="baseInfotitle">基本信息</div>
            <div class="baseInfocontent">
                <span>入住时间：14:00之后</span>
                <span>离店时间：12:00之前</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.container {
    .baseInfo {
        display: flex;
        line-height: 60px;
        border-bottom: 1px solid #eee;
        .baseInfotitle {
            flex: 1;
            font-size: 14px;
        }
        .baseInfocontent {
            flex: 5;
            span{
                font-size: 14px;
                color: #666;
            }
        }
    }
}
</style>