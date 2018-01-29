<template>
  <div class="showData">
    <p>showData</p>

    <div class="container">
      <sumTable class="sumTable"
                :data="sum"
                v-if="state"
      ></sumTable>
      <chart class="chart"
             :stats="statsForChart"
             v-if="state"
      ></chart>
      <p v-else>Введите ID пользователя</p>
    </div>

  </div>
</template>

<script>

  import sumTable from './SumTable'
  import Chart from './Chart'

  export default {
    name: "show-data",
    props: ['stats'],
    data() {
      return {
        state: true}
    },
    computed: {
      sum(){
        let sum = {};

        for (let i in this.stats) {
          for (let key in this.stats[i])
            if (!sum[key]) {
              sum[key] = this.stats[i][key];
            }
            else{
              sum[key] += this.stats[i][key]
          }
        }

        return sum;
      },
      statsForChart(){
        let result = [],
            temp;

        for (let key in this.stats) {
          temp = this.stats[key];
          temp.date = +key;
          result.push(temp)
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
<style scoped lang="sass">
  .showData
    padding: 0 10px
    background-color: #D2D7B7


  .container
    display: flex;
    align-items: center


  .sumTable
    flex: 1 1 30%;
    margin-right: 10px


  .chart
    flex: 1 1 auto

</style>
