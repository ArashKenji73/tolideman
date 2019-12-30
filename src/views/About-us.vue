<template>
    <div class="info-wrapper">
        <div class="info">
            <span><i class="fas fa-comment"></i></span>
            <span>نوشته پیشفرض</span>
        </div>
        <div class="info">
            <span><i class="fas fa-phone"></i></span>
            <span><a href="tel:+9821227793415">۰۲۱۲۲۷۷۹۳۴۱۵</a></span>
        </div>
        <div class="info">
            <span><i class="fas fa-envelope"></i></span>
            <span><a href="mailto:info@tolideman.ir?Subject= ">info@tolideman.ir</a></span>
        </div>



        <button class="btn-block contact-us" @click="showModal">تماس با ما</button>

        <Modal v-show="isModalVisible" @close="closeModal">
            <span slot="header">تماس با ما</span>
            <span slot="body">
                <form class="contact-us-form">
                    <input class="input" type="text" placeholder="نام">
                    <input class="input" type="email" placeholder="ایمیل">
                    <input class="input" type="text" placeholder="پیام شما">
                    <button class="btn-success btn" type="submit">فرستادن</button>
                </form>
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
}
</script>
<style lang="scss">
@import "@/assets/styles/vars.scss";
.info-wrapper{
    padding: 1rem;
}
.info{
    font-family: $main-font;
    border-radius: 10px;
    box-shadow: 0px 0px 10px grey;
    height: 50px;
    margin: 1rem 0px;
    display: flex;
    // justify-content: space-between;
    background: $lightWhiteBG;
    align-items: center;
    padding: 15px;
    a{
        color: black;
        text-decoration: none;
    }
    svg{
        display: flex;
        justify-content: center;
        align-items: center;
        color: $navHeaderColor;
        margin-left: 10px;
        font-size: 1.2rem;
    }
}
.contact-us{
    font-family: $main-font;
    color: #fff;
    background: $navHeaderColor;
    border: 0px;
    border-radius: 10px;
    padding: 0.375rem 0.75rem;
}

.contact-us-form{
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
}


@media only screen and (min-width: 577px) {
    .info-wrapper{
        padding: 1rem 30%;
    }
}    
</style>