<template>
    <div class="seller" data-aos="fade-down">
        <div class="header">
            <div class="seller-profile-img"></div>
            <div class="seller-info">
                <span class="seller-name">
                    دهقان
                </span>
                <span v-if="status" class="tag active">
                    فعال
                </span>
                <span v-else class="tag deactive">
                    غیر فعال
                </span>

                <label class="switch ">
                    وضعیت : 
                    <input type="checkbox" class="default" checked v-model="status">
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
        <div class="footer">
            <a href="" class="btn-danger">حذف کردن</a>
            <a href="" class="btn-success">ویرایش</a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            status: true
        }
    }
}
</script>
<style lang="scss">
@import "@/assets/styles/vars.scss";
.seller{
    font-family: $main-font;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 200px;
    margin: 1rem auto;
    border-radius: 10px;
    box-shadow: 0px 0px 10px grey;
    background: $lightWhiteBG;
    .header{
        flex-grow: 1;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0px 15px;
        .seller-profile-img{
            width: 70px;
            height: 70px;
            border-radius: 100%;
            background: red;
        }
        .seller-info{
            
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            height: 100%;
            text-align: right;
            direction: rtl;
            padding: 0px 15px;
            justify-content: center;
            .seller-name,.tag,.switch{
                margin: 10px 0px;
            }
            .tag{
                padding: 5px;
                max-width: 75px;
                text-align: center;
                color: #fff;
                border-radius: 50px;
                &.active{
                    background: $successBG;
                }
                &.deactive{
                    background: $errorBg;
                }
            }
            .seller-name{
                font-size: 1rem;
            }
        }
    }
    .footer{
        height: 30%;
        width: 100%;
        padding: 10px;
        display: flex;
        align-items: center;
        a{
            flex-grow: 1;
            text-align: center;
            padding: 5px;
        }
    }

    /* The switch - the box around the slider */
    .switch {
        position: relative;
        display: inline-block;
        height: 25px;
        float: right;
        margin: 0px;
        input {
            display: none;
        }
        /* The slider */
        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 50px;
            right: 65px;
            background-color: #ccc;
            -webkit-transition: .4s;
            transition: .4s;

            &:before {
                position: absolute;
                content: "";
                height: 17px;
                width: 17px;
                left: 4px;
                bottom: 4px;
                background-color: white;
                -webkit-transition: .4s;
                transition: .4s;
            }
        }

        input {
            &.default:checked + .slider {
                background-color: $successBG;

            }

            &:focus + .slider {
                box-shadow: 0 0 1px #2196F3;
            }

            &:checked + .slider:before {
                -webkit-transform: translateX(26px);
                -ms-transform: translateX(26px);
                transform: translateX(26px);
            }
        }

        /* Rounded sliders */
        .slider.round {
            border-radius: 34px;

            &:before {
                border-radius: 50%;
            }
        }
    }
}
</style>