import Vue from 'vue'
import App from './App.vue'

import VCalendar from 'v-calendar';
import 'v-calendar/lib/v-calendar.min.css';

import GetData from './components/GetData'
import ShowData from './components/ShowData'

Vue.component('GetData', GetData);
Vue.component('ShowData', ShowData);
Vue.use(VCalendar);

new Vue({
  el: '#app',
  render: h => h(App)
})
