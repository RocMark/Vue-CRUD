import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Create from './views/Create.vue'
import Edit from './views/Edit.vue'
import Email from './views/Email.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // ! 查一下用法
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/create',
      name: 'create',
      component: Create,
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit,
      // 看一下 怎麼接參數
      props: {
        id: true,
      },
    },
    {
      path: '/email',
      name: 'email',
      component: Email,
    },
    {
      path: '*',
      redirect: '/',
    }
  ],
})
