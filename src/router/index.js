import Vue from "vue";
import VueRouter from "vue-router";

import Home from '@/views/Home';
import Messages from '@/views/Messages';
import EditInfos from '@/views/Edit-info';
import Gallery from '@/views/Gallery';
import Sellers from '@/views/Sellers';
import Products from '@/views/Products';
import ChatsHistory from '@/views/Chat-history';
import Statistics from '@/views/Statistics';
import AboutUs from '@/views/About-us';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },

  {
    path: "/messages",
    name: "messages",
    component: Messages
  },

  {
    path: "/edit-infos",
    name: "edit-infos",
    component: EditInfos
  },

  {
    path: "/gallery",
    name: "gallery",
    component: Gallery
  },
  {
    path: "/sellers",
    name: "sellers",
    component: Sellers
  },
  {
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    path: "/chats-history",
    name: "chats-history",
    component: ChatsHistory,
  },
  {
    path: "/statistics",
    name: "statistics",
    component: Statistics,
  },
  {
    path: "/about-us",
    name: "about-us",
    component: AboutUs,
  },
  
  

];
const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
