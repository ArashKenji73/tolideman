<template>
    <div class="chat">
        <div class="content">
            <span class="sender">فرستنده : {{sender}}</span>
            {{message}}
        </div>
        <div class="footer">
            <span>جمعه ۱۳ آبان ۱۳۹۸</span>
            <i class="far fa-clock"></i>
        </div>
    </div>
</template>
<script>
export default {
    props: ['message' , 'sender' , 'receiver' , 'date']
}
</script>
<style lang="scss">
@import "@/assets/styles/vars.scss";
    .chat{
        font-family: $main-font;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
        min-height: 180px;
        background: $lightWhiteBG;
        border-radius: 10px;
        margin: 1rem 0rem;
        box-shadow: 0px 0px 10px grey;
        .content{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            padding: 15px;
            flex-grow: 1;
            border-bottom: 3px solid $navHeaderColor;
            text-align: right;
            text-align: justify;
            text-justify: inter-word;
            .sender{
                font-size: 1.1rem;
                font-weight: bold;
                margin-bottom: 0.5rem;
            }
            
        }
        .footer{
            display: flex;
            align-items: center;
            height: 50px;
            direction: ltr;
            padding: 15px;
            svg{
                margin-left: 5px;
                font-size: 20px;
                color: $navHeaderColor;
            }
        }
    }
</style>