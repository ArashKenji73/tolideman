<template>
    <div>
        <div class="edit-infos-tabs">
            <span class="Store active" @click="activeClass">فروشگاه</span>
            <span class="StoreManager" @click="activeClass">مدیر فروشگاه</span>
        </div>    
        <component data-aos="fade-down" :is="ActiveComponent"></component>
    </div> 
</template>
<script>
import $ from "jquery";
import Store from '@/components/edit/store'
import StoreManager from '@/components/edit/store-manager'
export default {
    data(){
        return{
            ActiveComponent : 'Store',
            isActive:''
        }
    },
    components:{
        Store,
        StoreManager
    },
    methods:{
      activeClass(e){
        console.log(e.target.className);
        this.ActiveComponent = e.target.className;
        $('.edit-infos-tabs span').removeClass('active');
        $(e.target).addClass('active');
      }  
    },
}
</script>
<style lang="scss">
@import "@/assets/styles/vars.scss";
    .edit-infos-tabs{
        font-family: $main-font;
        position: relative;
        top: -17px;
        display: flex;
        align-items: center;
        height: auto;
        width: 100%;
        padding: 10px 0px;
        background: $navHeaderColor;
        justify-content: space-around;
        color: #fff;
        flex-grow: 1;
        box-shadow: 0px 0px 10px grey;
        span{
            padding: 10px 20px;
            font-size: 0.8rem;
        }
        .active{
            background: #3a1f7d;
            border-radius: 20px;
        }
    }

@media only screen and (min-width: 577px) {
    .edit-infos-tabs{
        padding: 10px;
        span{
            flex-grow: 1;
            text-align: center;
        }
    }
}    
</style>