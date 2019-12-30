<template>
  <div class="home">
    <router-link to="/messages" class='main-block-link'>
      <mainBlock data-aos-delay="50" data-aos="fade-left" text="پیام ها" iconClassName="far fa-envelope" color="#F1C40F"></mainBlock>
    </router-link>
    <router-link to="/edit-infos" class='main-block-link'>
      <mainBlock data-aos-delay="100" data-aos="fade-left" text="ویرایش اطلاعات" iconClassName="far fa-edit" color="#2E86C1"></mainBlock>
    </router-link>
    <router-link to="/gallery" class='main-block-link'>
      <mainBlock data-aos-delay="150" data-aos="fade-left" text="گالری فروشگاه" iconClassName="far fa-images" color="#922B21"></mainBlock>
    </router-link>
    <router-link to="/sellers" class='main-block-link'>
      <mainBlock data-aos-delay="200" data-aos="fade-left" text="فروشندگان" iconClassName="far fa-user" color="#229954"></mainBlock>
    </router-link>
    <router-link to="/products" class='main-block-link'>
      <mainBlock data-aos-delay="250" data-aos="fade-left" text="محصولات" iconClassName="fas fa-dice-d6" color="#5B2C6F"></mainBlock>
    </router-link>
    <router-link to="/chats-history" class='main-block-link'>
      <mainBlock data-aos-delay="300" data-aos="fade-left" text="تاریخچه چت" iconClassName="fas fa-comments" color="#BA4A00"></mainBlock>
    </router-link>
    <router-link to="/statistics" class='main-block-link'>
      <mainBlock data-aos-delay="350" data-aos="fade-left" text="آمار" iconClassName="fas fa-chart-line" color="#2C3E50"></mainBlock>
    </router-link>
    <router-link to="/d" class='main-block-link'>
      <mainBlock data-aos-delay="400" data-aos="fade-left" text="تماس با ما" iconClassName="fas fa-mobile-alt" color="#566573"></mainBlock>
    </router-link>
  </div>
</template>
<script>
import mainBlock from '@/components/main-block';
export default {
  components:{
    mainBlock,
  }
}
</script>
<style lang="scss">
.home{
  padding: 1px 15px;
  height: 120vh;
  a{
    display: block;
    &:hover{
      .main-page-block{
        transition: all 0.3s linear;
      }
      text-decoration: none;
      .main-page-block{
        background:#e6e6e6;
      }
    }
  }  
}


@media only screen and (min-width: 577px) {
    .home{
      display: flex;
      flex-wrap: wrap;
      height: 80vh;
    }
}
</style>