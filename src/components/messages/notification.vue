<template>
    <div>
        <div class="notification">
            <div class="head">
                <i class="far fa-envelope"></i>
                <slot name="header"></slot>
                <slot name="date"></slot>
            </div>
            <slot name="content" class="content"></slot>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
@import "@/assets/styles/vars.scss";
.notification{
    font-family: $main-font;
    display: flex;
    flex-direction: column;
    height: 110px;
    width: 90%;
    margin: 15px auto;
    border-radius: 10px;
    background: $lightWhiteBG;
    box-shadow: 0px 0px 10px grey;
    .head{
        display: flex;
        align-items: center;
        width: 100%;
        height: 40%;
        background: #eee;
        padding: 15px;
        border-radius: 10px;
        .title{
            text-align: right;
        }
        span{
            flex-grow: 1
        }
        svg{
            font-size: 1.5rem;
            margin-left: 0.5rem;
            color: #566573;
        }
        .date{
            justify-self: flex-end;
        }
    }
    .content{
        position: relative;
        display: inline-block;
        word-wrap: break-word;
        overflow: hidden;
        max-height: 100%; /* (Number of lines you want visible) * (line-height) */
        text-align:right;
        padding: 10px;
    }
}
</style>