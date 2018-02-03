<template>
  <div class="summary">
    <row title="Переходы" :value="data.registration || 0"></row>
    <row title="Регистрации" :value="data.link_visitor || 0"></row>
    <row
      title="Доход"
      :value="data.payment || 0"
    ></row>
  </div>
</template>

<script>
  import SummaryRow from './SumRow'
  export default {
    name: "summaryTable",
    props: ['data'],
    components: {
      'row': SummaryRow
    }
  }

</script>

<style scoped lang="sass">
  .summary
    font-size: 18px

    .row
      display: flex
      justify-content: space-between

      padding: 0 10px

      line-height: 3em

      &:nth-child(odd)
        background-color: #0E023B
        color: white


</style>
