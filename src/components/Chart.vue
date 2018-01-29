<template>
  <div class="chartCont">
    <lineChart :chartLabels="chartLabels" :chartLines="chartLines"></lineChart>
  </div>


</template>
<script>
  import LineChart from '../libs/LineChart'

  export default {
    name: 'chart',
    props: ['stats'],

    computed: {
      chartLabels() {
        return this.stats.map(function(item){
          return new Date(item.date).getDate()
        });
      },
      chartLines() {
        let lines = {};

        lines.registration = this.stats.map(function(item){
          return item.registration || 0
        });

        lines.payment = this.stats.map(function(item){
          return item.payment || 0
        });

        lines.visitor = this.stats.map(function(item){
          return item.link_visitor || 0
        });

        return lines;
      }

    },
    components: {
      'LineChart': LineChart,
    }
  }

  let data= [60, 55, 32];
</script>
<style scoped>
</style>
