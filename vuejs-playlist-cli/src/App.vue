<template>
  <div>
    <form-helper>
      <div slot='form-header'>
        <h3>This is the custom tile</h3>
        <p>Some info for this form</p>
      </div>
      <div slot='form-fields'>
        <input type="text" palceholder="username" required />
        <input type="password" palceholder="password" required />
      </div>
      <div slot='form-controls'>
        <button v-on:click="handleSubmit()">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './components/formHelper.vue'
export default {
  components:{
    'form-helper': formHelper
  },
  data() {
    return {
      title: 'I am title from data method',
    }
  },
  methods: {
  }

}
</script>

<style>
</style>
