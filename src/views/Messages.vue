<template>
    <div>
        <div class="messages-tabs">
            <span class="Messages active" @click="activeClass">پیغام ها</span>
            <span class="Comments" @click="activeClass">نظرات</span>
            <span class="Suggestions" @click="activeClass">پیشنهادات</span>
            <span class="Notifications" @click="activeClass">اعلانیه ها</span>
        </div>    

        <component data-aos="fade-down" :is="ActiveComponent"></component>

    </div>    
</template>
<script>
import $ from "jquery";
import Messages from '@/components/messages/messages';
import Comments from '@/components/messages/comments';
import Suggestions from '@/components/messages/suggestions';
import Notifications from '@/components/messages/notifications'

export default {
    data(){
        return{
            ActiveComponent : 'Messages',
        }
    },
    methods:{
      activeClass(e){
        //console.log(e.target.className);
        this.ActiveComponent = e.target.className;
        $('.messages-tabs span').removeClass('active');
        $(e.target).addClass('active');
      }  
    },
    components:{
        Messages,
        Comments,
        Suggestions,
        Notifications
    }
}
</script>
<style lang="scss">
@import "@/assets/styles/vars.scss";
    .messages-tabs{
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
</style>