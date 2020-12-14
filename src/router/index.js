import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:"/login"
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
    meta:{
      isShow:false,
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/user/user.vue'),
    redirect:"/user/home",
    meta:{
      isShow:true,
    },
    children:[
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/user/home.vue'),
        meta:{
          isShow:true,
        }
      },{
        path: 'photo',
        name: 'photo',
        component: () => import('../views/user/photo.vue'),
        meta:{
          isShow:true,
        }
      },{
        path: 'list',
        name: 'list',
        component: () => import('../views/user/list.vue'),
        meta:{
          isShow:true,
        }
      },
    ]
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/shop/user.vue'),
    redirect:"/shop/list",
    meta:{
      isShow:true,
    },
    children:[
      {
        path: 'list',
        name: 'list',
        component: () => import('../views/shop/list.vue'),
        meta:{
          isShow:true,
        }
      },{
        path: 'cate',
        name: 'cate',
        component: () => import('../views/shop/cate.vue'),
        meta:{
          isShow:true,
        }
      },{
        path: 'good',
        name: 'good',
        component: () => import('../views/shop/good.vue'),
        meta:{
          isShow:true,
        }
      },
    ]
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order/user.vue'),
    redirect:"/order/order",
    meta:{
      isShow:true,
    },
    children:[
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/order/order.vue'),
        meta:{
          isShow:true,
        }
      }
    ]
  },
  {
    path: '/member',
    name: 'member',
    component: () => import('../views/member/user.vue'),
    redirect:"/member/member",
    meta:{
      isShow:true,
    },
    children:[
      {
        path: 'member',
        name: 'member',
        component: () => import('../views/member/member.vue'),
        meta:{
          isShow:true,
        }
      }
    ]
  },
  {
    path: '/set',
    name: 'set',
    component: () => import('../views/set/user.vue'),
    redirect:"/set/set",
    meta:{
      isShow:true,
    },
    children:[
      {
        path: 'set',
        name: 'set',
        component: () => import('../views/set/set.vue'),
        meta:{
          isShow:true,
        }
      }
    ]
  },
]

const router = new VueRouter({
  routes
});

router.beforeEach((to,from,next) => {
  console.log(to.path);
  if(localStorage.getItem("token")){
    next();
  }else{
    if(to.path == "/login"){
      next();
    }else{
      next("/login");
    }
  }
});

export default router
