new Vue({
  el:'#view-app',
  data:{
    age:25,
    x:0,
    y:0
  },
  methods:{
    add:function(increment) {
      this.age += increment;
    },
    substract:function(decrement) {
      this.age -= decrement;
    },
    updateXY:function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;

    }

    }
});
