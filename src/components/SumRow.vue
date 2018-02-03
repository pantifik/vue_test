<template>
  <div class="row">
    <span class="key">{{ title }}</span>
    <span class="value">{{ filterValue }}</span>
  </div>
</template>

<script>
  export default {
    name: "summary-row",
    props: ['value', 'title'],
    computed: {
      filterValue: function() {
        if (this.title == 'Доход') {
          return this.value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })
        }
        return this.value
      },
    },
  }
</script>

<style scoped>

</style>
