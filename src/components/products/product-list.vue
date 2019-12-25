<template>
    <div class="product">
        <div class="body">
            <span class="name">
                {{name}}
            </span>
            <span class="price">
                {{humanReadPrice}}
            </span>
        </div>
        <div class="footer">
            <a :href="'/product/delete/'+id" class="btn-danger">حذف کردن</a>
            <a :href="'/product/edit/'+id" class="btn-success">ویرایش</a>
        </div>
    </div>
</template>
<script>
export default {
    props:['name' , 'price' , 'id'],
    computed:{
        humanReadPrice(){
            return this.price.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1"+',');
        }
    }
}
</script>
<style lang="scss">
@import "@/assets/styles/vars.scss";
.product{
    font-family: $main-font;
    width: 100%;
    height: 200px;
    background: #607D8B;
    margin: 1rem auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 10px grey;

    img{
        position: absolute;
        top: 0px;
        right: 0px;
        left: 0px;
        object-fit: cover;
    }
    .body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: right;
        flex-grow: 1;
        padding: 15px;
        span{
            margin: 5px 0px;
            color: #fff;
            svg{
                margin-left: 5px;
                color: $successBG;
            }
        }
    }
    .footer{
        height: 30%;
        border-radius: 0px 0px 10px 10px;
        display: flex;
        align-items: center;
        padding: 15px;
        a{
            flex-grow: 1;
            text-align: center;
            padding: 10px;
        }
    }
}
</style>