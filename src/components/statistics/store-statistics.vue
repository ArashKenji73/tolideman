<template>
    <div>
        <div class="statistic">
            <span class="title">
                <i class="fas fa-eye"></i>
                <span>تعداد کل بازدید ها</span>
            </span>
            <span>1321</span>
        </div>

        <div class="statistic">
            <span class="title">
                <i class="fas fa-comment"></i>
                <span>تعداد کل نظرات</span>
            </span>
            <span>1321</span>
        </div>
        <div class="statistic">
            <span class="title">
                <i class="fas fa-heart"></i>
                <span>تعداد کل لایک ها</span>
            </span>
            <span>1321</span>
        </div>
        <div class="statistic">
            <span class="title">
                <i class="fas fa-thumbs-down"></i>
                <span>تعداد کل دیس لایک ها</span>
            </span>
            <span>1321</span>
        </div>
        <div class="statistic">
            <span class="title">
                <i class="fas fa-star"></i>
                <span>تعداد در لیست علاقه مندی ها </span>
            </span>
            <span>1321</span>
        </div>
        <div class="statistic">
            <span class="title">
                <i class="fas fa-bell"></i>
                <span>تعداد در من خبر بده</span>
            </span>
            <span>1321</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
@import "@/assets/styles/vars.scss";
.statistic-wrapper{
    .statistic{
        font-family: $main-font;
        border-radius: 10px;
        box-shadow: 0px 0px 10px grey;
        height: 50px;
        width: 90%;
        margin: 1rem auto;
        display: flex;
        background: $lightWhiteBG;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        .title{
            display: flex;
            align-items: center;
            text-align: right;
            svg{
                color: $navHeaderColor;
                margin-left: 10px;
                font-size: 1.2rem;
            }
        }
    }
}

</style>