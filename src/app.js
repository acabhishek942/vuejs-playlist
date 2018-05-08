
var one = new Vue({
  el:'#view-app-one',
  data:{
    output: 'Bacon',
  },
  methods:{
    readRefs:function(){
      console.log(this.$refs.test.innerText);
      this.output = this.$refs.inputRef.value;
    }
  },
  computed:{
  }
});
