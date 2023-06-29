import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {path: '/products',
    name: 'products',
    component:() => import('../views/ProductsView.vue')
  },

  {path: '/products/:id',
    name: 'product',
    component:() => import( '../views/ProductsView.vue'),
    props: true,
  },

  
  {path: '/contact-form',
    name: 'contact-form',
    component:() => import('../components/ContactForm.vue')
  },

  {path: '/admin',
  name: 'admin',
  component:() => import('../components/AdminComp.vue')
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
