import Vue from "vue";
import VueRouter from "vue-router";

import Home from '@/views/Home';
import Messages from '@/views/Messages';
import EditInfos from '@/views/Edit-info';
import Gallery from '@/views/Gallery';
import Sellers from '@/views/Sellers';

import Products from '@/views/Products';
import EditProducts from '@/components/products/edit-product';

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
    children: [
      {
          path: "edit",
          name: "edit",
          component: EditProducts
      }
    ]    
  },

  // {
  //   path: "/products/edit",
  //   name: "edit-products",
  //   component: EditProducts,
  // },

];
const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
