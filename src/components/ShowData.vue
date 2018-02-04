<template>
  <div class="showData">
    <div class="container">
      <sumTable class="sumTable"
                :data="sum"
      ></sumTable>
      <chart class="chart"
             :stats="statsForChart"
      ></chart>
    </div>

  </div>
</template>

<script>

  import sumTable from './SumTable'
  import Chart from './Chart'

  export default {
    name: "show-data",
    props: ['stats', 'selectedDate'],
    computed: {
      sum(){
        let sum = {};

        for (let i in this.stats) {
          if(i >= this.selectedDate.start && i <= this.selectedDate.end){
            for (let key in this.stats[i]){
              if (!sum[key]) {
                sum[key] = this.stats[i][key];
              }
              else{
                sum[key] += this.stats[i][key]
              }
            }
          }
        }
        return sum;
      },
      statsForChart(){
        let result = [],
            temp;

        for (let key in this.stats) {

          if(key >= this.selectedDate.start && key <= this.selectedDate.end){
            temp = this.stats[key];
            temp.date = +key;
            result.push(temp)
          }
        }

        return result.sort(function(a, b){
          return a.date > b.date ? 1 : -1
        });
      }
    },
    components: {
      'SumTable': sumTable,
      'Chart': Chart
    }
  }
</script>
<style scoped lang="scss">
  .showData{
    padding: 0 10px;
    background-color: #D2D7B7;
}

  .container{
    display: flex;
    align-items: center;
}

  .sumTable{
    flex: 1 1 30%;
    margin-right: 10px;
}

  .chart{
    flex: 1 1 auto
}
</style>
