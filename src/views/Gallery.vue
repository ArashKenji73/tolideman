<template>
    <div>
        <div v-for="(image , i) in images" :key="i">
            <EachImage :id=i></EachImage>
        </div>
    </div>
</template>
<script>
import EachImage from '@/components/gallery/image'
export default {
    data(){
        return{
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
        EachImage
    }
}
</script>
<style lang="scss">

</style>