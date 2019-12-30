<template>
    <div class="statistic-wrapper">
        <div class="statistic-tabs">
            <span class="StoreStatistics active" @click="activeClass">آمار فروشگاه</span>
            <span class="CustomerStatus" @click="activeClass">وضعیت مشتریان</span>
        </div>    

        <component data-aos="fade-down" :is="ActiveComponent" class="component-wrapper"></component>

    </div>    
</template>
<script>
import $ from "jquery";
import StoreStatistics from '@/components/statistics/store-statistics';
import CustomerStatus from '@/components/statistics/customer-status';

export default {
    data(){
        return{
            ActiveComponent : 'StoreStatistics',
        }
    },
    methods:{
      activeClass(e){
        //console.log(e.target.className);
        this.ActiveComponent = e.target.className;
        $('.statistic-tabs span').removeClass('active');
        $(e.target).addClass('active');
      }  
    },
    components:{
        StoreStatistics,
        CustomerStatus
    }
}
</script>
<style lang="scss">
@import "@/assets/styles/vars.scss";

    .statistic-tabs{
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

    .component-wrapper{
        padding: 0px 1rem;
    }

@media only screen and (min-width: 577px) {
    .statistic-tabs{
        span{
            flex-grow: 1;
            text-align: center;
        }
    }
    .component-wrapper{
        padding: 1rem 30%;
    }
}      
</style>