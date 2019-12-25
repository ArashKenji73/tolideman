<template>
    <form class="manager-form">
        <div class="manager-profile-img" @click="openNewManagerImg">
            <input type="file" name="manager-img" id="manager-profile-img-upload" style="display:none"/> 
        </div>
        <input class="input" type="text" name="manager-name" placeholder="نام">
        <input class="input" type="text" name="manager-family" placeholder="نام خانوادگی">
        <input class="input" type="text" name="manager-phone" placeholder="شماره همراه">
        <vSelect v-model="state" class="input" :options="sex" placeholder='جنسیت' dir="rtl">
        </vSelect>
        <input class="submit" type="submit" value="ویرایش">
    </form>
</template>
<script>
import vSelect from 'vue-select';
import $ from "jquery";
export default {
    data(){
        return{
            // shomNewManagerModal: false,
            sex:['مرد', 'زن' , 'چیزی دیگر']
        }
    },
    methods:{
        openNewManagerImg(){
            // this.shomNewManagerModal = true
            $('#manager-profile-img-upload').trigger('click');
        }
    },
    components:{
        vSelect,
    }
}
</script>
<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";
@import "@/assets/styles/vars.scss";
    .manager-form{
        font-family: $main-font;
        display: flex;
        flex-direction: column;
        direction: rtl;
        padding: 0px 15px;
        .manager-profile-img{
            width: 100px;
            height: 100px;
            border-radius: 100%;
            background: #ddd;
            margin: 0 auto;
            margin-bottom: 1rem;
        }
        .input{
            padding: 10px;
            background: $lightWhiteBG;
            border: 0px;
            margin-bottom: 1rem;
            // width: 80%;
            // margin: 0 auto;
            box-sizing: border-box;
            border-bottom: 3px solid $navHeaderColor;
            height: 55px;
            border-radius: 10px;
        }
        .vs__dropdown-toggle{
            position: relative;
            border: 0px;
            .vs__actions{
                position: absolute;
                left: 0px;
                height: 100%;
                background: $navHeaderColor;
                padding: 10px;
                border-radius: 10px;
            }
            .vs__search, .vs__search:focus{
                color: #787da8;
            }
            .vs__open-indicator {
                fill: rgb(255, 255, 255);
            }
            .vs__clear {
                fill: rgb(255, 255, 255);
            }
        }
        .submit{
            margin-top: 1rem;
            padding: 10px;
            color: #fff;
            background: #2ECC71 ;
            border-radius: 10px;
            border: 0px;
            font-size: 1.5rem;
        }
    }

</style>