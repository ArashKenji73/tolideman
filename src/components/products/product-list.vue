<template>
    <div>
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
                <button @click="showDeleteModal" class="btn btn-danger">حذف کردن</button>
                <button @click="showEditModal" class="btn btn-success">ویرایش</button>
            </div>
            
        </div>
        <Modal v-show="isEditModalVisible" @close="closeEditModal">
            <span slot="header">ویرایش محصول</span>
            <span slot="body">
                <form class="add-product-form">
                    <div class="product-img" @click="openNewProdrImg">
                        <input type="file" name="product-img" id="product-img-upload" style="display:none"/> 
                    </div>
                    <input class="input" type="text" v-model="name" placeholder="نام محصول">
                    <label class="switch ">
                        وضعیت فعال : 
                        <input type="checkbox" class="default" checked v-model="status">
                        <span class="slider round"></span>
                    </label>

                    <label class="switch ">
                        محصول برتر : 
                        <input type="checkbox" class="default" checked v-model="status">
                        <span class="slider round"></span>
                    </label>
                    <vSelect v-model="type" class="input" :reduce="name => name.id" :options="options" label="name" placeholder='نوع محصول' dir="rtl">
                    </vSelect>
                    <input class="input" type="text" placeholder="قیمت">
                    <input class="input" type="text" placeholder="تخفیف">
                    <input class="input" type="textarea" placeholder="توضیحات">
                    {{type}}
                    <button class="btn-success" type="submit">افزودن</button>
                </form>
            </span>
            <span slot="footer">
            </span>
        </Modal> 

        <Modal v-show="isDeleteModalVisible" @close="closeDeleteModal">
            <span slot="header">Delete</span>
            <span slot="body">
                Delete {{name}}
            </span>
            <span slot="footer">
            </span>
        </Modal> 
    </div>    
</template>
<script>
import $ from "jquery";
import Modal from '@/components/modal';
import vSelect from 'vue-select';
// import editp from '@/components/products/edit-product';
export default {
    data(){
        return{
            isEditModalVisible: false,
            isDeleteModalVisible: false,
            options : [
                {id: '1', name: 'بادام'},
                {id: '2', name: 'انار'},
                {id: '3', name: 'بادام زمینی'},
                {id: '4', name: 'انگور'},
                {id: '5', name: 'درخت'},
                {id: '6', name: 'بادمجان'},
            ],
        }    
    },
    props:['name' , 'price' , 'id', 'type'],
    components:{
        Modal,
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
      openNewProdrImg(){
          $('#seller-img-upload').trigger('click');
      }
    },
}
</script>
<style lang="scss">
@import "@/assets/styles/vars.scss";
.product{
    font-family: $main-font;
    width: 100%;
    height: 200px;
    background: #17202A;
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
}
</style>