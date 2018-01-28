<template>
  <div class="app">
    <getData></getData>
    <showData :sum="sum" :stats="stats"></showData>
  </div>
</template>

<script>
  import Libs from './libs'

  export default {
    name: 'app',
    data () {
      return {
        testData: testData,
        stats: Libs.getStats(testData),
        sum: Libs.getStatsSum(testData)
      }
    }
  }

let testData =[{
    registration: 30,
    link_visitor: 20,
    payment: 25000001,
    date: '2017-06-07',
  },{
    registration: 30,
    link_visitor: 20,
    payment: 2503001,
    date: '2017-06-07'
  },{
    registration: 30,
    link_visitor: 20,
    payment: 25000001,
    date: '2017-06-08'
  },{
    registration: 30,
    link_visitor: 20,
    payment: 25000001,
    date: '2017-06-09'
  },
  ];



</script>

<style lang="scss">
</style>
