// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App'
import store from '@/store/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import {translate} from '@/translate'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB1nKNWOdILQQ-mDAJyQY_5CcEwjcuarXE',
  },
})

Vue.http.options.xhr = {withCredentials: true};
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;
Vue.http.options.crossOrigin = true;

Vue.http.headers.common['Access-Control-Allow-Origin'] = true,
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'

Vue.http.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.http.headers.common['Accept'] = 'application/json, text/plain, */*';
Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin';


Vue.filter('translate', translate)

Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  gmapApi: VueGoogleMaps,
  template: '<App/>',
  components: { App }
})
