import Vue from 'vue'
import App from './App.vue'

import VCalendar from 'v-calendar';
import 'v-calendar/lib/v-calendar.min.css';
Vue.use(VCalendar);

new Vue({
  el: '#app',
  render: h => h(App)
})
