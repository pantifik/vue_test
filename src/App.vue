<template>
  <div class="app wrapper">
    <getData @Ready="start" @changeDate="changeDate"></getData>
    <showData v-if="state == 'ready'" :stats="stats" :selectedDate="selectedDate"></showData>
    <p v-else>Введите ID пользователя</p>
  </div>


</template>

<script>
  import Libs from './libs/libs'
  import GetData from './components/GetData'
  import ShowData from './components/ShowData'

  export default {
    name: 'app',
    data () {
      return {
        stats: Object,
        state: String,
        selectedDate: Object
      }
    },
    methods: {
      start(data, dateObj) {
        this.selectedDate = dateObj;
        this.stats = Libs.getStats(JSON.parse(data), 'event', 'event_value');
        if(Object.keys(this.stats).length == 0){
          return this.state = 'notFound';
        }
        this.state = 'ready';
      },
      changeDate(dateObj) {
        this.selectedDate = dateObj
      }
    },
    components: {
      getData: GetData,
      showData: ShowData
    }
  }

</script>

<style lang="scss" scoped>
  .wrapper{
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
