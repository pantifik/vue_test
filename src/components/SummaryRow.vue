<template>
  <div class="row">
    <span class="key">{{ title }}</span>
    <span class="value">{{ value }}</span>
  </div>
</template>

<script>
  export default {
    name: "summary-row",
    props: ['value', 'title'],
    data() {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
