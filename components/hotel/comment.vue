<template>
    <div class="comment">
        <h3>
            <span>0</span>条真实用户评论
        </h3>
        <div class="details">
            <div class="commentsCount  el-col el-col-4">
                <div>
                    总评数:
                    <span>1</span>
                </div>
                <div>
                    好评数:
                    <span>1</span>
                </div>
                <div>
                    差评数:
                    <span>1</span>
                </div>
            </div>
            <div class="commentScore el-col el-col-5">
                <el-rate
                    v-model="value5"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}"
                ></el-rate>
            </div>
            <div class="commentScore el-col el-col-3">
                <el-rate
                    v-model="value5"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}"
                ></el-rate>
            </div>
            <div class="commentScore el-col el-col-3">
                <el-rate
                    v-model="value5"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}"
                ></el-rate>
            </div>
            <div class="commentScore el-col el-col-3">
                <el-rate
                    v-model="value5"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}"
                ></el-rate>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value5: 3.7
        };
    }
};
</script>

<style scoped lang="less">
.comment{
    margin-top: 40px;
    h3{
        font-size: 16px;
    }
}
.details{
    display: flex;
    align-items: center;
    padding: 20px 0;

}
</style>