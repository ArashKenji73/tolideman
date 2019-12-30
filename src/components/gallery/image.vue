<template>
    <div class="image-box">
        <img src="https://via.placeholder.com/1000/FFFF00">
        <div class="option" >
            <button @click="showModal">حذف تصویر</button>
        </div>


        <Modal v-show="isModalVisible" @close="closeModal">
            <span slot="header">آیا مایل به پاک کردن این عکس هستید</span>
            <span slot="body">
                {{id}}
                <form class="delete-image-form">
                    <button class="btn btn-danger" type="submit">پاک کردن</button>
                    <button class="btn btn-info">انصراف</button>
                </form>
            </span>
            <span slot="footer"> 

            </span>
        </Modal> 
    </div>
</template>
<script>
import Modal from '@/components/modal';
export default {
    components:{
        Modal
    },
    data () {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
    props:['id']
}
</script>
<style lang="scss">
@import "@/assets/styles/vars.scss";
.image-box{
    font-family: $main-font;
    position: relative;
    height: 200px;
    margin: 1rem 0px;
    img{
        position: absolute;
        top: 0px;
        right: 0px;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
    .option{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 30%;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background: rgba($color: #000000, $alpha: 0.5);
        border-radius: 0px 0px 10px 10px;
        button{
            padding: 10px;
            border: 0px;
            border-radius: 10px;
            color: #fff;
            background: $errorBg;
        }
    }
}


.delete-image-form{
    display: flex;
    button{
        flex-grow: 1;
    }
}
</style>