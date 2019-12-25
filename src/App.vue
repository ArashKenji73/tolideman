<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/navbar';


import AOS from 'aos';
import 'aos/dist/aos.css';


export default {
  components:{
    Navbar,
  },
  created(){
    AOS.init();
  }
}
</script>
<style lang="scss">
@import "@/assets/styles/vars.scss";

body{
  direction: rtl;
  overflow-x: hidden;
  background: #d1d1d1;
  margin-top: $navbarHeight+10px;
}

</style>
