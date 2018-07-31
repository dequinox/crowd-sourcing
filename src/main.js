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
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

Raven
    .config('https://84c333be41e04bff946f956f95e0dbf0@sentry.io/1253264')
    .addPlugin(RavenVue, Vue)
    .install();

Vue.use(VueResource);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB1nKNWOdILQQ-mDAJyQY_5CcEwjcuarXE',
  },
})

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


Vue.filter('translate', translate)

Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  gmapApi: VueGoogleMaps,
  template: '<App/>',
  components: { App },
})
