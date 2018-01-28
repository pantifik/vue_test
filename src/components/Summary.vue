<template>
  <div class="summary">
    <row title="Переходы" :value="data.registration"></row>
    <row title="Регистрации" :value="data.link_visitor"></row>
    <row title="Доход" :value="data.payment"></row>
  </div>
</template>

<script>
  import SummaryRow from './SummaryRow'
  export default {
    name: "summary",
    props: ['data'],
    components: {
      'row': SummaryRow
    }
  }

</script>

<style scoped>

</style>
