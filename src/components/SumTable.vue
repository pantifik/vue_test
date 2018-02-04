<template>
  <div class="summary">
    <row :title="dictionary.link_visitor || 'link_visitor'" :value="data.link_visitor || 0"></row>
    <row :title="dictionary.registration || 'registration'" :value="data.registration || 0"></row>
    <row
      :title="dictionary.payment || 'payment'"
      :value="data.payment || 0"
    ></row>
  </div>
</template>

<script>
  import SummaryRow from './SumRow'
  import Dictionary from '../libs/dictionary.js'
  export default {
    name: "summaryTable",
    props: ['data'],
    data() {
      return {
        dictionary: Dictionary
      }
    },
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
