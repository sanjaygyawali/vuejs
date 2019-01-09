import Vue from 'vue'
import Header from './layout/Header'
import Sidebar from './layout/Sidebar'
import Content from './layout/Content'
import Footer from './layout/Footer'
import FirstMenu from './layout/menu/Firstmenu.vue'
import SecondMenu from './layout/menu/Secondmenu.vue'
import BaseMenu from './layout/menu/Basemenu.vue'
import PageBar from './layout/menu/PageBar.vue'
import PageTitle from './layout/Pagetitle.vue'
// May not be required
import Portlet from './Portlet.vue'
import vSelect from 'vue-select'

export function registerSharedComponents () {
  Vue.component('page-header', Header)
  Vue.component('page-sidebar', Sidebar)
  Vue.component('page-content', Content)
  Vue.component('page-footer', Footer)
  Vue.component('first-menu', FirstMenu)
  Vue.component('second-menu', SecondMenu)
  Vue.component('base-menu', BaseMenu)
  Vue.component('page-bar', PageBar)
  Vue.component('page-title', PageTitle)
  Vue.component('portlet-main', Portlet)
  Vue.component('v-select', vSelect)
}
