<template>

    <form class="store-form" action="#">
        <input class="input" type="text" name="title" placeholder="عنوان">
        <vSelect v-model="state" class="input" :options="states" placeholder='استان' dir="rtl"></vSelect>
        <span class="rtl">انتخاب شما : {{state}}</span>
        <vSelect v-model="city" class="input" :options="cities" placeholder='شهر' dir="rtl"></vSelect>
        <span class="rtl">انتخاب شما : {{city}}</span>
        <vSelect v-model="village" class="input" :options="villages" placeholder='روستا' dir="rtl"></vSelect>
        <span class="rtl">انتخاب شما : {{village}}</span>
        <input class="input" type="text" name="address" placeholder="آدرس">
        <input class="input" type="text" name="phone" placeholder="تلفن">
        <input class="input" type="text" name="mail" placeholder="پست الکترونیک">
        <input class="input" type="text" name="website" placeholder="وبسایت">
        <input class="input" type="text" name="instagram" placeholder="اینستاگرام">
        <input class="input" type="text" name="about-store" placeholder="درباره فروشگاه">
        <label for="logo-upload" class="custom-file-upload">
            <i class="fas fa-upload"></i> انتخاب لوگو فروشگاه
        </label>
        <input id="logo-upload" type="file"/>
        <input class="submit" type="submit" value="ثبت">
    </form>
</template>
<script>
import vSelect from 'vue-select'
export default {
    data(){
        return{
            states: [
                'تهران',
                'اصفهان',
                'مشهد',
                'گیلان'
            ],
            cities: [
                'تهران',
                'شهریار',
                'اسلامشهر',
            ],
            villages: [
                'تهران',
                'شهریار',
                'اسلامشهر',
            ],
            state:'',
            city:'',
            village:''
        }
    },
    components:{
        vSelect
    }
}
</script>
<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";
@import "@/assets/styles/vars.scss";
    .store-form{
        font-family: $main-font;
        display: flex;
        flex-direction: column;
        direction: rtl;
        padding: 0px 15px;
        .rtl{
            text-align: right;
            direction: rtl;
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
                padding: 10px !important;
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

        input[type="file"] {
            display: none;
        }
        .custom-file-upload {
            display: inline-block;
            cursor: pointer;
            background: #572fbf;
            padding: 10px;
            text-align: center;
            color: #fff;
            width: 80%;
            margin: 0 auto;
            border-radius: 10px;
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