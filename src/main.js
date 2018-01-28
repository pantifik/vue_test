import Vue from 'vue'
import App from './App.vue'

import GetData from './components/GetData'
import ShowData from './components/ShowData'

Vue.component('GetData', GetData);
Vue.component('ShowData', ShowData);

new Vue({
  el: '#app',
  render: h => h(App)
})
