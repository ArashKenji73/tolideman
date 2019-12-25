<template>
    <div data-aos="fade-down" class="product-wrapper">
        <Seller></Seller>
        <Modal v-show="isModalVisible" @close="closeModal">
            <span slot="header">افزودن فروشنده</span>
            <span slot="body">
                <form class="add-product-form">
                    <div class="product-img" @click="openNewProdrImg">
                        <input type="file" name="seller-img" id="seller-img-upload" style="display:none"/> 
                    </div>
                    <input class="input" type="text" placeholder="نام فروشنده">
                    <input class="input" type="text" placeholder="نام خانوادگی">
                    <vSelect v-model="sex" class="input" :reduce="name => name.id" :options="options" label="name" placeholder='جنسیت' dir="rtl">
                    </vSelect>
                    <input class="input" type="tel" placeholder="شماره همراه">
                    <input class="input" type="number" placeholder="کد ملی">
                    <button class="btn-success" type="submit">افزودن</button>
                </form>
            </span>
            <span slot="footer">
                {{sex}}
            </span>
        </Modal> 
        <span class="add-product" @click="showModal"><i class="fas fa-plus"></i></span>
    </div>    
</template>
<script>
import $ from "jquery";
import Seller from '@/components/sellers/seller';
import Modal from '@/components/modal';
import vSelect from 'vue-select';
// import editp from '@/components/products/edit-product';
export default {
    data(){
        return{
            isModalVisible: false,
            sex:'',
            products:[
                {
                    id:1,
                    sex : 'image1',
                    name : 'prod 1',
                    price : '۱۰۰۰'
                },
                {
                    id:2,
                    image : 'image2',
                    name : 'prod 2',
                    price : '۱۰۰۰'
                },
                {
                    id:3,
                    image : 'image4',
                    name : 'prod 3',
                    price : '۱۰۰۰'
                },
                {
                    id:4,
                    image : 'image3',
                    name : 'prod 4',
                    price : '۱۰۰۰'
                },
            ],
            options : [
                {id: '1', name: 'مرد'},
                {id: '2', name: 'زن'},
            ],
        }
    },
    components:{
        Seller,
        Modal,
        vSelect,
        // editp
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      openNewProdrImg(){
          $('#seller-img-upload').trigger('click');
      }
    },
}
</script>
<style lang="scss">
@import "@/assets/styles/vars.scss";
    .product-wrapper{
        text-align: right;
        padding: 10px 15px;
        .add-product{
            background: $warningBG;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 70px;
            height: 70px;
            border-radius: 100%;
            box-shadow: 0px 0px 10px grey;
            svg{
                font-size: 3rem;
                color: #fff;
            }
        }
    }
    .add-product-form{
        display: flex;
        flex-direction: column;

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
        .product-img{
            width: 100px;
            height: 100px;
            border-radius: 100%;
            background: #ddd;
            margin: 0 auto;
            margin-bottom: 1rem;
        }
        .btn-success{
            border:0px;
            padding: 10px;
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

        /* The switch - the box around the slider */
        .switch {
            position: relative;
            display: flex;
            height: 25px;
            margin: 15px;
            justify-content: space-between;
            input {
                display: none;
            }
            /* The slider */
            .slider {
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