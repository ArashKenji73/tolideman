<template>
  <div class="home">
    <router-link to="/messages">
      <mainBlock data-aos-delay="50" data-aos="fade-left" text="پیام ها" iconClassName="far fa-envelope" color="#F1C40F"></mainBlock>
    </router-link>
    <router-link to="/edit-infos">
      <mainBlock data-aos-delay="100" data-aos="fade-left" text="ویرایش اطلاعات" iconClassName="far fa-edit" color="#2E86C1"></mainBlock>
    </router-link>
    <router-link to="/gallery">
      <mainBlock data-aos-delay="150" data-aos="fade-left" text="گالری فروشگاه" iconClassName="far fa-images" color="#922B21"></mainBlock>
    </router-link>
    <router-link to="/sellers">
      <mainBlock data-aos-delay="200" data-aos="fade-left" text="فروشندگان" iconClassName="far fa-user" color="#229954"></mainBlock>
    </router-link>
    <router-link to="/products">
      <mainBlock data-aos-delay="250" data-aos="fade-left" text="محصولات" iconClassName="fas fa-dice-d6" color="#5B2C6F"></mainBlock>
    </router-link>
    <router-link to="/a">
      <mainBlock data-aos-delay="300" data-aos="fade-left" text="تاریخچه چت" iconClassName="fas fa-comments" color="#BA4A00"></mainBlock>
    </router-link>
    <router-link to="/c">
      <mainBlock data-aos-delay="350" data-aos="fade-left" text="آمار" iconClassName="fas fa-chart-line" color="#2C3E50"></mainBlock>
    </router-link>
    <!-- <router-link to="/d" data-aos-delay="400" data-aos="fade-left">
      <mainBlock text="تماس با ما" iconClassName="fas fa-mobile-alt" color="#566573"></mainBlock>
    </router-link> -->
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
  a{
    display: block;
  }
}
</style>