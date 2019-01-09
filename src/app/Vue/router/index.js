import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/auth/Login.vue'
import Home from '../pages/Home.vue'
import NotFound from '../pages/errors/Notfound.vue'
import Logout from '../pages/auth/Logout.vue'
import store from '../store/store'
import Item from '../pages/dynamic/Item.vue'
import RaselloPortlet from '../pages/dynamic/index.vue'
import PostList from '../pages/dynamic/post/list.vue'
import PostCreate from '../pages/dynamic/post/create.vue'
import UserList from '../pages/dynamic/user/list.vue'
import UserCreate from '../pages/dynamic/user/create.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: 'items',
          alias: '',
          component: Item,
          name: 'Dashboarditem',
          meta: {
            requiresAuth: 'true',
            description: 'Item of Dashboard' }
        },
        {
          path: 'post',
          component: RaselloPortlet,
          meta: {
            requiresAuth: 'true',
            description: 'Item of dash'
          },
          children: [
            {
              path: '',
              component: PostList,
              name: 'PostList',
              meta: {
                requiresAuth: 'true',
                description: 'List fo the Post for Test'
              }
            },
            {
              path: 'list',
              component: PostList,
              name: 'PostList',
              meta: {
                requiresAuth: 'true',
                description: 'Index page of post'
              }
            },
            {
              path: 'create',
              component: PostCreate,
              name: 'PostCreate',
              meta: {
                requiresAuth: 'true',
                description: 'Item Create Post'
              }
            }
          ]
        },
        {
          path: 'users',
          component: RaselloPortlet,
          meta: {
            requiresAuth: 'true',
            description: 'List of the users of the system'
          },
          children: [
            {
              path: '',
              component: UserList,
              name: 'UserList'
            },
            {
              path: '/',
              component: UserList,
              name: 'UserList'
            },
            {
              path: 'list',
              component: UserList,
              name: 'UserList',
              meta: {
                requiresAuth: 'true',
                description: 'Portlet To List a user'
              }
            },
            {
              path: 'create',
              component: UserCreate,
              name: 'UserCreate',
              meta: {
                requiresAuth: 'true',
                description: 'Portlet To Create a user'
              }
            }
          ]

        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/test',
      name: 'Test',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      name: 'NoFound',
      component: NotFound
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.matched.some(m => m.meta.requiresAuth)) {
    store.dispatch('checkUserToken').then(response => {
      if (response) {
        return next()
      } else {
        return next({ path: '/login' })
      }
    }).catch(error => {
      window.console.log(error)
      return next({ path: '/login' })
    })
    if (!store.state.auth.isAuthenticated) {
      window.console.log('the user is not authenticated')
      return next({ path: '/login' })
    }
    window.console.log('this is below return ')
    // return next()
  }

  if (to.matched.some(m => m.meta.requiresGuest)) {
    store.dispatch('checkUserToken').then(response => {
      if (response) {
        return next({ path: '/' })
      }
      return next()
    }).catch(error => {
      window.console.log(error)
      return next()
    })
  }
  return next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
