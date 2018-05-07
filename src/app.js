new Vue({
  el:'#view-app',
  data:{
    age: 20,
    a: 0,
    b: 0,

  },
  methods:{
    // addToA:function() {
    //   return this.a + this.age;
    // },
    // addToB:function() {
    //   return this.b + this.age;
    // },
  },
  computed:{
    addToA:function() {
      console.log("Afunc");
      return this.a + this.age;
    },
    addToB:function() {
      console.log("Bfunc");
      return this.b + this.age;
    },
  }
});
