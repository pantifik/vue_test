<template>
  <div class="app">
    <getData></getData>
    <showData :stats="stats"></showData>
  </div>


</template>

<script>
  import Libs from './libs/libs'
  import Res from './stats'

  export default {
    name: 'app',
    data () {
      return {
        stats: Libs.getStats(JSON.parse(Res), 'event', 'event_value')
      }
    },
  }

  let testStat = JSON.parse(Res);
</script>

<style lang="scss">
</style>
