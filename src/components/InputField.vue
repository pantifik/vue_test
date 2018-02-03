<template>
  <div>
    <label> Введите ID
      <input type="text" @input="sayId">
    </label>
    <div class="errorMsg" v-if="state == 'error'">{{errorMsg}}</div>
  </div>

</template>

<script>
  export default {
    name: "input-field",
    data() {
      return{
        state: String,
        errorMsg: 'Error'
      }
    },
    methods: {
      sayId(e){
        if (e.target.value) {
          if(!e.target.value.match(/^\d+$/)) {
            this.state = 'error';
            return
          }

          this.state = '';

          this.$emit('onInputId', e.target.value)
        }

      }
    }
  }
</script>

<style lang="scss" scoped>
  .errorMsg{
    color: red
  }

</style>
