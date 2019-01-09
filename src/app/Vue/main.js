// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router/index'
import { registerSharedComponents } from './components/index'
import store from './store/store'
import vClickOutside from 'v-click-outside'
import VueProgressBar from 'vue-progressbar'
import Toastr from 'vue-toastr'
import 'vue-toastr/src/vue-toastr.scss'
import VTooltip from 'v-tooltip'
import VeeValidate from 'vee-validate'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

const progressbarOptions = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}
Vue.config.productionTip = false
registerSharedComponents()
Vue.use(Vuex)
Vue.use(vClickOutside)
Vue.use(VueProgressBar, progressbarOptions)
Vue.use(Toastr)
Vue.use(VTooltip)
Vue.use(VeeValidate, { fieldsBagName: 'formFields' })
Vue.use(flatPickr)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
