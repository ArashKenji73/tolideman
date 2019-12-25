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
.main-page-block{
    font-family: NavbarFont;
    direction: rtl;
    display: flex;
    align-items: center;
    height: 60px;
    background: $lightWhiteBG;
    box-sizing: border-box;
    border-right: 15px;
    margin: 10px;
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
</style>