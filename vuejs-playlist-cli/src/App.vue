<template>
  <div>
    <keep-alive>
      <component v-bind:is="components"></component>
    </keep-alive>
    <button v-on:click="components='form-one'">Show form one</button>
    <button v-on:click="components='form-two'">Show form two</button>
  </div>
</template>

<script>
import formOne from './components/formOne.vue'
import formTwo from './components/formTwo.vue'

export default {
  components:{
    'form-one': formOne,
    'form-two': formTwo
  },
  data() {
    return {
      components: 'form-two'
    }
  },
  methods: {
  }

}
</script>

<style>
</style>
