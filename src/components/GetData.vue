<template>
  <div class="getData">
    <div class="container">
      <inputField class="inputField" @onInputId="sendReq"></inputField>
      <picker class="picker" @changeDate="transferDate"> </picker>
    </div>
  </div>
</template>

<script>
  import DatePicker from './DatePicker';
  import InputField from './InputField';

  export default {
    components: {
      'picker': DatePicker,
      'inputField': InputField
    },
    data() {
      return {
        stat: Object,
        timer: Number,
      }
    },
    methods: {
      sendReq(a) {
        clearTimeout(this.timer);
        this.timer = setTimeout(serverReq, 1000, a, this);
      },
      getLastMonth() {
        let dateStamp = new Date();
        return {
          start: dateStamp.setDate(dateStamp.getDate() - 30),
          end: new Date()
        };
      },
      transferDate(dateObj) {
        this.$emit('changeDate', dateObj)
      }
    },
  }

  function serverReq(a, cb) {
    fetch('http://localhost:3000/'+ a)
      .then(function(res) {
        if (res.status == 200) return res.text();
      })
      .then((resText) => {
        cb.$emit('Ready', resText, cb.getLastMonth())
      })
      .catch((err) => {
        console.log(err)
      })
  }
</script>

<style scoped lang="scss">
  .container{
    display: flex;

  }

</style>
