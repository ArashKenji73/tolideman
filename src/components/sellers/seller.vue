<template>
    <div class="seller" data-aos="fade-down">
        <div class="header">
            <div class="seller-profile-img"></div>
            <div class="seller-info">
                <span class="seller-name">
                    {{name}} {{family}}
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
            <button @click="showDeleteModal" class="btn btn-danger">حذف کردن</button>
            <button @click="showEditModal" class="btn btn-success">ویرایش</button>
        </div>


        <!-- Edit Seller Modal -->
        <EditSellerModal v-show="isEditModalVisible" @close="closeEditModal">
            <span slot="header">ویرایش فروشنده</span>
            <span slot="body">
                <form class="add-seller-form">
                    <div class="seller-img" @click="openNewSellerrImg">
                        <input type="file" name="seller-img" id="edit-seller-img-upload" style="display:none"/> 
                    </div>
                    <input class="input" type="text" v-model="name" placeholder="نام فروشنده">
                    <input class="input" v-model="family" type="text" placeholder="نام خانوادگی">
                    <vSelect v-model="sex" class="input" :reduce="name => name.id" :options="options" label="name" placeholder='جنسیت' dir="rtl">
                    </vSelect>
                    <input v-model="phone" class="input" type="tel" placeholder="شماره همراه">
                    <input v-model="nationalcode" class="input" type="number" placeholder="کد ملی">
                    <button class="btn-success" type="submit">افزودن</button>
                </form>
            </span>
        </EditSellerModal>

        <!-- Delete seller modal -->
        <DeleteSellerModal v-show="isDeleteModalVisible" @close="closeDeleteModal">
            <span slot="header">فروشنده {{name}} {{family}} پاک شود؟</span>
            <span slot="body">
                <form class="add-seller-form">
                    <button class="btn btn-danger" type="submit">پاک کردن</button>
                </form>
            </span>
        </DeleteSellerModal>  
    </div>
</template>
<script>
import $ from "jquery";
import EditSellerModal from '@/components/modal';
import DeleteSellerModal from '@/components/modal';
import vSelect from 'vue-select';
export default {
    data(){
        return{
            isEditModalVisible: false,
            isDeleteModalVisible: false,

            options : [
                {id: '1', name: 'مرد'},
                {id: '2', name: 'زن'},
            ],
        }
    },
    props:['name' , 'family' , 'phone', 'nationalcode' , 'sex' , 'status'],
    components:{
        EditSellerModal,
        DeleteSellerModal,
        vSelect,
    },
    methods: {
      showEditModal() {
        this.isEditModalVisible = true;
      },
      closeEditModal() {
        this.isEditModalVisible = false;
      },

      showDeleteModal() {
        this.isDeleteModalVisible = true;
      },
      closeDeleteModal() {
        this.isDeleteModalVisible = false;
      },


      openNewSellerrImg(){
        $('#edit-seller-img-upload').trigger('click');
      }
    },
}
</script>
<style lang="scss">
@import "@/assets/styles/vars.scss";
.seller{
    font-family: $main-font;
    display: flex;
    flex-direction: column;
    width: 100%;
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
            background: #d1d1d1;
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
        button{
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