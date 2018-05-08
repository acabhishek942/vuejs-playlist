var one = new Vue({
  el:'#view-app-one',
  data:{
    title: 'App-1',

  },
  methods:{

  },
  computed:{
    greet:function(){
      return "Hello from App-1"
    }
  }
});


var two = new Vue({
  el:'#view-app-two',
  data:{
    title: 'App-2',
  },
  methods:{
    changeTitle:function() {
      one.title = "Changed from 2nd instance";
    }

  },
  computed:{
    greet:function() {
      return "Hello from App-2"
    }
  }
});

two.title="Changed from outside";
