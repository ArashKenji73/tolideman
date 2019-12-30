<template>
    <div class="main-page-block" :style="{ borderColor: color }">
        <span class="block-icon" :style="{ color: color }">
            <i :class="iconClassName"></i>
        </span>
        <span class="block-title">
            {{text}}
        </span>
    </div>    
</template>
<script>
export default {
    props:['text' , 'iconClassName' , 'color'],
}
</script>
<style lang="scss">
@import "@/assets/styles/vars.scss";
.main-block-link{
    margin: 1rem 0px;
    .main-page-block{
        font-family: NavbarFont;
        direction: rtl;
        display: flex;
        align-items: center;
        height: 60px;
        background: $lightWhiteBG;
        box-sizing: border-box;
        border-right: 15px;
        border-right: 15px solid;
        border-radius: 10px;
        cursor: pointer;
        .block-icon{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            font-size: 2.5rem;
            margin-left: 10px;
        }
        .block-title{
            font-size: 1.2rem;
            color: #4D5656;
        }
    }
}


@media only screen and (min-width: 577px) {
    .main-block-link{
        width: 48%;
        margin: 1%;
        .main-page-block{
            height: 100%;
        }
    }
}
</style>