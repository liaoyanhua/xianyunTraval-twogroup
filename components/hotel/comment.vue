<template>
    <div class="comment">
        <h3>
            <span>3</span>条真实用户评论
        </h3>
        <div class="details">
            <div class="commentsCount el-col el-col-4">
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
            <div class="commentScore el-col el-col-5 star">
                <el-rate
                    v-model="value5"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}"
                ></el-rate>
                <div class="tuijian">
                    <el-progress
                        type="circle"
                        :percentage="75"
                        color="#f90"
                        :width="70"
                        :stroke-width="3"
                        :show-text="false"
                    ></el-progress>
                    <div class="envi">推荐</div>
                </div>
            </div>
            <div class="commentScore el-col el-col-3 circles">
                <el-progress
                    type="circle"
                    :percentage="75"
                    color="#f90"
                    :width="70"
                    :stroke-width="3"
                    :show-text="false"
                ></el-progress>
                <div class="envi">环境</div>
            </div>
            <div class="commentScore el-col el-col-3 circles">
                <el-progress
                    type="circle"
                    :percentage="75"
                    color="#f90"
                    :width="70"
                    :stroke-width="3"
                    :show-text="false"
                ></el-progress>
                <div class="envi">产品</div>
            </div>
            <div class="commentScore el-col el-col-3 circles">
                <el-progress
                    type="circle"
                    :percentage="75"
                    color="#f90"
                    :width="70"
                    :stroke-width="3"
                    :show-text="false"
                ></el-progress>
                <div class="envi">服务</div>
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
.comment {
    margin-top: 40px;
    h3 {
        font-size: 16px;
    }
}
.details {
    display: flex;
    align-items: center;
    padding: 20px 0;
}
.circles {
    display: flex;
    align-items: center;
    .envi {
        position: absolute;
        width: 70px;
        text-align: center;
        color:#f90;

    }
}
.star{
    display: flex;
    align-items: center;
    justify-content: center;
    .tuijian {
    position: absolute;
    display: flex;
    align-items: center;
    opacity: .25;
    .envi {
        color:#f90;
        position: absolute;
        width: 70px;
        text-align: center;
        transform:rotate(-30deg);
        font-size: x-large;
    }
}
}
</style>