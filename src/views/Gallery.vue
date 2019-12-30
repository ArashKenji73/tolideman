<template>
    <div>
    <div class="gallery-wrapper">
        <div v-for="(image , i) in images" :key="i" class="image">
            <EachImage :id=image.id></EachImage>
        </div>
    </div>

    <!-- add image gallery modal button -->
    <span class="add-button" @click="showAddImageModal"><i class="fas fa-plus"></i></span>
    <!-- add image gallery modal -->
    <Modal v-show="isAddImageModalVisible" @close="closeAddImageModal">
        <span slot="header">افزودن تصویر</span>
        <span slot="body">
            <form class="add-image-gallery-form">
                <input id="upload-photo" class="input" type="file" placeholder="نام فروشنده">
                <button class="btn-success btn btn-block" type="submit">افزودن</button>
            </form>
        </span>
        <span slot="footer">
        </span>
    </Modal> 
    </div>
</template>
<script>
import EachImage from '@/components/gallery/image';
import Modal from '@/components/modal';
export default {
    data(){
        return{
            isAddImageModalVisible: false,
            images:[
                {
                    image:'image1',
                    id: 5
                },
                {
                    image:'image2',
                    id: 2
                },  
            ]
        }
    },
    components:{
        EachImage,
        Modal
    },
    methods: {
      showAddImageModal() {
        this.isAddImageModalVisible = true;
      },
      closeAddImageModal() {
        this.isAddImageModalVisible = false;
      },
    }
}
</script>
<style lang="scss">
@import "@/assets/styles/vars.scss";


.add-button{
    background: $navHeaderColor;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 100%;
    box-shadow: 0px 0px 10px grey;
    margin: 1rem;
    svg{
        font-size: 3rem;
        color: #fff;
    }
}
.gallery-wrapper{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 1rem;
    .image{
        width: 100%;
    }
}


.add-image-gallery-form{
    font-family: $main-font;
    display: flex;
    flex-direction: column;
    direction: rtl;
    padding: 1rem;
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
    .gallery-wrapper{
        flex-direction: row;
        padding: 1rem;
        .image{
            width: 30%;
            margin: 1%;
        }
    }
}  
</style>