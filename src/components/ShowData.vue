<template>
  <div class="showData">
    <p>showData</p>

    <div v-if="sum" > <!--todo-->
      <sumTable :data="sum"></sumTable>
      <chart :stats="stats"></chart>
    </div >

    <div v-else>
      <p>Введите ID пользователя</p>
    </div>

  </div>
</template>

<script>

  import Summary from './Summary'
  import Chart from './Chart'

  export default {
    name: "show-data",
    props: ['sum', 'stats'],
    components: {
      'SumTable': Summary,
      'Chart': Chart
    }

  }
</script>
<style scoped>
  .showData{
    background-color: #D2D7B7;
  }
</style>
