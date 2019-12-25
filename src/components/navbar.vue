<template>
  <nav>
    <div class="backdrop-navbar" @click="fadeMenu"></div>
    <div class="nav-header">
      <span @click="toggleMenu" class="nav-icon"><i class="fas fa-bars"></i></span>
      <span class="nav-title">{{currentRouteName}}</span>
    </div>
    <ul class="main-nav">
      <div class="profile">
        <!-- <img :src="require(`@/assets/images/sliders/${image.src}`)"/> -->
        <span class="profile-img"></span>
        <span class="profile-info">
          صنعت آفرینان دهقانصنعت آفرینان دهقان
        </span>
      </div>
      <li @click="fadeMenu">
        <router-link to="/edit-infos">
          <i class="far fa-edit"></i>
          ویرایش اطلاعات
        </router-link>
      </li>  
      <li @click="fadeMenu">
        <router-link to="/sellers">
          <i class="far fa-user"></i>
          فروشندگان
        </router-link>
      </li>
      <li @click="fadeMenu">
        <router-link to="/products">
          <i class="fas fa-dice-d6"></i>
          محصولات
        </router-link>
      </li> 
      <li @click="fadeMenu">
        <router-link to="/messages">
          <i class="far fa-envelope"></i>
          پیام ها
        </router-link>
      </li> 
      <li>
        <a href="">
          <i class="fas fa-chart-line"></i>
          آمار 
        </a>
      </li>
      <li @click="fadeMenu">
        <router-link to="/gallery">
          <i class="far fa-images"></i>
          گالری فروشگاه 
        </router-link>
      </li>
      <li>
        <a href="">
          <i class="fas fa-chart-line"></i>
          آمار 
        </a>
      </li>
      <li>
        <a href="">
          <i class="fas fa-comments"></i>
          تاریخچه چت
        </a>
      </li>
      <li>
        <a href="">
          <i class="fas fa-mobile-alt"></i>
          تماس با ما
        </a>
      </li>    
    </ul>
  </nav>
</template>
<script>
import $ from "jquery";
export default {
  computed:{
    currentRouteName() {
      switch(this.$route.name) {
        case '':
          return 'صفحه اصلی';
        case 'messages':
          return 'پیام ها';  
        case 'edit-infos':
          return 'ویرایش اطلاعات';  
        case 'gallery':
          return 'گالری فروشگاه';    
        case 'sellers':
          return 'فروشندگان';
        case 'products':
          return 'محصولات';      
      }
      return 'صفحه اصلی'
    }
  },
  methods:{
    toggleMenu(){
      if($(".main-nav").hasClass('slide-in')){
        $(".main-nav").removeClass('slide-in');
        $('.backdrop-navbar').fadeOut()
      }else{
        $(".main-nav").addClass('slide-in');
        $('.backdrop-navbar').fadeIn()
      }
    },
    fadeMenu(){
      $(".main-nav").removeClass('slide-in');
      $('.backdrop-navbar').fadeOut()
    },
  }
}
</script>
<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
//@import 'node_modules/bootstrap-vue/src/index.scss';


@import "@/assets/styles/vars.scss";

nav{
  font-family: $main-font;
  .backdrop-navbar{
    display: none;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 100vh;
    width: 100vw;
    background: black;
    opacity: 0.9;
    z-index: 9;
  }
  .nav-header{
    position: fixed;
    top: 0px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 15px 0px;
    height: $navbarHeight;
    text-align: center;
    background: $navHeaderColor;
    color: #fff;
    border-radius: 10px;
    z-index: 5;
    .nav-title{
      width: 100%;
      text-align: center
    }
    .nav-icon{
      position: absolute;
      display: flex;
      align-items: center;
      // top: 55%;
      // transform: translateY(-50%);
      right: 0px;
      font-size: 25px;
      padding: 10px;
    }
  }
  .main-nav{
    position: fixed;
    top: 0px;
    background: #f4f7f6;
    width: 70%;
    height: 100vh;
    text-align: right;
    list-style: none;
    padding: 0px;
    transform: translateX(100%);
    transition: transform 0.3s ease-in;
    z-index: 999;
    &.slide-in{
      transform: translateX(0%) !important;
    }
    a{
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0.75rem 1rem;
      color: #292e34;
      &:hover{
        text-decoration: none;
      }
      svg{
        margin-left: 10px;
        color: #72767b;
        font-size: 1.5rem;
        width: 25px !important;
      }
    }
    .profile{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      height: 15%;
      width: 100%;
      background: #3e61c3;
      padding: 15px;
      .profile-img{
        width: 60px;
        height: 60px;
        background: red;
        border-radius: 100%;
        margin-left: 15px;
      }
      .profile-info{
        flex-grow: 1;
        width: 50%;
        color: #fff;
      }
    }
  }
}


</style>